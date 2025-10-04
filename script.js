const capitalWishes = {
    'A': "⚡ A for Amperes! May your energy levels be high all year!",
    'B': "🎂 B for Breadboard! May all your life's connections be strong and true.",
    'C': "⚡ C for Capacitors! May you store up endless joy and energy for the coming year.",
    'D': "🎊 D for DC! May your happiness be as constant as a direct current!",
    'E': "💡 E for EMF! May you always be a source of positive energy and bright ideas.",
    'F': "🎁 F for Frequency! May good times happen more often this year.",
    'G': "🪅 G for Ground! Stay humble and well-balanced.",
    'H': "🌈 H for Hertz! Hope your birthday is full of happy frequencies!",
    'I': "💡 I for Inductors! May you always resist negativity.",
    'J': "🍬 J for Joules! A unit of energy for an energetic person like you!",
    'K': "👑 K for Kirchhoff's Laws! May you always know where you stand in life's circuits.",
    'L': "💖 L for LEDs! May your future be bright!",
    'M': "🎉 M for Multimeter! May you always find the right measure of happiness.",
    'N': "🧁 N for Node! You're a central point of happiness for everyone!",
    'O': "Ω O for Ohm's Law! May your life follow the path of least resistance to happiness.",
    'P': "⚡ P for Power! Wishing you a powerful year ahead (P=VI!).",
    'Q': "👸 Q for Queen/King! Rule your day!",
    'R': "💪 R for Resistance! May yours to cake and celebration be futile today!",
    'S': "🍦 S for Soldering! Hope you and your friends bond well today!",
    'T': "🎈 T for Transformers! May you transform all your dreams into reality.",
    'U': "💫 U for Unique! There’s no one like you!",
    'V': "⚡ V for Voltage! May you always have high potential and a positive charge.",
    'W': "💡 W for Watts! You shine brighter than a 100-watt bulb!",
    'X': "❌ X for X-factor! You’ve got it!",
    'Y': "🌞 Y for Youth! Keep your spirit young!",
    'Z': "🐾 Z for Zeal! Stay passionate always!"
};
const smallWishes = {
    'a': "🎉 a for awesome things coming your way!",
    'b': "🎁 b for big hugs and surprises!",
    'c': "🎂 c for cake... because what else matters?",
    'd': "🎈 d for dancing under the stars!",
    'e': "🌟 e for endless joy!",
    'f': "🍰 f for fantastic celebrations!",
    'g': "🎊 g for gray hairs... which are just wisdom highlights, right?",
    'h': "🧁 h for happiness always!",
    'i': "🌈 i for incredible dreams!",
    'j': "🍦 j for just pure joy!",
    'k': "💐 k for kindness received!",
    'l': "🎀 l for laughter everywhere!",
    'm': "🥳 m for moments worth remembering!",
    'n': "🎶 n for new adventures!",
    'o': "🎂 o for outstanding blessings!",
    'p': "😴 p for peace and quiet... just kidding, let's party!",
    'q': "👑 q for quiet confidence!",
    'r': "🚀 r for reaching goals!",
    's': "🍫 s for sweet, sweet naps. May you have many of them.",
    't': "🎉 t for thrilling experiences!",
    'u': "💌 u for unforgettable times!",
    'v': "🎈 v for vibrant joy!",
    'w': "🌞 w for warm wishes!",
    'x': "❌ x for extra smiles!",
    'y': "🍬 y for youthful fun!",
    'z': "🎁 z for zest in everything!"
};
const numberWishes = {
    1: "🍼 Wish #1: May this be your first step to endless happiness!",
    2: "🧸 Wish #2: Double the joy and love this year!",
    3: "🍭 Wish #3: Triple the reasons to smile every day!",
    4: "🎈 Wish #4: Four seasons full of celebrations await you!",
    5: "⭐ Wish #5: High five to happiness and health!",
    6: "🚀 Wish #6: Six sweet surprises are on the way!",
    7: "🍀 Wish #7: Lucky #7! May your circuits always be closed and your signals be free of noise.",
    8: "🦆 Wish #8: May infinite opportunities open for you!",
    9: "💖 Wish #9: Let kindness and love multiply times nine!",
    10: "✨ Wish #10: A perfect 10 for your amazing journey ahead!",
    11: "🎮 Wish #11: Twin candles, twin cheers — enjoy your day!",
    12: "🍕 Wish #12: A dozen dreams waiting to come true!",
    13: "🎧 Wish #13: Let every moment surprise you in a good way!",
    14: "🛹 Wish #14: Fourteen fireworks of fun are on the horizon!",
    15: "📚 Wish #15: May 15 gifts of joy find you today!",
    16: "🚗 Wish #16: Sweet sixteen and sweeter surprises await!",
    17: "🎬 Wish #17: Seventeen sparkles in your sky of dreams!",
    18: "🎓 Wish #18: You're an adult! You can now do everything you've been doing since you were 15 legally.",
    19: "🔑 Wish #19: Nineteen ways to say 'You’re awesome!'",
    20: "💡 Wish #20: Happy 20th! You've left your 'teen' resistance behind. Hope your 2nd year of EE is more AC (Always Chilling) than DC (a Direct Current of assignments)!",
    21: "🥂 Wish #21: Cheers to being 21! May your drink be strong and your morning headache be weak.",
    22: "☕ Wish #22: Double digits, double the magic!",
    23: "💼 Wish #23: You're a star — let your story shine!",
    24: "✈ Wish #24: Around the clock, may happiness tick!",
    25: "🥳 Wish #25: A silver jubilee for a golden person! Happy 25th!",
    26: "🗺 Wish #26: Let this year surprise you beautifully!",
    27: "😂 Wish #27: Don't worry about getting older. You're still going to do dumb stuff, just slower.",
    28: "🍷 Wish #28: You're aging like fine wine — cheers!",
    29: "💪 Wish #29: Shine brighter than 29 suns!",
    30: "🧠 Wish #30: Welcome to your 30s! Your back will now be your official weather forecast.",
    31: "🌱 Wish #31: Today is your bonus day of joy!",
    32: "📈 Wish #32: May every day feel fresh and fantastic!",
    33: "🏆 Wish #33: Triple threes, triple luck!",
    34: "🌿 Wish #34: Keep glowing and growing strong!",
    35: "👑 Wish #35: This is your power age — go rule it!",
    36: "🥇 Wish #36: Sprinkle magic in everything you do!",
    37: "⛰ Wish #37: Be bold, brave, and beautifully you!",
    38: "🎨 Wish #38: Let this year bloom with peace and passion!",
    39: "🧘 Wish #39: End of a decade — start of greatness!",
    40: "😎 Wish #40: You're not 40. You're 18 with 22 years of experience. And a lot more naps.",
    41: "💎 Wish #41: Reignite dreams and dance into the light!",
    42: "🎣 Wish #42: Keep chasing stars and catching smiles!",
    43: "⛵ Wish #43: Life’s canvas is yours — paint it brightly!",
    44: "☯ Wish #44: Double 4s for double joy!",
    45: "🛡 Wish #45: A toast to wisdom and wins!",
    46: "📷 Wish #46: Celebrate every chapter you've written!",
    47: "🗺 Wish #47: Your story is still unfolding — beautifully!",
    48: "🕰 Wish #48: Age is just a number — joy is timeless!",
    49: "💖 Wish #49: A lifetime of smiles starts again!",
    50: "🥂 Wish #50: Half a century of being awesome! Here's to you!",
    51: "🌳 Wish #51: More milestones, more memories!",
    52: "👓 Wish #52: Your happiness is the real treasure!",
    53: "🌍 Wish #53: A life well-lived, a future well-loved!",
    54: "🏅 Wish #54: Make room for new dreams!",
    55: "🤝 Wish #55: A number that sings success!",
    56: "🕯 Wish #56: Keep living, keep loving, keep laughing!",
    57: "❤‍🔥 Wish #57: May your heart always be young!",
    58: "🕊 Wish #58: Graceful years, grateful moments!",
    59: "♟ Wish #59: Almost sixty, forever sweet!",
    60: "😂 Wish #60: Happy 60th! Don't let aging get you down. It's too hard to get back up again!",
    61: "🍵 Wish #61: Let this year bloom like spring!",
    62: "🐦 Wish #62: Happiness has no age limit!",
    63: "🛂 Wish #63: Celebrate the strength in your steps!",
    64: "🛳 Wish #64: Your wisdom lights every room!",
    65: "🪴 Wish #65: Retire the stress, keep the sparkle!",
    66: "🧶 Wish #66: Double six, double smiles!",
    67: "🔭 Wish #67: Stay young in spirit forever!",
    68: "📚 Wish #68: Enjoy the rewards of every year lived!",
    69: "🗝 Wish #69: Sweetness comes with age!",
    70: "🎁 Wish #70: Seventy years of shine — keep glowing!",
    71: "🌠 Wish #71: Still dreaming, still dancing!",
    72: "🗓 Wish #72: Seventy-two reasons to celebrate YOU!",
    73: "🫂 Wish #73: Here's to health, happiness, and hugs!",
    74: "🌻 Wish #74: May the stars always guide you!",
    75: "🏛 Wish #75: Three quarters of a century of greatness!",
    76: "🔥 Wish #76: Your light continues to shine!",
    77: "🧩 Wish #77: Lucky and loved — that’s you!",
    78: "💝 Wish #78: Stories told, and more to come!",
    79: "👴 Wish #79: Embrace each wrinkle with pride!",
    80: "👵 Wish #80: Eight decades of brilliance!",
    81: "📜 Wish #81: May your days be calm and golden!",
    82: "⏳ Wish #82: You are a treasure to behold!",
    83: "🌅 Wish #83: Keep your heart young and free!",
    84: "🌈 Wish #84: May laughter be your daily dose!",
    85: "⚓ Wish #85: Legends age like fine wine!",
    86: "💐 Wish #86: Keep the spark of youth alive!",
    87: "☀ Wish #87: You are wise, wonderful, and winning!",
    88: "♾ Wish #88: Infinity times two — endless joy!",
    89: "🌕 Wish #89: Your light still leads the way!",
    90: "🎇 Wish #90: A celebration of a beautiful journey!",
    91: "💌 Wish #91: With each year, more hearts you touch!",
    92: "🕊 Wish #92: May peace and pride follow you!",
    93: "🤗 Wish #93: The world is lucky to have you!",
    94: "✍ Wish #94: You’re a walking encyclopedia of love!",
    95: "🌟 Wish #95: Graceful, grateful, and glowing!",
    96: "💫 Wish #96: Still shining like it’s your first birthday!",
    97: "💠 Wish #97: The stories you hold are priceless!",
    98: "👍 Wish #98: Keep smiling — you're doing great!",
    99: "🙌 Wish #99: So close to a century of greatness!",
    100: "💯 Wish #100: A century of inspiration and love! What a legacy!"
};


