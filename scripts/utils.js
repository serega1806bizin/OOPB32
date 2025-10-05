export function parseNumericArray(str) {
  if (!str || typeof str !== "string") return [];
  return str
    .split(",")
    .map((s) => Number(String(s).trim()))
    .filter((n) => Number.isFinite(n));
}

export const parseNumericArray = (s) =>
  typeof s == "string"
    ? s
        .split(",")
        .map((t) => Number(String(t).trim()))
        .filter(Number.isFinite)
    : [];
export const sumArray = (a) => a.reduce((s, n) => s + n, 0);
export const averageArray = (a) => (a.length ? sumArray(a) / a.length : null);
export const findMinMaxIndices = (a) => {
  if (!a.length) return { min: null, minIndex: -1, max: null, maxIndex: -1 };
  let m = a[0],
    M = a[0],
    mi = 0,
    Mi = 0;
  for (let i = 1; i < a.length; i++) {
    const v = a[i];
    v < m && ((m = v), (mi = i));
    v > M && ((M = v), (Mi = i));
  }
  return { min: m, minIndex: mi, max: M, maxIndex: Mi };
};
export const countGreaterThanP = (a, p) =>
  a.reduce((x, n) => x + (n > Number(p)), 0);
export const evenArray = (a) => a.filter((n) => n % 2 === 0);
export const factorial = (n) => {
  const k = Number(n);
  if (!Number.isInteger(k) || k < 0) return null;
  let r = 1n;
  for (let i = 2n; i <= BigInt(k); i++) r *= i;
  return r.toString();
};
export const gradeFromAverage = (a) =>
  a == null || Number.isNaN(a)
    ? "—"
    : a >= 13
    ? "А"
    : a >= 10
    ? "B"
    : a >= 7
    ? "C"
    : a >= 5
    ? "D"
    : "F";
export const fmt = (n, d = 2) =>
  n == null || Number.isNaN(n) ? "—" : Number(n).toFixed(d);
