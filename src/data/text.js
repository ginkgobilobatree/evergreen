export const Questions = [
  "Was ist Dein Anlageziel?",
  "Wie alt bist Du?",
  "Wie lange planst Du Dein Geld anzulegen?",
  "Angenommen Deine Anlage verliert 10 % an Wert. Wie reagierst Du?",
  "Wie schätzt Du Deine Risikobereitschaft selbst ein (1 - 10)?",
];

export const Answers = [
  {
    goal: [
      ["Kapitalerhalt", "RetainWealth"],
      ["Vermögensaufbau", "GrowWealth"],
      ["Altersvorsorge", "Retirement"],
    ],
  },
  {
    age: [
      ["unter 36 Jahren", "Below36"],
      ["36 - 55 Jahre", "Below56"],
      ["über 55 Jahre", "Above55"],
    ],
  },
  {
    duration: [
      ["weniger als 5 Jahre", "Below5"],
      ["5 - 15 Jahre", "Below15"],
      ["mehr als 15 Jahre", "Above15"],
    ],
  },
  {
    behaviour: [
      ["Alles verkaufen", "SellAll"],
      ["Cool bleiben", "KeepCool"],
      ["Mehr investieren", "InvestMore"],
    ],
  },
  { selfTest: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
];

export const GeneralText = {
  heroTitle: "Code Challenge",
  nothingHere: "Hier is' nix.",
  answerQuestionsFirst: "Bitte erst Fragen beantworten.",
  showResultButton: "Zu Meinem Ergebnis",
  goBackButton: "Zurück",
  storeResult: "Resultat speichern?",
  pleaseStoreResult: "Resultat speichern",
  save: "Speichern",
  or: "oder",
  oldResult: "Bitte altes Resultat",
  show: "Anzeigen lassen",
  hereQuestions: "Hier die Fragen",
  hereAnswers: "Hier die Antworten",
  hereResult: "Hier das Ergebnis",
  myRiskRate: "Meine Risikokennzahl:",
  yinAndYang: "Zusammensetzung aus den beiden EVERGREEN Fonds Yin & Yang:",
  annualRevenue: "Erwarteter Jahresertrag:",
  votality: "Votalität:",
  yin: "Yin",
  yang: "Yang",
};

export const Units = {
  percent: " %",
};
