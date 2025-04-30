// Health tips database
const healthTips = [
    "Drink at least 8 glasses of water daily to stay hydrated",
    "Get 7-8 hours of sleep for better academic performance",
    "Take a 5-minute break every hour while studying",
    "Practice deep breathing exercises to reduce stress",
    "Try to include fruits in your daily diet",
    "Take a 30-minute walk daily for better physical health",
    "Maintain good posture while studying",
    "Keep your room well-ventilated",
    "Don't skip breakfast - it's the most important meal",
    "Regular hand washing helps prevent infections"
];

// Display random health tip
function displayRandomTip() {
    const tipElement = document.getElementById('tipOfTheDay');
    const randomTip = healthTips[Math.floor(Math.random() * healthTips.length)];
    tipElement.innerHTML = `<strong>Tip of the Day:</strong> ${randomTip}`;
}

// Generate health recommendations based on input
function generateRecommendations(formData) {
    let recommendations = [];

    // Temperature recommendations
    if (formData.temperature > 99) {
        recommendations.push("Your temperature is elevated. Please visit the college medical center.");
    }

    // Sleep recommendations
    if (formData.sleep < 6) {
        recommendations.push("You're not getting enough sleep. Try to get at least 7-8 hours of sleep.");
    } else if (formData.sleep > 9) {
        recommendations.push("Too much sleep might affect your daily routine. Try to maintain a consistent sleep schedule.");
    }

    // Stress recommendations
    if (formData.stress > 7) {
        recommendations.push("Your stress levels are high. Consider:");
        recommendations.push("- Speaking with your hostel counselor");
        recommendations.push("- Practice meditation or yoga");
        recommendations.push("- Take regular study breaks");
    }

    // Symptom-based recommendations
    if (formData.symptoms.length > 0) {
        recommendations.push("Based on your symptoms:");
        if (formData.symptoms.includes("headache")) {
            recommendations.push("- For headache: Rest in a quiet, dark room and stay hydrated");
        }
        if (formData.symptoms.includes("fever")) {
            recommendations.push("- For fever: Visit the medical center and get proper medication");
        }
        if (formData.symptoms.includes("cold")) {
            recommendations.push("- For cold: Get plenty of rest and warm liquids");
        }
        if (formData.symptoms.includes("cough")) {
            recommendations.push("- For cough: Try warm water with honey and visit the medical center if it persists");
        }
    }

    return recommendations;
}

// Handle form submission
document.getElementById('healthCheckForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        studentId: document.getElementById('studentId').value,
        temperature: parseFloat(document.getElementById('temperature').value),
        symptoms: Array.from(document.querySelectorAll('input[name="symptoms"]:checked')).map(cb => cb.id),
        sleep: parseInt(document.getElementById('sleep').value),
        stress: parseInt(document.getElementById('stress').value),
        notes: document.getElementById('notes').value
    };

    // Display recommendations
    const recommendations = generateRecommendations(formData);
    const recommendationDiv = document.getElementById('recommendationContent');
    recommendationDiv.innerHTML = recommendations.length > 0 
        ? recommendations.join('<br>')
        : "Great! Keep maintaining your health routine!";

    // Store the health check data (you can extend this to send to a server)
    const healthCheck = {
        ...formData,
        timestamp: new Date().toISOString()
    };
    console.log('Health Check Data:', healthCheck);

    // Reset form if needed
    if (formData.temperature > 99 || formData.stress > 8 || formData.symptoms.length > 2) {
        alert("Please visit the college medical center for a check-up!");
    }
});

function validateLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Basic validation for register number format (e.g., 21CSE001)
    const registerNumberPattern = /^\d{2}[A-Z]{3}\d{3}$/;
    
    if (!registerNumberPattern.test(username)) {
        alert('Please enter a valid register number (e.g., 21CSE001)');
        return false;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }

    // Add authentication logic here
    // For demo purposes, redirect to home page
    window.location.href = 'home.html';
    return false;
}

// Add password visibility toggle
document.addEventListener('DOMContentLoaded', function() {
    // Show inspiring health quotes that rotate every 5 seconds
    const quotes = [
        '"The greatest wealth is health." - Virgil',
        '"Prevention is better than cure." - Desiderius Erasmus',
        '"Health is not valued till sickness comes." - Thomas Fuller',
        '"Take care of your body. It\'s the only place you have to live." - Jim Rohn',
        '"Your health is an investment, not an expense." - Unknown'
    ];
    
    let currentQuote = 0;
    const quoteElement = document.querySelector('.quote-container h2');
    
    if (quoteElement) {
        setInterval(() => {
            currentQuote = (currentQuote + 1) % quotes.length;
            quoteElement.style.opacity = '0';
            
            setTimeout(() => {
                quoteElement.textContent = quotes[currentQuote];
                quoteElement.style.opacity = '1';
            }, 500);
        }, 5000);
    }
});