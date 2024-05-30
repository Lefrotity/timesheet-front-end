export const PRIORITY = {
  HIGH: "Высокий",
  MEDIUM: "Средний",
  LOW: "Низкий",
};

export const PRIORITY_RAW_NAMES = {
  HIGH: "HIGH",
  MEDIUM: "MEDIUM",
  LOW: "LOW",
};

export const DROPDOWN_PRIORITIES = [
  { name: PRIORITY.HIGH, value: PRIORITY_RAW_NAMES.HIGH },
  { name: PRIORITY.MEDIUM, value: PRIORITY_RAW_NAMES.MEDIUM },
  { name: PRIORITY.LOW, value: PRIORITY_RAW_NAMES.LOW },
];

export const WORKFLOW = {
  NEW: "NEW",
  TO_DO: "TO_DO",
  IN_PROGRESS: "IN_PROGRESS",
  TEST: "TEST",
  DONE: "DONE",
};

export const COLORS = {
  NEW: "#C194FF",
  TO_DO: "#A666FF",
  IN_PROGRESS: "#4281FA",
  TEST: "#33DD96",
  DONE: "#259B6B",
};

export const PRIORITY_COLORS = {
  HIGH: "#d2163d",
  MEDIUM: "#f05117",
  LOW: "#2aac16",
};

export const WORKFLOW_TRANSLATION = {
  NEW: "Создана",
  TO_DO: "Готова к работе",
  IN_PROGRESS: "В работе",
  TEST: "Тестирование",
  DONE: "Сделана",
};

export const WORKFLOW_FROPDOWN = [
  { value: WORKFLOW.NEW, name: WORKFLOW_TRANSLATION.NEW },
  { value: WORKFLOW.TO_DO, name: WORKFLOW_TRANSLATION.TO_DO },
  { value: WORKFLOW.IN_PROGRESS, name: WORKFLOW_TRANSLATION.IN_PROGRESS },
  { value: WORKFLOW.TEST, name: WORKFLOW_TRANSLATION.TEST },
  { value: WORKFLOW.DONE, name: WORKFLOW_TRANSLATION.DONE },
];

export const TECHNOLOGIES = {
  CLOUD: "Облако",
  IaC_CM: "IaC CM",
  CONTAINERIZATION_ORCHESTRATION: "Управление контейнерами",
  CI_CD: "CI/CD",
  PROGRAMMING_LANGUAGES: "Языки программирования",
  OS: "ОС",
  VIRTUALIZATION: "Виртуализация",
  MONITORING: "Наблюдение",
  DATABASES: "БД",
  WEB_SERVERS: "Веб Сервисы",
};

export const TECHNOLOGIES_RAW_NAMES = {
  CLOUD: "CLOUD",
  IaC_CM: "IaC_CM",
  CONTAINERIZATION_ORCHESTRATION: "CONTAINERIZATION_ORCHESTRATION",
  CI_CD: "CI_CD",
  PROGRAMMING_LANGUAGES: "PROGRAMMING_LANGUAGES",
  OS: "OS",
  VIRTUALIZATION: "VIRTUALIZATION",
  MONITORING: "MONITORING",
  DATABASES: "DATABASES",
  WEB_SERVERS: "WEB_SERVERS",
};

export const DROPDOWN_TECHNOLIGIES = [
  { name: TECHNOLOGIES.CLOUD, value: TECHNOLOGIES_RAW_NAMES.CLOUD },
  { name: TECHNOLOGIES.IaC_CM, value: TECHNOLOGIES_RAW_NAMES.IaC_CM },
  {
    name: TECHNOLOGIES.CONTAINERIZATION_ORCHESTRATION,
    value: TECHNOLOGIES_RAW_NAMES.CONTAINERIZATION_ORCHESTRATION,
  },
  { name: TECHNOLOGIES.CI_CD, value: TECHNOLOGIES_RAW_NAMES.CI_CD },
  {
    name: TECHNOLOGIES.PROGRAMMING_LANGUAGES,
    value: TECHNOLOGIES_RAW_NAMES.PROGRAMMING_LANGUAGES,
  },
  { name: TECHNOLOGIES.OS, value: TECHNOLOGIES_RAW_NAMES.OS },
  {
    name: TECHNOLOGIES.VIRTUALIZATION,
    value: TECHNOLOGIES_RAW_NAMES.VIRTUALIZATION,
  },
  { name: TECHNOLOGIES.MONITORING, value: TECHNOLOGIES_RAW_NAMES.MONITORING },
  { name: TECHNOLOGIES.DATABASES, value: TECHNOLOGIES_RAW_NAMES.DATABASES },
  { name: TECHNOLOGIES.WEB_SERVERS, value: TECHNOLOGIES_RAW_NAMES.WEB_SERVERS },
];
