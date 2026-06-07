import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');

test('README covers local preview and GitHub Pages deployment', () => {
  assert.match(readme, /## Xem thử trên máy/);
  assert.match(readme, /## Đăng lên GitHub Pages/);
  assert.match(readme, /1\. Tạo repository mới trên GitHub/);
  assert.match(readme, /2\. Upload toàn bộ file/);
  assert.match(readme, /3\. Vào Settings > Pages/);
  assert.match(readme, /4\. Chọn Deploy from a branch/);
  assert.match(readme, /5\. Mở đường link đã publish/);
});
