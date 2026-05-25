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

const blueprintProfiles = {
  "strawberry": {
    base: "heart-triangle berry body",
    shapes: ["rounded upside-down heart", "leaf crown", "seed dots", "low face"],
    steps: [
      "Draw a soft upside-down heart or rounded triangle for the berry body.",
      "Add 3–5 leaf triangles on top before any face details.",
      "Place the eyes low and wide so the strawberry feels cute instead of realistic.",
      "Scatter only a few seed dots; keep them away from the face so it does not get noisy.",
      "For the icon version, keep only berry body + leaf crown + two seed marks."
    ],
    svg: "strawberry"
  },
  "toast slice": {
    base: "rounded rectangle with domed top",
    shapes: ["arched toast body", "inner crust line", "low face", "tiny butter square"],
    steps: [
      "Start with a rectangle, then push the top into a rounded arch.",
      "Draw a smaller matching arch inside it to create the crust border.",
      "Put the face in the lower middle, not near the top crust.",
      "Add one simple topping shape, like a butter square or jam blob, as the personality prop.",
      "For the icon version, make the crust silhouette bold and remove tiny crumb marks."
    ],
    svg: "toast"
  },
  "boba cup": {
    base: "tapered cup with lid ellipse",
    shapes: ["wide lid", "tapered cup", "round pearls", "straw diagonal"],
    steps: [
      "Block the cup as a tapered rectangle: wider at the top, narrower at the bottom.",
      "Add a flattened oval lid and one diagonal straw before drawing the face.",
      "Place boba pearls as large circles along the bottom edge.",
      "Put the face on the empty cup area above the pearls.",
      "For the icon version, keep cup silhouette + straw + three pearls."
    ],
    svg: "boba"
  },
  "mug": {
    base: "squircle cup with C-handle",
    shapes: ["rounded cup", "side handle", "steam curves", "face on cup body"],
    steps: [
      "Draw the mug body as a soft squircle, not a perfect rectangle.",
      "Add a large C-shaped handle on one side so the object reads as a mug immediately.",
      "Put the face on the front body, slightly below center.",
      "Add 2–3 steam curves above the rim for warmth and mood.",
      "For the icon version, exaggerate the handle and simplify the steam into one curve."
    ],
    svg: "mug"
  },
  "pencil": {
    base: "long capsule with triangle tip",
    shapes: ["long body", "wood triangle", "graphite point", "eraser band"],
    steps: [
      "Start with a long rounded rectangle for the pencil body.",
      "Add a triangle at one end for the wooden sharpened tip.",
      "Add a tiny dark triangle for the graphite point.",
      "Place the face on the pencil body, leaving the tip clean.",
      "For the icon version, tilt the pencil diagonally and remove small stripe details."
    ],
    svg: "pencil"
  },
  "lamp": {
    base: "shade triangle plus stem",
    shapes: ["trapezoid shade", "thin neck", "oval base", "glow circle"],
    steps: [
      "Build the lamp from three big parts: shade, neck, and base.",
      "Use a trapezoid for the shade so it reads quickly.",
      "Place the face on the shade or base, not both.",
      "Add one soft glow shape behind it to show the lamp is alive.",
      "For the icon version, keep the shade silhouette and one glow halo."
    ],
    svg: "lamp"
  },
  "chair": {
    base: "seat box plus back shape",
    shapes: ["back rectangle", "seat cushion", "four simple legs", "face on back"],
    steps: [
      "Draw the chair back first as a rounded rectangle.",
      "Add a short seat shape overlapping the lower back.",
      "Use simple stick legs; do not detail the perspective yet.",
      "Place the face on the chair back where there is the most open space.",
      "For the icon version, simplify to back + seat + two visible legs."
    ],
    svg: "chair"
  },
  "mushroom": {
    base: "cap dome plus stem",
    shapes: ["wide cap", "short stem", "cap spots", "low face"],
    steps: [
      "Start with a wide dome cap like half of an oval.",
      "Add a short rounded stem underneath; keep it simpler than the cap.",
      "Place the face on the stem or lower cap, but keep it low.",
      "Add 3 big spots instead of many tiny ones.",
      "For the icon version, keep the cap exaggerated and use only one spot."
    ],
    svg: "mushroom"
  },
  "cupcake": {
    base: "wrapper trapezoid plus frosting cloud",
    shapes: ["trapezoid wrapper", "cloud frosting", "sprinkle dots", "cherry dot"],
    steps: [
      "Draw a trapezoid wrapper first; this anchors the cupcake.",
      "Stack a cloud-like frosting shape on top using 3 rounded bumps.",
      "Place the face on the wrapper for a clean reading area.",
      "Add sprinkles as 3–5 simple dashes, not a pattern everywhere.",
      "For the icon version, keep wrapper + frosting + one cherry circle."
    ],
    svg: "cupcake"
  },
  "cloud pillow": {
    base: "overlapping circles cloud",
    shapes: ["3–5 round lobes", "flat bottom", "sleepy eyes", "tiny seams"],
    steps: [
      "Build the cloud from 3–5 overlapping circles.",
      "Flatten the bottom slightly so it feels like a pillow.",
      "Use sleepy curved eyes to match the soft shape language.",
      "Add only one seam or stitch mark as texture.",
      "For the icon version, reduce it to three lobes and two sleepy eye arcs."
    ],
    svg: "cloud"
  },
  "bean blob": {
    base: "asymmetric bean body",
    shapes: ["bean silhouette", "low face", "tiny arms", "single prop"],
    steps: [
      "Draw a bean shape that is heavier on one side so it feels organic.",
      "Place the face low and slightly off-center.",
      "Add tiny arms as simple curved nubs, not full hands.",
      "Give it one prop that explains the character.",
      "For the icon version, keep the bean silhouette and one expression."
    ],
    svg: "bean"
  },
  "circle creature": {
    base: "perfect circle with tiny limbs",
    shapes: ["circle body", "low face", "tiny legs", "one top accessory"],
    steps: [
      "Start with a clean circle and resist adding bumps too early.",
      "Put the face in the lower third to make the circle cute.",
      "Add tiny legs or arms as short ovals.",
      "Add one top accessory, like a leaf, hat, or sparkle.",
      "For the icon version, keep the circle body and one accessory only."
    ],
    svg: "circle"
  },
  "triangle buddy": {
    base: "soft triangle body",
    shapes: ["rounded triangle", "face below center", "corner personality", "small feet"],
    steps: [
      "Draw a triangle, then round each corner so it feels friendly.",
      "Place the face below the center, away from the point.",
      "Use the top point as personality: hat, flame, leaf, or tiny crown.",
      "Add two small feet at the bottom corners.",
      "For the icon version, exaggerate the triangle silhouette and remove tiny facial extras."
    ],
    svg: "triangle"
  },
  "star mascot": {
    base: "five-point star with softened points",
    shapes: ["star body", "round center face", "small sparkle prop", "simple pose"],
    steps: [
      "Draw a big star, then soften each point so it feels huggable.",
      "Reserve the center circle area for the face.",
      "Use only one arm/point as the gesture pose.",
      "Add one tiny sparkle friend or wand if needed.",
      "For the icon version, keep the star silhouette and two dot eyes."
    ],
    svg: "star"
  },
  "sun badge": {
    base: "circle core plus rays",
    shapes: ["central circle", "simple rays", "badge ring", "tiny face"],
    steps: [
      "Draw the sun as a central circle before adding rays.",
      "Add 8–12 simple ray triangles or rounded dashes evenly around it.",
      "Put the face inside the center circle and keep it tiny.",
      "Add an optional badge ring if this is a logo mark.",
      "For the icon version, use fewer rays and stronger outer silhouette."
    ],
    svg: "sun"
  },
  "sprout logo": {
    base: "stem plus two leaves",
    shapes: ["short stem", "two leaf ovals", "container squircle", "negative space"],
    steps: [
      "Start with a short stem curve, then add two oval leaves.",
      "Keep the leaves large enough to read at small size.",
      "Place the sprout inside a circle or squircle container.",
      "Use negative space between the leaves as a clean design feature.",
      "For the icon version, remove all texture and use two colors max."
    ],
    svg: "sprout"
  },
  "moon app icon": {
    base: "crescent inside squircle",
    shapes: ["outer circle", "cutaway circle", "small star", "container"],
    steps: [
      "Draw one large circle, then carve the crescent with a second overlapping circle.",
      "Place the crescent inside a squircle app-icon container.",
      "Add one small star for scale and magic.",
      "Keep all lines thick and avoid tiny craters.",
      "For the icon version, use the crescent + one star only."
    ],
    svg: "moon"
  }
};

