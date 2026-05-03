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
  if (field instanceof HTMLInputElement) {
    if (field.type === "checkbox" || field.type === "radio") {
      return field.checked ? field.value.trim() : "";
    }
    return field.value.trim();
  }
  if (field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) {
    return field.value.trim();
  }
  return "";
}

function attachBuilderLogic() {
  const form = document.querySelector("[data-role='brief-form']");
  if (!form) return;

  const fields = Array.from(form.querySelectorAll("[data-brief-field]"));
  const progressFill = document.querySelector("[data-role='progress-bar']");
  const progressText = document.querySelector("[data-role='progress-label']");
  const scoreText = document.querySelector("[data-role='score']");
  const summaryList = document.querySelector("[data-role='summary']");
  const scoreTrack = document.querySelector("[data-role='score-bar'] span");
  const workflowSteps = Array.from(document.querySelectorAll(".fd-step"));
  const outputPills = Array.from(document.querySelectorAll(".fd-check-pill"));

  const fieldGroups = fields.reduce((map, field) => {
    const key = field.getAttribute("data-brief-field");
    if (!key) return map;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(field);
    return map;
  }, new Map());

  function computeState() {
    const values = {};
    let completed = 0;

    fieldGroups.forEach((group, key) => {
      const first = group[0];
      const isMultiChoice =
        first instanceof HTMLInputElement &&
        (first.type === "checkbox" || first.type === "radio");

      let value = "";
      if (isMultiChoice) {
        const selected = group.map((field) => getFieldValue(field)).filter(Boolean);
        value = selected.join(", ");
      } else {
        value = getFieldValue(first);
      }

      values[key] = value;
      if (value.length > 0) completed += 1;
    });

    const total = fieldGroups.size || 1;
    const progress = Math.round((completed / total) * 100);
    const score = Math.min(100, Math.max(0, Math.round(progress * 0.88 + completed * 1.5)));

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

  function updateWorkflowSteps(progress) {
    if (workflowSteps.length === 0) return;
    workflowSteps.forEach((step) => {
      step.classList.remove("is-active", "is-complete");
    });

    if (progress < 34) {
      workflowSteps[0]?.classList.add("is-active");
      return;
    }

    if (progress < 67) {
      workflowSteps[0]?.classList.add("is-complete");
      workflowSteps[1]?.classList.add("is-active");
      return;
    }

    workflowSteps[0]?.classList.add("is-complete");
    workflowSteps[1]?.classList.add("is-complete");
    workflowSteps[2]?.classList.add("is-active");
    if (progress === 100) {
      workflowSteps[2]?.classList.add("is-complete");
      workflowSteps[2]?.classList.remove("is-active");
    }
  }

  function updateOutputPills() {
    outputPills.forEach((pill) => {
      const input = pill.querySelector("input");
      if (!input) return;
      pill.classList.toggle("is-selected", Boolean(input.checked));
    });
  }

  function update() {
    const state = computeState();
    if (progressFill) progressFill.style.width = `${state.progress}%`;
    if (progressText) progressText.textContent = `${state.progress}% complete`;
    if (scoreText) scoreText.textContent = `${state.score}%`;
    if (scoreTrack) scoreTrack.style.width = `${state.score}%`;
    renderSummary(state.values);
    persistSummary(state.values, state.score, state.progress);
    updateWorkflowSteps(state.progress);
    updateOutputPills();
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
