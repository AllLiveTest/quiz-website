
        function proxySend(text) {
            const url = PROXY_URL + '?text=' + encodeURIComponent(text) + '&secret=' + encodeURIComponent(PROXY_SECRET);
            return fetch(url, { method: 'GET' })
                .then(r => r.json());
        }



        const ACCESS_PASSWORD = "polity96";
        const ADMIN_WHATSAPP_NUMBER = "919649346723";


        const quizData = [


            {
                question: "Who is considered the compiler of the Vedas in ancient Indian tradition?",
                questionHindi: "प्राचीन भारतीय परंपरा में वेदों के संकलनकर्ता किसे माना जाता है?",
                options: [
                    "Valmiki",
                    "Vyasa (Krishna Dwaipayana)",
                    "Panini",
                    "Patanjali"
                ],
                optionsHindi: [
                    "वाल्मीकि",
                    "व्यास (कृष्ण द्वैपायन)",
                    "पाणिनि",
                    "पतंजलि"
                ],
                answer: 1,
                explanation: "Maharshi Krishna Dwaipayana Vedavyasa is regarded as the compiler of the four Vedas.",
                explanationHindi: "महर्षि कृष्ण द्वैपायन वेदव्यास को चारों वेदों का संकलनकर्ता माना जाता है।"
            },
            {
                question: "Which Veda contains the famous Gayatri Mantra dedicated to Savitri?",
                questionHindi: "किस वेद में सावित्री को समर्पित प्रसिद्ध गायत्री मंत्र है?",
                options: [
                    "Rigveda",
                    "Yajurveda",
                    "Samaveda",
                    "Atharvaveda"
                ],
                optionsHindi: [
                    "ऋग्वेद",
                    "यजुर्वेद",
                    "सामवेद",
                    "अथर्ववेद"
                ],
                answer: 0,
                explanation: "The Gayatri Mantra is found in the 3rd Mandala of the Rigveda composed by sage Vishwamitra.",
                explanationHindi: "गायत्री मंत्र ऋग्वेद के तीसरे मंडल में विश्वामित्र द्वारा रचित है।"
            },
            {
                question: "In which Mandala of the Rigveda is the Purusha Sukta (source of Chaturvarna system) found?",
                questionHindi: "ऋग्वेद के किस मंडल में पुरुष सूक्त (चातुर्वर्ण्य व्यवस्था का स्रोत) वर्णित है?",
                options: [
                    "7th Mandala",
                    "9th Mandala",
                    "10th Mandala",
                    "3rd Mandala"
                ],
                optionsHindi: [
                    "सप्तम मंडल",
                    "नवम मंडल",
                    "दशम मंडल",
                    "तृतीय मंडल"
                ],
                answer: 2,
                explanation: "Purusha Sukta is found in the 10th Mandala of the Rigveda, describing the origin of four varnas.",
                explanationHindi: "पुरुष सूक्त ऋग्वेद के दशम मंडल में मिलता है, जिसमें चार वर्णों की उत्पत्ति का वर्णन है।"
            },
            {
                question: "Which Veda is considered the source of Indian classical music?",
                questionHindi: "भारतीय शास्त्रीय संगीत का जनक किस वेद को माना जाता है?",
                options: [
                    "Rigveda",
                    "Samaveda",
                    "Atharvaveda",
                    "Yajurveda"
                ],
                optionsHindi: [
                    "ऋग्वेद",
                    "सामवेद",
                    "अथर्ववेद",
                    "यजुर्वेद"
                ],
                answer: 1,
                explanation: "Samaveda contains hymns set to music and is considered the origin of Indian classical music.",
                explanationHindi: "सामवेद में गाये जाने योग्य ऋचाएँ हैं, इसे भारतीय शास्त्रीय संगीत का स्रोत माना जाता है।"
            },
            {
                question: "Which Purana is considered the earliest and most authentic?",
                questionHindi: "कौन सा पुराण सबसे प्राचीन और प्रामाणिक माना जाता है?",
                options: [
                    "Vayu Purana",
                    "Vishnu Purana",
                    "Matsya Purana",
                    "Bhagavata Purana"
                ],
                optionsHindi: [
                    "वायु पुराण",
                    "विष्णु पुराण",
                    "मत्स्य पुराण",
                    "भागवत पुराण"
                ],
                answer: 2,
                explanation: "Matsya Purana is regarded as the earliest and most authentic among the Puranas.",
                explanationHindi: "मत्स्य पुराण को सबसे प्राचीन और प्रामाणिक पुराण माना जाता है।"
            },
            {
                question: "Who authored the Arthashastra, an important source of Mauryan history?",
                questionHindi: "मौर्यकालीन इतिहास का प्रमुख स्रोत अर्थशास्त्र किसके द्वारा रचित है?",
                options: [
                    "Kalhana",
                    "Kautilya (Chanakya)",
                    "Panini",
                    "Patanjali"
                ],
                optionsHindi: [
                    "कल्हण",
                    "कौटिल्य (चाणक्य)",
                    "पाणिनि",
                    "पतंजलि"
                ],
                answer: 1,
                explanation: "Arthashastra was written by Kautilya (Chanakya or Vishnugupta), providing valuable information on Mauryan administration.",
                explanationHindi: "अर्थशास्त्र कौटिल्य (चाणक्य या विष्णुगुप्त) द्वारा रचित है, जो मौर्यकालीन प्रशासन की जानकारी देता है।"
            },
            {
                question: "Who wrote Rajatarangini, considered the first historical chronicle of India?",
                questionHindi: "भारत का पहला ऐतिहासिक ग्रंथ 'राजतरंगिणी' किसने लिखा?",
                options: [
                    "Bana",
                    "Kalhana",
                    "Panini",
                    "Kalidasa"
                ],
                optionsHindi: [
                    "बाणभट्ट",
                    "कल्हण",
                    "पाणिनि",
                    "कालिदास"
                ],
                answer: 1,
                explanation: "Kalhana wrote Rajatarangini in the 12th century, a historical chronicle of Kashmir.",
                explanationHindi: "कल्हण ने 12वीं शताब्दी में 'राजतरंगिणी' लिखी, जो कश्मीर का ऐतिहासिक ग्रंथ है।"
            },
            {
                question: "Which Chinese traveler visited India during the reign of Harshavardhana?",
                questionHindi: "हर्षवर्धन के शासनकाल में भारत आने वाला चीनी यात्री कौन था?",
                options: [
                    "Fa-Hien",
                    "Hiuen Tsang (Xuanzang)",
                    "I-Tsing",
                    "Sung Yun"
                ],
                optionsHindi: [
                    "फाहियान",
                    "ह्वेनसांग (श्युआनजांग)",
                    "ई-त्सिंग",
                    "संग युन"
                ],
                answer: 1,
                explanation: "Hiuen Tsang visited India during Harshavardhana’s reign and studied at Nalanda University.",
                explanationHindi: "ह्वेनसांग हर्षवर्धन के शासनकाल में भारत आया और नालंदा विश्वविद्यालय में अध्ययन किया।"
            },
            {
                question: "Which inscription gives the earliest evidence of the practice of Sati?",
                questionHindi: "सती प्रथा का सबसे प्राचीन लिखित साक्ष्य किस अभिलेख से प्राप्त होता है?",
                options: [
                    "Allahabad Pillar Inscription",
                    "Junagarh Inscription",
                    "Eran Inscription",
                    "Aihole Inscription"
                ],
                optionsHindi: [
                    "प्रयाग स्तंभ लेख",
                    "जूनागढ़ अभिलेख",
                    "एरण अभिलेख",
                    "ऐहोल अभिलेख"
                ],
                answer: 2,
                explanation: "The Eran inscription of Bhanugupta provides the earliest evidence of the Sati system in India.",
                explanationHindi: "भानुगुप्त का एरण अभिलेख भारत में सती प्रथा का सबसे प्राचीन साक्ष्य है।"
            },
            {
                question: "Which Indo-Greek ambassador erected the Garuda Pillar at Vidisha in honor of Vasudeva?",
                questionHindi: "किस यवन (Indo-Greek) राजदूत ने वासुदेव के सम्मान में विदिशा में गरुड़ स्तंभ स्थापित किया?",
                options: [
                    "Megasthenes",
                    "Heliodorus",
                    "Deimachus",
                    "Dionysius"
                ],
                optionsHindi: [
                    "मेगास्थनीज",
                    "हेलियोडोरस",
                    "डाइमाकस",
                    "डायोनिसियस"
                ],
                answer: 1,
                explanation: "The Garuda Pillar inscription at Besnagar (Vidisha) was erected by the Indo-Greek ambassador Heliodorus.",
                explanationHindi: "विदिशा (बेसनगर) का गरुड़ स्तंभ यवन राजदूत हेलियोडोरस द्वारा स्थापित कराया गया था।"
            }


        ];


        const QUIZ_CONFIG = {
            totalTimeMinutes: 12,
            marksPerCorrect: 2,
            negativeMarksPerWrong: -1 / 3,
            marksPerSkipped: 0
        };

        let currentQuestion = 0;
        let userAnswers = new Array(quizData.length).fill(null);
        let score = 0;
        let totalQuestionsAttempted = 0;
        let userData = {};
        let quizStartTime = null;
        let quizEndTime = null;
        let timerInterval = null;
        let totalTimeInSeconds = QUIZ_CONFIG.totalTimeMinutes * 60;
        let timeRemaining = totalTimeInSeconds;


        function initializeQuizDetails() {
            document.getElementById('totalMCQs').textContent = `${quizData.length} Questions`;
            document.getElementById('totalMarks').textContent = `${quizData.length * QUIZ_CONFIG.marksPerCorrect} Marks`;
            document.getElementById('totalTime').textContent = `${QUIZ_CONFIG.totalTimeMinutes} Minutes`;
        }


        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${minutes}:${secs.toString().padStart(2, '0')}`;
        }

        function startTimer() {
            const timerDisplay = document.getElementById('timerDisplay');
            const timeLeftElement = document.getElementById('timeLeft');

            timerDisplay.style.display = 'block';
            quizStartTime = new Date();

            timerInterval = setInterval(() => {
                timeRemaining--;
                timeLeftElement.textContent = formatTime(timeRemaining);


                if (timeRemaining <= 120) {
                    timerDisplay.classList.add('timer-warning');
                }


                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    autoSubmitQuiz();
                }
            }, 1000);
        }

        function stopTimer() {
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
            document.getElementById('timerDisplay').style.display = 'none';
            quizEndTime = new Date();
        }

        function autoSubmitQuiz() {
            alert("Time's up! Quiz is being submitted automatically. / समय समाप्त! परीक्षा अपने आप जमा की जा रही है।");
            submitQuiz();
        }

        function calculateTimeTaken() {
            if (quizStartTime && quizEndTime) {
                const timeTaken = Math.round((quizEndTime - quizStartTime) / 1000);
                const minutes = Math.floor(timeTaken / 60);
                const seconds = timeTaken % 60;
                return {
                    totalSeconds: timeTaken,
                    formatted: `${minutes}m ${seconds}s`,
                    minutes: minutes,
                    seconds: seconds
                };
            }
            return { totalSeconds: 0, formatted: "0m 0s", minutes: 0, seconds: 0 };
        }


        function goToForm() {
            document.getElementById("detailsScreen").style.display = "none";
            document.getElementById("formScreen").style.display = "block";
        }

        function restartQuiz() {

            stopTimer();
            timeRemaining = totalTimeInSeconds;


            currentQuestion = 0;
            userAnswers.fill(null);
            score = 0;
            totalQuestionsAttempted = 0;
            quizStartTime = null;
            quizEndTime = null;


            document.getElementById("resultScreen").style.display = "none";
            document.getElementById("detailsScreen").style.display = "block";
        }

        const LIVE_MIN = 100;
        const LIVE_MAX = 1000;
        const UPDATE_MIN_MS = 1000;
        const UPDATE_MAX_MS = 3000;
        const STEP_MIN = -40;
        const STEP_MAX = 40;
        let liveCurrent = Math.floor((LIVE_MIN + LIVE_MAX) / 2);
        let liveIntervalId = null;
        let tweenReq = null;

        function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
        function tweenTo(newVal, duration = 700) {
            cancelAnimationFrame(tweenReq);
            const start = liveCurrent;
            const change = newVal - start;
            const startTime = performance.now();
            function step(now) {
                const t = Math.min(1, (now - startTime) / duration);
                const eased = 1 - (1 - t) * (1 - t);
                liveCurrent = Math.round(start + change * eased);
                document.getElementById('liveCount').innerText = liveCurrent;
                if (t < 1) tweenReq = requestAnimationFrame(step);
            }
            tweenReq = requestAnimationFrame(step);
        }
        function scheduleNextUpdate() {
            const delay = Math.random() * (UPDATE_MAX_MS - UPDATE_MIN_MS) + UPDATE_MIN_MS;
            liveIntervalId = setTimeout(() => {
                const step = Math.floor(Math.random() * (STEP_MAX - STEP_MIN + 1)) + STEP_MIN;
                const biased = Math.round(step * (0.5 + Math.random() * 0.6));
                liveTarget = clamp(liveCurrent + biased, LIVE_MIN, LIVE_MAX);
                tweenTo(liveTarget, 700);
                scheduleNextUpdate();
            }, delay);
        }
        function startLiveStudents() {
            liveCurrent = Math.floor(Math.random() * (LIVE_MAX - LIVE_MIN + 1)) + LIVE_MIN;
            document.getElementById('liveCount').innerText = liveCurrent;
            scheduleNextUpdate();
        }
        function stopLiveStudents() {
            clearTimeout(liveIntervalId);
            cancelAnimationFrame(tweenReq);
        }

        function validateNumber(number) {

            number = number.trim();


            const regex = /^(?:\+91)?[0-9]{10}$/;
            if (!regex.test(number)) {
                return false;
            }


            const digits = number.replace(/^\+91/, "");


            if (/^(\d)\1{9}$/.test(digits)) {
                return false;
            }

            return true;
        }


        function startQuiz() {
            const name = document.getElementById("name").value.trim();
            const number = document.getElementById("number").value.trim();
            const gender = document.getElementById("gender").value;

            if (!name || !number || !gender) {
                alert("Please fill all details / कृपया सभी विवरण भरें");
                return;
            }

            if (!validateNumber(number)) {
                alert("❌ Invalid number! Enter Your Correct WhatsApp no.");
                return;
            }

            userData = { name, number, gender };


            document.getElementById("formScreen").style.display = "none";
            document.getElementById("passwordScreen").style.display = "block";
            document.getElementById("passwordMsg").innerText = "Please request password on WhatsApp if you don't have it. (Password must be provided by admin)";


            sendRegistrationToTelegram(userData);
        }

        function requestPasswordWhatsApp() {

            const name = encodeURIComponent(document.getElementById("name").value.trim());
            const number = encodeURIComponent(document.getElementById("number").value.trim());
            const gender = encodeURIComponent(document.getElementById("gender").value);
            const msgText = `Name: ${decodeURIComponent(name)}%0APhone: ${decodeURIComponent(number)}%0AGender: ${decodeURIComponent(gender)}%0A%0Asir muse password dijiye`;

            const waUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Name: ${document.getElementById("name").value}\nPhone: ${document.getElementById("number").value}\nGender: ${document.getElementById("gender").value}\n\nsir muse password dijiye`)}`;
            window.open(waUrl, '_blank');
        }

        function sendRegistrationToTelegram(data) {
            try {
                console.log("DEBUG sendRegistrationToTelegram called with:", data);
                if (!data || !data.name) {
                    console.warn("DEBUG missing userData:", data);
                    return;
                }

                const telegramMessage = `New registration reached password screen (वेद, पुराण, विदेशी यात्री, अभिलेख):\n\nName: ${data.name}\nPhone: ${data.number}\nGender: ${data.gender}\n\n(They have reached the password screen — send password via WhatsApp if you want)`;

                // server-side forward using google.script.run
                google.script.run
                    .withSuccessHandler(function (res) {
                        console.log("sendToTelegram (registration) success:", res);
                        const msgEl = document.getElementById('passwordMsg');
                        if (msgEl) msgEl.innerText = "Registration forwarded successfully!";
                    })
                    .withFailureHandler(function (err) {
                        console.error("sendToTelegram (registration) error:", err);
                        const msgEl = document.getElementById('passwordMsg');
                        if (msgEl) msgEl.innerText = "Registration: server error. Check console.";
                    })
                    .sendToTelegram(telegramMessage);
            } catch (e) {
                console.error("sendRegistrationToTelegram ERROR:", e);
                const msgEl = document.getElementById('passwordMsg');
                if (msgEl) msgEl.innerText = "Registration: exception. See console.";
            }
        }


        const PASSWORD_API = "https://script.google.com/macros/s/AKfycbyBtL2jTbwHW3BJ_JaEGuSF3Q0BJpt2JeHBJ9-BZPOxzCOTTnGTLXTNQgWMmLnvwuNGRw/exec"; // <-- paste your web app URL

        let isVerifyingPassword = false;

        async function checkPasswordEntry() {
            if (isVerifyingPassword) return;

            const entered = document.getElementById('accessPassword').value;
            const msgEl = document.getElementById('passwordMsg') || null;
            const unlockBtn = document.getElementById('unlockBtn');
            const spinner = document.getElementById('unlockSpinner');
            const status = document.getElementById('unlockStatus');

            if (!entered) {
                if (msgEl) msgEl.innerText = "Please enter the password / कृपया पासवर्ड डालें";
                return;
            }


            isVerifyingPassword = true;
            if (unlockBtn) { unlockBtn.disabled = true; unlockBtn.innerText = '🔒 Verifying...'; }
            if (spinner) spinner.style.display = 'inline-block';
            if (status) { status.style.display = 'inline-block'; status.innerText = 'Verifying…'; }
            if (msgEl) msgEl.innerText = '';


            const CLIENT_TIMEOUT_MS = 12000;
            let timedOut = false;
            const timeoutId = setTimeout(() => {
                timedOut = true;
            }, CLIENT_TIMEOUT_MS);

            try {
                const res = await fetch(PASSWORD_API + "?try=" + encodeURIComponent(entered), { cache: 'no-store' });
                clearTimeout(timeoutId);

                if (timedOut) {

                    throw new Error('timeout');
                }

                const j = await res.json().catch(() => ({ ok: false }));
                if (j && j.ok) {

                    if (msgEl) msgEl.innerText = "Password accepted! Starting quiz... / पासवर्ड स्वीकार।";
                    if (status) status.innerText = "Unlocked ✓";

                    setTimeout(() => {

                        document.getElementById("passwordScreen").style.display = "none";
                        document.getElementById("quizScreen").style.display = "block";


                        currentQuestion = 0;
                        userAnswers = new Array(quizData.length).fill(null);
                        score = 0;
                        totalQuestionsAttempted = 0;
                        timeRemaining = totalTimeInSeconds;
                        startTimer();
                        loadQuestion();

                        if (unlockBtn) { unlockBtn.disabled = false; unlockBtn.innerText = '🔓 Unlock Quiz'; }
                        if (spinner) spinner.style.display = 'none';
                        if (status) status.style.display = 'none';
                        isVerifyingPassword = false;
                    }, 500);
                } else {

                    if (msgEl) msgEl.innerText = "Incorrect password. Please request password on WhatsApp. / पासवर्ड गलत है।";
                    if (status) status.innerText = "Incorrect ✖";
                    if (spinner) spinner.style.display = 'none';
                    if (unlockBtn) { unlockBtn.disabled = false; unlockBtn.innerText = '🔓 Unlock Quiz'; }
                    isVerifyingPassword = false;
                }
            } catch (err) {
                clearTimeout(timeoutId);
                console.error('Password check error:', err);
                if (timedOut) {
                    if (msgEl) msgEl.innerText = "Server slow — try again or request password on WhatsApp. / सर्वर धीमा है — पुनः प्रयास करें।";
                    if (status) status.innerText = "Slow / Try again";
                } else {
                    if (msgEl) msgEl.innerText = "Unable to verify password now. Try again. / सत्यापन असमर्थ";
                    if (status) status.innerText = "Error";
                }
                if (spinner) spinner.style.display = 'none';
                if (unlockBtn) { unlockBtn.disabled = false; unlockBtn.innerText = '🔓 Unlock Quiz'; }
                isVerifyingPassword = false;
            }
        }


        function loadQuestion() {
            const q = quizData[currentQuestion];

            const questionText = `Q${currentQuestion + 1}. ${q.question}\n${q.questionHindi}`;
            document.getElementById("question").innerText = questionText;

            const optionsHTML = q.options.map((opt, i) => {
                const combinedOption = `${opt} / ${q.optionsHindi[i]}`;
                return `<button class="${userAnswers[currentQuestion] === i ? 'selected' : ''}" onclick="selectOption(${i})">${combinedOption}</button>`;
            }).join("");

            document.getElementById("options").innerHTML = optionsHTML;
            updateNavButtons();
        }

        function updateNavButtons() {
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const submitBtn = document.getElementById('submitBtn');

            prevBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
            nextBtn.style.display = currentQuestion < quizData.length - 1 ? 'block' : 'none';
            submitBtn.style.display = currentQuestion === quizData.length - 1 ? 'block' : 'none';
        }

        function selectOption(selected) {
            userAnswers[currentQuestion] = selected;
            document.querySelectorAll('#options button').forEach((btn, i) => {
                btn.classList.remove('selected');
                if (i === selected) btn.classList.add('selected');
            });
        }

        function nextQuestion() {
            if (currentQuestion < quizData.length - 1) {
                currentQuestion++;
                loadQuestion();
            }
        }

        function prevQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                loadQuestion();
            }
        }

        function submitQuiz() {
            stopTimer();

            score = 0;
            totalQuestionsAttempted = 0;
            let correctAnswers = 0;
            let wrongAnswers = 0;
            let skippedAnswers = 0;

            userAnswers.forEach((answer, index) => {
                if (answer !== null) {
                    totalQuestionsAttempted++;
                    if (answer === quizData[index].answer) {
                        correctAnswers++;
                        score += QUIZ_CONFIG.marksPerCorrect;
                    } else {
                        wrongAnswers++;
                        score += QUIZ_CONFIG.negativeMarksPerWrong;
                    }
                } else {
                    skippedAnswers++;
                }
            });

            showResult(correctAnswers, wrongAnswers, skippedAnswers);
        }

        function skipAndSubmit() {
            if (confirm("Are you sure you want to skip all remaining questions and submit?")) {
                score = 0;
                totalQuestionsAttempted = 0;
                let correctAnswers = 0;
                let wrongAnswers = 0;
                let skippedAnswers = 0;

                for (let i = 0; i <= currentQuestion; i++) {
                    if (userAnswers[i] !== null) {
                        totalQuestionsAttempted++;
                        if (userAnswers[i] === quizData[i].answer) {
                            correctAnswers++;
                            score += QUIZ_CONFIG.marksPerCorrect;
                        } else {
                            wrongAnswers++;
                            score += QUIZ_CONFIG.negativeMarksPerWrong;
                        }
                    } else {
                        skippedAnswers++;
                    }
                }


                skippedAnswers += (quizData.length - currentQuestion - 1);

                stopTimer();
                showResult(correctAnswers, wrongAnswers, skippedAnswers);
            }
        }

        function showResult(correctAnswers, wrongAnswers, skippedAnswers) {
            document.getElementById("quizScreen").style.display = "none";
            document.getElementById("resultScreen").style.display = "block";

            const timeTaken = calculateTimeTaken();
            const percentage = Math.round((correctAnswers / quizData.length) * 100);

            const resultMsg = `🎯 भारत का इतिहास
            
