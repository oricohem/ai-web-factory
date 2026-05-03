"use strict";

const DEFAULT_SUMMARY = {
  businessType: "Not provided yet",
  targetCustomer: "Not provided yet",
  conversionGoal: "Not provided yet",
  trustProblem: "Not provided yet",
  visualAmbition: "Not provided yet",
  desiredOutputs:
    "Website direction, conversion structure, launch copy, campaign angles, QA notes, production prompt",
};

function getFieldValue(field) {
  if (!field) return "";
  if (field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) {
    return field.value.trim();
  }
  if (field instanceof HTMLInputElement) {
    return field.value.trim();
  }
  return "";
}

function attachBuilderLogic() {
  const form = document.getElementById("brief-form");
  if (!form) return;

  const fields = Array.from(form.querySelectorAll("[data-brief-field]"));
  const progressFill = document.getElementById("progress-fill");
  const progressText = document.getElementById("progress-text");
  const scoreText = document.getElementById("completeness-score");
  const summaryList = document.getElementById("summary-list");

  function computeState() {
    const values = {};
    let completed = 0;

    fields.forEach((field) => {
      const key = field.getAttribute("data-brief-field");
      if (!key) return;

      const value = getFieldValue(field);
      values[key] = value;
      if (value.length > 0) completed += 1;
    });

    const total = fields.length || 1;
    const progress = Math.round((completed / total) * 100);
    const score = Math.min(100, Math.max(0, Math.round(progress * 0.92 + completed * 1.1)));

    return { values, progress, score };
  }

  function renderSummary(values) {
    if (!summaryList) return;
    const mapped = {
      businessType: values.businessType || DEFAULT_SUMMARY.businessType,
      targetCustomer: values.targetCustomer || DEFAULT_SUMMARY.targetCustomer,
      conversionGoal: values.conversionGoal || DEFAULT_SUMMARY.conversionGoal,
      trustProblem: values.trustProblem || DEFAULT_SUMMARY.trustProblem,
      visualAmbition: values.visualAmbition || DEFAULT_SUMMARY.visualAmbition,
    };

    summaryList.innerHTML = `
      <li><strong>Business:</strong> ${mapped.businessType}</li>
      <li><strong>Audience:</strong> ${mapped.targetCustomer}</li>
      <li><strong>Conversion goal:</strong> ${mapped.conversionGoal}</li>
      <li><strong>Trust risk:</strong> ${mapped.trustProblem}</li>
      <li><strong>Visual ambition:</strong> ${mapped.visualAmbition}</li>
    `;
  }

  function persistSummary(values, score, progress) {
    const payload = {
      businessType: values.businessType || DEFAULT_SUMMARY.businessType,
      productDescription: values.productDescription || "Not provided yet",
      targetCustomer: values.targetCustomer || DEFAULT_SUMMARY.targetCustomer,
      conversionGoal: values.conversionGoal || DEFAULT_SUMMARY.conversionGoal,
      trustProblem: values.trustProblem || DEFAULT_SUMMARY.trustProblem,
      visualAmbition: values.visualAmbition || DEFAULT_SUMMARY.visualAmbition,
      motionPreference: values.motionPreference || "Not provided yet",
      desiredOutputs: values.desiredOutputs || DEFAULT_SUMMARY.desiredOutputs,
      score,
      progress,
    };
    sessionStorage.setItem("frontDoorV2BriefSummary", JSON.stringify(payload));
  }

  function update() {
    const state = computeState();
    if (progressFill) progressFill.style.width = `${state.progress}%`;
    if (progressText) progressText.textContent = `${state.progress}% complete`;
    if (scoreText) scoreText.textContent = `${state.score} / 100`;
    renderSummary(state.values);
    persistSummary(state.values, state.score, state.progress);
  }

  form.addEventListener("input", update);
  form.addEventListener("change", update);
  update();
}

function attachPreviewHydration() {
  const data = document.body.getAttribute("data-page");
  if (data !== "preview") return;

  const raw = sessionStorage.getItem("frontDoorV2BriefSummary");
  if (!raw) return;

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (_error) {
    return;
  }

  const bindings = [
    ["preview-business", parsed.businessType],
    ["preview-product", parsed.productDescription],
    ["preview-audience", parsed.targetCustomer],
    ["preview-goal", parsed.conversionGoal],
    ["preview-trust", parsed.trustProblem],
    ["preview-visual", parsed.visualAmbition],
    ["preview-motion", parsed.motionPreference],
    ["preview-outputs", parsed.desiredOutputs],
  ];

  bindings.forEach(([id, value]) => {
    const node = document.getElementById(id);
    if (node && value) {
      node.textContent = String(value);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  attachBuilderLogic();
  attachPreviewHydration();
});
