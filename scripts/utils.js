export function parseNumericArray(str) {
  if (!str || typeof str !== 'string') return [];
  return str
    .split(',')
    .map(s => Number(String(s).trim()))
    .filter(n => Number.isFinite(n));
}

export function sumArray(a) {
  return a.reduce((s, n) => s + n, 0);
}


export function averageArray(a) {
  if (!a.length) return null;
  return sumArray(a) / a.length;
}

export function findMinMaxIndices(a) {
  if (!a.length) return { min: null, minIndex: -1, max: null, maxIndex: -1 };
  let min = a[0], max = a[0], minIndex = 0, maxIndex = 0;
  for (let i = 1; i < a.length; i++) {
    if (a[i] < min) { min = a[i]; minIndex = i; }
    if (a[i] > max) { max = a[i]; maxIndex = i; }
  }
  return { min, minIndex, max, maxIndex };
}


export function countGreaterThanP(a, p) {
  const P = Number(p);
  return a.reduce((acc, n) => acc + (n > P ? 1 : 0), 0);
}


export function evenArray(a) {
  return a.filter(n => n % 2 === 0);
}

export function factorial(n) {
  const k = Number(n);
  if (!Number.isInteger(k) || k < 0) return null;
  let res = 1n;
  for (let i = 2n; i <= BigInt(k); i++) res *= i;
  return res.toString();
}


export function gradeFromAverage(avg) {
  if (avg == null || Number.isNaN(avg)) return '—';
  const a = avg;
  if (a >= 13) return 'А';
  if (a >= 10) return 'B';
  if (a >= 7) return 'C';
  if (a >= 5) return 'D';
  return 'F';
  
}


export function fmt(n, digits = 2) {
  if (n == null || Number.isNaN(n)) return '—';
  return Number(n).toFixed(digits);
}
