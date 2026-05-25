/* ShapeSprout Studio — vanilla one-page PWA */

const STORAGE_KEY = "shapesprout-studio-state-v1";

const subjects = {
  objects: ["mug", "pencil", "lamp", "chair", "paint tube", "cloud pillow", "tiny backpack", "houseplant pot", "mailbox", "teacup"],
  foods: ["strawberry", "toast slice", "boba cup", "dumpling", "cupcake", "pickle", "mushroom", "croissant", "soup bowl", "lemon wedge"],
  shapes: ["bean blob", "circle creature", "triangle buddy", "star mascot", "puddle ghost", "squircle pal", "jellybean", "wobbly cube", "moon blob", "tiny hill"],
  icons: ["sun badge", "sprout logo", "moon app icon", "sparkle mark", "pencil badge", "heart shield", "cloud symbol", "mushroom sticker", "leaf emblem", "smile stamp"]
};

const personalities = {
  cute: ["friendly", "curious", "gentle", "tiny-but-brave", "cozy"],
  sleepy: ["sleepy", "dreamy", "slow", "pillow-soft", "half-awake"],
  silly: ["goofy", "wobbly", "overexcited", "dramatic", "snack-obsessed"],
  magical: ["glowy", "mystic", "moonlit", "sparkly", "enchanted"],
  bold: ["simple", "graphic", "confident", "badge-like", "iconic"]
};

const shapeKits = {
  "simple-shapes": ["one big oval", "two tiny circles", "one triangle accent", "one curved smile"],
  faces: ["low-set eyes", "round cheeks", "tiny mouth", "one eyebrow or eyelid"],
  silhouette: ["one huge readable body", "one strong prop", "no tiny details", "clear outside shape"],
  logo: ["squircle container", "one central symbol", "two colors max", "bold negative space"],
  expression: ["tilted body", "asymmetrical eyes", "one gesture arm", "one emotion prop"]
};

const difficultyMap = {
  seedling: { label: "Seedling", minutes: 15, detail: "Use only 3–5 simple shapes." },
  sprout: { label: "Sprout", minutes: 25, detail: "Add one texture, one prop, and a clearer pose." },
  garden: { label: "Garden", minutes: 40, detail: "Draw three variations and simplify the best one into an icon." }
};

const drills = [
  {
    title: "20 Blob Transformations",
    tag: "Shape confidence",
    steps: ["Draw 20 blobs fast.", "Turn 5 into foods.", "Turn 5 into objects.", "Turn 5 into characters.", "Circle your clearest silhouette."]
  },
  {
    title: "Face Placement Ladder",
    tag: "Cuteness control",
    steps: ["Draw the same bean 6 times.", "Move the eyes from high to low.", "Add cheeks on only 3.", "Notice which one feels cutest."]
  },
  {
    title: "Logo Shrink Test",
    tag: "Icon basics",
    steps: ["Draw one character.", "Simplify it to 3 shapes.", "Redraw it inside a squircle.", "Remove details until it reads tiny."]
  },
  {
    title: "Food Mascot Menu",
    tag: "Object characters",
    steps: ["Pick 4 foods.", "Give each a different mood.", "Use only dot eyes and tiny mouths.", "Add one prop to each."]
  },
  {
    title: "Prop Personality",
    tag: "Storytelling",
    steps: ["Draw one blob.", "Give it a pencil, crown, spoon, leaf, or bag.", "Change only the prop.", "Write how the character changed."]
  },
  {
    title: "Cute vs. Bold Redraw",
    tag: "Style range",
    steps: ["Draw a cute version.", "Redraw it as a flat icon.", "Redraw it as a sticker.", "Compare silhouette strength."]
  }
];

