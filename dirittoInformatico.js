const quizQuestions = [
    // A: 12, B: 11, C: 11, D: 11
    {
        question: "Cos'è un ransomware?",
        options: [
            "A. Una minaccia informatica che crittografa i file e richiede un riscatto",
            "B. Un tipo di software che protegge i dati",
            "C. Un sistema di backup automatico",
            "D. Un programma per la creazione di macchine virtuali"
        ],
        correctAnswer: "A", 
        points: 1
    },
    {
        question: "Cos'è VMware ESXi?",
        options: [
            "A. Un sistema operativo per server fisici",
            "B. Un tipo di ransomware",
            "C. Un software di virtualizzazione che crea e gestisce macchine virtuali",
            "D. Un sistema di crittografia dei dati"
        ],
        correctAnswer: "C",
        points: 1
    },
    {
        question: "Quale legge ha introdotto la tutela giuridica del software in Italia?",
        options: [
            "A. Legge 633 del 1941",
            "B. Legge 196 del 2003",
            "C. Legge 518 del 1992", // Corretta spostata a C
            "D. Direttiva 91/250 del 1991"
        ],
        correctAnswer: "C",
        points: 1
    },
    {
        question: "Cosa prevede la legge 518 del 1992?",
        options: [
            "A. La regolamentazione dei contratti di licenza software",
            "B. La protezione dei dati personali",
            "C. La creazione di software libero",
            "D. La tutela del software come opera dell'ingegno" // Corretta spostata a D
        ],
        correctAnswer: "D",
        points: 1
    },
    {
        question: "Cosa si intende per diritto d'autore nel contesto del software?",
        options: [
            "A. Il diritto riconosciuto all'autore di un'opera dell'ingegno di carattere creativo", // Corretta spostata a A
            "B. Il diritto di copiare e distribuire liberamente il software",
            "C. La possibilità di modificare il software senza restrizioni",
            "D. La tutela dei dati personali contenuti nel software"
        ],
        correctAnswer: "A",
        points: 1
    },
    {
        question: "Quali sono i diritti morali dell'autore di un software?",
        options: [
            "A. Diritti di sfruttamento economico",
            "B. Diritti di distribuzione gratuita",
            "C. Diritti strettamente connessi alla personalità dell'autore", // Corretta spostata a C
            "D. Diritti di modifica del software"
        ],
        correctAnswer: "C",
        points: 1
    },
    {
        question: "Quale delle seguenti è una caratteristica del software libero?",
        options: [
            "A. Il codice sorgente non è disponibile",
            "B. La distribuzione è consentita solo a fini di lucro",
            "C. La modifica del software è proibita",
            "D. Il codice sorgente è disponibile e può essere modificato" // Corretta spostata a D
        ],
        correctAnswer: "D",
        points: 1
    },
    {
        question: "Cosa distingue il software proprietario?",
        options: [
            "A. L'uso e la modifica sono proibiti senza permesso", // Corretta spostata a A
            "B. Il codice sorgente è disponibile gratuitamente",
            "C. La distribuzione è sempre gratuita",
            "D. Il software è di dominio pubblico"
        ],
        correctAnswer: "A",
        points: 1
    },
    {
        question: "Quale articolo del codice penale italiano riguarda l'accesso abusivo a un sistema informatico?",
        options: [
            "A. Articolo 420",
            "B. Articolo 491 bis",
            "C. Articolo 61", // Corretta spostata a C
            "D. Articolo 635 bis"
        ],
        correctAnswer: "C",
        points: 1
    },
    {
        question: "Cosa prevede l'articolo 635 bis del codice penale?",
        options: [
            "A. La falsificazione di documenti informatici",
            "B. L'intercettazione di e-mail",
            "C. La diffusione di programmi dannosi",
            "D. Il danneggiamento di sistemi informatici e telematici" // Corretta spostata a D
        ],
        correctAnswer: "D",
        points: 1
    },
    {
        question: "Cosa prevede il GDPR (General Data Protection Regulation)?",
        options: [
            "A. La tutela dei diritti d'autore sul software",
            "B. La protezione dei dati personali dei cittadini dell'UE",
            "C. La regolamentazione del commercio elettronico",
            "D. La creazione di software libero"
        ],
        correctAnswer: "B",
        points: 1
    },
    {
        question: "Qual è uno degli obblighi principali delle aziende in base al GDPR?",
        options: [
            "A. Nominare un Data Protection Officer (DPO)",
            "B. Fornire software gratuito ai dipendenti",
            "C. Crittografare tutti i dati aziendali",
            "D. Eliminare tutti i dati personali dopo un anno"
        ],
        correctAnswer: "A",
        points: 1
    },
    {
        question: "Qual è la differenza tra firma elettronica e firma digitale?",
        options: [
            "A. La firma digitale è un tipo di firma elettronica avanzata basata su certificati qualificati",
            "B. La firma elettronica non ha valore legale",
            "C. La firma digitale non utilizza crittografia",
            "D. La firma elettronica è più sicura della firma digitale"
        ],
        correctAnswer: "A",
        points: 1
    },
    {
        question: "Cosa garantisce la firma elettronica avanzata?",
        options: [
            "A. La disponibilità del codice sorgente",
            "B. L'identificazione del firmatario e la connessione univoca al documento",
            "C. La crittografia dei dati personali",
            "D. La protezione da attacchi informatici"
        ],
        correctAnswer: "B",
        points: 1
    },
    {
        question: "Cosa si intende per machine learning?",
        options: [
            "A. Un sistema di backup automatico",
            "B. Un sistema di crittografia dei dati",
            "C. Un tipo di ransomware",
            "D. Una tecnica di intelligenza artificiale che migliora le performance con l'esperienza"
        ],
        correctAnswer: "D",
        points: 1
    },
    {
        question: "Chi ha coniato il termine Intelligenza Artificiale?",
        options: [
            "A. Bill Gates nel 1990",
            "B. Alan Turing nel 1950",
            "C. Steve Jobs nel 2002",
            "D. John McCarthy nel 1956"
        ],
        correctAnswer: "D",
        points: 1
    },    
    {
        question: "Quale tecnologia è utile per riconoscere immagini e voci?",
        options: [
            "A. Internet of Things (IoT)",
            "B. Deep learning",
            "C. Blockchain",
            "D. Firma digitale"
        ],
        correctAnswer: "B",
        points: 1
    },
    {
        question: "Cosa permette l'identità SPID di secondo livello?",
        options: [
            "A. L'autenticazione tramite ID e password",
            "B. L'autenticazione tramite smart card",
            "C. L'autenticazione tramite password e una One Time Password (OTP)",
            "D. L'accesso senza autenticazione"
        ],
        correctAnswer: "C",
        points: 1
    },
    {
        question: "Qual è uno degli utilizzi principali dello SPID?",
        options: [
            "A. Crittografare i dati personali",
            "B. Accedere ai servizi online della pubblica amministrazione",
            "C. Creare software libero",
            "D. Proteggere i sistemi informatici"
        ],
        correctAnswer: "B",
        points: 1
    },
    {
        question: "Cosa si intende per DLT (Distributed Ledger Technology)?",
        options: [
            "A. Un sistema di registrazione dati centralizzato",
            "B. Un sistema di crittografia dei dati",
            "C. Un tipo di ransomware",
            "D. Un sistema di registrazione dati distribuito su più nodi"
        ],
        correctAnswer: "D",
        points: 1
    },
    {
        question: "Qual è una caratteristica delle criptovalute?",
        options: [
            "A. Sono emesse da una banca centrale",
            "B. Consentono il trasferimento di valore senza intermediari",
            "C. Sono regolate dal GDPR",
            "D. Sono utilizzate solo per il commercio elettronico"
        ],
        correctAnswer: "B",
        points: 1
    },
    {
        question: "Quale delle seguenti è una tipologia di frode nell'e-commerce?",
        options: [
            "A. Utilizzo di software libero",
            "B. Transazioni non autorizzate tramite appropriazione di account",
            "C. Creazione di software open source",
            "D. Utilizzo di firme digitali"
        ],
        correctAnswer: "B",
        points: 1
    },
    {
        question: "Cosa si intende per false richieste di reso e rimborso nell'e-commerce?",
        options: [
            "A. Richieste legittime di reso di merce difettosa",
            "B. Utilizzo di carte di credito rubate",
            "C. Truffe in cui si restituisce merce rubata in cambio di contanti",
            "D. Transazioni autorizzate tramite account verificati"
        ],
        correctAnswer: "C",
        points: 1
    },
    {
        question: "Cosa si intende per Internet of Things (IoT)?",
        options: [
            "A. Una rete di computer centralizzata",
            "B. Un tipo di ransomware",
            "C. Un sistema di crittografia dei dati",
            "D. Una rete di oggetti fisici connessi a Internet che comunicano tra loro"
        ],
        correctAnswer: "D",
        points: 1
    },
    {
        question: "Chi ha coniato il termine Internet of Things (IoT)?",
        options: [
            "A. Alan Turing",
            "B. Kevin Ashton",
            "C. John McCarthy",
            "D. Bill Gates"
        ],
        correctAnswer: "B",
        points: 1
    },
    {
        question: "Cosa si intende per data breach?",
        options: [
            "A. Una violazione dei dati personali",
            "B. Un tipo di software di sicurezza",
            "C. Una tecnica di machine learning",
            "D. Un sistema di backup automatico"
        ],
        correctAnswer: "A",
        points: 1
    },
    {
        question: "Cosa deve fare il titolare del trattamento in caso di data breach?",
        options: [
            "A. Ignorare la violazione",
            "B. Crittografare tutti i dati",
            "C. Notificare immediatamente l'Autorità Garante e gli interessati",
            "D. Eliminare i dati violati"
        ],
        correctAnswer: "C",
        points: 1
    },
    {
        question: "Cosa garantisce la sottoscrizione elettronica?",
        options: [
            "A. La disponibilità del codice sorgente",
            "B. La protezione da attacchi informatici",
            "C. La crittografia dei dati personali",
            "D. Il legame tra il firmatario e il documento informatico"
        ],
        correctAnswer: "D",
        points: 1
    },
    {
        question: "Cosa si intende per blockchain?",
        options: [
            "A. Un sistema di registrazione dati centralizzato",
            "B. Una catena di blocchi di transazioni legati tra loro",
            "C. Un tipo di ransomware",
            "D. Un sistema di crittografia dei dati"
        ],
        correctAnswer: "B",
        points: 1
    },
    {
        question: "Cosa si intende per 'software semilbero'?",
        options: [
            "A. Software gratuito con codice sorgente chiuso",
            "B. Software utilizzabile solo per scopi non commerciali",
            "C. Software con codice sorgente disponibile ma con restrizioni sulla modifica",
            "D. Software che richiede una licenza annuale"
        ],
        correctAnswer: "B",
        points: 1
    },
    {
        question: "Quale articolo del Codice Penale italiano tratta la detenzione abusiva di codici di accesso?",
        options: [
            "A. Art. 420",
            "B. Art. 635bis",
            "C. Art. 615quater",
            "D. Art. 491bis"
        ],
        correctAnswer: "C",
        points: 1
    },
    {
        question: "Cosa prevede l'articolo 9 del GDPR?",
        options: [
            "A. Trattamento dei dati particolari",
            "B. Diritto alla portabilità dei dati",
            "C. Tutela dei dati biometrici",
            "D. Obbligo di notifica delle violazioni"
        ],
        correctAnswer: "A",
        points: 1
    },
    {
        question: "Quale caratteristica definisce un 'documento informatico' secondo il CAD?",
        options: [
            "A. Deve essere firmato digitalmente",
            "B. Deve essere convertito in formato cartaceo",
            "C. Deve essere conservato su server italiani",
            "D. Rappresenta atti giuridicamente rilevanti in forma digitale"
        ],
        correctAnswer: "D",
        points: 1
    },
    {
        question: "Cosa si intende per 'conservazione sostitutiva'?",
        options: [
            "A. Archiviazione su cloud pubblico",
            "B. Processo che conferisce valore legale ai documenti digitali",
            "C. Sostituzione di documenti cartacei con scansioni",
            "D. Backup automatico dei dati"
        ],
        correctAnswer: "B",
        points: 1
    },
    {
        question: "Quale livello SPID richiede l'uso di una smart card?",
        options: [
            "A. Livello 1",
            "B. Livello 2",
            "C. Livello 3",
            "D. Nessuno dei precedenti"
        ],
        correctAnswer: "C",
        points: 1
    },
    {
        question: "Cosa caratterizza una DLT (Distributed Ledger Technology)?",
        options: [
            "A. Centralizzazione dei dati",
            "B. Utilizzo esclusivo per criptovalute",
            "C. Immutabilità dei record",
            "D. Controllo governativo"
        ],
        correctAnswer: "C",
        points: 1
    },
    {
        question: "Quale sanzione prevede il GDPR per violazioni gravi?",
        options: [
            "A. Fino al 2% del fatturato globale",
            "B. Revoca della licenza software",
            "C. Solo ammonimento scritto",
            "D. Fino al 4% del fatturato globale"
        ],
        correctAnswer: "D",
        points: 1
    },
    {
        question: "Cosa si intende per 'Privacy by Design'?",
        options: [
            "A. Protezione dati aggiunta dopo lo sviluppo del sistema",
            "B. Integrazione della privacy nella progettazione del sistema",
            "C. Utilizzo di software proprietario per la sicurezza",
            "D. Obbligo di cifratura di tutti i dati"
        ],
        correctAnswer: "B",
        points: 1
    },
    {
        question: "Quale tecnologia è alla base delle firme digitali?",
        options: [
            "A. Reti neurali",
            "B. Crittografia a chiave pubblica",
            "C. Blockchain",
            "D. Tokenizzazione"
        ],
        correctAnswer: "B",
        points: 1
    },
    {
        question: "Cosa si intende per 'software shareware'?",
        options: [
            "A. Software che può essere utilizzato gratuitamente per un periodo di prova",
            "B. Software che non può essere distribuito",
            "C. Software che non ha codice sorgente disponibile",
            "D. Software che è sempre gratuito"
        ],
        correctAnswer: "A",
        points: 1
    },
    {
        question: "Qual è una caratteristica del software freeware?",
        options: [
            "A. Deve essere pagato dopo un periodo di prova",
            "B. Il codice sorgente è sempre disponibile",
            "C. Può essere distribuito ma non modificato",
            "D. Non può essere utilizzato per scopi commerciali"
        ],
        correctAnswer: "C",
        points: 1
    },
    {
        question: "Quali sono le caratteristiche di qualità della sicurezza del documento informatico?",
        options: [
            "A. La scrittura di un documento cartaceo nascosto in maniera sicura",
            "B. La conservabilità e la distruttibilità",
            "C. L'integrità, l'affidabilità e la leggibilità",
            "D. La decodifica criptata e la formattazione"
        ],
        correctAnswer: "C",
        points: 1
    },
    {
        question: "Quale articolo del codice penale italiano riguarda la diffusione di programmi dannosi?",
        options: [
            "A. Articolo 420",
            "B. Articolo 61",
            "C. Articolo 491 bis",
            "D. Articolo 635 bis"
        ],
        correctAnswer: "D",
        points: 1
    },
    {
        question: "Cosa prevede l'articolo 617quater del codice penale?",
        options: [
            "A. L'intercettazione di e-mail",
            "B. La falsificazione di documenti informatici",
            "C. L'accesso abusivo a un sistema informatico",
            "D. La diffusione di programmi dannosi"
        ],
        correctAnswer: "A",
        points: 1
    },
    {
        question: "Cos'è un hypervisor?",
        options: [
            "A. Un software che gestisce le macchine virtuali",
            "B. Un tipo di ransomware",
            "C. Un sistema di crittografia dei dati",
            "D. Un dispositivo hardware per la virtualizzazione"
        ],
        correctAnswer: "A",
        points: 1
    },
    {
        question: "Qual è la differenza tra una macchina virtuale e un ambiente fisico?",
        options: [
            "A. La macchina virtuale non utilizza risorse hardware",
            "B. La macchina virtuale non può eseguire sistemi operativi",
            "C. La macchina virtuale è più lenta di un ambiente fisico",
            "D. La macchina virtuale è un ambiente simulato che condivide risorse hardware"
        ],
        correctAnswer: "D",
        points: 1
    },
    {
        question: "Cosa si intende per 'patch' in ambito informatico?",
        options: [
            "A. Un aggiornamento che risolve vulnerabilità di sicurezza",
            "B. Un tipo di malware",
            "C. Un sistema di backup automatico",
            "D. Un software di virtualizzazione"
        ],
        correctAnswer: "A",
        points: 1
    },
    {
        question: "Secondo il principio di accountability nel contesto del Regolamento GDPR, cosa è richiesto al titolare del trattamento dei dati?",
        options: [
            "A. Limitarsi a notificare le violazioni dei dati all’autorità competente solo quando espressamente richiesto",
            "B. Delegare completamente la gestione dei dati a un responsabile esterno, senza ulteriori obblighi",
            "C. Rispettare gli obblighi previsti dal Regolamento e svolgere un’attività continua di controllo e verifica delle fasi di gestione dei dati",
            "D. Garantire il massimo profitto dall’utilizzo dei dati, senza preoccuparsi della conformità normativa"
        ],
        correctAnswer: "C",
        points: 1
    },    
    {
        question: "Secondo l’articolo 420 del Codice Penale italiano, cosa costituisce il reato di Attentato a impianti informatici di pubblica utilità?",
        options: [
            "A. L’accesso non autorizzato a un sistema informatico privato senza causare danni",
            "B. La diffusione di virus informatici su computer personali",
            "C. La vendita di software pirata o contraffatto",
            "D. Qualsiasi azione che comprometta il funzionamento di sistemi informatici essenziali per servizi di pubblica utilità, come trasporti, energia o comunicazioni"
        ],
        correctAnswer: "D",
        points: 1
    }
];


