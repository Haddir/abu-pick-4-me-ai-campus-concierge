const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

const form = document.getElementById('concierge-form');
const responseBox = document.getElementById('response');
const modeIndicator = document.getElementById('mode-indicator');
const submitButton = form ? form.querySelector('button[type="submit"]') : null;
let activeMode = 'chat';
let isRequestPending = false;

// Build a base URL for the backend. For this local app setup, the API runs on
// port 8000 while the static page may be served from a different port such as 8080.
// When opened from file://, fall back to localhost:8000.
const BASE_URL = (() => {
  try {
    if (location && location.protocol && location.protocol.startsWith('http')) {
      const host = location.hostname || '127.0.0.1';
      const port = location.port && location.port !== '8080' && location.port !== '5500' && location.port !== '3000'
        ? location.port
        : '8000';
      return `${location.protocol}//${host}:${port}`;
    }
  } catch (e) {
    // ignore and fallthrough
  }
  return 'http://127.0.0.1:8000';
})();

function getEndpoint(mode) {
  switch (mode) {
    case 'vendor':
      return `${BASE_URL}/recommend-vendor`;
    case 'occasion':
      return `${BASE_URL}/occasion-plan`;
    case 'budget':
      return `${BASE_URL}/budget-plan`;
    default:
      return `${BASE_URL}/chat`;
  }
}

// Robust fetch with retries and exponential backoff to handle transient
// connection failures (e.g., backend not yet ready).
async function fetchWithRetries(url, options = {}, retries = 4, backoff = 300) {
  let attempt = 0;
  while (true) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        const txt = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} - ${txt}`);
      }
      return res;
    } catch (err) {
      attempt += 1;
      if (attempt > retries) throw err;
      // wait with jitter
      const delay = backoff * Math.pow(2, attempt - 1) + Math.floor(Math.random() * 100);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
}

function getPayload(mode, request) {
  if (mode === 'vendor') {
    return { message: request, category: 'food', budget: 1000 };
  }

  if (mode === 'occasion') {
    return { title: request, budget: 5000, guest_count: 20, preferences: 'budget-friendly', notes: 'Campus event' };
  }

  if (mode === 'budget') {
    return { message: request, budget: 5000 };
  }

  return { message: request };
}

function setMode(mode) {
  activeMode = mode;
  if (modeIndicator) {
    const labels = {
      chat: 'Active mode: general chat',
      vendor: 'Active mode: vendor recommendation',
      occasion: 'Active mode: occasion planning',
      budget: 'Active mode: budget planning'
    };
    modeIndicator.textContent = labels[mode] || 'Active mode: general chat';
  }
}

function setBusy(isBusy) {
  if (submitButton) {
    submitButton.disabled = isBusy;
    submitButton.textContent = isBusy ? 'Thinking…' : 'Ask the concierge';
  }
}

if (form && responseBox) {
  document.querySelectorAll('[data-mode]').forEach((card) => {
    card.addEventListener('click', () => {
      setMode(card.getAttribute('data-mode') || 'chat');
      const input = form.querySelector('input');
      if (input) {
        input.focus();
      }
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (isRequestPending) {
      return;
    }

    const input = form.querySelector('input');
    const request = input ? input.value.trim() : '';

    if (!request) {
      responseBox.textContent = 'Please share what you need help with.';
      return;
    }

    isRequestPending = true;
    setBusy(true);
    responseBox.textContent = 'Connecting to Chef François...';

    try {
      const response = await fetchWithRetries(
        getEndpoint(activeMode),
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(getPayload(activeMode, request)),
        },
        5,
        250
      );

      const data = await response.json();
      responseBox.textContent = data.reply || 'No answer was returned.';
    } catch (error) {
      responseBox.textContent = 'The concierge service is currently unavailable. Please try again shortly.';
      console.error('Fetch failed:', error);
    } finally {
      isRequestPending = false;
      setBusy(false);
      form.reset();
      if (input) {
        input.focus();
      }
    }
  });
}

setMode(activeMode);
