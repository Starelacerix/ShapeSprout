/* ShapeSprout Studio — vanilla one-page PWA */

const STORAGE_KEY = "shapesprout-studio-state-v1";

const subjects = {
  objects: [
    "mug", "teacup", "pencil", "paint tube", "lamp", "chair", "cloud pillow", "tiny backpack",
    "houseplant pot", "mailbox", "book stack", "watering can", "paintbrush", "camera", "sketchbook",
    "key", "candle", "roller skate", "umbrella", "tiny house", "alarm clock", "teapot", "scissors",
    "tiny suitcase", "desk fan", "paint jar", "music note speaker", "watering boot", "rubber stamp",
    "jar of stars", "tiny radio", "paint roller", "thread spool", "lunchbox", "magnifying glass",
    "lantern", "treasure chest", "keyboard key", "button jar", "pocket mirror", "glue stick"
  ],
  foods: [
    "strawberry", "toast slice", "boba cup", "dumpling", "cupcake", "pickle", "mushroom",
    "croissant", "soup bowl", "lemon wedge", "avocado half", "ramen bowl", "donut", "ice cream cone",
    "taco", "pizza slice", "banana", "cherry pair", "egg character", "sushi roll", "cinnamon roll",
    "pea pod", "waffle square", "melon slice", "milk carton", "macaron", "pretzel", "pancake stack",
    "sandwich triangle", "berry tart", "hot cocoa mug", "fortune cookie", "onigiri", "carrot",
    "watermelon slice", "popcorn bucket", "jelly jar", "cookie stack", "bagel", "tiny cake slice"
  ],
  shapes: [
    "bean blob", "circle creature", "triangle buddy", "star mascot", "puddle ghost", "squircle pal",
    "jellybean", "wobbly cube", "moon blob", "tiny hill", "capsule critter", "teardrop sprite",
    "cloud blob", "diamond friend", "spiral snail", "flower blob", "rainbow arch", "rock buddy",
    "pebble stack", "soft shield", "wavy ribbon", "droplet buddy", "blob family", "tiny monster shape",
    "oval potato", "lumpy rectangle", "noodle squiggle", "stacked circles", "rounded hexagon",
    "melted star", "puffy plus sign", "soft lightning bolt", "blob with ears", "tiny comet"
  ],
  icons: [
    "sun badge", "sprout logo", "moon app icon", "sparkle mark", "pencil badge", "cloud symbol",
    "mushroom sticker", "leaf emblem", "magic wand icon", "paint palette logo", "mountain badge",
    "flower shop mark", "rain cloud icon", "monogram blob", "tiny app tile", "paw print icon",
    "camera glyph", "music note logo", "book app icon", "brush tip mark", "garden app icon",
    "tea leaf logo", "star map icon", "cozy home symbol", "palette app icon"
  ],
  badges: [
    "heart shield", "smile stamp", "ribbon badge", "coffee shop logo", "book club mark", "garden badge",
    "bakery seal", "rocket patch", "wave emblem", "crown badge", "donut badge", "sticker seal",
    "star scout patch", "cat face icon", "sports pennant", "merit badge", "campfire patch",
    "library seal", "flower award badge", "planet club badge", "paint club crest", "cute skull patch",
    "rainbow club badge", "tiny bakery ribbon", "ocean rescue patch", "forest helper badge"
  ],
  mascots: [
    "sock goblin", "button mouse", "teacup dragon", "sprout wizard", "toast knight", "mushroom librarian",
    "cloud mail carrier", "pencil explorer", "pickle pirate", "lamp ghost", "star baker", "blob detective",
    "boba astronaut", "chair monster", "donut fairy", "camera robot", "tiny house spirit", "book dragon",
    "avocado gardener", "moon rabbit blob"
  ],
  nature: [
    "leaf sprite", "acorn buddy", "flower pot character", "cloud seed", "sunflower face", "tiny cactus",
    "moss rock", "rain drop", "moon moth", "snail shell icon", "butterfly badge", "pinecone mascot",
    "sea shell mark", "wave creature", "berry bush", "little mushroom house", "starry leaf",
    "mountain cloud badge", "pond lily", "bee sticker"
  ],
  lettering: [
    "letter A character", "letter B badge", "letter C mascot", "initial monogram", "bubble word mark",
    "rounded letter logo", "ribbon initial", "sticker word badge", "tiny shop sign", "single-letter app icon",
    "script leaf mark", "blocky sports initial", "cute exclamation mark", "question mark mascot",
    "ampersand sticker", "number 3 mascot", "number 7 badge"
  ]
};

const personalities = {
  cute: ["friendly", "curious", "gentle", "tiny-but-brave", "cozy"],
  sleepy: ["sleepy", "dreamy", "slow", "pillow-soft", "half-awake"],
  silly: ["goofy", "wobbly", "overexcited", "dramatic", "snack-obsessed"],
  magical: ["glowy", "mystic", "moonlit", "sparkly", "enchanted"],
  bold: ["simple", "graphic", "confident", "badge-like", "iconic"],
  cozy: ["warm", "cottage-soft", "friendly", "tea-time", "comforting"],
  spooky: ["shy-spooky", "tiny-haunted", "glow-eyed", "friendly-goblin", "midnight-cute"],
  retro: ["rubber-hose", "1950s diner", "vintage mascot", "rounded-retro", "poster-like"],
  kawaii: ["blushy", "tiny", "squishy", "sticker-cute", "sparkle-eyed"],
  minimal: ["clean", "balanced", "geometric", "reduced", "quiet"],
  sporty: ["energetic", "patch-like", "team mascot", "bold", "motion-ready"],
  fancy: ["boutique", "elegant", "ornamental", "polished", "delicate"],
  playful: ["bouncy", "impish", "wiggly", "toy-like", "spark-charged"],
  chunky: ["bold", "heavy-shape", "sticker-thick", "squashable", "poster-clear"],
  calm: ["quiet", "balanced", "gentle", "simple", "peaceful"],
  weird: ["oddball", "asymmetric", "strange-cute", "tiny-chaos", "surprising"],
  cottagecore: ["garden-soft", "mossy", "storybook", "handmade", "warm"],
  celestial: ["moon-dusted", "starry", "quiet-magic", "cosmic", "night-sky"],
  heroic: ["brave", "upright", "emblem-ready", "bold-hearted", "champion-like"],
  ocean: ["bubbly", "wave-soft", "shell-bright", "sea-sprayed", "floaty"],
  robotic: ["tiny-robot", "beep-cute", "modular", "friendly-tech", "bolt-eyed"],
  gothic: ["soft-goth", "velvet-dark", "cute-spooky", "ornate", "moonlit"],
  candy: ["sugary", "bright", "sprinkle-happy", "gumdrop", "sweet-shop"],
  editorial: ["clean-poster", "smart", "balanced", "magazine-like", "designed"],
  handmade: ["wobbly", "stamp-like", "crafty", "imperfect", "warm"]
};

