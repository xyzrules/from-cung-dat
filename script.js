import {
  getYesState,
  getNextNoLabel,
  getRandomPosition,
} from './logic.mjs';

const screens = {
  1: document.getElementById('screen-1'),
  2: document.getElementById('screen-2'),
  3: document.getElementById('screen-3'),
};

const continueButton = document.getElementById('continue-button');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const yesStatus = document.getElementById('yes-status');
const celebrationLayer = document.getElementById('celebration');

let yesClicks = 0;
let noClicks = 0;
let celebrationStarted = false;

function showScreen(screenNumber) {
  Object.entries(screens).forEach(([key, screen]) => {
    screen.classList.toggle('is-active', Number(key) === screenNumber);
  });
}

function createHeart(index) {
  const heart = document.createElement('span');
  heart.className = 'heart-burst';
  heart.textContent = index % 2 === 0 ? '♥' : '🩷';
  heart.style.left = `${Math.round((index / 17) * 100)}%`;
  heart.style.animationDelay = `${index * 80}ms`;
  heart.style.fontSize = `${20 + (index % 5) * 6}px`;
  return heart;
}

function launchCelebration() {
  if (celebrationStarted) {
    return;
  }

  celebrationStarted = true;
  celebrationLayer.innerHTML = '';

  for (let index = 0; index < 18; index += 1) {
    celebrationLayer.appendChild(createHeart(index));
  }
}

function handleContinueClick() {
  showScreen(2);
}

function handleYesClick() {
  const nextState = getYesState(yesClicks);
  yesClicks = nextState.count;
  yesButton.textContent = nextState.label;
  yesStatus.textContent = nextState.advance ? '♥️♥️♥️' : '';

  if (!nextState.advance) {
    return;
  }

  showScreen(3);
  launchCelebration();
}

function moveNoButton() {
  noButton.classList.add('button--floating');

  const rect = noButton.getBoundingClientRect();
  const nextPosition = getRandomPosition({
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    elementWidth: rect.width,
    elementHeight: rect.height,
    randomX: Math.random(),
    randomY: Math.random(),
  });

  noButton.style.left = `${nextPosition.left}px`;
  noButton.style.top = `${nextPosition.top}px`;
}

function handleNoClick() {
  noButton.textContent = getNextNoLabel(noClicks);
  noClicks += 1;
  moveNoButton();
}

continueButton.addEventListener('click', handleContinueClick);
yesButton.addEventListener('click', handleYesClick);
noButton.addEventListener('click', handleNoClick);

showScreen(1);
