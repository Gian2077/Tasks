export const LEVEL_THRESHOLDS = [
  0, // Level 1
  365,
  730,
  1095,
  1460, // Level 5
  2190,
  2920,
  3650,
  4380,
  5110, // Level 10
  6205,
  7300,
  8395,
  9490,
  10585, // Level 15
  12045,
  13505,
  14965,
  16425,
  17885, // Level 20
  20075,
  22265,
  24455,
  26645,
  28835, // Level 25
  31755,
  34675,
  37595,
  40515,
  43435, // Level 30
  47085,
  50735,
  54385,
  58035,
  61685, // Level 35
];
export function getLevelInfo(exp) {
  let level = 1;
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (exp >= LEVEL_THRESHOLDS[i]) {
      level = i + 1;
      break;
    }
  }
  const currentThreshold = LEVEL_THRESHOLDS[level - 1];
  const nextThreshold = LEVEL_THRESHOLDS[level];
  const expIntoLevel = exp - currentThreshold;
  const expForThisLevel = nextThreshold
    ? nextThreshold - currentThreshold
    : null;
  const progress = expForThisLevel
    ? (expIntoLevel / expForThisLevel) * 100
    : 100;
  return {
    level,
    expIntoLevel,
    expForThisLevel,
    progress,
    isMaxLevel: !nextThreshold,
  };
}