const shapeKits = {
  "simple-shapes": ["one big base shape", "one signature shape", "two tiny face marks", "one curved smile"],
  faces: ["face zone map", "eye spacing", "cheek placement", "mouth/emotion test"],
  silhouette: ["outer contour first", "signature part enlarged", "black-fill test", "tiny-size check"],
  logo: ["container shape", "central symbol", "negative space", "two colors max"],
  expression: ["body tilt", "eye variation", "gesture limb", "emotion prop"],
  construction: ["base primitive", "secondary primitive", "guide axis", "detail order"],
  proportion: ["head/body ratio", "low face zone", "tiny limbs", "oversized signature feature"],
  texture: ["3–5 texture marks", "clear face zone", "edge detail", "pattern restraint"],
  "badge-layout": ["container type", "inner symbol", "banner/ring", "clear border"],
  "negative-space": ["cutout shape", "inside/outside balance", "one readable gap", "silhouette test"],
  palette: ["2-color limit", "accent color", "value contrast", "no muddy detail"],
  variation: ["round version", "tall version", "icon version", "weird version"],
  "memory-mode": ["study", "hide", "draw from memory", "reveal and correct"],
  "redraw-ladder": ["first draw", "silhouette redraw", "icon redraw", "vibe redraw"],
  "procreate-layers": ["construction layer", "clean sketch", "flats", "texture", "small icon test"],
  critique: ["silhouette", "shape clarity", "expression match", "tiny-size read"],
  "shape-vocabulary": ["base primitive", "variation knobs", "best uses", "three prompts"],
  "object-readability": ["function part", "largest surface", "face placement", "do not hide the object"],
  "sticker-composition": ["white border plan", "tilt/gesture", "one prop", "readable contour"],
  "container-hierarchy": ["outer container", "inner symbol", "secondary ribbon", "small-size order"],
  "line-confidence": ["single clean contour", "fewer sketchy strokes", "smooth corners", "intentional line weight"],
  "small-size-readability": ["16px squint test", "remove inner details", "increase silhouette contrast", "one focal symbol"],
  "motif-building": ["repeat one shape", "create a family", "change scale", "keep one motif consistent"],
  "pose-gesture": ["tilt axis", "weight direction", "limb rhythm", "emotion silhouette"],
  "texture-restraint": ["texture cluster", "empty face zone", "edge-only detail", "stop after 5 marks"],
  "color-value": ["dark/light read", "two-color version", "accent only", "no similar values"],
  "logo-family": ["main mark", "badge version", "app icon version", "sticker version"]
};


