const sendSound = document.getElementById('sendSound');
const receiveSound = document.getElementById('receiveSound');
const chatContainer = document.getElementById("chat");

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