import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../styles.css', import.meta.url), 'utf8');

test('styles.css defines the required mobile-first layout hooks', () => {
  assert.match(css, /min-height:\s*100dvh/);
  assert.match(css, /\.screen\s*\{/);
  assert.match(css, /\.screen\.is-active\s*\{/);
  assert.match(css, /\.button-row\s*\{/);
  assert.match(css, /\.button--floating\s*\{/);
  assert.match(css, /\.celebration-layer\s*\{/);
  assert.match(css, /@keyframes\s+float-heart/);
});
