
import {
  parseNumericArray, sumArray, averageArray, findMinMaxIndices,
  countGreaterThanP, evenArray, factorial, gradeFromAverage, fmt
} from './utils.js';

import { bindUI, getInputs, setInputs, setResults, log, clearLog, toggleTheme } from './ui.js';

function handleRun() {
  const { rawArray, P, F } = getInputs();
  const arr = parseNumericArray(rawArray);

  if (!arr.length) {
    log('Введіть масив чисел через кому', 'warn');
    return;
  }

  const sum = sumArray(arr);
  const avg = averageArray(arr);
  const { min, minIndex, max, maxIndex } = findMinMaxIndices(arr);
  const count = countGreaterThanP(arr, P);
  const even = evenArray(arr);
  const fact = factorial(F);
  const grade = gradeFromAverage(avg);

  setResults({
    sum: fmt(sum, 2),
    avg: fmt(avg, 2),
    min, minIndex, max, maxIndex,
    count,
    grade
  });

  log(`Введено: [${arr.join(', ')}]`);
  log(`P=${P} · F=${F}`);
  log(`sum=${sum}, avg=${fmt(avg, 2)}, max=${max} (i=${maxIndex}), min=${min} (i=${minIndex})`, 'ok');
  log(`count(>P)=${count}; even=[${even.join(', ')}]`);
  log(`factorial(${F})=${fact}`);
  log(`grade=${grade}`);
}

function handlePreviewEven() {
  const { rawArray } = getInputs();
  const arr = parseNumericArray(rawArray);
  if (!arr.length) {
    log('Введіть масив чисел', 'warn');
    return;
  }
  log('Парні числа: [' + evenArray(arr).join(', ') + ']', 'ok');
}

async function handleCopyJSON() {
  const { rawArray, P, F } = getInputs();
  const arr = parseNumericArray(rawArray);
  const payload = {
    input: { array: arr, P: Number(P), F: Number(F) },
    results: { }
  };
  try {
    await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
    log('JSON скопіровано в буфер обміну', 'ok');
  } catch (e) {
    log('Не вдалось скопіровати JSON: ' + e, 'err');
  }
}

function handleClearLog() { clearLog(); log('Лог очищено', 'ok'); }

function handleFillExample() {
  setInputs({ rawArray: '12, 7, 19, 5, 9', P: '10', F: '5' });
  log('Вставлено приклад: масив [12,7,19,5,9], P=10, F=5', 'ok');
}
function handleClearArray() { setInputs({ rawArray: '' }); log('Поле масиву очищено'); }
function handleToggleTheme() { toggleTheme(); }


bindUI({
  onRun: handleRun,
  onPreviewEven: handlePreviewEven,
  onCopyJSON: handleCopyJSON,
  onClearLog: handleClearLog,
  onFillExample: handleFillExample,
  onClearArray: handleClearArray,
  onToggleTheme: handleToggleTheme,
});