const state = {
  activeTab: "forge",
  currentMission: null,
  stash: [],
  completedCount: 0,
  timer: {
    secondsLeft: 15 * 60,
    running: false,
    intervalId: null
  },
  sketch: {
    history: [],
    drawing: false,
    last: null
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function makeMission() {
  const family = $("#subjectFamily").value;
  const vibe = $("#vibe").value;
  const focus = $("#skillFocus").value;
  const difficulty = $("#difficulty").value;
  const familyKey = family === "mixed" ? randomItem(["objects", "foods", "shapes", "icons"]) : family;
  const subject = randomItem(subjects[familyKey]);
  const personality = randomItem(personalities[vibe]);
  const kit = shapeKits[focus];
  const difficultyData = difficultyMap[difficulty];

  const title = `${capitalize(personality)} ${subject}`;
  const iconMode = focus === "logo" || familyKey === "icons";

  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    title,
    subject,
    family: familyKey,
    vibe,
    focus,
    difficulty,
    difficultyLabel: difficultyData.label,
    minutes: difficultyData.minutes,
    prompt: iconMode
      ? `Design a ${personality} ${subject} as a simple logo or app-icon mark. Keep the silhouette bold enough to read from across the room.`
      : `Draw a ${personality} ${subject} character using ${kit.slice(0, 3).join(", ")}. Make it feel alive with one tiny story detail.`,
    constraints: [
      difficultyData.detail,
      `Base kit: ${kit.join(" · ")}.`,
      iconMode ? "Finish with one tiny icon version inside a squircle." : "Finish with one tiny sticker version beside the character."
    ],
    steps: buildSteps(subject, personality, focus, iconMode),
    createdAt: new Date().toISOString(),
    complete: false
  };
}

function buildSteps(subject, personality, focus, iconMode) {
  const baseSteps = [
    `Block in the ${subject} with one big simple shape.`,
    "Place the eyes slightly low on the face for a beginner-friendly cute look.",
    `Add one feature that communicates “${personality}” without adding clutter.`,
    "Clean the outside silhouette so it still reads when zoomed out."
  ];

  if (focus === "silhouette") {
    baseSteps.push("Fill the character in as a black shape for a moment. Fix any confusing edges.");
  } else if (focus === "logo") {
    baseSteps.push("Redraw it as a flat mark with two colors and no shading.");
  } else if (focus === "expression") {
    baseSteps.push("Tilt the pose and change one eye or arm to show emotion.");
  } else if (focus === "faces") {
    baseSteps.push("Try three faces: dot eyes, sleepy eyes, and one silly expression.");
  } else {
    baseSteps.push("Draw a tiny simplified version in the corner as a sticker test.");
  }

  if (iconMode) {
    baseSteps.push("Put the best version inside a squircle and remove anything that gets muddy.");
  }

  return baseSteps;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function saveState() {
  try {
    const payload = {
      stash: state.stash,
      completedCount: state.completedCount
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    showToast("Could not save locally. Try exporting your stash.");
    console.warn(error);
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    state.stash = Array.isArray(saved.stash) ? saved.stash : [];
    state.completedCount = Number.isFinite(saved.completedCount) ? saved.completedCount : 0;
  } catch (error) {
    console.warn("Could not load saved state:", error);
  }
}

function renderMission() {
  if (!state.currentMission) state.currentMission = makeMission();
  const mission = state.currentMission;
  $("#promptTitle").textContent = mission.title;

  $("#missionCard").innerHTML = `
    <div class="mission-title">
      <h3>${escapeHTML(mission.title)}</h3>
      <span class="status-pill">${escapeHTML(mission.difficultyLabel)} · ${mission.minutes} min</span>
    </div>
    <p>${escapeHTML(mission.prompt)}</p>
    <div class="tag-row">
      <span class="tag">${escapeHTML(mission.family)}</span>
      <span class="tag">${escapeHTML(mission.vibe)}</span>
      <span class="tag">${escapeHTML(mission.focus.replaceAll("-", " "))}</span>
    </div>
    <h4>Rules</h4>
    <ul class="step-list">
      ${mission.constraints.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
    </ul>
  `;

  renderBlueprintSteps();
  state.timer.secondsLeft = mission.minutes * 60;
  updateTimerText();
}

function renderBlueprintSteps() {
  const steps = state.currentMission?.steps || [];
  $("#blueprintSteps").innerHTML = steps.map(step => `<li>${escapeHTML(step)}</li>`).join("");
}

function renderDrills() {
  $("#drillGrid").innerHTML = drills.map((drill, index) => `
    <article class="drill-card">
      <span class="tag">${escapeHTML(drill.tag)}</span>
      <h3>${escapeHTML(drill.title)}</h3>
      <ul>${drill.steps.map(step => `<li>${escapeHTML(step)}</li>`).join("")}</ul>
      <div class="stash-actions">
        <button class="ghost-button" data-action="use-drill" data-index="${index}">Turn into prompt</button>
      </div>
    </article>
  `).join("");
}

function renderStash() {
  const list = $("#stashList");
  if (!state.stash.length) {
    list.innerHTML = `<article class="stash-card"><h3>Your stash is empty.</h3><p>Save a prompt from the forge, then draw it later in Procreate.</p></article>`;
    return;
  }

  list.innerHTML = state.stash.map(item => `
    <article class="stash-card ${item.complete ? "is-complete" : ""}">
      <span class="tag">${item.complete ? "Drawn" : "Saved"} · ${escapeHTML(item.difficultyLabel || "Seedling")}</span>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.prompt)}</p>
      <div class="stash-actions">
        <button class="ghost-button" data-action="load-stash" data-id="${item.id}">Open</button>
        <button class="ghost-button" data-action="toggle-stash-complete" data-id="${item.id}">${item.complete ? "Mark not drawn" : "Mark drawn"}</button>
        <button class="danger-button" data-action="delete-stash" data-id="${item.id}">Delete</button>
      </div>
    </article>
  `).join("");
}

function switchTab(tab) {
  state.activeTab = tab;
  $$(".tab").forEach(button => {
    const active = button.dataset.tab === tab;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  $$("[data-panel]").forEach(panel => {
    panel.hidden = panel.dataset.panel !== tab;
  });

  $(".tool-panel").hidden = tab !== "forge";
  $(".result-panel").hidden = tab !== "forge";

  if (tab === "gym") renderDrills();
  if (tab === "stash") renderStash();
  if (tab === "sketch") requestAnimationFrame(setupCanvas);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied. Paste it into a Procreate note or reference layer.");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast("Copied.");
  }
}

function missionAsText(mission = state.currentMission) {
  if (!mission) return "";
  return [
    `ShapeSprout Prompt: ${mission.title}`,
    mission.prompt,
    "",
    "Rules:",
    ...mission.constraints.map(rule => `- ${rule}`),
    "",
    "Steps:",
    ...mission.steps.map((step, index) => `${index + 1}. ${step}`)
  ].join("\n");
}

async function shareMission() {
  const text = missionAsText();
  if (navigator.share) {
    try {
      await navigator.share({ title: state.currentMission.title, text });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  await copyText(text);
  showToast("Sharing is not available here, so I copied it instead.");
}

function saveCurrentMission() {
  if (!state.currentMission) return;
  const exists = state.stash.some(item => item.id === state.currentMission.id);
  if (!exists) {
    state.stash.unshift({ ...state.currentMission });
    saveState();
    renderStash();
    showToast("Saved to your stash. Tiny seed secured.");
  } else {
    showToast("That prompt is already in your stash.");
  }
}

function completeCurrentMission() {
  if (!state.currentMission) return;
  state.completedCount += 1;
  const found = state.stash.find(item => item.id === state.currentMission.id);
  if (found) found.complete = true;
  saveState();
  renderStash();
  showToast("Marked drawn. Your drawing garden grew by one.");
}

function loadMissionFromStash(id) {
  const item = state.stash.find(entry => entry.id === id);
  if (!item) return;
  state.currentMission = { ...item };
  renderMission();
  switchTab("forge");
  showToast("Loaded from stash.");
}

function toggleStashComplete(id) {
  const item = state.stash.find(entry => entry.id === id);
  if (!item) return;
  item.complete = !item.complete;
  saveState();
  renderStash();
}

function deleteStash(id) {
  state.stash = state.stash.filter(entry => entry.id !== id);
  saveState();
  renderStash();
  showToast("Prompt removed.");
}

function exportStash() {
  const blob = new Blob([JSON.stringify({
    app: "ShapeSprout Studio",
    exportedAt: new Date().toISOString(),
    stash: state.stash,
    completedCount: state.completedCount
  }, null, 2)], { type: "application/json" });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "shapesprout-stash.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importStash(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const imported = Array.isArray(parsed.stash) ? parsed.stash : Array.isArray(parsed) ? parsed : [];
      state.stash = imported.filter(item => item && item.title && item.prompt);
      saveState();
      renderStash();
      showToast("Imported stash.");
    } catch {
      showToast("That file did not look like a ShapeSprout stash.");
    }
  };
  reader.readAsText(file);
}

function clearStash() {
  if (!state.stash.length) return;
  const ok = confirm("Clear every saved prompt from this device?");
  if (!ok) return;
  state.stash = [];
  saveState();
  renderStash();
  showToast("Stash cleared.");
}

function startTimer() {
  if (state.timer.running) return;
  state.timer.running = true;
  $("#timerButton").textContent = "Pause timer";
  state.timer.intervalId = setInterval(() => {
    state.timer.secondsLeft -= 1;
    if (state.timer.secondsLeft <= 0) {
      stopTimer(false);
      state.timer.secondsLeft = 0;
      showToast("Practice sprint finished. Open Procreate and admire the tiny progress.");
    }
    updateTimerText();
  }, 1000);
}

function stopTimer(show = true) {
  state.timer.running = false;
  clearInterval(state.timer.intervalId);
  state.timer.intervalId = null;
  $("#timerButton").textContent = "Start timer";
  if (show) showToast("Timer paused.");
}

function toggleTimer() {
  if (state.timer.running) stopTimer();
  else startTimer();
}

function updateTimerText() {
  const minutes = Math.floor(state.timer.secondsLeft / 60).toString().padStart(2, "0");
  const seconds = Math.floor(state.timer.secondsLeft % 60).toString().padStart(2, "0");
  $("#timerReadout").textContent = `${minutes}:${seconds} practice sprint`;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2700);
}

function updateOnlineStatus() {
  const status = $("#onlineStatus");
  const online = navigator.onLine;
  status.textContent = online ? "Online · app shell caches after first visit" : "Offline · local mode";
}

// Canvas
let canvas;
let ctx;

function setupCanvas() {
  canvas = $("#sketchCanvas");
  if (!canvas || canvas.dataset.ready === "true") {
    if (canvas) resizeCanvas(false);
    return;
  }
  ctx = canvas.getContext("2d", { willReadFrequently: false });
  canvas.dataset.ready = "true";
  resizeCanvas(true);
  canvas.addEventListener("pointerdown", startStroke);
  canvas.addEventListener("pointermove", continueStroke);
  canvas.addEventListener("pointerup", endStroke);
  canvas.addEventListener("pointercancel", endStroke);
  window.addEventListener("resize", () => resizeCanvas(false));
}

function resizeCanvas(reset = false) {
  if (!canvas) return;
  const old = !reset ? canvas.toDataURL("image/png") : null;
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  canvas.height = Math.max(1, Math.floor(rect.height * dpr));
  ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  drawPaper();
  if (old) {
    const image = new Image();
    image.onload = () => ctx.drawImage(image, 0, 0, rect.width, rect.height);
    image.src = old;
  } else {
    saveSketchSnapshot();
  }
}

function drawPaper() {
  const rect = canvas.getBoundingClientRect();
  ctx.clearRect(0, 0, rect.width, rect.height);
  ctx.fillStyle = "#fffaf2";
  ctx.fillRect(0, 0, rect.width, rect.height);
  ctx.strokeStyle = "rgba(79, 119, 145, .13)";
  ctx.lineWidth = 1;
  for (let x = 0; x < rect.width; x += 32) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, rect.height);
    ctx.stroke();
  }
  for (let y = 0; y < rect.height; y += 32) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(rect.width, y);
    ctx.stroke();
  }
}