function getBlueprintProfile(subject, family, focus) {
  if (blueprintProfiles[subject]) return blueprintProfiles[subject];

  if (focus === "logo" || family === "icons") {
    return {
      base: "bold symbol inside a container",
      shapes: ["outer squircle", "central symbol", "one accent cutout", "two-color palette"],
      steps: [
        `Reduce the ${subject} into one bold central silhouette.`,
        "Place it inside a squircle, badge, circle, or shield container.",
        "Remove surface texture and keep only the feature that makes it recognizable.",
        "Test it as a tiny mark: squint or zoom out until details disappear.",
        "For the final icon, use two colors plus one optional highlight."
      ],
      svg: "logo"
    };
  }

  if (family === "foods") {
    return {
      base: "food silhouette plus face zone",
      shapes: ["main food outline", "top/detail shape", "low face", "one texture group"],
      steps: [
        `Find the biggest recognizable food shape in the ${subject} first.`,
        "Draw the outside silhouette before adding eyes or texture.",
        "Reserve a clean face zone with no seeds, crumbs, or toppings crossing it.",
        "Add only 3–5 texture marks so the drawing stays beginner-friendly.",
        "For the icon version, remove texture until the silhouette still says the food."
      ],
      svg: "food"
    };
  }

  if (family === "objects") {
    return {
      base: "object silhouette plus readable feature",
      shapes: ["main object body", "signature object part", "face zone", "one prop/detail"],
      steps: [
        `Block the ${subject} using its largest simple shape.`,
        "Add the one part that makes the object unmistakable: handle, lid, legs, strap, or top.",
        "Put the face on the largest empty surface.",
        "Avoid decorating every edge; choose one story detail.",
        "For the icon version, exaggerate the signature part and simplify everything else."
      ],
      svg: "object"
    };
  }

  return {
    base: "friendly blob silhouette",
    shapes: ["main blob", "low face", "small limbs", "one personality detail"],
    steps: [
      `Turn the ${subject} into one readable blob or basic shape first.`,
      "Place the face low and leave enough blank space around it.",
      "Use tiny limbs or one prop to make the shape feel alive.",
      "Clean the outside edge so it reads as a character even without color.",
      "For the icon version, keep only the silhouette, face, and one signature detail."
    ],
    svg: "bean"
  };
}

