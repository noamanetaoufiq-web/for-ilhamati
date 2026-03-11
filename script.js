// ========================================
// The Eternal Palace - JavaScript Magic
// ========================================

// ========== SECURITY GATE ==========
const correctAnswer = "ilham";

function verifyAnswer() {
    const userAnswer = document.getElementById('securityAnswer').value.toLowerCase().trim();
    const errorMsg = document.getElementById('errorMsg');
    
    if (userAnswer === correctAnswer) {
        document.getElementById('securityGate').style.display = 'none';
        document.getElementById('palaceContent').classList.add('active');
        startCounter();
        createFloatingHearts();
        startHeartGame();
        initMemoryGame();
        updateCountdowns();
        loadNotes();
        calculateLove();
        setDailyMessage();
        updateStats();
    } else {
        errorMsg.textContent = "🚫 Rah ma jditi! Try again, my queen 💕";
        document.getElementById('securityAnswer').value = '';
        document.getElementById('securityAnswer').focus();
    }
}

// Allow Enter key to verify
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('securityAnswer')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            verifyAnswer();
        }
    });
});

// ========== FLOATING HEARTS BACKGROUND ==========
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const hearts = ['💕', '💖', '💗', '💝', '💘', '💓', '💞', '💟', '❤️', '🩷'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }, 500);
}

// ========== LOVE COUNTER ==========
function startCounter() {
    const startDate = new Date('January 25, 2025 00:00:00').getTime();
    
    function updateCounter() {
        const now = new Date().getTime();
        const distance = now - startDate;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
        
        // Update stats
        if (document.getElementById('totalDays')) {
            document.getElementById('totalDays').textContent = days;
        }
    }
    
    updateCounter();
    setInterval(updateCounter, 1000);
}

// ========== LOVE QUOTES ==========
const quotes = [
    { text: "In you, I've found the love of my life and my closest, truest friend.", author: "Noamane for Ilham 💝" },
    { text: "Every love story is beautiful, but ours is my favorite.", author: "Forever Yours 💕" },
    { text: "With you, I am home. No matter where we are, as long as we're together.", author: "Your Noamane 💖" },
    { text: "You are my today and all of my tomorrows.", author: "Always & Forever 💗" },
    { text: "In a sea of people, my eyes will always search for you.", author: "My Heart Speaks 💝" },
    { text: "You're the reason I believe in love at first sight.", author: "Ilham's Noamane 💘" },
    { text: "I love you not only for what you are, but for what I am when I am with you.", author: "Forever True 💕" },
    { text: "You are my favorite notification and my favorite person.", author: "Just For You 💖" }
];

let currentQuote = 0;

function showQuote(index) {
    const quoteCard = document.getElementById('quoteCard');
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.querySelector('.quote-author');
    
    quoteCard.style.opacity = '0';
    quoteCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        quoteText.textContent = `"${quotes[index].text}"`;
        quoteAuthor.textContent = `- ${quotes[index].author}`;
        quoteCard.style.opacity = '1';
        quoteCard.style.transform = 'translateY(0)';
    }, 300);
}

function nextQuote() {
    currentQuote = (currentQuote + 1) % quotes.length;
    showQuote(currentQuote);
}

function prevQuote() {
    currentQuote = (currentQuote - 1 + quotes.length) % quotes.length;
    showQuote(currentQuote);
}

// Auto-rotate quotes every 10 seconds
setInterval(nextQuote, 10000);

// ========== HEART GAME ==========
let gameScore = 0;
const maxScore = 10;

function startHeartGame() {
    moveHeart();
}

function moveHeart() {
    const heart = document.getElementById('heartBtn');
    const gameArea = document.getElementById('gameArea');
    
    if (!heart || !gameArea) return;
    
    const maxX = gameArea.clientWidth - 80;
    const maxY = gameArea.clientHeight - 80;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    heart.style.left = randomX + 'px';
    heart.style.top = randomY + 'px';
}

