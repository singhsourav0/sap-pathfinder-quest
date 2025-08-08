export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
};

export const sapQuiz: QuizQuestion[] = [
  { id: 1, question: "What does SAP stand for?", options: ["Systems, Applications, and Products", "Software and Programs", "Secure Accounting Platform", "System Analysis Program"], answerIndex: 0 },
  { id: 2, question: "Which SAP module handles financial accounting?", options: ["MM", "SD", "FI", "PP"], answerIndex: 2 },
  { id: 3, question: "Which module is used for materials management?", options: ["MM", "FI", "HR", "BW"], answerIndex: 0 },
  { id: 4, question: "SAP S/4HANA runs primarily on which database?", options: ["Oracle", "HANA", "SQL Server", "MySQL"], answerIndex: 1 },
  { id: 5, question: "Which module deals with sales and distribution?", options: ["SD", "PP", "QM", "PM"], answerIndex: 0 },
  { id: 6, question: "Which is a reporting and analytics solution?", options: ["SAP BW/4HANA", "SAP MM", "SAP PM", "SAP PP"], answerIndex: 0 },
  { id: 7, question: "What is the main benefit of SAP integration?", options: ["Separate data silos", "Manual processes", "End-to-end business visibility", "No automation"], answerIndex: 2 },
  { id: 8, question: "Which module supports production planning?", options: ["PP", "CRM", "HCM", "GRC"], answerIndex: 0 },
  { id: 9, question: "Which SAP solution focuses on human resources?", options: ["SAP HCM/SuccessFactors", "SAP MM", "SAP SD", "SAP PP"], answerIndex: 0 },
  { id: 10, question: "Which term describes real-time analytics in S/4HANA?", options: ["Batch processing", "OLTP only", "Embedded analytics", "Legacy reporting"], answerIndex: 2 },
  { id: 11, question: "What is a SAP T-code?", options: ["Transport code", "Transaction code", "Transfer code", "Template code"], answerIndex: 1 },
  { id: 12, question: "Which module manages procurement?", options: ["MM", "SD", "FI", "CO"], answerIndex: 0 },
  { id: 13, question: "Which component handles controlling in finance?", options: ["PP", "CO", "PM", "QM"], answerIndex: 1 },
  { id: 14, question: "SAP Fiori is primarily a...", options: ["Database", "UI/UX design system and apps", "Programming language", "Cloud platform"], answerIndex: 1 },
  { id: 15, question: "What does SAP ABAP refer to?", options: ["A database", "A front-end library", "A programming language", "A cloud service"], answerIndex: 2 },
  { id: 16, question: "Which deployment model is S/4HANA available in?", options: ["On-premise only", "Cloud only", "Both on-premise and cloud", "Mobile only"], answerIndex: 2 },
  { id: 17, question: "What is a key advantage of SAP HANA?", options: ["Disk-based storage", "In-memory computing", "No column store", "Slow queries"], answerIndex: 1 },
  { id: 18, question: "Which module manages plant maintenance?", options: ["PM", "QM", "BW", "FI"], answerIndex: 0 },
  { id: 19, question: "Which SAP tool is used for UI5 development?", options: ["Eclipse/Business Application Studio", "Photoshop", "3ds Max", "PowerPoint"], answerIndex: 0 },
  { id: 20, question: "What is an SAP client?", options: ["A type of license", "An independent business unit within a system", "A report", "A database schema unrelated to SAP"], answerIndex: 1 },
];