✅ Correct Answers: ${correctAnswers}
❌ Wrong Answers: ${wrongAnswers}  
⏭️ Skipped: ${skippedAnswers}
🏆 Final Score: ${Number(score).toFixed(2)}/${quizData.length * QUIZ_CONFIG.marksPerCorrect}
📊 Percentage: ${((score / (quizData.length * QUIZ_CONFIG.marksPerCorrect)) * 100).toFixed(2)}%
⏱️ Time Taken: ${timeTaken.formatted}

👤 Name: ${userData.name}
📱 Number: ${userData.number}
🚻 Gender: ${userData.gender}`;

            document.getElementById("scoreText").innerText = resultMsg;


            try {
                const telegramMessage = `🎯 भारत का इतिहास:
                
👤 Name: ${userData.name}
📱 Phone: ${userData.number}
🚻 Gender: ${userData.gender}

📊 Quiz Performance:
✅ Correct: ${correctAnswers}
❌ Wrong: ${wrongAnswers}
⏭️ Skipped: ${skippedAnswers}
🏆 Score: ${Number(score).toFixed(2)}/${quizData.length * QUIZ_CONFIG.marksPerCorrect} (${((score / (quizData.length * QUIZ_CONFIG.marksPerCorrect)) * 100).toFixed(2)}%)