const learningPaths = {
  "guided-session": {
    label: "Guided session",
    goal: "A complete mini lesson: warmup, blueprint, draw, self-check, redraw.",
    sequence: ["warmup", "main drawing", "small icon test", "self-check"]
  },
  "daily-practice": {
    label: "Daily practice",
    goal: "A short repeatable routine that builds drawing mileage.",
    sequence: ["2-minute warmup", "one finished sketch", "one quick redraw"]
  },
  "procreate-sidekick": {
    label: "Procreate sidekick",
    goal: "Clear layer-by-layer instructions for drawing beside this app.",
    sequence: ["construction layer", "clean sketch", "color flats", "texture pass", "tiny icon check"]
  },
  "logo-lab": {
    label: "Logo + icon lab",
    goal: "Translate a character idea into a clean symbol, badge, or app icon.",
    sequence: ["container", "symbol", "negative space", "small-size test"]
  },
  "character-builder": {
    label: "Character builder",
    goal: "Turn objects, foods, shapes, and blobs into expressive mascots.",
    sequence: ["silhouette", "face zone", "gesture", "prop", "personality"]
  },
  "redraw-coach": {
    label: "Redraw coach",
    goal: "Improve the same drawing through controlled iterations.",
    sequence: ["first try", "silhouette fix", "expression fix", "icon simplification"]
  },
  "badge-school": {
    label: "Badge school",
    goal: "Learn why seals, shields, patches, ribbons, and stamps use different construction rules.",
    sequence: ["outer container", "symbol hierarchy", "ribbon/border", "small-size check"]
  },
  "shape-vocabulary-lab": {
    label: "Shape vocabulary lab",
    goal: "Build a reusable library of beans, squircles, shields, arcs, blobs, and symbols.",
    sequence: ["base shape", "variation knobs", "subject swap", "memory redraw"]
  },
  "three-way-translation": {
    label: "Three-way translation",
    goal: "Turn one subject into a character, an icon, and a badge/sticker.",
    sequence: ["character version", "icon version", "badge version", "compare"]
  },
  "silhouette-bootcamp": {
    label: "Silhouette bootcamp",
    goal: "Make drawings readable before texture, color, or cute details.",
    sequence: ["black fill", "remove detail", "exaggerate signature part", "tiny test"]
  },
  "style-slider-lab": {
    label: "Style slider lab",
    goal: "Practice changing one subject across cute, bold, weird, minimal, and fancy versions.",
    sequence: ["same base", "change proportions", "change details", "compare vibes"]
  }
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


const subjectBlueprintExtras = {
  "teacup": {
    base: "wide cup bowl with tiny foot and handle",
    shapes: ["shallow oval rim", "rounded bowl", "tiny foot", "C-handle", "steam curl"],
    steps: [
      "Draw a wide oval rim first; this makes it read as a teacup, not a mug.",
      "Hang a rounded bowl shape under the oval and add a tiny foot at the bottom.",
      "Add a small C-handle on one side, thinner than a mug handle.",
      "Keep the face on the open bowl area below the rim.",
      "For the icon version, keep oval rim + bowl + handle + one steam curl."
    ],
    svg: "teacup"
  },
  "paint tube": {
    base: "crimped tube body with angled cap",
    shapes: ["squeezed rectangle", "crimp end", "angled cap", "paint stripe", "face zone"],
    steps: [
      "Start with a soft rectangle that bends slightly like a squeezed tube.",
      "Add the crimped sealed end as a small folded rectangle.",
      "Draw a chunky cap on the opposite side before any face details.",
      "Use one paint stripe or label band as the signature detail.",
      "For the icon version, exaggerate the cap and crimp; remove label text."
    ],
    svg: "paint-tube"
  },
  "tiny backpack": {
    base: "rounded bag body with flap and straps",
    shapes: ["arched bag body", "front pocket", "top flap", "side straps", "low face"],
    steps: [
      "Draw an arched rectangle for the backpack body.",
      "Add a smaller front pocket that follows the same curve.",
      "Use two side strap curves so it reads as wearable.",
      "Place the face on the large front pocket or body, not across seams.",
      "For the icon version, keep body + pocket + straps only."
    ],
    svg: "backpack"
  },
  "houseplant pot": {
    base: "trapezoid pot plus leaf cluster",
    shapes: ["pot trapezoid", "soil oval", "3 leaf shapes", "face on pot"],
    steps: [
      "Draw the pot as a trapezoid, wider at the top.",
      "Add a soil oval along the top rim.",
      "Build the plant with 3 large leaves instead of many small ones.",
      "Put the face on the pot body so the leaves stay clean.",
      "For the icon version, use pot + three leaves + two dot eyes."
    ],
    svg: "plant-pot"
  },
  "mailbox": {
    base: "arched box on post with flag",
    shapes: ["domed mailbox", "front door curve", "post", "side flag", "face zone"],
    steps: [
      "Draw the mailbox as a rectangle with a half-cylinder top.",
      "Add the front door curve to show the opening side.",
      "Attach one post underneath so it does not look like a toaster.",
      "Add a little side flag as the signature part.",
      "For the icon version, exaggerate the flag and simplify the post."
    ],
    svg: "mailbox"
  },
  "book stack": {
    base: "three offset rounded rectangles",
    shapes: ["bottom book", "middle book", "top book", "page lines", "bookmark"],
    steps: [
      "Stack three rounded rectangles, each slightly offset.",
      "Vary the thickness of each book so the stack feels playful.",
      "Add only 1–2 page lines per book.",
      "Place the face on the top book or make the whole stack the character.",
      "For the icon version, reduce to two books plus a bookmark stripe."
    ],
    svg: "book-stack"
  },
  "watering can": {
    base: "round can body with spout and handle",
    shapes: ["round tank", "top handle", "long spout", "rose tip", "low face"],
    steps: [
      "Start with a round or oval can body.",
      "Add the big top handle before the spout.",
      "Draw a long triangular spout; this is the unmistakable feature.",
      "Place the face on the can body, away from the spout.",
      "For the icon version, keep circle body + handle + spout silhouette."
    ],
    svg: "watering-can"
  },
  "camera": {
    base: "rounded camera body with lens circle",
    shapes: ["rounded rectangle", "large lens", "top bump", "strap dots", "face/lens choice"],
    steps: [
      "Draw a rounded rectangle for the camera body.",
      "Add the large lens circle as the main readable feature.",
      "Use one small top bump for the shutter.",
      "Choose: make the lens the eye, or put the face beside it — not both.",
      "For the icon version, keep body + lens + top bump only."
    ],
    svg: "camera"
  },
  "avocado half": {
    base: "pear oval with pit circle",
    shapes: ["pear body", "inner flesh oval", "pit circle", "tiny face", "rim"],
    steps: [
      "Draw a pear-shaped oval for the avocado outside.",
      "Add a smaller inner oval for the flesh area.",
      "Place the pit circle low and use it as a belly or nose.",
      "Put the face above or around the pit without crowding it.",
      "For the icon version, keep outer pear + inner oval + pit."
    ],
    svg: "avocado"
  },
  "ramen bowl": {
    base: "bowl ellipse with noodle waves",
    shapes: ["bowl arc", "rim ellipse", "noodle waves", "chopsticks", "face on bowl"],
    steps: [
      "Draw the bowl as a wide arc with a flat oval rim.",
      "Put noodle waves above the rim as 3 big curves.",
      "Add chopsticks diagonally if you want instant ramen recognition.",
      "Place the face on the bowl front, not in the noodles.",
      "For the icon version, keep bowl + 2 noodle curves + chopsticks."
    ],
    svg: "ramen"
  },
  "donut": {
    base: "ring circle with frosting blob",
    shapes: ["outer circle", "hole circle", "frosting wobble", "sprinkle dashes", "face zone"],
    steps: [
      "Draw the outer circle first, then cut the hole with a smaller circle.",
      "Add a wobbly frosting ring that does not cover the whole donut.",
      "Use sprinkles as 3–5 simple dashes only.",
      "Put the face on the frosting or dough area with the most open space.",
      "For the icon version, keep ring + hole + frosting silhouette."
    ],
    svg: "donut"
  },
  "ice cream cone": {
    base: "scoop circles stacked on cone triangle",
    shapes: ["cone triangle", "scoop circle", "drip curve", "waffle lines", "face on scoop"],
    steps: [
      "Draw the cone triangle first so the dessert has a base.",
      "Add one large scoop circle or blob on top.",
      "Use one drip curve for charm, not many.",
      "Place the face on the scoop.",
      "For the icon version, keep triangle + circle + one drip."
    ],
    svg: "ice-cream"
  },
  "pizza slice": {
    base: "long triangle slice with crust arc",
    shapes: ["triangle slice", "curved crust", "cheese drip", "pepperoni dots", "low face"],
    steps: [
      "Draw a long triangle with the point down.",
      "Add a curved crust along the wide top edge.",
      "Use two or three big topping circles, not tiny scattered dots.",
      "Put the face in the lower open cheese area.",
      "For the icon version, keep triangle + crust + one topping."
    ],
    svg: "pizza"
  },
  "banana": {
    base: "long crescent with stem ends",
    shapes: ["outer crescent", "inner curve", "two stems", "face along middle"],
    steps: [
      "Draw a curved banana crescent using two long arcs.",
      "Add small stem shapes at both ends.",
      "Place the face along the center of the banana, following the curve.",
      "Use the bend as the personality pose.",
      "For the icon version, keep one bold crescent with two end caps."
    ],
    svg: "banana"
  },
  "capsule critter": {
    base: "vertical capsule body",
    shapes: ["capsule body", "face band", "tiny feet", "top prop"],
    steps: [
      "Draw a tall capsule as the whole body.",
      "Divide it with one subtle band only if it helps expression.",
      "Place the face in the upper-middle or lower-third depending on cuteness.",
      "Add tiny feet at the bottom, not full legs.",
      "For the icon version, keep capsule + face + one prop."
    ],
    svg: "capsule"
  },
  "teardrop sprite": {
    base: "teardrop body with rounded point",
    shapes: ["drop silhouette", "point direction", "low face", "tiny arm"],
    steps: [
      "Draw a teardrop with a soft rounded point.",
      "Use the pointed end to show direction or attitude.",
      "Place the face in the round lower part.",
      "Add one tiny arm or sparkle, not a full outfit.",
      "For the icon version, keep the drop silhouette crisp."
    ],
    svg: "teardrop"
  },
  "diamond friend": {
    base: "rounded diamond with tiny facets",
    shapes: ["diamond body", "center face", "two facet lines", "tiny shine"],
    steps: [
      "Draw a diamond shape, then round the sharp corners.",
      "Place the face in the center where the diamond is widest.",
      "Add only two facet lines so it stays readable.",
      "Use one small shine mark for sparkle.",
      "For the icon version, keep diamond + shine + dot eyes."
    ],
    svg: "diamond"
  },
  "ribbon badge": {
    base: "circle medal with hanging ribbons",
    shapes: ["medal circle", "inner ring", "two ribbon tails", "central symbol"],
    steps: [
      "Start with a circle medal, then add an inner ring.",
      "Attach two ribbon tails below; this makes it different from a normal badge.",
      "Place one simple symbol in the center.",
      "Keep the border thick and the interior clean.",
      "For the icon version, keep medal + two ribbons + one symbol."
    ],
    svg: "ribbon-badge"
  },
  "coffee shop logo": {
    base: "cup silhouette inside circular seal",
    shapes: ["outer seal", "cup body", "handle", "steam mark", "small bean"],
    steps: [
      "Draw a circle seal first, then place a cup silhouette inside.",
      "Make the handle large enough to read at tiny size.",
      "Use one steam curl above the cup as the brand detail.",
      "Optional: add one coffee bean shape, not a full pattern.",
      "For the icon version, keep circle seal + cup + steam."
    ],
    svg: "coffee-logo"
  },
  "book club mark": {
    base: "open book with bookmark flame",
    shapes: ["two page wings", "center spine", "bookmark", "spark/star"],
    steps: [
      "Draw the open book as two symmetrical page wings.",
      "Add a center spine line so it reads as open.",
      "Turn the bookmark into a small flame, leaf, or sparkle for personality.",
      "Keep all page lines minimal.",
      "For the icon version, keep pages + spine + one bookmark mark."
    ],
    svg: "book-logo"
  },
  "bakery seal": {
    base: "scalloped seal with pastry symbol",
    shapes: ["scalloped edge", "inner circle", "croissant/pastry", "tiny star"],
    steps: [
      "Draw the outer badge with scalloped bumps, not a plain circle.",
      "Add an inner circle to make it feel like a stamp.",
      "Place one pastry silhouette in the middle.",
      "Use tiny stars or dots only around the edge.",
      "For the icon version, keep scallop edge + pastry."
    ],
    svg: "bakery-seal"
  },
  "rocket patch": {
    base: "patch shield with rocket diagonal",
    shapes: ["patch container", "rocket capsule", "fins", "flame", "motion arc"],
    steps: [
      "Draw the patch container first: shield, circle, or rounded triangle.",
      "Place the rocket diagonally so the badge has motion.",
      "Build the rocket from capsule body + two fins + flame.",
      "Keep the flame one simple teardrop.",
      "For the icon version, keep container + diagonal rocket silhouette."
    ],
    svg: "rocket-patch"
  },
  "cat face icon": {
    base: "circle head with triangle ears",
    shapes: ["round head", "two ears", "muzzle circle", "whisker lines", "dot eyes"],
    steps: [
      "Start with a circle head and add two triangle ears.",
      "Add a small muzzle circle or oval before whiskers.",
      "Use 2–3 whisker lines per side at most.",
      "Keep the eyes simple and wide.",
      "For the icon version, keep head + ears + whiskers."
    ],
    svg: "cat-icon"
  },
  "crown badge": {
    base: "shield container with crown silhouette",
    shapes: ["shield", "crown points", "inner gem circle", "bottom banner"],
    steps: [
      "Draw the shield container first so the badge has a clear boundary.",
      "Build the crown with three rounded points.",
      "Add one center gem circle as the only tiny detail.",
      "Use a bottom banner only if it stays readable.",
      "For the icon version, keep shield + crown + gem."
    ],
    svg: "crown-badge"
  },
  "wave emblem": {
    base: "circle seal with curling wave",
    shapes: ["outer circle", "wave curl", "foam dots", "horizon line"],
    steps: [
      "Draw a clean outer circle first.",
      "Inside it, use one strong curling wave shape.",
      "Add only 1–3 foam dots.",
      "Use the wave curve as the main silhouette.",
      "For the icon version, keep circle + wave curl."
    ],
    svg: "wave-emblem"
  }
};

const vibeModifiers = {
  cute: {
    shapes: ["blush dots", "rounded corners"],
    steps: ["Cute pass: round every corner and keep the face low with extra blank space above it."]
  },
  sleepy: {
    shapes: ["sleepy eyelids", "soft tilt"],
    steps: ["Sleepy pass: use curved closed eyes, a tiny lean, and one slow detail like steam, pillow, or moon."]
  },
  silly: {
    shapes: ["asymmetry", "wobbly pose"],
    steps: ["Silly pass: offset one eye, tilt the body, and exaggerate exactly one feature."]
  },
  magical: {
    shapes: ["sparkle accent", "glow halo"],
    steps: ["Magical pass: add one sparkle, crescent, or halo outside the silhouette; do not cover the face zone."]
  },
  bold: {
    shapes: ["thick outer contour", "tiny-size test"],
    steps: ["Bold pass: thicken the outline, delete interior texture, and check it at app-icon size."]
  },
  cozy: {
    shapes: ["warm prop", "soft seam"],
    steps: ["Cozy pass: add one comfort detail such as steam, blanket seam, scarf, or tiny mug-like warmth."]
  },
  spooky: {
    shapes: ["tiny fangs or ghost curve", "moon accent"],
    steps: ["Spooky-cute pass: add one harmless spooky cue — fang, tiny ghost tail, bat bow, or moon — while keeping the silhouette friendly."]
  },
  retro: {
    shapes: ["rubber-hose limbs", "poster shadow"],
    steps: ["Retro pass: use noodle arms, simple gloves/feet, and a chunky offset shadow like an old mascot sticker."]
  },
  kawaii: {
    shapes: ["extra-low face", "sparkly cheeks"],
    steps: ["Kawaii pass: make the body bigger, limbs smaller, cheeks rounder, and the face lower than you think."]
  },
  minimal: {
    shapes: ["one-line detail", "flat fill"],
    steps: ["Minimal pass: reduce the idea to one silhouette, one cutout, and one accent color."]
  },
  sporty: {
    shapes: ["motion slash", "patch border"],
    steps: ["Sporty pass: add a diagonal motion line or patch border; avoid cute texture that weakens the badge."]
  },
  fancy: {
    shapes: ["thin inner border", "small ornament"],
    steps: ["Fancy pass: add one elegant inner border or tiny ornament, then stop before it becomes busy."]
  }
};

const focusModifiers = {
  "simple-shapes": {
    shapes: ["3-shape limit"],
    steps: ["Focus pass: limit the drawing to the base shape, one signature part, and the face."]
  },
  faces: {
    shapes: ["face placement map"],
    steps: ["Focus pass: draw the same subject with three faces: dot-eye cute, sleepy arc, and silly uneven eyes."]
  },
  silhouette: {
    shapes: ["black fill test"],
    steps: ["Focus pass: fill the outside shape black; enlarge the signature feature if the subject disappears."]
  },
  logo: {
    shapes: ["symbol reduction"],
    steps: ["Focus pass: remove the character body if needed and keep the subject as a single logo mark."]
  },
  expression: {
    shapes: ["pose axis"],
    steps: ["Focus pass: draw a center tilt line and make the body angle match the emotion."]
  },
  construction: {
    shapes: ["numbered build order"],
    steps: ["Focus pass: draw the blueprint in order: base primitive, secondary part, face zone, then details."]
  },
  proportion: {
    shapes: ["big-small ratio"],
    steps: ["Focus pass: make the signature feature oversized and the limbs tiny to create beginner-friendly character appeal."]
  },
  texture: {
    shapes: ["texture cluster"],
    steps: ["Focus pass: place texture in one cluster only, leaving the face zone clean."]
  },
  "badge-layout": {
    shapes: ["container + inner mark"],
    steps: ["Focus pass: choose a specific container — seal, shield, ribbon, patch, or stamp — before drawing the inside symbol."]
  },
  "negative-space": {
    shapes: ["cutout shape"],
    steps: ["Focus pass: reserve one blank cutout that still reads when the icon is small."]
  },
  palette: {
    shapes: ["two-color plan"],
    steps: ["Focus pass: assign one color to the base, one to the signature part, and use line only for face/details."]
  },
  variation: {
    shapes: ["3 thumbnails"],
    steps: ["Focus pass: make three thumbnails: round, tall, and badge/icon version before polishing one."]
  }
};

function withBlueprintModifiers(profile, vibe, focus, subject) {
  const copy = {
    ...profile,
    shapes: Array.isArray(profile.shapes) ? [...profile.shapes] : ["base shape", "signature detail", "face zone"],
    steps: Array.isArray(profile.steps) ? [...profile.steps] : [`Block the ${subject} with its biggest simple shape first.`]
  };

  const vibeMod = vibeModifiers[vibe];
  const focusMod = focusModifiers[focus];

  if (vibeMod) {
    copy.shapes.push(...vibeMod.shapes);
    copy.steps.push(...vibeMod.steps);
  }

  if (focusMod) {
    copy.shapes.push(...focusMod.shapes);
    copy.steps.push(...focusMod.steps);
  }

  copy.shapes = [...new Set(copy.shapes)].slice(0, 9);
  copy.steps = [...new Set(copy.steps)].slice(0, 9);
  return copy;
}

function getBlueprintProfile(subject, family, focus, vibe = "cute") {
  const direct = subjectBlueprintExtras[subject] || blueprintProfiles[subject];
  if (direct) return withBlueprintModifiers(direct, vibe, focus, subject);

  if (focus === "badge-layout" || focus === "logo" || family === "icons") {
    const iconProfile = inferIconProfile(subject, focus);
    return withBlueprintModifiers(iconProfile, vibe, focus, subject);
  }


  if (family === "badges") {
    const badgeProfile = inferIconProfile(subject, focus);
    const badgeType = String(subject).toLowerCase();
    if (!badgeProfile.svg || badgeProfile.svg === "logo") {
      badgeProfile.svg = badgeType.includes("ribbon") ? "ribbon-badge" :
        badgeType.includes("shield") || badgeType.includes("crest") || badgeType.includes("patch") ? "shield" :
        badgeType.includes("stamp") || badgeType.includes("seal") ? "smile-stamp" :
        "badge";
    }
    badgeProfile.base = badgeProfile.base || `${subject} container hierarchy with a central symbol`;
    return withBlueprintModifiers(badgeProfile, vibe, focus, subject);
  }

  if (family === "lettering") {
    return withBlueprintModifiers({
      base: `${subject} built from a readable letterform first`,
      shapes: ["main letterform", "counter/open space", "face or symbol zone", "sticker/container edge"],
      steps: [
        `Draw the letter shape for ${subject} before turning it into a character or logo.`,
        "Keep the counter/open spaces readable; do not fill them with tiny decoration.",
        "Put the face, prop, or symbol on the broadest stroke.",
        "Add a border or sticker edge only after the letter still reads.",
        "For the icon version, crop to one strong initial and remove small marks."
      ],
      svg: "logo"
    }, vibe, focus, subject);
  }

  if (family === "mascots") {
    return withBlueprintModifiers({
      base: `${subject} role silhouette plus one story prop`,
      shapes: ["base character body", "role prop", "pose/tilt line", "face zone"],
      steps: [
        `Block the ${subject} as one simple body before costume details.`,
        "Add the one prop that names the role: book, hat, wand, bag, shield, or tool.",
        "Tilt the body or prop to show personality.",
        "Keep the face clear and large enough to read from across the iPad.",
        "For the icon version, keep body + prop + expression only."
      ],
      svg: "bean"
    }, vibe, focus, subject);
  }

  if (family === "nature") {
    return withBlueprintModifiers({
      base: `${subject} organic silhouette with one nature signature`,
      shapes: ["organic outer shape", "leaf/petal/shell mark", "face zone", "texture cluster"],
      steps: [
        `Find the biggest nature silhouette in the ${subject}: leaf, shell, cloud, rock, droplet, or flower.`,
        "Draw that outside shape first with soft uneven edges.",
        "Group texture marks in one area instead of scattering them everywhere.",
        "Place the face where the silhouette has the most empty space.",
        "For the icon version, keep the nature silhouette and one inner vein/dot/stripe."
      ],
      svg: String(subject).includes("cloud") ? "cloud" : String(subject).includes("star") ? "star" : String(subject).includes("leaf") || String(subject).includes("flower") ? "sprout" : "bean"
    }, vibe, focus, subject);
  }

  if (family === "foods") {
    return withBlueprintModifiers({
      base: `${subject} silhouette plus one edible signature detail`,
      shapes: ["main food outline", "signature edible part", "low face zone", "one texture cluster"],
      steps: [
        `Find the biggest recognizable food shape in the ${subject} first.`,
        "Draw the outside silhouette before adding eyes or texture.",
        "Reserve a clean face zone with no seeds, crumbs, or toppings crossing it.",
        "Add only 3–5 texture marks so the drawing stays beginner-friendly.",
        "For the icon version, remove texture until the silhouette still says the food."
      ],
      svg: "food"
    }, vibe, focus, subject);
  }

  if (family === "objects") {
    return withBlueprintModifiers({
      base: `${subject} body plus the one part that names the object`,
      shapes: ["main object body", "signature object part", "face zone", "one story detail"],
      steps: [
        `Block the ${subject} using its largest simple shape.`,
        "Add the one part that makes the object unmistakable: handle, lid, legs, strap, lens, spout, or top.",
        "Put the face on the largest empty surface.",
        "Avoid decorating every edge; choose one story detail.",
        "For the icon version, exaggerate the signature part and simplify everything else."
      ],
      svg: "object"
    }, vibe, focus, subject);
  }

  return withBlueprintModifiers({
    base: `${subject} built from one friendly body shape`,
    shapes: ["main blob", "direction/pose line", "low face", "one personality detail"],
    steps: [
      `Turn the ${subject} into one readable blob or basic shape first.`,
      "Place the face low and leave enough blank space around it.",
      "Use tiny limbs or one prop to make the shape feel alive.",
      "Clean the outside edge so it reads as a character even without color.",
      "For the icon version, keep only the silhouette, face, and one signature detail."
    ],
    svg: "bean"
  }, vibe, focus, subject);
}

function inferIconProfile(subject, focus) {
  const lower = String(subject).toLowerCase();
  if (lower.includes("shield")) {
    return {
      base: "shield container with central symbol",
      shapes: ["shield outline", "inner emblem", "top shine", "bottom point"],
      steps: [
        `Draw the ${subject} as a shield first, not as a circle badge.`,
        "Use the shield point and shoulders as the recognizable container.",
        "Place one central symbol inside the safe middle area.",
        "Keep tiny details away from the pointed bottom.",
        "For the icon version, keep shield + one symbol + one highlight."
      ],
      svg: "shield"
    };
  }
  if (lower.includes("stamp")) {
    return {
      base: "stamp square with perforated edge and central face",
      shapes: ["stamp container", "perforated corners", "central symbol", "thick border"],
      steps: [
        `Build the ${subject} as a stamp, with a chunky square or rounded-square edge.`,
        "Add only a few perforation bumps or corner cuts.",
        "Place the smile/mark in the middle with lots of breathing room.",
        "Use a thick border so it reads tiny.",
        "For the icon version, keep stamp edge + central smile only."
      ],
      svg: "smile-stamp"
    };
  }
  if (lower.includes("badge") || lower.includes("patch")) {
    return {
      base: "specific badge container plus subject symbol",
      shapes: ["outer badge container", "inner ring or patch border", "central subject", "one banner/accent"],
      steps: [
        `Choose the badge type for ${subject}: seal, ribbon, patch, shield, or medal — do not use the same container every time.`,
        "Draw the outer container first; it decides the whole logo personality.",
        "Add the central subject as one simplified silhouette.",
        "Use only one accent: banner, sparkle, ring, ribbon, or motion slash.",
        "For the icon version, test it at tiny size and delete the weakest detail."
      ],
      svg: lower.includes("ribbon") ? "ribbon-badge" : lower.includes("rocket") ? "rocket-patch" : lower.includes("crown") ? "crown-badge" : "badge"
    };
  }
  if (lower.includes("logo") || lower.includes("mark") || lower.includes("emblem")) {
    return {
      base: "brand mark built from a unique container and symbol",
      shapes: ["chosen container", "central silhouette", "negative-space cut", "tiny-size border"],
      steps: [
        `Reduce the ${subject} into one central symbol with a unique container.`,
        "Pick the container from the subject: cup seal, book wings, wave circle, garden leaf, or paint palette.",
        "Create one negative-space gap or simple inner shape.",
        "Remove surface texture and keep only what names the brand.",
        "For the final icon, use two colors plus one optional highlight."
      ],
      svg: lower.includes("coffee") ? "coffee-logo" : lower.includes("book") ? "book-logo" : lower.includes("wave") ? "wave-emblem" : lower.includes("paint") ? "palette-logo" : lower.includes("leaf") || lower.includes("garden") ? "leaf-emblem" : "logo"
    };
  }
  return {
    base: "bold symbol inside a deliberate container",
    shapes: ["container shape", "central symbol", "one accent cutout", "two-color palette"],
    steps: [
      `Reduce the ${subject} into one bold central silhouette.`,
      "Choose a container that matches the subject instead of defaulting to a generic badge.",
      "Remove surface texture and keep only the feature that makes it recognizable.",
      "Test it as a tiny mark: squint or zoom out until details disappear.",
      "For the final icon, use two colors plus one optional highlight."
    ],
    svg: "logo"
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



Object.assign(subjectBlueprintExtras, {
  "rubber stamp": {
    base: "chunky handle plus flat stamp base",
    shapes: ["rounded handle", "flat stamp block", "rubber foot", "face on base"],
    steps: [
      "Draw the handle as a small rounded knob first.",
      "Attach a wide flat rectangle for the stamp base so it reads as a tool.",
      "Add the rubber foot as a darker strip along the bottom.",
      "Place the face on the broad front panel, not the handle.",
      "For the icon version, keep handle + base + bottom strip only."
    ],
    svg: "object"
  },
  "jar of stars": {
    base: "glass jar silhouette with star cluster inside",
    shapes: ["rounded jar body", "lid band", "inner star cluster", "label face zone"],
    steps: [
      "Start with a rounded jar body and a flat lid band.",
      "Keep the jar outline simple before adding the stars.",
      "Group 3 stars inside instead of scattering many tiny marks.",
      "Put the face on a clean label area.",
      "For the icon version, use jar + lid + one large star."
    ],
    svg: "object"
  },
  "sandwich triangle": {
    base: "stacked triangle with filling stripe",
    shapes: ["large triangle", "inner bread layer", "filling stripe", "low face"],
    steps: [
      "Draw one clear triangle first, like a cut sandwich half.",
      "Add a smaller parallel triangle inside for the bread edge.",
      "Use one wavy filling stripe as the signature detail.",
      "Keep the face below the filling so it stays readable.",
      "For the icon version, keep triangle + stripe + dot eyes."
    ],
    svg: "triangle"
  },
  "onigiri": {
    base: "rounded triangle rice body with seaweed patch",
    shapes: ["soft triangle", "seaweed rectangle", "rice edge", "low face"],
    steps: [
      "Start with a rounded triangle, wider at the bottom.",
      "Add a dark seaweed patch centered on the lower front.",
      "Place the face above the seaweed so the food still reads.",
      "Use only a few rice dots along the edge.",
      "For the icon version, keep triangle + seaweed patch."
    ],
    svg: "triangle"
  },
  "popcorn bucket": {
    base: "tapered bucket plus popcorn cloud top",
    shapes: ["tapered bucket", "striped panels", "popcorn bumps", "face zone"],
    steps: [
      "Block the bucket as a tapered rectangle.",
      "Add vertical stripe panels before the face.",
      "Draw the popcorn as 4–5 cloud bumps on top.",
      "Put the face on the clean bucket panel.",
      "For the icon version, keep bucket silhouette + popcorn bumps."
    ],
    svg: "food"
  },
  "oval potato": {
    base: "lumpy oval body with tiny sprout marks",
    shapes: ["uneven oval", "tiny dents", "low face", "one sprout"],
    steps: [
      "Draw an oval, then dent two edges so it is not a perfect egg.",
      "Add only 3 small potato eyes or speckles.",
      "Place the face low and leave empty space around it.",
      "Add one tiny sprout or leg to make it a character.",
      "For the icon version, keep the lumpy oval and one sprout."
    ],
    svg: "bean"
  },
  "soft lightning bolt": {
    base: "rounded zigzag with softened corners",
    shapes: ["zigzag spine", "thick rounded edges", "face zone", "tiny sparks"],
    steps: [
      "Sketch a clear zigzag line first.",
      "Thicken it into a soft lightning shape with rounded corners.",
      "Place the face in the widest middle section.",
      "Add only two tiny spark marks around it.",
      "For the icon version, keep the bold zigzag silhouette."
    ],
    svg: "star"
  },
  "teacup dragon": {
    base: "teacup body with tiny dragon wings and steam horns",
    shapes: ["cup bowl", "C-handle tail", "small wings", "steam horns", "face on cup"],
    steps: [
      "Draw the teacup bowl first so the object stays readable.",
      "Turn the handle into a curled dragon tail.",
      "Add two tiny wings as simple triangles.",
      "Use steam curls as horn shapes above the cup.",
      "For the icon version, keep cup + tail handle + one wing."
    ],
    svg: "mug"
  },
  "toast knight": {
    base: "toast body with shield prop and tiny helmet stripe",
    shapes: ["toast arch", "crust border", "small shield", "helmet band", "low face"],
    steps: [
      "Build the toast arch and inner crust line first.",
      "Add a simple shield shape to one side.",
      "Use one horizontal band as the helmet detail.",
      "Keep the face low inside the toast body.",
      "For the icon version, keep toast + shield."
    ],
    svg: "toast"
  },
  "mushroom librarian": {
    base: "mushroom cap plus book rectangle",
    shapes: ["dome cap", "stem body", "open book", "tiny glasses"],
    steps: [
      "Start with the mushroom cap and stem so the subject reads.",
      "Add an open book as two small rectangles in front.",
      "Place glasses above the book, not too tiny.",
      "Use cap spots sparingly so they do not fight the book.",
      "For the icon version, keep mushroom + book shape."
    ],
    svg: "mushroom"
  },
  "cloud mail carrier": {
    base: "cloud body with envelope prop",
    shapes: ["cloud bumps", "envelope rectangle", "strap line", "face zone"],
    steps: [
      "Draw the cloud silhouette with 4 large bumps.",
      "Add one envelope rectangle as the job prop.",
      "Use a diagonal strap line only if it does not clutter the face.",
      "Place the face in the largest empty cloud bump.",
      "For the icon version, keep cloud + envelope."
    ],
    svg: "cloud"
  },
  "sports pennant": {
    base: "long triangle flag with bold border",
    shapes: ["pennant triangle", "border stripe", "single symbol", "motion tail"],
    steps: [
      "Draw a long horizontal triangle like a team pennant.",
      "Add a thick border stripe following the edge.",
      "Put one large symbol in the wide end.",
      "Use a small motion tail or notch only if the shape stays clear.",
      "For the icon version, remove all tiny text."
    ],
    svg: "triangle"
  },
  "merit badge": {
    base: "scalloped seal with one center symbol",
    shapes: ["scallop edge", "inner circle", "center symbol", "small ribbon"],
    steps: [
      "Start with the outer scalloped seal.",
      "Add a simpler inner circle to create hierarchy.",
      "Place one center symbol, not multiple tiny symbols.",
      "Attach a small ribbon only after the center reads.",
      "For the icon version, keep scallop + center symbol."
    ],
    svg: "badge"
  },
  "campfire patch": {
    base: "shield patch with flame and log base",
    shapes: ["patch shield", "flame teardrop", "two logs", "border"],
    steps: [
      "Draw a shield or rounded patch container first.",
      "Build the flame from one large teardrop and one smaller inner teardrop.",
      "Add two crossed logs under the flame.",
      "Keep the border simple so the flame stays dominant.",
      "For the icon version, keep patch + flame only."
    ],
    svg: "shield"
  },
  "letter A character": {
    base: "capital A as body with crossbar face zone",
    shapes: ["A silhouette", "crossbar", "two leg strokes", "tiny arms"],
    steps: [
      "Draw a bold capital A before adding any face.",
      "Use the crossbar as a natural face or mouth zone.",
      "Keep the two leg strokes readable as the letterform.",
      "Add tiny arms outside the letter, not inside the counter.",
      "For the icon version, keep the A and one facial expression."
    ],
    svg: "logo"
  },
  "bubble word mark": {
    base: "rounded word silhouette with sticker border",
    shapes: ["bubble letters", "shared baseline", "outer sticker edge", "one sparkle"],
    steps: [
      "Sketch the word as one soft blob silhouette first.",
      "Make every letter rounded and similarly weighted.",
      "Add the sticker border after the letters are readable.",
      "Use one sparkle or underline as the only decoration.",
      "For the icon version, crop to the strongest initial."
    ],
    svg: "logo"
  }
});


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
  const learningPath = $("#learningPath")?.value || "guided-session";
  const allFamilies = Object.keys(subjects);
  const familyKey = family === "mixed" ? randomItem(allFamilies) : family;
  const selectedSubject = $("#subjectChoice")?.value || "random";
  const subject = selectedSubject !== "random" && subjects[familyKey]?.includes(selectedSubject)
    ? selectedSubject
    : randomItem(subjects[familyKey]);
  const personality = randomItem(personalities[vibe]);
  const kit = shapeKits[focus];
  const difficultyData = difficultyMap[difficulty];

  const title = `${capitalize(personality)} ${subject}`;
  const iconMode = focus === "logo" || ["icons", "badges", "lettering"].includes(familyKey) || ["badge-layout", "negative-space", "container-hierarchy", "small-size-readability", "logo-family"].includes(focus);
  const blueprint = getBlueprintProfile(subject, familyKey, focus, vibe);
  const learning = buildLearningPlan({ subject, family: familyKey, vibe, focus, difficulty, blueprint, iconMode, personality, learningPath });

  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    title,
    subject,
    family: familyKey,
    vibe,
    focus,
    learningPath,
    difficulty,
    difficultyLabel: difficultyData.label,
    minutes: difficultyData.minutes,
    blueprint,
    learning,
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


function buildLearningPlan({ subject, family, vibe, focus, difficulty, blueprint, iconMode, personality, learningPath }) {
  const path = learningPaths[learningPath] || learningPaths["guided-session"];
  const subjectName = subject || "drawing seed";
  const mainShape = blueprint?.base || "one clear base shape";
  const signature = Array.isArray(blueprint?.shapes) && blueprint.shapes.length ? blueprint.shapes[0] : "silhouette";

  const categoryWhy = {
    foods: `Food mascots read best when the food silhouette stays clear before the face is added. ${capitalize(subjectName)} should still read as food even if the eyes are hidden.`,
    objects: `Object characters work when the useful object parts stay recognizable. For ${subjectName}, protect the signature part before decorating.`,
    shapes: `Shape characters teach control because the whole personality comes from proportion, face placement, tilt, and one tiny detail.`,
    icons: `Icons need one dominant symbol, one container decision, and details that survive at tiny size.`,
    badges: `Badges are not one shape: seals, shields, patches, ribbons, and stamps each need different hierarchy and border logic.`,
    mascots: `Mascots work when the role is visible in the pose, prop, and silhouette before costume details are added.`,
    nature: `Nature drawings read best when the organic silhouette stays simple and the texture marks are grouped, not sprinkled everywhere.`,
    lettering: `Lettering marks need the letterform to stay readable while the face, prop, or decoration stays secondary.`,
    gym: `Warmups build mileage. The goal is speed, observation, and iteration rather than a polished final image.`
  };

  const focusWhy = {
    "simple-shapes": "You are training your eye to see every character as 1–3 big pieces before details.",
    faces: "Face placement changes emotion more than extra details do; low faces usually feel cuter and softer.",
    silhouette: "A strong outline makes the drawing readable before color, texture, or expression.",
    logo: "Logo simplification teaches you to remove details until only the clearest symbol remains.",
    expression: "Expression practice teaches how pose, tilt, eyes, and mouth can change a character without redesigning it.",
    construction: "Construction practice teaches the drawing order, so you can rebuild the subject from memory later.",
    proportion: "Proportion practice teaches what to exaggerate: tiny limbs, oversized signature parts, low face zones.",
    texture: "Texture should support the subject, not bury the face or silhouette.",
    "badge-layout": "Badge layout teaches container hierarchy: border first, symbol second, words/details last.",
    "negative-space": "Negative space makes a logo smarter by letting the background become part of the symbol.",
    palette: "A limited palette makes the design clearer and easier to finish.",
    variation: "Variation practice teaches flexibility: one subject can become a mascot, icon, badge, or sticker.",
    "memory-mode": "Memory mode builds construction understanding by forcing you to redraw the subject without staring at the guide.",
    "redraw-ladder": "Redraw ladders teach improvement by changing one thing at a time instead of restarting randomly.",
    "procreate-layers": "Layer planning keeps the Procreate file clean and prevents details from locking you into a weak sketch.",
    critique: "Self-critique teaches you what to look for after drawing: silhouette, clarity, expression, and tiny-size readability.",
    "shape-vocabulary": "Shape vocabulary helps you reuse forms across characters, foods, objects, icons, and badges."
  };

  const commonMistakes = {
    foods: `Adding seeds, sprinkles, crumbs, or toppings before the ${signature} reads clearly.`,
    objects: `Turning the object into a generic blob by hiding the useful part that makes it a ${subjectName}.`,
    shapes: `Using the same bean every time instead of changing height, tilt, corners, or weight.`,
    icons: "Decorating the border so much that the central symbol becomes weak.",
    gym: "Trying to make the warmup perfect instead of making many quick attempts."
  };

  const fixAdvice = {
    foods: "Hide the face for a second. If the food is not recognizable, redraw the outer shape bigger and simpler.",
    objects: "Circle the signature object part and make it 20% larger before adding expression.",
    shapes: "Make three versions: one taller, one wider, and one tilted. Pick the clearest.",
    icons: "Shrink the sketch to thumbnail size. Delete every detail that turns muddy.",
    gym: "Set a short timer. Quantity first, polish later."
  };

  const warmup = buildWarmup(subjectName, family, focus, blueprint);
  const variations = buildVariations(subjectName, family, vibe, focus, iconMode, blueprint);
  const layers = buildProcreateLayers(subjectName, family, focus, blueprint);
  const checkpoints = buildCheckpoints(family, focus, iconMode);
  const nextExercise = buildNextExercise(family, focus, subjectName);

  return {
    pathKey: learningPath,
    pathLabel: path.label,
    pathGoal: path.goal,
    pathSequence: path.sequence,
    warmup,
    why: [
      categoryWhy[family] || categoryWhy.shapes,
      focusWhy[focus] || "Practice one clear skill at a time so the drawing teaches you something specific."
    ],
    mistake: commonMistakes[family] || commonMistakes.shapes,
    fix: fixAdvice[family] || fixAdvice.shapes,
    variations,
    layers,
    checkpoints,
    nextExercise
  };
}

function buildWarmup(subject, family, focus, blueprint) {
  const shape = blueprint?.shapes?.[0] || "base shape";
  const warmups = [
    `Draw 8 tiny versions of the ${shape} without details.`,
    `Circle the 2 clearest silhouettes and redraw them slightly larger.`,
    `Add only face placement dots to 3 versions: high, middle, and low.`,
    family === "icons"
      ? "Put the clearest version inside 3 containers: circle, shield, and squircle."
      : `Add one subject detail that proves it is a ${subject}, then stop.`
  ];

  if (focus === "memory-mode") {
    warmups.push("Study the blueprint for 30 seconds, hide it, then redraw the construction from memory.");
  }
  if (focus === "redraw-ladder") {
    warmups.push("Label the first sketch 'version 1' so you expect to improve it instead of perfecting it.");
  }
  return warmups;
}

function buildVariations(subject, family, vibe, focus, iconMode, blueprint) {
  const subjectBase = blueprint?.base || "simple base shape";
  return [
    {
      title: "Character version",
      instruction: `Draw the ${subject} as a ${vibe} character. Keep ${subjectBase}, then add face, gesture, and one prop.`
    },
    {
      title: "Icon version",
      instruction: `Reduce the ${subject} to 2–3 shapes. Remove texture unless it is essential to recognition.`
    },
    {
      title: family === "icons" || iconMode ? "Badge variation" : "Sticker variation",
      instruction: family === "icons" || iconMode
        ? `Place the symbol inside a distinct container and make the border support, not overpower, the subject.`
        : `Add a sticker edge or small shadow, but keep the silhouette readable when tiny.`
    }
  ];
}

function buildProcreateLayers(subject, family, focus, blueprint) {
  const base = blueprint?.base || "base shape";
  const layers = [
    `Layer 1 — Construction: block in ${base} with a light sketch color.`,
    "Layer 2 — Clean sketch: redraw only the clearest outer silhouette and face zone.",
    "Layer 3 — Flats: add 2–4 flat colors before texture.",
    family === "icons"
      ? "Layer 4 — Symbol test: duplicate, shrink it, and remove muddy inner details."
      : "Layer 4 — Texture/prop: add only the details that explain the subject.",
    "Layer 5 — Final check: make a tiny copy in the corner to test readability."
  ];

  if (focus === "procreate-layers") {
    layers.splice(2, 0, "Layer 2.5 — Variation sketch: duplicate the clean sketch and try a rounder or taller version.");
  }
  return layers;
}

function buildCheckpoints(family, focus, iconMode) {
  const checks = [
    "Silhouette: can I recognize the subject with the face hidden?",
    "Shape clarity: did I use 1–3 main shapes before details?",
    "Expression: does the face/pose match the chosen vibe?",
    iconMode || family === "icons"
      ? "Small-size test: does it still read as a logo or badge when tiny?"
      : "Sticker test: does it still feel cute when drawn small?",
    "Iteration: did I redraw one version instead of stopping at the first try?"
  ];

  if (focus === "negative-space") checks.push("Negative space: is one gap or cutout doing useful visual work?");
  if (focus === "palette") checks.push("Palette: can the design work with only two colors and one accent?");
  return checks;
}

function buildNextExercise(family, focus, subject) {
  if (focus === "silhouette") return `Next: draw ${subject} five times as black silhouettes only, then choose the clearest one.`;
  if (focus === "logo" || family === "icons") return `Next: make a no-face symbol version of ${subject}, then place it in a circle, shield, and squircle.`;
  if (focus === "faces") return `Next: keep the same ${subject} body and test dot eyes, sleepy eyes, and excited eyes.`;
  if (focus === "texture") return `Next: add texture in only three marks, then compare it to a no-texture version.`;
  if (focus === "memory-mode") return `Next: close the blueprint, redraw ${subject} from memory, then correct only the biggest shape.`;
  if (focus === "redraw-ladder") return `Next: redraw ${subject} once for silhouette, once for expression, and once as an icon.`;
  return `Next: redraw ${subject} three ways: cuter, simpler, and weirder.`;
}

function renderLearningList(title, items, className = "") {
  if (!Array.isArray(items) || !items.length) return "";
  return `
    <div class="learning-block ${className}">
      <h4>${escapeHTML(title)}</h4>
      <ul class="step-list">
        ${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
      </ul>
    </div>
  `;
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


function populateSubjectChoices() {
  const familySelect = $("#subjectFamily");
  const subjectSelect = $("#subjectChoice");
  if (!familySelect || !subjectSelect) return;

  const family = familySelect.value;
  const families = family === "mixed" ? Object.keys(subjects) : [family];
  const options = families.flatMap(key => subjects[key] || []);
  const current = subjectSelect.value;

  subjectSelect.innerHTML = `<option value="random">Random from ${family === "mixed" ? "all families" : family}</option>` +
    options.map(subject => `<option value="${escapeHTML(subject)}">${escapeHTML(capitalize(subject))}</option>`).join("");

  if (options.includes(current)) subjectSelect.value = current;
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
    state.currentMission.blueprint = getBlueprintProfile(state.currentMission.subject, state.currentMission.family, state.currentMission.focus, state.currentMission.vibe);
    state.currentMission.steps = buildSteps(
      state.currentMission.subject,
      randomItem(personalities[state.currentMission.vibe] || personalities.cute),
      state.currentMission.focus,
      state.currentMission.focus === "logo" || state.currentMission.family === "icons",
      state.currentMission.blueprint
    );
  }
  if (!state.currentMission.learning) {
    const fallbackIconMode = state.currentMission.focus === "logo" || state.currentMission.family === "icons";
    state.currentMission.learning = buildLearningPlan({
      subject: state.currentMission.subject,
      family: state.currentMission.family,
      vibe: state.currentMission.vibe,
      focus: state.currentMission.focus,
      difficulty: state.currentMission.difficulty,
      blueprint: state.currentMission.blueprint,
      iconMode: fallbackIconMode,
      personality: state.currentMission.vibe,
      learningPath: state.currentMission.learningPath || "guided-session"
    });
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

    <div class="learning-dashboard">
      <section class="learning-callout">
        <h4>${escapeHTML(mission.learning.pathLabel || "Guided session")}</h4>
        <p>${escapeHTML(mission.learning.pathGoal || "Practice one drawing skill at a time.")}</p>
      </section>

      ${renderLearningList("2-minute warmup", mission.learning.warmup)}

      <div class="learning-block">
        <h4>Draw this three ways</h4>
        <div class="variation-grid">
          ${mission.learning.variations.map(variation => `
            <article class="variation-card">
              <strong>${escapeHTML(variation.title)}</strong>
              <p>${escapeHTML(variation.instruction)}</p>
            </article>
          `).join("")}
        </div>
      </div>

      ${renderLearningList("Why this works", mission.learning.why, "why-block")}
      <div class="learning-block mistake-block">
        <h4>Common beginner mistake</h4>
        <p><strong>Watch out:</strong> ${escapeHTML(mission.learning.mistake)}</p>
        <p><strong>Fix:</strong> ${escapeHTML(mission.learning.fix)}</p>
      </div>
      ${renderLearningList("Procreate layer plan", mission.learning.layers)}
      ${renderLearningList("Self-check after drawing", mission.learning.checkpoints)}
      <div class="learning-block next-block">
        <h4>Next best exercise</h4>
        <p>${escapeHTML(mission.learning.nextExercise)}</p>
      </div>
    </div>
  `;

  renderBlueprintSteps();
  state.timer.secondsLeft = mission.minutes * 60;
  updateTimerText();
}

function renderBlueprintSteps() {
  const mission = state.currentMission;
  const steps = Array.isArray(mission?.steps) ? mission.steps : [];
  const profile = mission?.blueprint || getBlueprintProfile("bean blob", "shapes", "simple-shapes");
  const subject = mission?.subject || "bean blob";
  const vibe = mission?.vibe || "cute";
  const diagram = $("#blueprintDiagram");

  try {
    if (window.ShapeSproutBlueprint && typeof window.ShapeSproutBlueprint.render === "function") {
      window.ShapeSproutBlueprint.render(diagram, { profile, subject, personality: vibe });
    } else {
      diagram.innerHTML = blueprintSVG(profile, subject, vibe);
    }
  } catch (error) {
    console.warn("Blueprint renderer failed:", error);
    diagram.innerHTML = `
      <div class="blueprint-fallback" role="status">
        <h3>Blueprint fallback</h3>
        <p>This drawing still has a usable shape recipe. Try refreshing after the updated service worker activates.</p>
      </div>
    `;
  }

  $("#blueprintBase").textContent = profile.base || "simple shape construction";
  $("#blueprintShapes").innerHTML = (Array.isArray(profile.shapes) ? profile.shapes : ["base shape", "face zone", "one prop"])
    .map(shape => `<span>${escapeHTML(shape)}</span>`)
    .join("");
  $("#blueprintSteps").innerHTML = steps.length
    ? steps.map(step => `<li>${escapeHTML(step)}</li>`).join("")
    : `<li>Start with the biggest subject shape, place the face low, then add one readable prop or texture.</li>`;

  const coach = $("#learningCoach");
  if (coach && mission?.learning) {
    const renderList = items => Array.isArray(items) ? items.map(item => `<li>${escapeHTML(item)}</li>`).join("") : "";
    coach.innerHTML = `
      <h3>Learning coach · ${escapeHTML(mission.learning.pathLabel || "Guided session")}</h3>
      <p class="coach-goal">${escapeHTML(mission.learning.pathGoal || "Practice one clear drawing skill.")}</p>
      <div class="coach-grid coach-grid-expanded">
        <article>
          <h4>2-minute warmup</h4>
          <ol>${renderList(mission.learning.warmup)}</ol>
        </article>
        <article>
          <h4>Why this works</h4>
          <ul>${renderList(mission.learning.why)}</ul>
        </article>
        <article>
          <h4>Common mistake + fix</h4>
          <p><strong>Watch out:</strong> ${escapeHTML(mission.learning.mistake || "Do not add detail before the silhouette reads.")}</p>
          <p><strong>Fix:</strong> ${escapeHTML(mission.learning.fix || "Simplify the outside shape first.")}</p>
        </article>
        <article>
          <h4>Draw this three ways</h4>
          <ul>${renderList(mission.learning.variations)}</ul>
        </article>
        <article>
          <h4>Procreate layer plan</h4>
          <ol>${renderList(mission.learning.layers)}</ol>
        </article>
        <article>
          <h4>Self-check</h4>
          <ul>${renderList(mission.learning.checkpoints)}</ul>
          <p><strong>Next:</strong> ${escapeHTML(mission.learning.nextExercise || "Redraw it once with a clearer silhouette.")}</p>
        </article>
      </div>
    `;
  }
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
    ...mission.steps.map((step, index) => `${index + 1}. ${step}`),
    "",
    "Warmup:",
    ...(mission.learning?.warmup || []).map(step => `- ${step}`),
    "",
    "Draw this three ways:",
    ...(mission.learning?.variations || []).map(item => `- ${item.title}: ${item.instruction}`),
    "",
    "Why this works:",
    ...(mission.learning?.why || []).map(item => `- ${item}`),
    "",
    "Common mistake:",
    `- ${mission.learning?.mistake || "Adding details before the silhouette reads."}`,
    `- Fix: ${mission.learning?.fix || "Simplify the biggest shape first."}`,
    "",
    "Procreate layers:",
    ...(mission.learning?.layers || []).map(step => `- ${step}`),
    "",
    "Self-check:",
    ...(mission.learning?.checkpoints || []).map(step => `- ${step}`)
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
  state.currentMission.blueprint = getBlueprintProfile("bean blob", "shapes", "simple-shapes", "cute");
  state.currentMission.learning = buildLearningPlan({
    subject: "practice drill",
    family: "gym",
    vibe: "practice",
    focus: "simple-shapes",
    difficulty: "seedling",
    blueprint: state.currentMission.blueprint,
    iconMode: false,
    personality: "practice",
    learningPath: "daily-practice"
  });
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

  $("#subjectFamily").addEventListener("change", () => {
    populateSubjectChoices();
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
  populateSubjectChoices();
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