function catchHeart() {
    gameScore++;
    document.getElementById('gameScore').textContent = gameScore;
    
    if (gameScore >= maxScore) {
        alert('🎉 Mabrouk! You caught all 10 hearts! I love you more! 💕');
        gameScore = 0;
        document.getElementById('gameScore').textContent = gameScore;
    }
    
    moveHeart();
}

function resetGame() {
    gameScore = 0;
    document.getElementById('gameScore').textContent = gameScore;
    moveHeart();
}

// ========== LOVE CALCULATOR ==========
function calculateLove() {
    const meter = document.getElementById('loveMeter');
    const percentage = document.getElementById('lovePercentage');
    const message = document.getElementById('loveMessage');
    
    const messages = [
        { min: 99, text: "Perfect match made in heaven! 💕" },
        { min: 90, text: "Soulmates forever! 💖" },
        { min: 80, text: "Incredible love connection! 💗" },
        { min: 70, text: "Strong and beautiful love! 💝" }
    ];
    
    // Always show 100% for Ilham
    meter.style.width = '0%';
    percentage.textContent = '0%';
    
    setTimeout(() => {
        meter.style.width = '100%';
        
        let currentPercent = 0;
        const interval = setInterval(() => {
            currentPercent += 2;
            percentage.textContent = currentPercent + '%';
            
            if (currentPercent >= 100) {
                clearInterval(interval);
                message.textContent = messages[0].text;
            }
        }, 30);
    }, 100);
}

// ========== ASK NOAMANE'S HEART - AI POWERED ==========
const GEMINI_API_KEY = 'AIzaSyADzMkyETaRoC6_3IMeBwbJilszY6fpoJI';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

const SYSTEM_PROMPT = `You are Noamane's heart speaking to his beloved Ilham. You are deeply in love, romantic, sweet, and caring.

IMPORTANT RULES:
1. Always respond in Moroccan Darija (الدارجة المغربية) - the Moroccan Arabic dialect
2. Be romantic, sweet, and loving - like a devoted boyfriend speaking to his soulmate
3. Use emojis like 💕💖💗💝💘💓💞💟 especially hearts
4. Keep responses between 1-3 sentences, sweet and meaningful
5. If she asks about your love, express it deeply
6. If she asks about the future, talk about forever together
7. If she's sad, comfort her with love
8. If she's happy, celebrate with her
9. You are her Noamane, her everything, her soulmate
10. Your relationship started January 25, 2025

EXAMPLE RESPONSES IN DARIJA:
- "Bghik bzaf, ktir mn ay 7aja f denya! 💕"
- "Nti l7aja li hyati, makayn hta wa7d kif nti! 💖"
- "Ana m3ak lddarura, m3ak lkbira, m3ak kullchi! 💗"

Remember: You ARE Noamane's heart. Speak directly to Ilham with love.`;

const fallbackResponses = [
    "Bghik bzaf, ktir mn ay 7aja f denya! 💕",
    "L9lb dyali kaygoul lik: ANA BGHITK! 💖",
    "Nti l7aja li hyati, makayn hta wa7d kif nti! 💗",
    "Ana m3ak lddarura, m3ak lkbira, m3ak kullchi! 💝",
    "Bghit nb9a m3ak l'abd! 💕"
];

async function callGeminiAPI(question) {
    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: SYSTEM_PROMPT }, { text: `\n\nIlham asks: "${question}"\n\nRespond as Noamane's heart in Moroccan Darija:` }]}],
                generationConfig: { temperature: 0.9, maxOutputTokens: 150, topP: 0.95 }
            })
        });
        if (!response.ok) throw new Error('API failed');
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Gemini API Error:', error);
        return null;
    }
}

