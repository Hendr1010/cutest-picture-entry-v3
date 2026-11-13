// cutest-picture-01 v3 entry: copies entry.png to /output/entry.png.
// Node 22, standard library only. Deterministic: two runs write the same bytes.
//
// The image: an irresistibly cute tiny baby red panda with enormous glossy
// sparkling eyes and rosy cheeks, hugging a small yellow plush duckling,
// wearing a tiny pastel pink bow — pushing the cuteness further than v2
// (886,350, our best cutest-picture score) with softer pastel tones,
// floating pink hearts, and golden sparkles.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const ENTRY = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(ENTRY, join(OUTPUT_DIR, 'entry.png'));