function getPoint(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
    pressure: event.pressure || 0.5
  };
}

function startStroke(event) {
  if (!canvas) return;
  canvas.setPointerCapture(event.pointerId);
  state.sketch.drawing = true;
  state.sketch.last = getPoint(event);
}

function continueStroke(event) {
  if (!state.sketch.drawing || !state.sketch.last) return;
  const point = getPoint(event);
  const size = Number($("#brushSize").value);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = $("#brushColor").value;
  ctx.lineWidth = Math.max(1, size * (point.pressure || 0.5));
  ctx.beginPath();
  ctx.moveTo(state.sketch.last.x, state.sketch.last.y);
  ctx.quadraticCurveTo(
    state.sketch.last.x,
    state.sketch.last.y,
    (state.sketch.last.x + point.x) / 2,
    (state.sketch.last.y + point.y) / 2
  );
  ctx.stroke();
  state.sketch.last = point;
}

function endStroke() {
  if (!state.sketch.drawing) return;
  state.sketch.drawing = false;
  state.sketch.last = null;
  saveSketchSnapshot();
}

function saveSketchSnapshot() {
  if (!canvas) return;
  try {
    state.sketch.history.push(canvas.toDataURL("image/png"));
    if (state.sketch.history.length > 12) state.sketch.history.shift();
  } catch {
    // Ignore storage-heavy canvas snapshots.
  }
}