document.addEventListener("DOMContentLoaded", function () {
    const numberOfQuestions = quizQuestions.length;
    console.log(`Il numero di domande presenti nella lista è: ${numberOfQuestions}`);
    document.getElementById("numeroDomande").textContent = `Il numero di domande presenti nella lista è: ${numberOfQuestions}`;

    // Chiama la funzione createQuiz per generare il quiz
    createQuiz();
});

function getRandomQuestions(array, num) {
    // Copia l'array originale per non modificarlo
    const shuffled = [...array];

    // Algoritmo di Fisher-Yates per mischiare l'array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Indice casuale tra 0 e i
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Scambia gli elementi
    }

    // Restituisci solo i primi `num` elementi
    return shuffled.slice(0, num);
}

function createQuiz() {
    const form = document.getElementById('quizForm');
    const selectedMainQuestions = getRandomQuestions(quizQuestions, 10);
    const selectedQuestions = [...selectedMainQuestions];

    selectedQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        // Aggiungi la domanda in grassetto
        const questionLabel = document.createElement('label');
        questionLabel.innerHTML = `<strong>${index + 1}. ${q.question}</strong>`; // Usa <strong> per il grassetto
        questionDiv.appendChild(questionLabel);
        questionDiv.appendChild(document.createElement('br'));

        // Aggiungi le opzioni di risposta
        q.options.forEach((option, i) => {
            const optionLabel = document.createElement('label');
            optionLabel.innerHTML = `<input type="radio" name="question${index}" value="${i}"> ${option}`;
            questionDiv.appendChild(optionLabel);
            questionDiv.appendChild(document.createElement('br'));
        });

        form.appendChild(questionDiv);
    });

    // Memorizza le domande selezionate per un uso successivo
    window.selectedQuestions = selectedQuestions;
}

