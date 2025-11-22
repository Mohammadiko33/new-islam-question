const sendSound = document.getElementById('sendSound');
const receiveSound = document.getElementById('receiveSound');
const chatContainer = document.getElementById("chat");

// --- Theme toggle injector for chat pages (no HTML edits required) ---
const _chatThemeKey = 'site-theme';
function _getStoredTheme() {
    try { return localStorage.getItem(_chatThemeKey); } catch (e) { return null; }
}
function _storeTheme(v) {
    try { localStorage.setItem(_chatThemeKey, v); } catch (e) { /* ignore */ }
}
function _systemPrefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
function _applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') root.setAttribute('data-theme', 'dark'); else root.removeAttribute('data-theme');
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.dataset.theme = theme;
        const icon = btn.querySelector('.icon');
        if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';
        btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }
}
function _initChatTheme() {
    if (document.getElementById('theme-toggle')) return; // already present
    const stored = _getStoredTheme();
    const initial = stored ? stored : (_systemPrefersDark() ? 'dark' : 'light');
    _applyTheme(initial);

    const btn = document.createElement('button');
    btn.id = 'theme-toggle';
    btn.type = 'button';
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'تغییر تم (روشن/تاریک)');
    btn.innerHTML = `<span class="icon">${initial === 'dark' ? '🌙' : '☀️'}</span>`;
    btn.dataset.theme = initial;
    btn.setAttribute('aria-pressed', initial === 'dark' ? 'true' : 'false');

    btn.addEventListener('click', function () {
        const now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const next = now === 'dark' ? 'light' : 'dark';
        _applyTheme(next);
        _storeTheme(next);
    });

    window.addEventListener('keydown', function (e) {
        if ((e.key === 'T' || e.key === 't') && e.shiftKey) {
            e.preventDefault(); btn.click();
        }
    });

    function _append() { if (document.body && !document.getElementById('theme-toggle')) document.body.appendChild(btn); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _append); else _append();
}

// initialize theme toggle for chat pages
_initChatTheme();
// -------------------------------------------------------------------

// تابع ساخت کل چت
function initChat(messages) {
    chatContainer.innerHTML = "";
    let totalDelay = 0;

    messages.forEach(message => {
        setTimeout(() => {
            const msgDiv = document.createElement("div");
            msgDiv.classList.add("message", message.sender);

            if (message.text.trim().startsWith("<img")) {
                // اگر پیام عکس بود
                msgDiv.innerHTML = message.text;
            } else {
                // اگر متن بود
                msgDiv.innerHTML = message.text;
            }

            // تایم‌استمپ رو فقط برای متن‌ها نشون بده
            if (!message.text.trim().startsWith("<img")) {
                const timeDiv = document.createElement("span");
                timeDiv.classList.add("timestamp");
                const now = new Date();
                const hours = now.getHours().toString().padStart(2,'0');
                const minutes = now.getMinutes().toString().padStart(2,'0');
                timeDiv.textContent = `${hours}:${minutes}`;
                msgDiv.appendChild(timeDiv);
            }

            chatContainer.appendChild(msgDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;

            // پخش صدا
            if (message.sender === 'me') {
                sendSound.currentTime = 0;
                sendSound.play();
            } else {
                receiveSound.currentTime = 0;
                receiveSound.play();
            }
        }, totalDelay);

        totalDelay += message.readTime;
    });
}

// افزودن پیام جدید
function addMessage(message) {
    setTimeout(() => {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("message", message.sender);

        if (message.text.trim().startsWith("<img")) {
            msgDiv.innerHTML = message.text;
        } else {
            msgDiv.innerHTML = message.text;

            const timeDiv = document.createElement("span");
            timeDiv.classList.add("timestamp");
            const now = new Date();
            const hours = now.getHours().toString().padStart(2,'0');
            const minutes = now.getMinutes().toString().padStart(2,'0');
            timeDiv.textContent = `${hours}:${minutes}`;
            msgDiv.appendChild(timeDiv);
        }

        chatContainer.appendChild(msgDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        if (message.sender === 'me') {
            sendSound.currentTime = 0;
            sendSound.play();
        } else {
            receiveSound.currentTime = 0;
            receiveSound.play();
        }
    }, 200);
}