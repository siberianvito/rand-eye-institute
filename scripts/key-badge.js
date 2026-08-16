/**
 * The supplied 50-year badge arrived as a flattened PNG with the transparency
 * checkerboard baked into the pixels. This keys that pattern back out.
 *
 * Flood fill from the border rather than a global colour test, so the light
 * highlights inside the gold are never touched — only background-connected
 * pixels can be removed.
 *
 *   node scripts/key-badge.js <in.png> <out.png>
 */
const fs = require("node:fs");
const { PNG } = require("pngjs");

const [, , inPath, outPath] = process.argv;
const png = PNG.sync.read(fs.readFileSync(inPath));
const { width: W, height: H, data } = png;

const idx = (x, y) => ((W * y + x) << 2);

/** Checkerboard is neutral and light; the badge's gold highlights are warm. */
const isBackground = (i) => {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return min >= 218 && max - min <= 12;
};

const clear = new Uint8Array(W * H);
const stack = [];

for (let x = 0; x < W; x++) {
  stack.push([x, 0], [x, H - 1]);
}
for (let y = 0; y < H; y++) {
  stack.push([0, y], [W - 1, y]);
}

while (stack.length) {
  const [x, y] = stack.pop();
  if (x < 0 || y < 0 || x >= W || y >= H) continue;
  const p = W * y + x;
  if (clear[p]) continue;
  if (!isBackground(idx(x, y))) continue;
  clear[p] = 1;
  stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
}

// One erosion ring removes the anti-aliased fringe where badge met checkerboard.
const fringe = new Uint8Array(W * H);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const p = W * y + x;
    if (clear[p]) continue;
    const i = idx(x, y);
    const max = Math.max(data[i], data[i + 1], data[i + 2]);
    const min = Math.min(data[i], data[i + 1], data[i + 2]);
    if (!(min >= 200 && max - min <= 20)) continue;
    const touches =
      (x > 0 && clear[p - 1]) ||
      (x < W - 1 && clear[p + 1]) ||
      (y > 0 && clear[p - W]) ||
      (y < H - 1 && clear[p + W]);
    if (touches) fringe[p] = 1;
  }
}

let removed = 0;
for (let p = 0; p < W * H; p++) {
  if (clear[p] || fringe[p]) {
    data[(p << 2) + 3] = 0;
    removed++;
  }
}

fs.writeFileSync(outPath, PNG.sync.write(png));
console.log(
  `keyed ${removed} of ${W * H} px (${((removed / (W * H)) * 100).toFixed(1)}%) → ${outPath}`,
);