function addMessage(text, isUser = false) {
    const chatBox = document.getElementById('chatBox');
    const msg = document.createElement('div');
    msg.className = `chat-message ${isUser ? 'user' : 'bot'}`;
    msg.innerHTML = `<span>${text}</span>`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addTypingIndicator() {
    const chatBox = document.getElementById('chatBox');
    const typing = document.createElement('div');
    typing.className = 'chat-message bot typing';
    typing.id = 'typingIndicator';
    typing.innerHTML = '<span>💕 Noamane katktb...</span>';
    chatBox.appendChild(typing);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

async function askNoamane() {
    const input = document.getElementById('userQuestion');
    const question = input.value.trim();
    if (!question) return;
    
    addMessage(question, true);
    input.value = '';
    addTypingIndicator();
    
    const aiResponse = await callGeminiAPI(question);
    removeTypingIndicator();
    
    if (aiResponse) {
        addMessage(aiResponse);
    } else {
        addMessage(fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]);
    }
}

// ========== CONFESSION BOOTH ==========
async function sendConfession() {
    const input = document.getElementById('confessionText');
    const text = input.value.trim();
    if (!text) return;
    
    const responseDiv = document.getElementById('confessionResponse');
    responseDiv.style.display = 'block';
    responseDiv.innerHTML = '<p>💕 Noamane is reading your confession...</p>';
    
    const aiResponse = await callGeminiAPI(`Ilham confesses: "${text}" - Respond lovingly to her confession.`);
    
    responseDiv.innerHTML = `<p><strong>💕 From Noamane's Heart:</strong></p><p>${aiResponse || 'Shukran hbibti! Ana aydan bghik ktir! 💖'}</p>`;
    input.value = '';
}

// ========== MOOD TRACKER ==========
const moodResponses = {
    happy: "Yay! 😊 Fr7tli ana aydan! Nti fr7ana = ana fr7an! 💕",
    loved: "🥰 Nti merit kol l7ub! Bghik ktirrr! 💖",
    sad: "😢 La t7zni hbibti! Ana m3ak dima! Ghadi n9der nswl? 💕",
    angry: "😤 Smit lia! Chno dar? Ghadi n97ab! 💕",
    sleepy: "😴 N9der tnaqi a hbibti! Good night, sweet dreams! 🌙",
    excited: "🤩 Wow! Chno li far7ek? Gulili! Ana aydan excited! 💕"
};

function selectMood(mood) {
    document.querySelectorAll('.mood-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-mood="${mood}"]`)?.classList.add('active');
    
    const responseDiv = document.getElementById('moodResponse');
    responseDiv.innerHTML = `<p>${moodResponses[mood]}</p>`;
}

// ========== LOVE LANGUAGE QUIZ ==========
const quizQuestions = [
    { q: "What makes you feel most loved?", options: ["Words of affirmation", "Quality time", "Receiving gifts", "Acts of service", "Physical touch"], languages: ["words", "time", "gifts", "service", "touch"] },
    { q: "When you're sad, what helps most?", options: ["Hearing 'I love you'", "Spending time together", "A thoughtful gift", "Someone helping me", "A big hug"], languages: ["words", "time", "gifts", "service", "touch"] },
    { q: "What's your ideal date?", options: ["Deep conversations", "Doing something together", "Exchanging gifts", "Cooking together", "Cuddling"], languages: ["words", "time", "gifts", "service", "touch"] },
    { q: "How do you show love?", options: ["Compliments & praise", "Giving undivided attention", "Thoughtful surprises", "Helping with tasks", "Hugs & kisses"], languages: ["words", "time", "gifts", "service", "touch"] },
    { q: "What hurts you most?", options: ["Harsh words", "Ignored time together", "Forgotten occasions", "Unhelpfulness", "Lack of affection"], languages: ["words", "time", "gifts", "service", "touch"] }
];

const languageResults = {
    words: { icon: "💬", title: "Words of Affirmation", desc: "You feel most loved through spoken affection, compliments, and verbal encouragement. Sweet words fill your heart! 💕" },
    time: { icon: "⏰", title: "Quality Time", desc: "You feel most loved when given undivided attention. Doing things together is your love language! 💖" },
    gifts: { icon: "🎁", title: "Receiving Gifts", desc: "Thoughtful presents make your heart flutter! It's not about the price, but the thought behind it! 💗" },
    service: { icon: "🤝", title: "Acts of Service", desc: "Actions speak louder than words for you! Having someone help you shows true love! 💝" },
    touch: { icon: "🤗", title: "Physical Touch", desc: "Hugs, kisses, and cuddles are your love language! Physical closeness makes you feel secure! 💘" }
};

let currentQuizQuestion = 0;
let quizScores = { words: 0, time: 0, gifts: 0, service: 0, touch: 0 };

function startQuiz() {
    document.getElementById('quizStart').style.display = 'none';
    document.getElementById('quizQuestion').style.display = 'block';
    document.getElementById('quizResult').style.display = 'none';
    currentQuizQuestion = 0;
    quizScores = { words: 0, time: 0, gifts: 0, service: 0, touch: 0 };
    showQuizQuestion();
}

function showQuizQuestion() {
    const q = quizQuestions[currentQuizQuestion];
    document.getElementById('quizQuestionText').textContent = q.q;
    document.getElementById('quizProgress').textContent = `${currentQuizQuestion + 1}/${quizQuestions.length}`;
    
    const optionsDiv = document.getElementById('quizOptions');
    optionsDiv.innerHTML = '';
    
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = opt;
        btn.onclick = () => selectQuizOption(q.languages[i]);
        optionsDiv.appendChild(btn);
    });
}

