import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('index.html includes the three screens and required copy', () => {
  assert.match(html, /id="screen-1"/);
  assert.match(html, /id="screen-2"/);
  assert.match(html, /id="screen-3"/);
  assert.match(
    html,
    /tớ hong cố ý làm cậu bực nhưng tớ biết cậu đang dỗi tớ và tớ xin lỗi vì đã làm cậu bực/,
  );
  assert.match(html, /🐯 dỗi tớ ít hơn một chút xíu ná/);
  assert.match(html, /🩷🥹 🦂 cảm ơn cậu đã đỡ dỗi tớ hơn 🥺🩷/);
  assert.match(html, /i class u so muchhh/);
  assert.match(html, /id="continue-button"/);
  assert.match(html, /id="yes-button"/);
  assert.match(html, /id="no-button"/);
  assert.match(html, /id="celebration"/);
});
