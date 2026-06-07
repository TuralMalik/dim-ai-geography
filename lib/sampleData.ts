import type { GeographyTest, TestResult, TopicReview, WeakTopicsResponse } from "@/lib/api";

export const topicPerformance = [
  {
    id: "continents-oceans",
    name: "Continents and Oceans",
    score: 85,
    priority: "Low",
    reason: "You are strong here. Keep it warm with quick review questions.",
  },
  {
    id: "climate",
    name: "Climate and Weather",
    score: 40,
    priority: "High",
    reason: "This topic often appears in exam-style questions and affects many map-reading tasks.",
  },
  {
    id: "population",
    name: "Population Geography",
    score: 65,
    priority: "Medium",
    reason: "Density and migration questions are common and easy to improve with focused practice.",
  },
  {
    id: "natural-zones",
    name: "Natural Zones",
    score: 55,
    priority: "Medium",
    reason: "Natural zones connect climate, relief, and vegetation patterns.",
  },
  {
    id: "natural-resources",
    name: "Natural Resources",
    score: 78,
    priority: "Low",
    reason: "You know the basics. Review resource classification before mock exams.",
  },
];

export const sampleTest: GeographyTest = {
  subject: "Geography",
  title: "Geography Diagnostic Test",
  duration_minutes: 12,
  questions: [
    {
      id: "q-climate-zone",
      topic_id: "climate",
      topic_name: "Climate and Weather",
      question:
        "Which climate zone is characterized by high temperature and heavy rainfall throughout the year?",
      options: [
        { id: "a", text: "Polar" },
        { id: "b", text: "Temperate" },
        { id: "c", text: "Equatorial" },
        { id: "d", text: "Arctic" },
      ],
      explanation:
        "Equatorial climate is usually hot and humid throughout the year.",
    },
    {
      id: "q-map-scale",
      topic_id: "map-skills",
      topic_name: "Map Skills",
      question: "On a 1:100000 map, what real distance is represented by 3 cm?",
      options: [
        { id: "a", text: "300 m" },
        { id: "b", text: "3 km" },
        { id: "c", text: "30 km" },
        { id: "d", text: "300 km" },
      ],
      explanation: "At this scale, 1 cm equals 1 km, so 3 cm equals 3 km.",
    },
    {
      id: "q-density",
      topic_id: "population",
      topic_name: "Population Geography",
      question: "Population density is calculated by dividing population by what?",
      options: [
        { id: "a", text: "Area" },
        { id: "b", text: "Birth rate" },
        { id: "c", text: "Migration" },
        { id: "d", text: "Climate zone" },
      ],
      explanation: "Population density equals total population divided by area.",
    },
  ],
};

export const correctAnswers: Record<string, string> = {
  "q-climate-zone": "c",
  "q-map-scale": "b",
  "q-density": "a",
};

export const sampleResult: TestResult = {
  score: 6,
  total: 10,
  accuracy_percent: 62,
  breakdown: [
    { topic_id: "continents-oceans", topic_name: "Continents and Oceans", correct: 5, total: 6, accuracy_percent: 85 },
    { topic_id: "climate", topic_name: "Climate and Weather", correct: 2, total: 5, accuracy_percent: 40 },
    { topic_id: "population", topic_name: "Population Geography", correct: 4, total: 6, accuracy_percent: 65 },
    { topic_id: "natural-zones", topic_name: "Natural Zones", correct: 3, total: 5, accuracy_percent: 55 },
  ],
  weak_topics: [
    {
      topic_id: "climate",
      topic_name: "Climate and Weather",
      accuracy_percent: 40,
      priority: "High",
      summary: "Review climate factors before retaking the test.",
    },
    {
      topic_id: "natural-zones",
      topic_name: "Natural Zones",
      accuracy_percent: 55,
      priority: "Medium",
      summary: "Connect natural zones with climate and vegetation patterns.",
    },
  ],
  question_results: [],
};

export const sampleWeakTopics: WeakTopicsResponse = {
  weak_topics: [
    { topic_id: "climate", topic_name: "Climate and Weather", accuracy_percent: 40, priority: "High", recommended_minutes: 35 },
    { topic_id: "natural-zones", topic_name: "Natural Zones", accuracy_percent: 55, priority: "Medium", recommended_minutes: 25 },
    { topic_id: "population", topic_name: "Population Geography", accuracy_percent: 65, priority: "Medium", recommended_minutes: 20 },
  ],
};

export const climateReview: TopicReview = {
  topic: {
    id: "climate",
    name: "Climate and Weather",
    priority: "High",
    summary:
      "Climate is the long-term pattern of weather in a specific area. This topic often appears in DİM-style questions because it connects maps, natural zones, and human activity.",
    materials: [
      "Climate is the long-term pattern of weather in a specific area.",
      "Main climate factors include latitude, altitude, distance from seas and oceans, ocean currents, air masses, and relief.",
      "Equatorial climate is usually hot and humid throughout the year.",
      "Polar climate is cold and dry.",
      "Coastal areas usually have milder climates because large water bodies moderate temperature.",
    ],
  },
  source_notice: "Approved study material preview for the Geography MVP.",
};

export function calculateSampleResult(answers: Record<string, string>): TestResult {
  let score = 0;
  const questionResults = sampleTest.questions.map((question) => {
    const selected = answers[question.id] ?? null;
    const isCorrect = selected === correctAnswers[question.id];
    if (isCorrect) score += 1;
    return {
      question_id: question.id,
      topic_id: question.topic_id,
      question: question.question,
      selected_answer_id: selected,
      correct_answer_id: correctAnswers[question.id],
      is_correct: isCorrect,
      explanation: question.explanation,
    };
  });
  return {
    ...sampleResult,
    score,
    total: sampleTest.questions.length,
    accuracy_percent: Math.round((score / sampleTest.questions.length) * 100),
    question_results: questionResults,
  };
}

export function scoreTone(score: number) {
  if (score >= 75) return "strong";
  if (score >= 55) return "medium";
  return "weak";
}