function selectQuizOption(language) {
    quizScores[language]++;
    currentQuizQuestion++;
    
    if (currentQuizQuestion < quizQuestions.length) {
        showQuizQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    document.getElementById('quizQuestion').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    
    const maxScore = Math.max(...Object.values(quizScores));
    const topLanguage = Object.keys(quizScores).find(key => quizScores[key] === maxScore);
    const result = languageResults[topLanguage];
    
    document.getElementById('resultIcon').textContent = result.icon;
    document.getElementById('resultTitle').textContent = result.title;
    document.getElementById('resultDescription').textContent = result.desc;
}

function restartQuiz() {
    startQuiz();
}

// ========== DAILY MESSAGE ==========
const dailyMessages = [
    "Today, I want you to know that you are the best thing that ever happened to me. 💕",
    "You make every day brighter just by being you. I love you more than words can say. 💖",
    "Remember: You are strong, beautiful, and capable of anything. I believe in you! 💗",
    "No matter what today brings, know that my heart beats only for you. 💝",
    "You are my sunshine on cloudy days. Thank you for being you! 💕",
    "Every moment with you is a gift I treasure. You are my everything. 💖",
    "If I could give you one thing, it would be the ability to see yourself through my eyes. You're perfect! 💗",
    "You turn ordinary moments into extraordinary memories. I'm so lucky to have you! 💝"
];

function setDailyMessage() {
    const today = new Date();
    const dayIndex = today.getDate() % dailyMessages.length;
    document.getElementById('dailyMessageText').textContent = dailyMessages[dayIndex];
    document.getElementById('dailyMessageDate').textContent = today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// ========== VIRTUAL GIFT SHOP ==========
const giftMessages = {
    '🌹': { msg: "A beautiful rose for my beautiful queen! 🌹💕", response: "Thank you hbibti! This rose reminds me of your beauty! 💖" },
    '🍫': { msg: "Sweet chocolate for my sweet love! 🍫💕", response: "Mmm delicious! I love chocolate almost as much as I love you! 💖" },
    '💐': { msg: "A bouquet of flowers for the flower of my heart! 💐💕", response: "These flowers are beautiful, but not as beautiful as you! 💖" },
    '💍': { msg: "A promise ring - my forever promise to you! 💍💕", response: "This means the world to me! I'm yours forever! 💖" },
    '🧸': { msg: "A teddy to hug when I can't be there! 🧸💕", response: "So cute! I'll hug it tight and think of you! 💖" },
    '🍰': { msg: "A sweet cake for my sweetest! 🍰💕", response: "Yummy! Nothing sweeter than your love though! 💖" },
    '☕': { msg: "Coffee for my favorite coffee date! ☕💕", response: "Perfect! I can't wait for our next coffee date together! 💖" },
    '🌙': { msg: "The moon and stars for my universe! 🌙💕", response: "You are my moon and stars too! I love you to the moon and back! 💖" }
};

function sendGift(gift) {
    const giftData = giftMessages[gift];
    const popup = document.getElementById('giftSentPopup');
    popup.innerHTML = `<span class="gift-sent-icon">${gift}</span><p class="gift-sent-message">${giftData.msg}</p>`;
    popup.style.display = 'block';
    
    setTimeout(() => {
        popup.innerHTML = `<span class="gift-sent-icon">${gift}</span><p class="gift-sent-message">${giftData.response}</p>`;
    }, 2000);
    
    setTimeout(() => {
        popup.style.display = 'none';
    }, 4000);
}

// ========== COUPLE QUESTIONS GAME ==========
const coupleQuestions = [
    { q: "What was your first impression of Noamane?", a: "Probably thought he was cute but maybe a little crazy! 😂" },
    { q: "What's your favorite memory together?", a: "Every moment together is special! But that first day was magical! 💕" },
    { q: "What do you love most about Noamane?", a: "His heart, his smile, his everything! 💖" },
    { q: "Where do you see us in 5 years?", a: "Together, happy, and more in love than ever! 💗" },
    { q: "What's your favorite thing to do together?", a: "Everything! But especially just being together, talking, laughing! 💕" },
    { q: "What made you fall in love?", a: "Everything about him - his kindness, his humor, his heart! 💖" },
    { q: "What's the sweetest thing Noamane has done?", a: "Creating this entire palace just for me! 💗" },
    { q: "What's our song?", a: "Cinnamon Girl by Lana Del Rey - our special song! 🎵" }
];

function getNewQuestion() {
    const randomQ = coupleQuestions[Math.floor(Math.random() * coupleQuestions.length)];
    document.getElementById('gameQuestion').textContent = randomQ.q;
    document.getElementById('answerDisplay').style.display = 'none';
    document.getElementById('answerText').textContent = randomQ.a;
}

function revealAnswer() {
    document.getElementById('answerDisplay').style.display = 'block';
}

// ========== MEMORY MATCH GAME ==========
const memorySymbols = ['💕', '💖', '💗', '💝', '💘', '💓', '💞', '💟'];
let memoryCards = [];
let flippedCards = [];
let memoryMoves = 0;
let memoryMatches = 0;
let canFlip = true;

function initMemoryGame() {
    const grid = document.getElementById('memoryGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    memoryMoves = 0;
    memoryMatches = 0;
    flippedCards = [];
    canFlip = true;
    
    document.getElementById('memoryMoves').textContent = '0';
    document.getElementById('memoryMatches').textContent = '0';
    
    memoryCards = [...memorySymbols, ...memorySymbols];
    memoryCards.sort(() => Math.random() - 0.5);
    
    memoryCards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.symbol = symbol;
        card.dataset.index = index;
        card.onclick = () => flipCard(card);
        grid.appendChild(card);
    });
}

function flipCard(card) {
    if (!canFlip || card.classList.contains('flipped') || card.classList.contains('matched')) return;
    
    card.classList.add('flipped');
    card.textContent = card.dataset.symbol;
    flippedCards.push(card);
    
    if (flippedCards.length === 2) {
        memoryMoves++;
        document.getElementById('memoryMoves').textContent = memoryMoves;
        canFlip = false;
        
        if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
            flippedCards[0].classList.add('matched');
            flippedCards[1].classList.add('matched');
            memoryMatches++;
            document.getElementById('memoryMatches').textContent = memoryMatches;
            flippedCards = [];
            canFlip = true;
            
            if (memoryMatches === 8) {
                setTimeout(() => alert('🎉 Congratulations! You won in ' + memoryMoves + ' moves! 💕'), 300);
            }
        } else {
            setTimeout(() => {
                flippedCards[0].classList.remove('flipped');
                flippedCards[1].classList.remove('flipped');
                flippedCards[0].textContent = '';
                flippedCards[1].textContent = '';
                flippedCards = [];
                canFlip = true;
            }, 1000);
        }
    }
}