function calculateScore() {
    const form = document.getElementById('quizForm');
    let score = 0;
    let answersHTML = '';

    window.selectedQuestions.forEach((q, index) => {
        const selectedOption = form[`question${index}`].value;
        const correctAnswerIndex = q.correctAnswer.charCodeAt(0) - 65; // Converti "A" -> 0, "B" -> 1, ecc.
        const isCorrect = parseInt(selectedOption) === correctAnswerIndex; // Converti selectedOption in numero

        // Imposta un valore predefinito per `points` se non è definito
        const points = q.points || 1; // Se `q.points` è undefined, usa 1 come valore predefinito

        if (isCorrect) {
            score += points; // Usa `points` invece di `q.points`
        }

        answersHTML += `<div class="question-result">${index + 1}. ${q.question}`;
        q.options.forEach((option, i) => {
            if (i === correctAnswerIndex) {
                answersHTML += `<div class="correct-answer">✅ ${option}</div>`;
            } else if (i == selectedOption && !isCorrect) {
                answersHTML += `<div class="wrong-answer">❌ ${option}</div>`;
            } else {
                answersHTML += `<div>${option}</div>`;
            }
        });
        answersHTML += `</div>`;
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Punteggio totale: ${score.toFixed(2)}/10 punti<br><br>${answersHTML}`;
}