function blueprintSVG(profile, subject, personality) {
  const label = escapeHTML(profile.base);
  const title = escapeHTML(`${capitalize(subject)} shape-aware blueprint`);
  const desc = escapeHTML(`Construction diagram for a ${personality} ${subject}, based on ${profile.base}.`);
  const body = blueprintShapeMarkup(profile.svg);
  return `
    <svg viewBox="0 0 420 340" role="img" aria-labelledby="svgTitle svgDesc">
      <title id="svgTitle">${title}</title>
      <desc id="svgDesc">${desc}</desc>
      <defs>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(79, 119, 145, .18)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="420" height="340" rx="28" fill="url(#grid)"/>
      ${body}
      <text x="28" y="42" class="svg-label">subject: ${escapeHTML(subject)}</text>
      <text x="28" y="314" class="svg-label">base: ${label}</text>
    </svg>
  `;
}

function blueprintShapeMarkup(type) {
  const commonFace = `
    <circle cx="186" cy="178" r="8" fill="#2D2422"/>
    <circle cx="226" cy="178" r="8" fill="#2D2422"/>
    <path d="M196 202 Q206 211 218 202" fill="none" stroke="#2D2422" stroke-width="5" stroke-linecap="round"/>
  `;
  const map = {
    strawberry: `
      <path d="M210 94 C285 104 315 180 252 266 C231 295 191 295 170 266 C107 180 135 104 210 94Z" fill="rgba(255,142,114,.32)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M166 104 L186 70 L208 102 L231 70 L250 105" fill="rgba(142,172,142,.35)" stroke="#536F4F" stroke-width="4" stroke-linejoin="round"/>
      ${commonFace}
      <circle cx="165" cy="150" r="4" fill="#FFB299"/><circle cx="256" cy="150" r="4" fill="#FFB299"/><circle cx="210" cy="240" r="4" fill="#FFB299"/>
    `,
    toast: `
      <path d="M132 268 L132 142 C132 94 170 70 210 70 C250 70 288 94 288 142 L288 268Z" fill="rgba(255,217,125,.35)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M158 252 L158 148 C158 116 182 100 210 100 C238 100 262 116 262 148 L262 252Z" fill="none" stroke="#FF8E72" stroke-width="6"/>
      ${commonFace}
      <rect x="230" y="116" width="34" height="28" rx="8" fill="rgba(255,217,125,.75)" stroke="#4F778F" stroke-width="3"/>
    `,
    boba: `
      <path d="M136 108 L284 108 L262 272 L158 272Z" fill="rgba(182,180,233,.26)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <ellipse cx="210" cy="108" rx="86" ry="24" fill="rgba(255,250,242,.7)" stroke="#4F778F" stroke-width="4"/>
      <path d="M245 88 L292 42" stroke="#FF8E72" stroke-width="10" stroke-linecap="round"/>
      ${commonFace}
      <circle cx="178" cy="248" r="12" fill="#2D2422"/><circle cx="214" cy="252" r="12" fill="#2D2422"/><circle cx="250" cy="246" r="12" fill="#2D2422"/>
    `,
    mug: `
      <rect x="132" y="112" width="134" height="150" rx="30" fill="rgba(142,172,142,.28)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M262 148 C330 132 330 244 262 226" fill="none" stroke="#4F778F" stroke-width="18" stroke-linecap="round"/>
      <path d="M166 80 C146 58 188 56 170 36 M216 82 C198 58 240 58 222 36" fill="none" stroke="#FF8E72" stroke-width="5" stroke-linecap="round"/>
      ${commonFace}
    `,
    pencil: `
      <path d="M96 214 L260 86 L302 128 L138 256Z" fill="rgba(255,217,125,.5)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M260 86 L322 66 L302 128Z" fill="rgba(255,178,153,.45)" stroke="#4F778F" stroke-width="4"/>
      <path d="M306 72 L322 66 L316 84Z" fill="#2D2422"/>
      <circle cx="182" cy="177" r="8" fill="#2D2422"/><circle cx="213" cy="153" r="8" fill="#2D2422"/>
      <path d="M192 195 Q210 198 222 178" fill="none" stroke="#2D2422" stroke-width="5" stroke-linecap="round"/>
    `,
    lamp: `
      <path d="M144 104 L276 104 L250 176 L170 176Z" fill="rgba(255,217,125,.42)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M210 176 L210 256" stroke="#4F778F" stroke-width="8" stroke-linecap="round"/>
      <ellipse cx="210" cy="268" rx="64" ry="16" fill="rgba(142,172,142,.28)" stroke="#4F778F" stroke-width="4"/>
      <circle cx="188" cy="136" r="8" fill="#2D2422"/><circle cx="228" cy="136" r="8" fill="#2D2422"/>
      <path d="M198 156 Q210 164 222 156" fill="none" stroke="#2D2422" stroke-width="5" stroke-linecap="round"/>
    `,
    chair: `
      <rect x="152" y="80" width="116" height="118" rx="22" fill="rgba(142,172,142,.28)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M126 198 L294 198 L270 238 L150 238Z" fill="rgba(255,178,153,.3)" stroke="#4F778F" stroke-width="4"/>
      <path d="M154 238 L136 284 M266 238 L286 284" stroke="#4F778F" stroke-width="7" stroke-linecap="round"/>
      ${commonFace}
    `,
    mushroom: `
      <path d="M112 150 C130 78 290 78 308 150 C278 178 142 178 112 150Z" fill="rgba(255,142,114,.34)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M174 154 C170 198 158 248 210 256 C262 248 250 198 246 154Z" fill="rgba(255,250,242,.78)" stroke="#4F778F" stroke-width="4"/>
      ${commonFace}
      <circle cx="164" cy="126" r="14" fill="rgba(255,250,242,.8)"/><circle cx="246" cy="124" r="16" fill="rgba(255,250,242,.8)"/>
    `,
    cupcake: `
      <path d="M144 174 C156 116 188 132 202 96 C230 132 266 116 276 174Z" fill="rgba(255,178,153,.36)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M152 176 L268 176 L248 270 L172 270Z" fill="rgba(255,217,125,.34)" stroke="#4F778F" stroke-width="4"/>
      ${commonFace}
      <circle cx="210" cy="82" r="13" fill="#FF8E72"/>
    `,
    cloud: `
      <path d="M120 204 C90 166 132 124 172 142 C190 96 260 102 272 150 C318 144 340 204 300 232 L142 232 C128 232 118 220 120 204Z" fill="rgba(255,250,242,.78)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M178 184 Q190 174 202 184 M222 184 Q234 174 246 184" fill="none" stroke="#2D2422" stroke-width="5" stroke-linecap="round"/>
      <path d="M204 206 Q212 214 222 206" fill="none" stroke="#2D2422" stroke-width="5" stroke-linecap="round"/>
    `,
    circle: `
      <circle cx="210" cy="176" r="92" fill="rgba(255,217,125,.34)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      ${commonFace}
      <ellipse cx="168" cy="276" rx="18" ry="10" fill="rgba(142,172,142,.35)" stroke="#4F778F" stroke-width="3"/>
      <ellipse cx="252" cy="276" rx="18" ry="10" fill="rgba(142,172,142,.35)" stroke="#4F778F" stroke-width="3"/>
    `,
    triangle: `
      <path d="M210 70 L312 260 L108 260Z" fill="rgba(255,217,125,.34)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8" stroke-linejoin="round"/>
      <circle cx="190" cy="192" r="8" fill="#2D2422"/><circle cx="230" cy="192" r="8" fill="#2D2422"/>
      <path d="M198 216 Q210 224 224 216" fill="none" stroke="#2D2422" stroke-width="5" stroke-linecap="round"/>
    `,
    star: `
      <path d="M210 58 L238 136 L320 138 L256 188 L278 268 L210 220 L142 268 L164 188 L100 138 L182 136Z" fill="rgba(255,217,125,.38)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8" stroke-linejoin="round"/>
      ${commonFace}
    `,
    sun: `
      <circle cx="210" cy="176" r="70" fill="rgba(255,217,125,.44)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M210 72 L210 42 M210 310 L210 280 M106 176 L76 176 M344 176 L314 176 M136 102 L116 82 M284 250 L304 270 M284 102 L304 82 M136 250 L116 270" stroke="#FF8E72" stroke-width="8" stroke-linecap="round"/>
      ${commonFace}
    `,
    sprout: `
      <rect x="126" y="78" width="168" height="168" rx="42" fill="rgba(255,250,242,.5)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M210 230 C208 174 208 142 210 108" stroke="#536F4F" stroke-width="9" stroke-linecap="round"/>
      <path d="M210 126 C166 84 134 112 160 148 C188 164 206 144 210 126Z" fill="rgba(142,172,142,.45)" stroke="#536F4F" stroke-width="4"/>
      <path d="M210 126 C254 84 286 112 260 148 C232 164 214 144 210 126Z" fill="rgba(142,172,142,.45)" stroke="#536F4F" stroke-width="4"/>
    `,
    moon: `
      <rect x="118" y="68" width="184" height="184" rx="48" fill="rgba(182,180,233,.2)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M228 100 C176 116 156 184 196 226 C158 218 132 184 138 146 C144 108 182 82 228 100Z" fill="rgba(255,217,125,.55)" stroke="#4F778F" stroke-width="4"/>
      <path d="M282 110 L290 128 L308 136 L290 144 L282 162 L274 144 L256 136 L274 128Z" fill="#FFB299" stroke="#4F778F" stroke-width="3"/>
    `,
    logo: `
      <rect x="126" y="74" width="168" height="168" rx="48" fill="rgba(182,180,233,.22)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <circle cx="210" cy="158" r="50" fill="rgba(255,217,125,.35)" stroke="#4F778F" stroke-width="4"/>
      <path d="M190 176 L210 112 L232 176Z" fill="rgba(255,142,114,.36)" stroke="#4F778F" stroke-width="4" stroke-linejoin="round"/>
      <text x="142" y="270" class="svg-label">simplify to 1 symbol</text>
    `,
    food: `
      <path d="M116 186 C130 102 282 96 306 184 C310 238 262 274 210 274 C156 274 110 238 116 186Z" fill="rgba(255,178,153,.3)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M164 106 C180 72 240 72 256 106" fill="none" stroke="#536F4F" stroke-width="7" stroke-linecap="round"/>
      ${commonFace}
      <circle cx="162" cy="218" r="5" fill="#FF8E72"/><circle cx="260" cy="218" r="5" fill="#FF8E72"/>
    `,
    object: `
      <rect x="134" y="106" width="152" height="152" rx="34" fill="rgba(142,172,142,.28)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M286 154 C336 144 336 222 286 214" fill="none" stroke="#4F778F" stroke-width="12" stroke-linecap="round"/>
      ${commonFace}
      <path d="M164 104 L186 72 L208 104" fill="none" stroke="#FFD97D" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    `,
    bean: `
      <path d="M122 184 C112 94 210 62 264 116 C334 188 274 292 180 268 C136 256 126 222 122 184Z" fill="rgba(142,172,142,.32)" stroke="#4F778F" stroke-width="4" stroke-dasharray="8 8"/>
      ${commonFace}
      <path d="M138 218 Q96 214 108 178 M282 198 Q326 190 310 156" fill="none" stroke="#4F778F" stroke-width="7" stroke-linecap="round"/>
    `
  };
  return map[type] || map.bean;
}


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
  const blueprint = getBlueprintProfile(subject, familyKey, focus);

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
    blueprint,
    prompt: iconMode
      ? `Design a ${personality} ${subject} as a simple logo or app-icon mark. Start from its real shape language: ${blueprint.base}.`
      : `Draw a ${personality} ${subject} character by building the actual subject shape first: ${blueprint.base}. Add life only after the silhouette reads.`,
    constraints: [
      difficultyData.detail,
      `Subject blueprint: ${blueprint.shapes.join(" → ")}.`,
      `Skill kit: ${kit.join(" · ")}.`,
      iconMode ? "Finish with one tiny icon version inside a squircle." : "Finish with one tiny sticker version beside the character."
    ],
    steps: buildSteps(subject, personality, focus, iconMode, blueprint),
    createdAt: new Date().toISOString(),
    complete: false
  };
}