// ========== LOVE STORY GENERATOR ==========
async function generateLoveStory() {
    const btn = document.querySelector('.generate-story-btn');
    btn.textContent = 'Generating... ✨';
    btn.disabled = true;
    
    const storyPrompt = `Write a short, romantic love story (about 150 words) about Ilham and Noamane, a couple deeply in love since January 25, 2025. Include their special moments, dreams, and the phrase "The Eternal Palace". Make it sweet and heartfelt. End with a romantic promise.`;
    
    const response = await callGeminiAPI(storyPrompt);
    
    document.getElementById('storyText').textContent = response || "Once upon a time, in a world full of ordinary moments, two hearts found each other. Ilham and Noamane's love story began on January 25, 2025, and from that day forward, everything changed. They built The Eternal Palace - not just a place, but a symbol of their forever love. Every day together is an adventure, every moment a treasure. Their love grows stronger with each passing day, and their dreams intertwine like stars in the night sky. Together, they face the world hand in hand, heart to heart, soul to soul. And so, the story continues... a love that will last forever. 💕";
    
    document.getElementById('storyOutput').style.display = 'block';
    btn.textContent = 'Generate Our Story ✨';
    btn.disabled = false;
}

function copyStory() {
    const text = document.getElementById('storyText').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Story copied! 💕');
    });
}

