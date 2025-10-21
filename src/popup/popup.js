(function () {
  const el = id => document.getElementById(id);
  const lengthEl = el('length');
  const lowerEl = el('lower');
  const upperEl = el('upper');
  const numbersEl = el('numbers');
  const symbolsEl = el('symbols');
  const outEl = el('output');
  const genBtn = el('generate');
  const copyBtn = el('copy');

  function getCharset() {
    let set = '';
    if (lowerEl.checked) set += 'abcdefghijklmnopqrstuvwxyz';
    if (upperEl.checked) set += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbersEl.checked) set += '0123456789';
    if (symbolsEl.checked) set += '!@#$%^&*()-_=+[]{};:,.<>/?`~|\\';
    return set;
  }

  function generatePassword(len) {
    const charset = getCharset();
    if (!charset) return '';
    const result = [];
    const cryptoObj = window.crypto || window.msCrypto;
    const bytes = new Uint32Array(len);
    cryptoObj.getRandomValues(bytes);
    for (let i = 0; i < len; i++) {
      result.push(charset[bytes[i] % charset.length]);
    }
    return result.join('');
  }

  function updateUI(password) {
    outEl.value = password;
    copyBtn.disabled = !password;
  }

  function copyToClipboard(text) {
    if (!text) return Promise.reject(new Error('No text to copy'));
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // fallback
    return new Promise((resolve, reject) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        resolve();
      } catch (err) {
        reject(err);
      } finally {
        document.body.removeChild(ta);
      }
    });
  }

  genBtn.addEventListener('click', () => {
    const len = Math.max(4, Math.min(128, parseInt(lengthEl.value, 10) || 16));
    const pw = generatePassword(len);
    updateUI(pw);
  });

  copyBtn.addEventListener('click', () => {
    const text = outEl.value;
    copyToClipboard(text)
      .then(() => {
        // briefly indicate success
        copyBtn.textContent = 'Copied';
        setTimeout(() => copyBtn.textContent = 'Copy to Clipboard', 1200);
      })
      .catch(() => {
        copyBtn.textContent = 'Copy failed';
        setTimeout(() => copyBtn.textContent = 'Copy to Clipboard', 1200);
      });
  });

  // allow pressing Enter while in length field to generate
  lengthEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') genBtn.click();
  });

  document.addEventListener('DOMContentLoaded', () => {
    copyBtn.disabled = true;
  });
})();