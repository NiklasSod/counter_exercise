export const animateConfetti = (elementId = 'progressBar') => {
  const container = document.getElementById(elementId);
  if (!container) return;

  const count = 45;
  const colors = ['#f44336', '#e91e63', '#9c27b0', '#2196f3', '#4caf50', '#ffeb3b', '#ff9800'];
  const createdPieces: HTMLDivElement[] = [];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-explosion';

    const baseAngle = (360 / count) * i;
    const angle = baseAngle + (Math.random() * 20 - 10);

    const radius = 50 + Math.random() * 90;

    const startX = (Math.random() - 0.5) * 30;
    const startY = (Math.random() - 0.5) * 30;

    const size = 8 + Math.random() * 8;
    const spin = (Math.random() - 0.5) * 720;

    const color = colors[Math.floor(Math.random() * colors.length)];

    piece.style.setProperty('--angle', `${angle}deg`);
    piece.style.setProperty('--radius', `${radius}px`);
    piece.style.setProperty('--start-x', `${startX}px`);
    piece.style.setProperty('--start-y', `${startY}px`);
    piece.style.setProperty('--spin', `${spin}deg`);
    piece.style.width = `${size}px`;
    piece.style.height = `${size}px`;
    piece.style.backgroundColor = color;

    if (Math.random() > 0.4) {
      piece.style.borderRadius = '50%';
    } else {
      piece.style.borderRadius = '2px';
    }

    container.appendChild(piece);
    createdPieces.push(piece);
  }

  setTimeout(() => {
    createdPieces.forEach((piece) => piece.remove());
  }, 1000);
};

interface TriggerMultipleBurstsProps {
  elementId: string;
  totalBursts: number;
  interval: number;
}

export const triggerMultipleBursts = ({ elementId, totalBursts, interval }: TriggerMultipleBurstsProps): number[] => {
  const timerIds: number[] = [];

  for (let i = 0; i < totalBursts; i++) {
    const timerId = setTimeout(() => {
      animateConfetti(elementId);
    }, i * interval);

    timerIds.push(timerId);
  }

  return timerIds;
};

export default animateConfetti