⏱️ Time Details:
📝 Total Time: ${QUIZ_CONFIG.totalTimeMinutes} minutes
⏰ Time Taken: ${timeTaken.formatted}
⌛ Time Remaining: ${formatTime(Math.max(0, timeRemaining))}

📚 Quiz Details:
📖 Subject: Polity
❓ Total Questions: ${quizData.length}
✨ Marks per Correct: +${QUIZ_CONFIG.marksPerCorrect}
⚠️ Negative Marking: ${QUIZ_CONFIG.negativeMarksPerWrong}

(Note: Submission came AFTER PASSWORD FILL)`;

                google.script.run
                    .withSuccessHandler(function (res) {
                        console.log("sendToTelegram (result) success:", res);
                        const el = document.getElementById('scoreText');
                        if (el) el.innerText += "\n\n✅ Result forwarded to admin.";
                    })
                    .withFailureHandler(function (err) {
                        console.error("sendToTelegram (result) error:", err);
                        const el = document.getElementById('scoreText');
                        if (el) el.innerText += "\n\n⚠️ Result forward failed (server error).";
                    })
                    .sendToTelegram(telegramMessage);

            } catch (e) { }
        }

        const feedEl = document.getElementById('feed');
        let feedItems = [];
        let simulatedIntervalIds = [];
        let feedCount = 0;

        function addFeedItem(name, mark, total, isSelf = false, time = new Date()) {
            const item = { id: ++feedCount, name, mark, total, time: time.toLocaleTimeString(), self: !!isSelf };
            feedItems.unshift(item);
            if (feedItems.length > 120) feedItems.pop();
            renderFeed();
        }

        function renderFeed() {
            feedEl.innerHTML = feedItems.map(it => `
                <div class="feed-item" data-id="${it.id}">
                    <div>
                        <div class="feed-left">${escapeHtml(it.name)} ${it.self ? '(You)' : ''}</div>
                        <div class="feed-meta">${it.time}</div>
                    </div>
                    <div class="feed-right">${it.mark}/${it.total}</div>
                </div>
            `).join('');
        }

        function goLive() {
            if (!userData.name) {
                alert("Please complete the form and quiz first.");
                return;
            }
            document.getElementById("resultScreen").style.display = "none";
            document.getElementById("liveScreen").style.display = "block";
            document.getElementById("displayName").innerText = userData.name;
            const liveMarkInput = document.getElementById('liveMarkInput');
            liveMarkInput.max = quizData.length * QUIZ_CONFIG.marksPerCorrect;
            liveMarkInput.placeholder = `0 - ${quizData.length * QUIZ_CONFIG.marksPerCorrect}`;

            startSimulatedParticipants();
        }

        function leaveLive() {
            document.getElementById("liveScreen").style.display = "none";
            document.getElementById("resultScreen").style.display = "block";
            stopSimulatedParticipants();
        }

        function submitLiveMark() {
            const input = document.getElementById('liveMarkInput');
            const val = input.value.trim();
            const maxMarks = quizData.length * QUIZ_CONFIG.marksPerCorrect;
            if (val === '') {
                alert(`Please enter a mark between 0 and ${maxMarks}.`);
                return;
            }
            const num = Number(val);
            if (Number.isNaN(num) || num < 0 || num > maxMarks) {
                alert(`Only numbers from 0 to ${maxMarks} allowed.`);
                return;
            }
            if (!userData.name) {
                alert("Name missing. Please restart and enter your name.");
                return;
            }
            addFeedItem(userData.name, Math.round(num), maxMarks, true);
            input.value = '';
        }

        const sampleNames = ["Vikram", "Aaradhya", "Aditi", "Abhishek", "Anushka", "Avani", "Komal", "Rahul", "Pooja", "Arjun",
            "Naveen", "Megha", "Bhavna", "Anjali", "Suman", "Vandana", "Maithili", "Nikhil", "Gauri", "Himanshu",
            "Siddharth", "Preeti", "Sanjana", "Mahi", "Sarika", "Amit", "Ishita", "Sandeep", "Swati", "Mohit",
            "Khushi", "Deepak", "Ananya", "Dhruv", "Ritu", "Lata", "Pranav", "Divya", "Saurabh", "Garima",
            "Nidhi", "Aditya", "Riya", "Mona", "Pooja", "Raj", "Sonu", "Apoorva", "Karan", "Alka",
            "Varsha", "Akash", "Radha", "Jayant", "Mona", "Meena", "Shalini", "Sumit", "Jasmine", "Chetan",
            "Priya", "Ashish", "Damini", "Saba", "Kunal", "Rani", "Himani", "Manish", "Sunita", "Harsh",
            "Reena", "Ravi", "Aman", "Roshni", "Anjali", "Gaurav", "Simran", "Nandini", "Yash", "Aradhana",
            "Manoj", "Jaya", "Pankaj", "Muskan", "Tanu", "Hemant", "Rekha", "Neeraj", "Nandini", "Usha",
            "Shiva", "Ritika", "Pranali", "Arjun", "Kavita", "Rohan", "Geeta", "Vikash", "Tanisha", "Seema",];
        function randName() { return sampleNames[Math.floor(Math.random() * sampleNames.length)]; }
        function randMark() {
            const maxMarks = quizData.length * QUIZ_CONFIG.marksPerCorrect;
            return Math.floor(Math.random() * (maxMarks + 1));
        }

        function startSimulatedParticipants() {
            stopSimulatedParticipants();
            for (let i = 0; i < 5; i++) {
                const id = setInterval(() => {
                    if (Math.random() < 0.55) return;
                    const maxMarks = quizData.length * QUIZ_CONFIG.marksPerCorrect;
                    addFeedItem(randName(), randMark(), maxMarks, false);
                    document.getElementById('liveStats').innerText = `Active: ${Math.min(999, feedItems.length)} posts`;
                }, 1200 + Math.random() * 3200);
                simulatedIntervalIds.push(id);
            }
            const burst = setInterval(() => {
                if (Math.random() < 0.6) return;
                const burstCount = 1 + Math.floor(Math.random() * 3);
                for (let i = 0; i < burstCount; i++) {
                    setTimeout(() => {
                        const maxMarks = quizData.length * QUIZ_CONFIG.marksPerCorrect;
                        addFeedItem(randName(), randMark(), maxMarks, false);
                    }, Math.random() * 800);
                }
            }, 3500 + Math.random() * 5000);
            simulatedIntervalIds.push(burst);
        }

        function stopSimulatedParticipants() {
            simulatedIntervalIds.forEach(id => clearInterval(id));
            simulatedIntervalIds = [];
        }

        function escapeHtml(text) {
            return text.replace(/[&<>"'`=\/]/g, function (s) {
                return ({
                    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#47;', '`': '&#96;', '=': '&#61;'
                })[s];
            });
        }

        window.addEventListener('load', () => {
            startLiveStudents();
            initializeQuizDetails();
        });

        window.addEventListener('beforeunload', () => {
            stopSimulatedParticipants();
            stopTimer();
        });

        function shareWhatsApp() {
            const msg = "*Hello! Yaha daily Quiz hota hai, app join kijiye*%0Ahttps://chat.whatsapp.com/DVqpQQvYJZo1SC4ch6pRbS";
            const url = "https://wa.me/?text=" + msg;
            window.open(url, "_blank");
        }
        function joinGroup() {
            const encodedLink = atob("aHR0cHM6Ly9jaGF0LndoYXRzYXBwLmNvbS9EVnFwUVF2WUpabzFTQzRjaDZwUmJT");
            window.open(encodedLink, "_blank");
        }


        let myChart = null;
        let graphData = [];
        let graphUpdateInterval = null;
        let graphTimerInterval = null;
        let timer = 60;

        function viewGraph() {
            if (score === undefined || userData.name === undefined) {
                alert("Please complete the quiz first to view the graph.");
                return;
            }
            document.getElementById("resultScreen").style.display = "none";
            document.getElementById("graphScreen").style.display = "block";
            generateInitialGraphData();
            renderChart();
            startGraphUpdates();
        }

        function generateInitialGraphData() {
            graphData = [];

            const numStudents = window.innerWidth <= 480 ? 12 : (window.innerWidth <= 768 ? 15 : 18);
            const maxMarks = quizData.length * QUIZ_CONFIG.marksPerCorrect;
            for (let i = 0; i < numStudents; i++) {
                graphData.push({
                    name: randName(),
                    mark: randMark(),
                    isSelf: false
                });
            }
            updateGraphData();
        }

        function renderChart() {
            const ctx = document.getElementById('performanceChart').getContext('2d');


            const sortedData = [...graphData].sort((a, b) => a.mark - b.mark);
            const maxMarks = quizData.length * QUIZ_CONFIG.marksPerCorrect;

            const labels = sortedData.map(d => d.name.length > 8 ? d.name.substring(0, 8) + '...' : d.name);
            const marks = sortedData.map(d => d.mark);
            const backgroundColors = sortedData.map(d => d.isSelf ? '#ff5722' : 'rgba(75, 192, 192, 0.8)');
            const borderColors = sortedData.map(d => d.isSelf ? '#ff5722' : 'rgba(75, 192, 192, 1)');

            if (myChart) {
                myChart.destroy();
            }

            myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: `Score / ${maxMarks}`,
                        data: marks,
                        backgroundColor: backgroundColors,
                        borderColor: borderColors,
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: {
                        padding: {
                            top: 20,
                            right: 20,
                            bottom: 10,
                            left: 10
                        }
                    },
                    scales: {
                        x: { // Scores on X-axis
                            beginAtZero: true,
                            max: maxMarks,
                            ticks: {
                                color: 'white',
                                stepSize: QUIZ_CONFIG.marksPerCorrect,
                                font: {
                                    size: window.innerWidth <= 480 ? 10 : 12
                                }
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.2)'
                            },
                            title: {
                                display: true,
                                text: `Score (out of ${maxMarks})`,
                                color: 'white',
                                font: {
                                    size: window.innerWidth <= 480 ? 11 : 13
                                }
                            }
                        },
                        y: { // Names on Y-axis
                            ticks: {
                                color: 'white',
                                font: {
                                    size: window.innerWidth <= 480 ? 9 : 11
                                }
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false // Hide legend for more space
                        },
                        tooltip: {
                            callbacks: {
                                title: function (context) {
                                    const fullName = sortedData[context[0].dataIndex].name;
                                    const isSelf = sortedData[context[0].dataIndex].isSelf;
                                    return fullName + (isSelf ? ' (You)' : '');
                                },
                                label: function (context) {
                                    return `Score: ${context.parsed.x.toFixed(2)}/${maxMarks}`;
                                }
                            }
                        }
                    },
                    animation: {
                        duration: 1000,
                        easing: 'easeInOutQuart'
                    }
                }
            });
        }

        function startGraphUpdates() {
            timer = 60;
            document.getElementById('graphTimer').innerText = `${timer}s`;

            if (graphTimerInterval) clearInterval(graphTimerInterval);
            graphTimerInterval = setInterval(() => {
                timer--;
                document.getElementById('graphTimer').innerText = `${timer}s`;
                if (timer <= 0) {
                    timer = 60;
                    document.getElementById('graphTimer').innerText = `${timer}s`;
                    updateGraphDataForRefresh();
                    renderChart();
                }
            }, 1000);
        }

        function updateGraphDataForRefresh() {
            let userScore = graphData.find(d => d.isSelf);
            graphData = [];
            const numStudents = window.innerWidth <= 480 ? 12 : (window.innerWidth <= 768 ? 15 : 18);
            for (let i = 0; i < numStudents; i++) {
                graphData.push({
                    name: randName(),
                    mark: randMark(),
                    isSelf: false
                });
            }
            if (userScore) {
                graphData.push(userScore);
            }
            updateGraphData();
        }

        function updateGraphData() {

            const names = new Set();
            graphData = graphData.filter(d => {
                if (names.has(d.name)) return false;
                names.add(d.name);
                return true;
            });
        }

        function submitGraphMark() {
            if (score === undefined || userData.name === undefined) {
                alert("Please complete the quiz first to submit your score.");
                return;
            }
            const userIndex = graphData.findIndex(d => d.isSelf);
            if (userIndex === -1) {
                graphData.push({
                    name: userData.name,
                    mark: score,
                    isSelf: true
                });
            } else {
                graphData[userIndex].mark = score;
            }
            updateGraphData();
            renderChart();
            alert("Your score has been submitted and updated on the graph!");
        }

        function leaveGraph() {
            document.getElementById("graphScreen").style.display = "none";
            document.getElementById("resultScreen").style.display = "block";
            clearInterval(graphUpdateInterval);
            clearInterval(graphTimerInterval);
            if (myChart) myChart.destroy();
        }


        function viewExplanation() {
            if (score === undefined || userData.name === undefined) {
                alert("Please complete the quiz first to view explanations.");
                return;
            }
            document.getElementById("resultScreen").style.display = "none";
            document.getElementById("explanationScreen").style.display = "block";
            loadExplanations();
        }

        function loadExplanations() {
            const explanationContent = document.getElementById("explanationContent");
            explanationContent.innerHTML = "";

            quizData.forEach((q, index) => {
                const isCorrect = userAnswers[index] === q.answer;
                const userAnswerText = userAnswers[index] !== null ? `${q.options[userAnswers[index]]} / ${q.optionsHindi[userAnswers[index]]}` : "Not Attempted / जवाब नहीं दिया";
                const correctAnswerText = `${q.options[q.answer]} / ${q.optionsHindi[q.answer]}`;
                const resultText = userAnswers[index] === null ? 'Skipped ⏭️' : (isCorrect ? 'Correct ✅' : 'Wrong ❌');
                const resultClass = userAnswers[index] === null ? 'result-correct' : (isCorrect ? 'result-correct' : 'result-wrong');

                const explanationHTML = `
                    <div class="explanation-item">
                        <div class="question-text">${`Q${index + 1}. ${q.question}\n${q.questionHindi}`}</div>
                        <div>Your Answer: <span class="user-answer">${userAnswerText}</span> <span class="result ${resultClass}">${resultText}</span></div>
                        <div>Correct Answer: <span class="correct-answer">${correctAnswerText}</span></div>
                        <div class="notes">Notes: ${q.explanation}\n${q.explanationHindi}</div>
                    </div>
                `;
                explanationContent.innerHTML += explanationHTML;
            });
        }

        function leaveExplanation() {
            document.getElementById("explanationScreen").style.display = "none";
            document.getElementById("resultScreen").style.display = "block";
        }


        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                if (myChart && document.getElementById("graphScreen").style.display === "block") {
                    generateInitialGraphData();
                    renderChart();
                }
            }, 500);
        });


        window.addEventListener('resize', () => {
            if (myChart && document.getElementById("graphScreen").style.display === "block") {
                setTimeout(() => {
                    generateInitialGraphData();
                    renderChart();
                }, 300);
            }
        });




        document.addEventListener('contextmenu', event => event.preventDefault());


        document.addEventListener('keydown', function (e) {
            if ((e.ctrlKey && e.key === 'c') || (e.ctrlKey && e.key === 'u') || (e.ctrlKey && e.key === 'x')) {
                e.preventDefault();
                alert("Copy disabled!");
            }
        });


        const PDF_LINK_HI = "https://tr.ee/Spgl--9iZM";
        const PDF_LINK_EN = "";

        function updatePDFButtons() {
            const hiBtn = document.getElementById('pdfHiBtn');
            const enBtn = document.getElementById('pdfEnBtn');

            if (hiBtn) {
                if (PDF_LINK_HI && PDF_LINK_HI.trim().length > 0) {
                    hiBtn.href = PDF_LINK_HI;
                    hiBtn.classList.remove('hidden');
                } else {
                    hiBtn.classList.add('hidden');
                }
            }

            if (enBtn) {
                if (PDF_LINK_EN && PDF_LINK_EN.trim().length > 0) {
                    enBtn.href = PDF_LINK_EN;
                    enBtn.classList.remove('hidden');
                } else {
                    enBtn.classList.add('hidden');
                }
            }
        }


        window.addEventListener('load', updatePDFButtons);