function undoSketch() {
  if (!canvas || state.sketch.history.length < 2) return;
  state.sketch.history.pop();
  const last = state.sketch.history[state.sketch.history.length - 1];
  const image = new Image();
  image.onload = () => {
    drawPaper();
    ctx.drawImage(image, 0, 0, canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height);
  };
  image.src = last;
}

function clearSketch() {
  if (!canvas) return;
  drawPaper();
  saveSketchSnapshot();
}

function exportSketch() {
  if (!canvas) return;
  const link = document.createElement("a");
  link.download = "shapesprout-mini-sketch.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function useDrill(index) {
  const drill = drills[index];
  if (!drill) return;
  state.currentMission = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    title: drill.title,
    subject: "practice drill",
    family: "gym",
    vibe: "practice",
    focus: drill.tag.toLowerCase(),
    difficulty: "seedling",
    difficultyLabel: "Seedling",
    minutes: 15,
    prompt: `Warm up in Procreate with this drill: ${drill.title}. Keep the drawings small and quick.`,
    constraints: ["Draw fast, not perfect.", "Use this as a warmup before a polished piece.", "Circle one version to redraw larger."],
    steps: drill.steps,
    createdAt: new Date().toISOString(),
    complete: false
  };
  renderMission();
  switchTab("forge");
}

