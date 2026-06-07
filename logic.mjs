const YES_LABELS = ['yes', 'yes lần nữa', 'ớ ơ greee'];
const NO_LABELS = ['no', 'đừng no mà', 'hong đượttt nooo'];

export function getYesState(currentCount) {
  const nextCount = Math.min(currentCount + 1, YES_LABELS.length);

  return {
    count: nextCount,
    label: YES_LABELS[nextCount - 1],
    advance: nextCount === YES_LABELS.length,
  };
}

export function getNextNoLabel(clickIndex) {
  return NO_LABELS[clickIndex % NO_LABELS.length];
}

export function getRandomPosition({
  viewportWidth,
  viewportHeight,
  elementWidth,
  elementHeight,
  randomX,
  randomY,
}) {
  const maxLeft = Math.max(0, Math.round(viewportWidth - elementWidth));
  const maxTop = Math.max(0, Math.round(viewportHeight - elementHeight));

  return {
    left: Math.round(maxLeft * randomX),
    top: Math.round(maxTop * randomY),
  };
}
