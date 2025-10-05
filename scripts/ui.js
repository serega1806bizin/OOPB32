const $ = sel => document.querySelector(sel);

export function log(msg, cls = 'log') {
  const el = document.createElement('div');
  el.className = cls;
  el.textContent = msg;
  $('#consoleBox').appendChild(el);
  $('#consoleBox').scrollTop = $('#consoleBox').scrollHeight;
}

export function clearLog() {
  $('#consoleBox').innerHTML = '';
}

export function getInputs() {
  return {
    rawArray: $('#arrInput').value.trim(),
    P: $('#pInput').value.trim(),
    F: $('#fInput').value.trim(),
  };
}
export function setInputs({ rawArray, P, F }) {
  if (rawArray !== undefined) $('#arrInput').value = rawArray;
  if (P !== undefined) $('#pInput').value = P;
  if (F !== undefined) $('#fInput').value = F;
}

export function setResults({ sum, avg, min, minIndex, max, maxIndex, count, grade }) {
  $('#resSum').textContent = `${sum} / ${avg}`;
  $('#resMinMax').textContent = `${max} (i=${maxIndex}) / ${min} (i=${minIndex})`;
  $('#resCount').textContent = String(count);
  $('#resGrade').textContent = grade;
}

export function bindUI(handlers) {
  $('#runBtn').addEventListener('click', handlers.onRun);
  $('#btnEvenPreview').addEventListener('click', handlers.onPreviewEven);
  $('#copyJson').addEventListener('click', handlers.onCopyJSON);
  $('#clearLog').addEventListener('click', handlers.onClearLog);
  $('#fillVariant').addEventListener('click', handlers.onFillExample);
  $('#clearArr').addEventListener('click', handlers.onClearArray);
  $('#themeToggle').addEventListener('click', handlers.onToggleTheme);
}

export function toggleTheme() {
  const light = document.documentElement.dataset.theme === 'light';
  document.documentElement.dataset.theme = light ? 'dark' : 'light';
  if (light) {
    document.documentElement.style = '';
    document.body.style = '';
    log('Тема: темна', 'ok');
  } else {
    document.documentElement.style.setProperty('--bg', '#f6f8ff');
    document.documentElement.style.setProperty('--bg-2', '#eef2ff');
    document.documentElement.style.setProperty('--card', 'rgba(12,18,40,0.05)');
    document.documentElement.style.setProperty('--card-strong', 'rgba(12,18,40,0.08)');
    document.documentElement.style.setProperty('--text', '#0d1228');
    document.documentElement.style.setProperty('--muted', '#4b5477');
    document.documentElement.style.setProperty('--outline', '1px solid rgba(12,18,40,.12)');
    document.body.style.background =
      'radial-gradient(1200px 1200px at 10% -20%, #1b2b7e22, transparent 60%),' +
      'radial-gradient(1200px 1200px at 110% 20%, #0aa6ff18, transparent 60%),' +
      'linear-gradient(180deg, #f6f8ff, #eef2ff)';
    log('Тема: светлая', 'ok');
  }
}