function bindEvents() {
  document.addEventListener("click", event => {
    const tab = event.target.closest("[data-tab]")?.dataset.tab;
    if (tab) {
      switchTab(tab);
      return;
    }

    const actionEl = event.target.closest("[data-action]");
    const action = actionEl?.dataset.action;
    if (!action) return;

    if (action === "generate") {
      state.currentMission = makeMission();
      renderMission();
      showToast("A fresh drawing seed sprouted.");
    }

    if (action === "copy-prompt") copyText(missionAsText());
    if (action === "share-prompt") shareMission();
    if (action === "save-current") saveCurrentMission();
    if (action === "complete-current") completeCurrentMission();
    if (action === "timer-toggle") toggleTimer();
    if (action === "use-drill") useDrill(Number(actionEl.dataset.index));
    if (action === "load-stash") loadMissionFromStash(actionEl.dataset.id);
    if (action === "toggle-stash-complete") toggleStashComplete(actionEl.dataset.id);
    if (action === "delete-stash") deleteStash(actionEl.dataset.id);
    if (action === "export-stash") exportStash();
    if (action === "clear-stash") clearStash();
    if (action === "undo-sketch") undoSketch();
    if (action === "clear-sketch") clearSketch();
    if (action === "export-sketch") exportSketch();
  });

  $("#importFile").addEventListener("change", event => importStash(event.target.files[0]));

  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);

  document.addEventListener("keydown", event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "g") {
      event.preventDefault();
      state.currentMission = makeMission();
      renderMission();
      showToast("Generated with keyboard shortcut.");
    }
  });
}

function setupInstallButton() {
  const button = $("#installButton");
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredPrompt = event;
    button.hidden = false;
  });

  button.addEventListener("click", async () => {
    if (!deferredPrompt) {
      showToast("On iPad, open Safari → Share → Add to Home Screen.");
      return;
    }
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    button.hidden = true;
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .catch(error => console.warn("Service worker registration failed:", error));
  });
}

function init() {
  loadState();
  state.currentMission = makeMission();
  renderMission();
  renderDrills();
  renderStash();
  bindEvents();
  updateOnlineStatus();
  setupInstallButton();
  registerServiceWorker();
}

init();