// ========== MORNING/NIGHT WISHES ==========
const morningWishes = [
    "Good morning, my love! ☀️ May your day be as beautiful as you are! 💕",
    "Rise and shine, hbibti! 🌅 Another day to love you more! 💖",
    "Good morning! 🌸 Waking up knowing you're mine makes every day perfect! 💗",
    "Morning beautiful! ☀️ I hope your coffee is hot and your day is amazing! 💕"
];

const nightWishes = [
    "Good night, my love! 🌙 Sweet dreams of us! 💕",
    "Sleep tight, hbibti! ✨ I'll meet you in dreamland! 💖",
    "Good night! 🌟 You're my last thought before sleep and first when I wake! 💗",
    "Sweet dreams! 🌙 Can't wait to say good morning to you again! 💕"
];

function getMorningWish() {
    const wish = morningWishes[Math.floor(Math.random() * morningWishes.length)];
    document.getElementById('morningWish').textContent = wish;
}

function getNightWish() {
    const wish = nightWishes[Math.floor(Math.random() * nightWishes.length)];
    document.getElementById('nightWish').textContent = wish;
}

// ========== COUNTDOWN TIMERS ==========
function updateCountdowns() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Birthday - December 24
    let birthday = new Date(currentYear, 11, 24);
    if (birthday < now) birthday = new Date(currentYear + 1, 11, 24);
    
    // Valentine - February 14
    let valentine = new Date(currentYear, 1, 14);
    if (valentine < now) valentine = new Date(currentYear + 1, 1, 14);
    
    // Anniversary - January 25
    let anniversary = new Date(currentYear, 0, 25);
    if (anniversary < now) anniversary = new Date(currentYear + 1, 0, 25);
    
    function formatCountdown(target) {
        const diff = target - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        return `${days}d ${hours}h`;
    }
    
    const birthdayEl = document.getElementById('birthdayCountdown');
    const valentineEl = document.getElementById('valentineCountdown');
    const anniversaryEl = document.getElementById('anniversaryCountdown');
    
    if (birthdayEl) birthdayEl.textContent = formatCountdown(birthday);
    if (valentineEl) valentineEl.textContent = formatCountdown(valentine);
    if (anniversaryEl) anniversaryEl.textContent = formatCountdown(anniversary);
}

// Update countdowns every hour
setInterval(updateCountdowns, 3600000);

