import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getYesState,
  getNextNoLabel,
  getRandomPosition,
} from '../logic.mjs';

test('getYesState advances only on the third click', () => {
  assert.deepEqual(getYesState(0), {
    count: 1,
    label: 'yes',
    advance: false,
  });

  assert.deepEqual(getYesState(1), {
    count: 2,
    label: 'yes lần nữa',
    advance: false,
  });

  assert.deepEqual(getYesState(2), {
    count: 3,
    label: 'ớ ơ greee',
    advance: true,
  });
});

test('getNextNoLabel loops through all three labels', () => {
  assert.equal(getNextNoLabel(0), 'no');
  assert.equal(getNextNoLabel(1), 'đừng no mà');
  assert.equal(getNextNoLabel(2), 'hong đượttt nooo');
  assert.equal(getNextNoLabel(3), 'no');
});

test('getRandomPosition keeps the moving button inside the viewport', () => {
  assert.deepEqual(
    getRandomPosition({
      viewportWidth: 390,
      viewportHeight: 844,
      elementWidth: 120,
      elementHeight: 48,
      randomX: 0.95,
      randomY: 0.9,
    }),
    {
      left: 257,
      top: 716,
    },
  );
});