function generateWish() {
    const input = document.getElementById("userInput").value.trim();
    const output = document.getElementById("output");

    output.classList.remove("show", "error");
    output.style.color = ""; // reset color if changed

    let message = "";
    let isValid = false;

    if (/^\d+$/.test(input)) {
        const number = parseInt(input);
        if (numberWishes[number]) {
            message = numberWishes[number];
            isValid = true;
        } else {
            message = "❗ Enter a number between 1 and 100.";
        }
    } else if (/^[a-zA-Z]$/.test(input)) {
        if (input === input.toUpperCase() && capitalWishes[input]) {
            message = capitalWishes[input];
            isValid = true;
        } else if (input === input.toLowerCase() && smallWishes[input]) {
            message = smallWishes[input];
            isValid = true;
        } else {
            message = "❗ No wish found for that letter.";
        }
    } else {
        message = "❗ Please enter a number (1–100) or a single letter (A–Z, a–z).";
    }

    output.innerText = message;

    if (isValid) {
        output.classList.add("show");
        createConfetti(30);
        createBalloons(10); // 🎈 Add balloons!
        if (window.navigator.vibrate) {
            window.navigator.vibrate(100);
        }

    } else {
        output.classList.add("error");
        void output.offsetWidth;
    }


    // Clear input after 0.8 seconds
    setTimeout(() => {
        document.getElementById("userInput").value = "";
        document.getElementById("userInput").focus();
    }, 800);

}

// Confetti animation generator
function createConfetti(count) {
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
        confetti.style.setProperty('--hue', Math.floor(Math.random() * 360));
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// 🎯 Listen for "Enter" key in input field
document.getElementById("userInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        generateWish();
    }
});

// dynamically adding balloons 
function createBalloons(count) {
    for (let i = 0; i < count; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = (4 + Math.random() * 3) + 's';
        balloon.style.background = `radial-gradient(circle at 30% 30%, hsl(${Math.random() * 360}, 100%, 85%), hsl(${Math.random() * 360}, 100%, 65%))`;
        document.body.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 6000);
    }
}

