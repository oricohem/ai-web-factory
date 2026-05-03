(() => {
  const page = document.body.getAttribute("data-page");
  if (page !== "brief-builder") {
    return;
  }

  const boldnessRange = document.querySelector("#boldness-range");
  const boldnessLabel = document.querySelector("#boldness-label");
  const meterFill = document.querySelector("#completeness-fill");
  const meterText = document.querySelector("#completeness-text");
  const checklistItems = Array.from(document.querySelectorAll("#completeness-list li"));
  const conversionChips = Array.from(document.querySelectorAll(".chip-group .chip"));

  const boldnessMap = {
    1: "Level 1 — Clean/basic/trustworthy",
    2: "Level 2 — Premium/polished",
    3: "Level 3 — Bold/memorable",
    4: "Level 4 — Experimental/campaign-grade",
    5: "Level 5 — Wild/cinematic/high-risk high-reward",
  };

  const trackedFields = [
    {
      key: "industry",
      label: "Industry selector",
      value: () => document.querySelector("#industry")?.value || "",
    },
    {
      key: "business-maturity",
      label: "Business maturity selector",
      value: () => document.querySelector("#business-maturity")?.value || "",
    },
    {
      key: "conversion-goal",
      label: "Primary conversion goal selector",
      value: () => document.querySelector(".chip.is-selected")?.textContent?.trim() || "",
    },
    {
      key: "offer-type",
      label: "Offer type selector",
      value: () => document.querySelector("#offer-type")?.value || "",
    },
    {
      key: "reference-dislike",
      label: "Reference dislikes",
      value: () => document.querySelector("#reference-dislike")?.value?.trim() || "",
    },
  ];

  const allRequired = Array.from(document.querySelectorAll("[data-required]"));

  const previewMap = {
    industry: document.querySelector("#preview-industry"),
    maturity: document.querySelector("#preview-maturity"),
    goal: document.querySelector("#preview-goal"),
    offer: document.querySelector("#preview-offer"),
    trust: document.querySelector("#preview-trust"),
    boldness: document.querySelector("#preview-boldness"),
    motion: document.querySelector("#preview-motion"),
    package: document.querySelector("#preview-package"),
  };

  function updateBoldnessLabel() {
    if (!boldnessRange || !boldnessLabel) {
      return;
    }
    const level = Number(boldnessRange.value);
    boldnessLabel.textContent = boldnessMap[level];
  }

  function isFilled(field) {
    if (field.type === "range") {
      return true;
    }
    return String(field.value || "").trim().length > 0;
  }

  function updateCompleteness() {
    const completed = allRequired.filter(isFilled).length;
    const total = allRequired.length;
    const percent = Math.round((completed / total) * 100);

    if (meterFill) {
      meterFill.style.width = `${percent}%`;
    }
    if (meterText) {
      meterText.textContent = `${percent}% complete — ${completed}/${total} required controls captured.`;
    }

    checklistItems.forEach((item) => {
      const key = item.getAttribute("data-check");
      const tracked = trackedFields.find((field) => field.key === key);
      if (!tracked) {
        return;
      }
      const done = Boolean(tracked.value());
      item.classList.toggle("done", done);
      item.classList.toggle("pending", !done);
    });
  }

  function updatePreview() {
    if (previewMap.industry) {
      previewMap.industry.textContent = document.querySelector("#industry")?.value || "Not set";
    }
    if (previewMap.maturity) {
      previewMap.maturity.textContent = document.querySelector("#business-maturity")?.value || "Not set";
    }
    if (previewMap.goal) {
      previewMap.goal.textContent = document.querySelector(".chip.is-selected")?.textContent?.trim() || "Not set";
    }
    if (previewMap.offer) {
      previewMap.offer.textContent = document.querySelector("#offer-type")?.value || "Not set";
    }
    if (previewMap.trust) {
      previewMap.trust.textContent = document.querySelector("#trust-priority")?.value || "Not set";
    }
    if (previewMap.boldness) {
      previewMap.boldness.textContent = boldnessMap[Number(boldnessRange?.value || 3)];
    }
    if (previewMap.motion) {
      previewMap.motion.textContent = document.querySelector("#motion-layer")?.value || "Not set";
    }
    if (previewMap.package) {
      previewMap.package.textContent = document.querySelector("#output-package")?.value || "Not set";
    }
  }

  conversionChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      conversionChips.forEach((item) => item.classList.remove("is-selected"));
      chip.classList.add("is-selected");
      updateCompleteness();
      updatePreview();
    });
  });

  document.addEventListener("input", () => {
    updateBoldnessLabel();
    updateCompleteness();
    updatePreview();
  });

  document.addEventListener("change", () => {
    updateBoldnessLabel();
    updateCompleteness();
    updatePreview();
  });

  updateBoldnessLabel();
  updateCompleteness();
  updatePreview();
})();