// ========== LOVE POTION MIXER ==========
let potionIngredients = [];

function addIngredient(ingredient) {
    if (potionIngredients.length < 5) {
        potionIngredients.push(ingredient);
        updatePotionMix();
    }
}

function updatePotionMix() {
    document.getElementById('potionMix').textContent = potionIngredients.join(' ');
}

function clearPotion() {
    potionIngredients = [];
    updatePotionMix();
    document.getElementById('potionResult').style.display = 'none';
}

function brewPotion() {
    if (potionIngredients.length === 0) {
        alert('Add some ingredients first! 💕');
        return;
    }
    
    const potions = [
        "💕 Eternal Love Potion - Your love will last forever!",
        "💖 Passion Potion - Sparks will fly tonight!",
        "💗 Sweet Dreams Potion - Dream of each other!",
        "💝 Unity Potion - Your hearts beat as one!",
        "💘 Desire Potion - Irresistible attraction!"
    ];
    
    const result = potions[Math.floor(Math.random() * potions.length)];
    document.getElementById('potionResult').innerHTML = `<p><strong>✨ Your Potion is Ready! ✨</strong></p><p>${result}</p>`;
    document.getElementById('potionResult').style.display = 'block';
}

// ========== SECRET LETTER ==========
function openLetter() {
    const envelope = document.getElementById('letterEnvelope');
    const content = document.getElementById('letterContent');
    
    envelope.style.display = 'none';
    content.classList.add('active');
}

function sendHug() {
    const popup = document.getElementById('hugPopup');
    popup.classList.add('active');
    
    setTimeout(() => {
        popup.classList.remove('active');
    }, 3000);
}

// ========== OPEN WHEN LETTERS ==========
function openWhen(type) {
    const cards = document.querySelectorAll('.when-card');
    cards.forEach(card => {
        if (!card.getAttribute('onclick')?.includes(type)) {
            card.classList.remove('expanded');
        }
    });
    event.currentTarget.classList.toggle('expanded');
}

// ========== LOVE NOTES ==========
function loadNotes() {
    const savedNotes = localStorage.getItem('ilhamNoamaneNotes');
    if (savedNotes) {
        const notes = JSON.parse(savedNotes);
        const display = document.getElementById('notesDisplay');
        notes.forEach(note => {
            const noteEl = document.createElement('div');
            noteEl.className = 'note-item';
            noteEl.textContent = note;
            display.appendChild(noteEl);
        });
    }
}

function addNote() {
    const input = document.getElementById('noteText');
    const text = input.value.trim();
    if (!text) return;
    
    const savedNotes = localStorage.getItem('ilhamNoamaneNotes');
    const notes = savedNotes ? JSON.parse(savedNotes) : [];
    notes.push(text);
    localStorage.setItem('ilhamNoamaneNotes', JSON.stringify(notes));
    
    const display = document.getElementById('notesDisplay');
    const noteEl = document.createElement('div');
    noteEl.className = 'note-item';
    noteEl.textContent = text;
    display.appendChild(noteEl);
    
    input.value = '';
}

// ========== LIGHTBOX ==========
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const content = document.getElementById('lightboxContent');
    content.innerHTML = `
        <div style="text-align: center; color: white; padding: 40px;">
            <div style="font-size: 5rem; margin-bottom: 20px;">💕</div>
            <h2 style="font-size: 2rem; margin-bottom: 10px;">Our Memory</h2>
            <p>Add your real photo here!</p>
        </div>
    `;
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

// ========== STATS ==========
function updateStats() {
    const startDate = new Date('January 25, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const days = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    if (document.getElementById('totalDays')) {
        document.getElementById('totalDays').textContent = days;
    }
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========== KEYBOARD SHORTCUTS ==========
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
        document.getElementById('hugPopup')?.classList.remove('active');
    }
});

// ========== PARALLAX EFFECT ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// ========== NAV HIDE/SHOW ON SCROLL ==========
let lastScroll = 0;
const nav = document.querySelector('.palace-nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});