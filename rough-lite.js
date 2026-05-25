/* ShapeSprout rough-lite blueprint renderer
   Local, dependency-free SVG sketch renderer for ShapeSprout Studio.
   It avoids external APIs and avoids innerHTML-based SVG construction so
   blueprint diagrams do not render blank when subject recipes change.
*/
(function () {
  "use strict";

  const SVG_NS = "http://www.w3.org/2000/svg";
  const palette = {
    ink: "#2D2422",
    blue: "#4F778F",
    coral: "#FF8E72",
    peach: "#FFB299",
    sage: "#8EAC8E",
    sageDark: "#536F4F",
    butter: "#FFD97D",
    lavender: "#B6B4E9",
    cream: "#FFFAF2",
    paper: "#F3FBFF"
  };

  function el(name, attrs = {}, parent) {
    const node = document.createElementNS(SVG_NS, name);
    Object.entries(attrs).forEach(([key, value]) => {
      if (value !== undefined && value !== null) node.setAttribute(key, String(value));
    });
    if (parent) parent.appendChild(node);
    return node;
  }

  function text(svg, x, y, content, options = {}) {
    const node = el("text", {
      x, y,
      class: options.class || "svg-label",
      fill: options.fill || palette.blue,
      "font-size": options.size || 15,
      "font-weight": options.weight || 800,
      "font-family": 'ui-rounded, "SF Pro Rounded", system-ui, sans-serif',
      "letter-spacing": options.letterSpacing || ".04em"
    }, svg);
    node.textContent = content;
    return node;
  }

  function path(svg, d, attrs = {}) {
    return el("path", {
      d,
      fill: attrs.fill || "none",
      stroke: attrs.stroke || palette.blue,
      "stroke-width": attrs.strokeWidth || 4,
      "stroke-linecap": attrs.linecap || "round",
      "stroke-linejoin": attrs.linejoin || "round",
      "stroke-dasharray": attrs.dash || undefined,
      opacity: attrs.opacity || 1
    }, svg);
  }

  function line(svg, x1, y1, x2, y2, attrs = {}) {
    return el("line", {
      x1, y1, x2, y2,
      stroke: attrs.stroke || palette.blue,
      "stroke-width": attrs.strokeWidth || 4,
      "stroke-linecap": "round",
      "stroke-dasharray": attrs.dash || undefined,
      opacity: attrs.opacity || 1
    }, svg);
  }

  function rect(svg, x, y, width, height, rx, attrs = {}) {
    return el("rect", {
      x, y, width, height, rx,
      fill: attrs.fill || "none",
      stroke: attrs.stroke || palette.blue,
      "stroke-width": attrs.strokeWidth || 4,
      "stroke-dasharray": attrs.dash || undefined,
      opacity: attrs.opacity || 1
    }, svg);
  }

  function circle(svg, cx, cy, r, attrs = {}) {
    return el("circle", {
      cx, cy, r,
      fill: attrs.fill || "none",
      stroke: attrs.stroke || undefined,
      "stroke-width": attrs.strokeWidth || undefined,
      "stroke-dasharray": attrs.dash || undefined,
      opacity: attrs.opacity || 1
    }, svg);
  }

  function ellipse(svg, cx, cy, rx, ry, attrs = {}) {
    return el("ellipse", {
      cx, cy, rx, ry,
      fill: attrs.fill || "none",
      stroke: attrs.stroke || undefined,
      "stroke-width": attrs.strokeWidth || undefined,
      "stroke-dasharray": attrs.dash || undefined,
      opacity: attrs.opacity || 1
    }, svg);
  }

  function sketchPath(svg, d, attrs = {}) {
    path(svg, d, { ...attrs, opacity: attrs.opacity || 0.95 });
    path(svg, d, {
      ...attrs,
      strokeWidth: Math.max(1, (attrs.strokeWidth || 4) * 0.55),
      opacity: 0.34
    }).setAttribute("transform", "translate(2 -1)");
  }

  function face(svg, cx = 210, cy = 178) {
    circle(svg, cx - 22, cy, 8, { fill: palette.ink });
    circle(svg, cx + 22, cy, 8, { fill: palette.ink });
    circle(svg, cx - 19, cy - 3, 2, { fill: "#FFFFFF" });
    circle(svg, cx + 25, cy - 3, 2, { fill: "#FFFFFF" });
    path(svg, `M${cx - 10} ${cy + 22} Q${cx} ${cy + 31} ${cx + 12} ${cy + 22}`, {
      stroke: palette.ink,
      strokeWidth: 5
    });
    circle(svg, cx - 44, cy + 20, 7, { fill: "rgba(255,142,114,.35)" });
    circle(svg, cx + 46, cy + 20, 7, { fill: "rgba(255,142,114,.35)" });
  }

  function blueprintBackground(svg) {
    el("defs", {}, svg).innerHTML = `
      <pattern id="sprout-grid" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(79,119,145,.16)" stroke-width="1"/>
      </pattern>`;
    rect(svg, 0, 0, 420, 340, 28, { fill: "url(#sprout-grid)", stroke: "rgba(79,119,145,.18)", strokeWidth: 1 });
    circle(svg, 210, 176, 112, { fill: "none", stroke: "rgba(79,119,145,.18)", strokeWidth: 2, dash: "7 10" });
    line(svg, 54, 176, 366, 176, { stroke: "rgba(79,119,145,.18)", strokeWidth: 2, dash: "6 8" });
    line(svg, 210, 60, 210, 288, { stroke: "rgba(79,119,145,.18)", strokeWidth: 2, dash: "6 8" });
  }

  function strawberry(svg) {
    sketchPath(svg, "M210 94 C286 104 316 182 253 266 C232 296 190 296 168 266 C106 182 134 104 210 94Z", { fill: "rgba(255,142,114,.34)", dash: "8 8" });
    sketchPath(svg, "M164 105 L185 70 L208 102 L232 70 L254 106", { fill: "rgba(142,172,142,.35)", stroke: palette.sageDark });
    face(svg, 206, 176);
    [ [165,150], [256,150], [184,220], [238,224], [210,246] ].forEach(([x,y]) => circle(svg, x, y, 4, { fill: palette.coral }));
  }

  function toast(svg) {
    sketchPath(svg, "M132 268 L132 142 C132 94 170 70 210 70 C250 70 288 94 288 142 L288 268Z", { fill: "rgba(255,217,125,.35)", dash: "8 8" });
    sketchPath(svg, "M158 252 L158 148 C158 116 182 100 210 100 C238 100 262 116 262 148 L262 252Z", { stroke: palette.coral, strokeWidth: 5 });
    rect(svg, 230, 116, 34, 28, 8, { fill: "rgba(255,217,125,.8)", stroke: palette.blue, strokeWidth: 3 });
    face(svg, 210, 184);
  }

  function boba(svg) {
    sketchPath(svg, "M136 108 L284 108 L262 272 L158 272Z", { fill: "rgba(182,180,233,.26)", dash: "8 8" });
    ellipse(svg, 210, 108, 86, 24, { fill: "rgba(255,250,242,.7)", stroke: palette.blue, strokeWidth: 4 });
    line(svg, 245, 88, 292, 42, { stroke: palette.coral, strokeWidth: 10 });
    face(svg, 210, 174);
    [178,214,250].forEach((x,i) => circle(svg, x, 248 + (i===1 ? 4 : -2), 12, { fill: palette.ink }));
  }

  function mug(svg) {
    rect(svg, 132, 112, 134, 150, 30, { fill: "rgba(142,172,142,.28)", dash: "8 8" });
    sketchPath(svg, "M262 148 C330 132 330 244 262 226", { strokeWidth: 18 });
    path(svg, "M166 80 C146 58 188 56 170 36 M216 82 C198 58 240 58 222 36", { stroke: palette.coral, strokeWidth: 5 });
    face(svg, 198, 174);
  }

  function pencil(svg) {
    sketchPath(svg, "M96 214 L260 86 L302 128 L138 256Z", { fill: "rgba(255,217,125,.5)", dash: "8 8" });
    sketchPath(svg, "M260 86 L322 66 L302 128Z", { fill: "rgba(255,178,153,.45)" });
    sketchPath(svg, "M306 72 L322 66 L316 84Z", { fill: palette.ink, stroke: palette.ink });
    circle(svg, 182, 177, 8, { fill: palette.ink });
    circle(svg, 213, 153, 8, { fill: palette.ink });
    path(svg, "M192 195 Q210 198 222 178", { stroke: palette.ink, strokeWidth: 5 });
  }

  function lamp(svg) {
    sketchPath(svg, "M144 104 L276 104 L250 176 L170 176Z", { fill: "rgba(255,217,125,.42)", dash: "8 8" });
    line(svg, 210, 176, 210, 256, { strokeWidth: 8 });
    ellipse(svg, 210, 268, 64, 16, { fill: "rgba(142,172,142,.28)", stroke: palette.blue, strokeWidth: 4 });
    face(svg, 208, 136);
  }

  function chair(svg) {
    rect(svg, 152, 80, 116, 118, 22, { fill: "rgba(142,172,142,.28)", dash: "8 8" });
    sketchPath(svg, "M126 198 L294 198 L270 238 L150 238Z", { fill: "rgba(255,178,153,.3)" });
    line(svg, 154, 238, 136, 284, { strokeWidth: 7 });
    line(svg, 266, 238, 286, 284, { strokeWidth: 7 });
    face(svg, 210, 158);
  }

  function mushroom(svg) {
    sketchPath(svg, "M112 150 C130 78 290 78 308 150 C278 178 142 178 112 150Z", { fill: "rgba(255,142,114,.34)", dash: "8 8" });
    sketchPath(svg, "M174 154 C170 198 158 248 210 256 C262 248 250 198 246 154Z", { fill: "rgba(255,250,242,.78)" });
    circle(svg, 164, 126, 14, { fill: "rgba(255,250,242,.8)" });
    circle(svg, 246, 124, 16, { fill: "rgba(255,250,242,.8)" });
    face(svg, 210, 202);
  }

  function cupcake(svg) {
    sketchPath(svg, "M144 174 C156 116 188 132 202 96 C230 132 266 116 276 174Z", { fill: "rgba(255,178,153,.36)", dash: "8 8" });
    sketchPath(svg, "M152 176 L268 176 L248 270 L172 270Z", { fill: "rgba(255,217,125,.34)" });
    circle(svg, 210, 82, 13, { fill: palette.coral });
    face(svg, 210, 210);
  }

  function cloud(svg) {
    sketchPath(svg, "M120 204 C90 166 132 124 172 142 C190 96 260 102 272 150 C318 144 340 204 300 232 L142 232 C128 232 118 220 120 204Z", { fill: "rgba(255,250,242,.78)", dash: "8 8" });
    path(svg, "M178 184 Q190 174 202 184 M222 184 Q234 174 246 184", { stroke: palette.ink, strokeWidth: 5 });
    path(svg, "M204 206 Q212 214 222 206", { stroke: palette.ink, strokeWidth: 5 });
  }

  function circleCreature(svg) {
    circle(svg, 210, 176, 92, { fill: "rgba(255,217,125,.34)", stroke: palette.blue, strokeWidth: 4, dash: "8 8" });
    face(svg, 210, 176);
    ellipse(svg, 168, 276, 18, 10, { fill: "rgba(142,172,142,.35)", stroke: palette.blue, strokeWidth: 3 });
    ellipse(svg, 252, 276, 18, 10, { fill: "rgba(142,172,142,.35)", stroke: palette.blue, strokeWidth: 3 });
  }

  function triangle(svg) {
    sketchPath(svg, "M210 70 L312 260 L108 260Z", { fill: "rgba(255,217,125,.34)", dash: "8 8" });
    face(svg, 210, 192);
  }

  function star(svg) {
    sketchPath(svg, "M210 58 L238 136 L320 138 L256 188 L278 268 L210 220 L142 268 L164 188 L100 138 L182 136Z", { fill: "rgba(255,217,125,.38)", dash: "8 8" });
    face(svg, 210, 176);
  }

  function sun(svg) {
    circle(svg, 210, 176, 70, { fill: "rgba(255,217,125,.44)", stroke: palette.blue, strokeWidth: 4, dash: "8 8" });
    [[210,72,210,42],[210,310,210,280],[106,176,76,176],[344,176,314,176],[136,102,116,82],[284,250,304,270],[284,102,304,82],[136,250,116,270]]
      .forEach(([x1,y1,x2,y2]) => line(svg, x1, y1, x2, y2, { stroke: palette.coral, strokeWidth: 8 }));
    face(svg, 210, 176);
  }

  function sprout(svg) {
    rect(svg, 126, 78, 168, 168, 42, { fill: "rgba(255,250,242,.5)", dash: "8 8" });
    line(svg, 210, 230, 210, 108, { stroke: palette.sageDark, strokeWidth: 9 });
    sketchPath(svg, "M210 126 C166 84 134 112 160 148 C188 164 206 144 210 126Z", { fill: "rgba(142,172,142,.45)", stroke: palette.sageDark });
    sketchPath(svg, "M210 126 C254 84 286 112 260 148 C232 164 214 144 210 126Z", { fill: "rgba(142,172,142,.45)", stroke: palette.sageDark });
    face(svg, 210, 196);
  }

  function moon(svg) {
    rect(svg, 118, 68, 184, 184, 48, { fill: "rgba(182,180,233,.2)", dash: "8 8" });
    sketchPath(svg, "M228 100 C176 116 156 184 196 226 C158 218 132 184 138 146 C144 108 182 82 228 100Z", { fill: "rgba(255,217,125,.55)" });
    sketchPath(svg, "M282 110 L290 128 L308 136 L290 144 L282 162 L274 144 L256 136 L274 128Z", { fill: palette.peach });
  }

  function logo(svg) {
    rect(svg, 126, 74, 168, 168, 48, { fill: "rgba(182,180,233,.22)", dash: "8 8" });
    circle(svg, 210, 158, 50, { fill: "rgba(255,217,125,.35)", stroke: palette.blue, strokeWidth: 4 });
    sketchPath(svg, "M190 176 L210 112 L232 176Z", { fill: "rgba(255,142,114,.36)" });
    text(svg, 142, 270, "simplify to 1 symbol", { size: 13 });
  }

  function food(svg) {
    sketchPath(svg, "M116 186 C130 102 282 96 306 184 C310 238 262 274 210 274 C156 274 110 238 116 186Z", { fill: "rgba(255,178,153,.3)", dash: "8 8" });
    path(svg, "M164 106 C180 72 240 72 256 106", { stroke: palette.sageDark, strokeWidth: 7 });
    face(svg, 210, 184);
    circle(svg, 162, 218, 5, { fill: palette.coral });
    circle(svg, 260, 218, 5, { fill: palette.coral });
  }

  function object(svg) {
    rect(svg, 134, 106, 152, 152, 34, { fill: "rgba(142,172,142,.28)", dash: "8 8" });
    sketchPath(svg, "M286 154 C336 144 336 222 286 214", { strokeWidth: 12 });
    sketchPath(svg, "M164 104 L186 72 L208 104", { stroke: palette.butter, strokeWidth: 7 });
    face(svg, 210, 180);
  }

  function bean(svg) {
    sketchPath(svg, "M122 184 C112 94 210 62 264 116 C334 188 274 292 180 268 C136 256 126 222 122 184Z", { fill: "rgba(142,172,142,.32)", dash: "8 8" });
    face(svg, 210, 180);
    path(svg, "M138 218 Q96 214 108 178 M282 198 Q326 190 310 156", { stroke: palette.blue, strokeWidth: 7 });
  }


  function shield(svg) {
    sketchPath(svg, "M210 58 C250 86 286 90 306 92 L292 196 C284 250 246 284 210 304 C174 284 136 250 128 196 L114 92 C154 90 170 86 210 58Z", { fill: "rgba(182,180,233,.24)", dash: "8 8" });
    sketchPath(svg, "M210 112 L230 154 L276 158 L240 186 L252 232 L210 206 L168 232 L180 186 L144 158 L190 154Z", { fill: "rgba(255,217,125,.38)", stroke: palette.coral, strokeWidth: 4 });
    text(svg, 154, 284, "shield ≠ badge", { size: 13 });
  }

  function smileStamp(svg) {
    rect(svg, 118, 78, 184, 184, 24, { fill: "rgba(255,250,242,.62)", dash: "8 8" });
    for (let i = 0; i < 7; i += 1) {
      circle(svg, 136 + i * 24, 78, 4, { fill: palette.cream, stroke: palette.blue, strokeWidth: 2 });
      circle(svg, 136 + i * 24, 262, 4, { fill: palette.cream, stroke: palette.blue, strokeWidth: 2 });
    }
    circle(svg, 184, 166, 9, { fill: palette.ink });
    circle(svg, 236, 166, 9, { fill: palette.ink });
    path(svg, "M178 202 Q210 232 244 202", { stroke: palette.ink, strokeWidth: 9 });
    text(svg, 144, 292, "stamp edge + smile", { size: 13 });
  }

  function badge(svg) {
    sketchPath(svg, "M210 62 C262 62 304 104 304 156 C304 208 262 250 210 250 C158 250 116 208 116 156 C116 104 158 62 210 62Z", { fill: "rgba(255,217,125,.26)", dash: "8 8" });
    sketchPath(svg, "M210 86 C248 86 280 118 280 156 C280 194 248 226 210 226 C172 226 140 194 140 156 C140 118 172 86 210 86Z", { fill: "none", stroke: palette.coral, strokeWidth: 5 });
    rect(svg, 138, 228, 144, 42, 12, { fill: "rgba(182,180,233,.25)", stroke: palette.blue, strokeWidth: 4 });
    path(svg, "M182 148 L210 112 L238 148 L224 194 L196 194Z", { fill: "rgba(142,172,142,.38)", stroke: palette.blue, strokeWidth: 4 });
    text(svg, 146, 304, "seal + banner", { size: 13 });
  }

  function ribbonBadge(svg) {
    circle(svg, 210, 138, 76, { fill: "rgba(255,217,125,.35)", stroke: palette.blue, strokeWidth: 4, dash: "8 8" });
    circle(svg, 210, 138, 52, { fill: "none", stroke: palette.coral, strokeWidth: 5 });
    path(svg, "M176 202 L154 286 L204 252 L210 220Z", { fill: "rgba(182,180,233,.35)", stroke: palette.blue, strokeWidth: 4 });
    path(svg, "M244 202 L266 286 L216 252 L210 220Z", { fill: "rgba(182,180,233,.35)", stroke: palette.blue, strokeWidth: 4 });
    path(svg, "M210 100 L222 126 L250 128 L228 146 L236 174 L210 158 L184 174 L192 146 L170 128 L198 126Z", { fill: "rgba(255,142,114,.38)", stroke: palette.blue, strokeWidth: 4 });
    text(svg, 146, 314, "medal + ribbons", { size: 13 });
  }

  function crownBadge(svg) {
    sketchPath(svg, "M118 94 L302 94 L286 250 Q210 306 134 250Z", { fill: "rgba(182,180,233,.22)", dash: "8 8" });
    path(svg, "M154 174 L172 118 L208 158 L244 118 L266 174Z", { fill: "rgba(255,217,125,.45)", stroke: palette.blue, strokeWidth: 5, linejoin: "round" });
    circle(svg, 210, 182, 13, { fill: palette.coral, stroke: palette.blue, strokeWidth: 3 });
    path(svg, "M154 206 L266 206", { stroke: palette.blue, strokeWidth: 6 });
    text(svg, 148, 294, "shield + crown", { size: 13 });
  }

  function rocketPatch(svg) {
    sketchPath(svg, "M110 98 Q210 42 310 98 L286 260 Q210 306 134 260Z", { fill: "rgba(255,250,242,.5)", dash: "8 8" });
    path(svg, "M188 204 C190 150 222 104 260 82 C252 128 234 180 198 226Z", { fill: "rgba(255,217,125,.44)", stroke: palette.blue, strokeWidth: 4 });
    path(svg, "M194 220 L162 240 L186 196 M226 166 L264 170 L238 188", { fill: "rgba(255,142,114,.34)", stroke: palette.blue, strokeWidth: 4 });
    path(svg, "M174 232 C158 252 154 268 156 286 C176 276 188 260 194 240", { fill: "rgba(255,142,114,.45)", stroke: palette.coral, strokeWidth: 4 });
    circle(svg, 226, 132, 10, { fill: palette.lavender, stroke: palette.blue, strokeWidth: 3 });
    text(svg, 148, 314, "patch + diagonal rocket", { size: 13 });
  }

  function coffeeLogo(svg) {
    circle(svg, 210, 164, 104, { fill: "rgba(255,250,242,.55)", stroke: palette.blue, strokeWidth: 4, dash: "8 8" });
    rect(svg, 152, 146, 98, 70, 18, { fill: "rgba(255,217,125,.35)", stroke: palette.blue, strokeWidth: 4 });
    path(svg, "M250 164 C300 154 300 210 250 202", { stroke: palette.blue, strokeWidth: 10 });
    path(svg, "M176 126 C160 104 198 100 184 80 M220 126 C202 102 242 102 228 80", { stroke: palette.coral, strokeWidth: 5 });
    ellipse(svg, 204, 230, 18, 10, { fill: "rgba(142,172,142,.45)", stroke: palette.blue, strokeWidth: 3 });
    text(svg, 146, 304, "seal + cup + steam", { size: 13 });
  }

  function bookLogo(svg) {
    rect(svg, 116, 92, 188, 168, 34, { fill: "rgba(255,250,242,.48)", dash: "8 8" });
    path(svg, "M210 122 C176 100 142 108 126 138 L126 230 C154 210 184 212 210 238Z", { fill: "rgba(255,217,125,.32)", stroke: palette.blue, strokeWidth: 4 });
    path(svg, "M210 122 C244 100 278 108 294 138 L294 230 C266 210 236 212 210 238Z", { fill: "rgba(182,180,233,.25)", stroke: palette.blue, strokeWidth: 4 });
    path(svg, "M210 122 L210 238", { stroke: palette.blue, strokeWidth: 5 });
    path(svg, "M224 126 L238 166 L224 156 L210 166Z", { fill: palette.coral, stroke: palette.blue, strokeWidth: 3 });
    text(svg, 150, 304, "open book mark", { size: 13 });
  }

  function bakerySeal(svg) {
    for (let i = 0; i < 18; i += 1) {
      const a = (Math.PI * 2 * i) / 18;
      circle(svg, 210 + Math.cos(a) * 88, 166 + Math.sin(a) * 88, 16, { fill: "rgba(255,217,125,.22)", stroke: palette.blue, strokeWidth: 2 });
    }
    circle(svg, 210, 166, 92, { fill: "rgba(255,250,242,.55)", stroke: palette.blue, strokeWidth: 4 });
    path(svg, "M158 174 C174 122 242 118 266 166 C244 188 184 192 158 174Z", { fill: "rgba(255,178,153,.38)", stroke: palette.blue, strokeWidth: 4 });
    path(svg, "M178 160 C196 146 218 146 240 158", { stroke: palette.coral, strokeWidth: 4 });
    text(svg, 144, 304, "scallop bakery seal", { size: 13 });
  }

  function leafEmblem(svg) {
    rect(svg, 124, 72, 172, 172, 46, { fill: "rgba(255,250,242,.5)", dash: "8 8" });
    path(svg, "M210 218 C174 178 158 112 254 84 C278 164 244 204 210 218Z", { fill: "rgba(142,172,142,.48)", stroke: palette.sageDark, strokeWidth: 5 });
    path(svg, "M210 218 C218 174 232 132 254 84", { stroke: palette.sageDark, strokeWidth: 4 });
    path(svg, "M208 184 L178 170 M222 152 L250 142", { stroke: palette.sageDark, strokeWidth: 3 });
    text(svg, 154, 294, "leaf cutout mark", { size: 13 });
  }

  function paletteLogo(svg) {
    circle(svg, 210, 166, 94, { fill: "rgba(255,250,242,.62)", stroke: palette.blue, strokeWidth: 4, dash: "8 8" });
    path(svg, "M150 172 C148 112 214 76 268 112 C324 150 284 230 220 246 C184 256 202 214 172 210 C154 208 150 190 150 172Z", { fill: "rgba(255,217,125,.28)", stroke: palette.blue, strokeWidth: 4 });
    circle(svg, 198, 132, 10, { fill: palette.coral });
    circle(svg, 236, 136, 10, { fill: palette.sage });
    circle(svg, 254, 174, 10, { fill: palette.lavender });
    ellipse(svg, 196, 198, 20, 13, { fill: palette.cream, stroke: palette.blue, strokeWidth: 3 });
    text(svg, 146, 304, "palette silhouette", { size: 13 });
  }

  function waveEmblem(svg) {
    circle(svg, 210, 166, 96, { fill: "rgba(182,180,233,.2)", stroke: palette.blue, strokeWidth: 4, dash: "8 8" });
    path(svg, "M126 200 C164 154 192 164 210 180 C230 198 254 186 260 154 C232 168 208 146 234 116 C278 134 302 188 268 226 C220 268 162 238 126 200Z", { fill: "rgba(79,119,145,.18)", stroke: palette.blue, strokeWidth: 4 });
    circle(svg, 256, 138, 5, { fill: palette.cream, stroke: palette.blue, strokeWidth: 2 });
    circle(svg, 270, 152, 4, { fill: palette.cream, stroke: palette.blue, strokeWidth: 2 });
    text(svg, 152, 304, "circle + wave curl", { size: 13 });
  }

  function catIcon(svg) {
    circle(svg, 210, 172, 82, { fill: "rgba(255,217,125,.3)", stroke: palette.blue, strokeWidth: 4, dash: "8 8" });
    path(svg, "M154 116 L168 58 L198 102 M222 102 L252 58 L266 116", { fill: "rgba(255,217,125,.3)", stroke: palette.blue, strokeWidth: 4, linejoin: "round" });
    ellipse(svg, 210, 196, 34, 24, { fill: "rgba(255,250,242,.75)", stroke: palette.blue, strokeWidth: 3 });
    circle(svg, 186, 164, 7, { fill: palette.ink });
    circle(svg, 234, 164, 7, { fill: palette.ink });
    path(svg, "M210 188 L210 204 M174 196 L132 186 M174 208 L132 218 M246 196 L288 186 M246 208 L288 218", { stroke: palette.ink, strokeWidth: 4 });
    text(svg, 150, 304, "cat head + ears", { size: 13 });
  }

  function paintTube(svg) {
    sketchPath(svg, "M124 196 C132 134 216 104 292 124 L270 230 C202 250 142 242 124 196Z", { fill: "rgba(255,250,242,.55)", dash: "8 8" });
    rect(svg, 270, 138, 42, 72, 10, { fill: "rgba(182,180,233,.35)", stroke: palette.blue, strokeWidth: 4 });
    path(svg, "M146 158 L122 132 M154 222 L126 244", { stroke: palette.blue, strokeWidth: 5 });
    path(svg, "M170 154 C194 170 222 176 254 172", { stroke: palette.coral, strokeWidth: 7 });
    face(svg, 210, 204);
  }

  function backpack(svg) {
    sketchPath(svg, "M144 138 C144 82 276 82 276 138 L276 260 L144 260Z", { fill: "rgba(142,172,142,.28)", dash: "8 8" });
    rect(svg, 168, 168, 84, 62, 18, { fill: "rgba(255,217,125,.28)", stroke: palette.blue, strokeWidth: 4 });
    path(svg, "M152 152 C106 156 112 250 144 250 M268 152 C314 156 308 250 276 250", { stroke: palette.blue, strokeWidth: 6 });
    face(svg, 210, 194);
  }

  function plantPot(svg) {
    path(svg, "M146 166 L274 166 L248 272 L172 272Z", { fill: "rgba(255,178,153,.32)", stroke: palette.blue, strokeWidth: 4 });
    ellipse(svg, 210, 166, 70, 18, { fill: "rgba(83,111,79,.28)", stroke: palette.sageDark, strokeWidth: 4 });
    path(svg, "M210 164 C170 118 148 86 190 72 C218 94 218 132 210 164Z", { fill: "rgba(142,172,142,.48)", stroke: palette.sageDark, strokeWidth: 4 });
    path(svg, "M210 164 C250 118 272 86 230 72 C202 94 202 132 210 164Z", { fill: "rgba(142,172,142,.48)", stroke: palette.sageDark, strokeWidth: 4 });
    path(svg, "M210 164 C214 118 220 82 210 54 C198 84 204 120 210 164Z", { fill: "rgba(142,172,142,.48)", stroke: palette.sageDark, strokeWidth: 4 });
    face(svg, 210, 220);
  }

  function mailbox(svg) {
    path(svg, "M128 182 L128 132 C128 92 162 72 210 72 C258 72 292 92 292 132 L292 182Z", { fill: "rgba(255,217,125,.3)", stroke: palette.blue, strokeWidth: 4, "stroke-dasharray": "8 8" });
    rect(svg, 128, 182, 164, 48, 0, { fill: "rgba(255,217,125,.3)", stroke: palette.blue, strokeWidth: 4 });
    path(svg, "M210 230 L210 292", { stroke: palette.blue, strokeWidth: 10 });
    path(svg, "M290 116 L332 116 L332 146 L290 146Z", { fill: "rgba(255,142,114,.35)", stroke: palette.blue, strokeWidth: 4 });
    face(svg, 202, 174);
  }

  function bookStack(svg) {
    rect(svg, 126, 208, 168, 44, 12, { fill: "rgba(182,180,233,.28)", stroke: palette.blue, strokeWidth: 4 });
    rect(svg, 146, 158, 148, 44, 12, { fill: "rgba(255,217,125,.34)", stroke: palette.blue, strokeWidth: 4 });
    rect(svg, 118, 108, 174, 44, 12, { fill: "rgba(142,172,142,.3)", stroke: palette.blue, strokeWidth: 4 });
    path(svg, "M142 130 L258 130 M164 180 L270 180 M148 230 L270 230", { stroke: palette.coral, strokeWidth: 3 });
    face(svg, 210, 130);
  }

  function foodSpecific(svg) {
    food(svg);
  }

  const drawers = {
    strawberry, toast, boba, mug, pencil, lamp, chair, mushroom, cupcake, cloud,
    circle: circleCreature, triangle, star, sun, sprout, moon, logo, food, object, bean,
    shield, "smile-stamp": smileStamp, badge, "ribbon-badge": ribbonBadge, "crown-badge": crownBadge,
    "rocket-patch": rocketPatch, "coffee-logo": coffeeLogo, "book-logo": bookLogo, "bakery-seal": bakerySeal,
    "leaf-emblem": leafEmblem, "palette-logo": paletteLogo, "wave-emblem": waveEmblem, "cat-icon": catIcon,
    "paint-tube": paintTube, backpack, "plant-pot": plantPot, mailbox, "book-stack": bookStack,
    "toast slice": toast, "boba cup": boba, "circle creature": circleCreature,
    "triangle buddy": triangle, "star mascot": star, "bean blob": bean,
    "puddle ghost": bean, "jellybean": bean, "squircle pal": object, "wobbly cube": object,
    "moon blob": moon, "tiny hill": bean, "sun badge": sun, "sprout logo": sprout,
    "moon app icon": moon, "sparkle mark": star, "pencil badge": pencil,
    "heart shield": shield, "cloud symbol": cloud, "mushroom sticker": mushroom,
    "leaf emblem": leafEmblem, "smile stamp": smileStamp, "ribbon badge": ribbonBadge,
    "coffee shop logo": coffeeLogo, "book club mark": bookLogo, "bakery seal": bakerySeal,
    "paint palette logo": paletteLogo, "wave emblem": waveEmblem, "cat face icon": catIcon,
    "rocket patch": rocketPatch, "crown badge": crownBadge, "paint tube": paintTube,
    "tiny backpack": backpack, "houseplant pot": plantPot, "book stack": bookStack
  };

  function resolveType(profile, subject) {
    const raw = String(profile?.svg || subject || "bean").toLowerCase();
    if (drawers[raw]) return raw;
    if (raw.includes("ribbon")) return "ribbon-badge";
    if (raw.includes("rocket")) return "rocket-patch";
    if (raw.includes("crown")) return "crown-badge";
    if (raw.includes("coffee")) return "coffee-logo";
    if (raw.includes("book club")) return "book-logo";
    if (raw.includes("bakery")) return "bakery-seal";
    if (raw.includes("paint palette")) return "palette-logo";
    if (raw.includes("wave")) return "wave-emblem";
    if (raw.includes("cat")) return "cat-icon";
    if (raw.includes("heart shield") || raw.includes("shield")) return "shield";
    if (raw.includes("smile stamp") || raw.includes("stamp")) return "smile-stamp";
    if (raw.includes("leaf emblem") || raw.includes("garden badge")) return "leaf-emblem";
    if (raw.includes("paint tube")) return "paint-tube";
    if (raw.includes("backpack")) return "backpack";
    if (raw.includes("houseplant") || raw.includes("plant pot")) return "plant-pot";
    if (raw.includes("mailbox")) return "mailbox";
    if (raw.includes("book stack")) return "book-stack";
    if (raw.includes("badge") || raw.includes("patch")) return "badge";
    if (raw.includes("strawberry")) return "strawberry";
    if (raw.includes("toast")) return "toast";
    if (raw.includes("boba")) return "boba";
    if (raw.includes("mug") || raw.includes("teacup")) return "mug";
    if (raw.includes("pencil")) return "pencil";
    if (raw.includes("lamp")) return "lamp";
    if (raw.includes("chair")) return "chair";
    if (raw.includes("mushroom")) return "mushroom";
    if (raw.includes("cupcake")) return "cupcake";
    if (raw.includes("cloud")) return "cloud";
    if (raw.includes("circle")) return "circle";
    if (raw.includes("triangle")) return "triangle";
    if (raw.includes("star") || raw.includes("sparkle")) return "star";
    if (raw.includes("sun")) return "sun";
    if (raw.includes("sprout") || raw.includes("leaf")) return "sprout";
    if (raw.includes("moon")) return "moon";
    if (raw.includes("logo") || raw.includes("icon") || raw.includes("badge") || raw.includes("mark") || raw.includes("emblem") || raw.includes("stamp") || raw.includes("shield")) return "logo";
    if (raw.includes("food") || raw.includes("dumpling") || raw.includes("pickle") || raw.includes("croissant") || raw.includes("lemon") || raw.includes("soup")) return "food";
    if (raw.includes("object") || raw.includes("backpack") || raw.includes("mailbox") || raw.includes("pot") || raw.includes("paint tube")) return "object";
    return "bean";
  }

  function render(container, options = {}) {
    if (!container) return;
    container.replaceChildren();

    const profile = options.profile || {};
    const subject = String(options.subject || "bean blob");
    const personality = String(options.personality || "cute");
    const type = resolveType(profile, subject);

    const svg = el("svg", {
      viewBox: "0 0 420 340",
      role: "img",
      "aria-label": `${subject} construction blueprint`
    });

    blueprintBackground(svg);
    drawers[type](svg);

    text(svg, 28, 42, `subject: ${subject}`.slice(0, 42));
    text(svg, 28, 314, `base: ${String(profile.base || personality + " simple shapes").slice(0, 40)}`, { size: 13 });

    const badge = el("g", {}, svg);
    rect(badge, 294, 24, 94, 34, 17, { fill: "rgba(255,250,242,.82)", stroke: "rgba(79,119,145,.24)", strokeWidth: 1 });
    text(badge, 311, 46, "shape map", { size: 12, fill: palette.sageDark });

    container.appendChild(svg);
  }

  window.ShapeSproutBlueprint = { render, resolveType };
}());