function buildSteps(subject, personality, focus, iconMode, blueprint) {
  const baseSteps = [
    ...blueprint.steps,
    `Personality pass: make it feel ${personality} with pose, face, or one prop — not extra clutter.`
  ];

  if (focus === "silhouette") {
    baseSteps.push("Silhouette test: fill the drawing as a black shape. If it no longer says the subject, enlarge the signature part.");
  } else if (focus === "logo") {
    baseSteps.push("Logo test: redraw it as a flat mark with two colors and no shading.");
  } else if (focus === "expression") {
    baseSteps.push("Expression test: keep the subject shape the same, then change only eyes, mouth, tilt, and one gesture.");
  } else if (focus === "faces") {
    baseSteps.push("Face test: try dot eyes, sleepy eyes, and silly eyes on the same subject shape.");
  } else {
    baseSteps.push("Sticker test: redraw the whole idea tiny in the corner and keep only what still reads.");
  }

  if (iconMode) {
    baseSteps.push("App-icon test: place it inside a squircle and delete anything that becomes muddy at small size.");
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
  if (!state.currentMission.blueprint) {
    state.currentMission.blueprint = getBlueprintProfile(state.currentMission.subject, state.currentMission.family, state.currentMission.focus);
    state.currentMission.steps = buildSteps(
      state.currentMission.subject,
      randomItem(personalities[state.currentMission.vibe] || personalities.cute),
      state.currentMission.focus,
      state.currentMission.focus === "logo" || state.currentMission.family === "icons",
      state.currentMission.blueprint
    );
  }
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
    <div class="subject-recipe">
      <h4>Subject shape recipe</h4>
      <p><strong>${escapeHTML(mission.blueprint.base)}</strong></p>
      <div class="shape-chain">
        ${mission.blueprint.shapes.map(shape => `<span>${escapeHTML(shape)}</span>`).join("")}
      </div>
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
  const mission = state.currentMission;
  const steps = mission?.steps || [];
  const profile = mission?.blueprint || getBlueprintProfile("bean blob", "shapes", "simple-shapes");
  $("#blueprintDiagram").innerHTML = blueprintSVG(profile, mission?.subject || "bean blob", mission?.vibe || "cute");
  $("#blueprintBase").textContent = profile.base;
  $("#blueprintShapes").innerHTML = profile.shapes.map(shape => `<span>${escapeHTML(shape)}</span>`).join("");
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
