const chatMessages = document.querySelector('.chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Basic responses for the AI Health Assistant
const healthResponses = {
    headache: "For headaches, I recommend: \n- Rest in a quiet, dark room\n- Stay hydrated\n- Try over-the-counter pain relievers\n- If persistent, consult a doctor",
    fever: "For fever management: \n- Rest and stay hydrated\n- Take temperature regularly\n- Use fever-reducing medication\n- Seek medical attention if temperature exceeds 103°F (39.4°C)",
    cold: "For cold symptoms: \n- Get plenty of rest\n- Stay hydrated\n- Use over-the-counter cold medications\n- Try warm salt water gargle for sore throat",
    cough: "For cough relief: \n- Stay hydrated\n- Try honey and warm tea\n- Use a humidifier\n- Consider over-the-counter cough suppressants",
    default: "I understand you're not feeling well. Could you please provide more specific symptoms so I can offer better guidance? If symptoms are severe, please consult a medical professional immediately."
};

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = isUser ? 'user-message' : 'ai-message';
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    if (message.includes('headache')) {
        return healthResponses.headache;
    } else if (message.includes('fever')) {
        return healthResponses.fever;
    } else if (message.includes('cold')) {
        return healthResponses.cold;
    } else if (message.includes('cough')) {
        return healthResponses.cough;
    } else {
        return healthResponses.default;
    }
}

function handleUserInput() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, true);
        userInput.value = '';
        
        // Simulate AI thinking with a slight delay
        setTimeout(() => {
            const aiResponse = getAIResponse(message);
            addMessage(aiResponse, false);
        }, 1000);
    }
}

sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});