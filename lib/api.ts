export type Option = {
  id: string;
  text: string;
};

export type TestQuestion = {
  id: string;
  topic_id: string;
  topic_name: string;
  question: string;
  options: Option[];
  explanation: string;
};

export type GeographyTest = {
  subject: string;
  title: string;
  duration_minutes: number;
  questions: TestQuestion[];
};

export type TestResult = {
  score: number;
  total: number;
  accuracy_percent: number;
  breakdown: {
    topic_id: string;
    topic_name: string;
    correct: number;
    total: number;
    accuracy_percent: number;
  }[];
  weak_topics: {
    topic_id: string;
    topic_name: string;
    accuracy_percent: number;
    priority: string;
    summary: string;
  }[];
  question_results: {
    question_id: string;
    topic_id: string;
    question: string;
    selected_answer_id: string | null;
    correct_answer_id: string;
    is_correct: boolean;
    explanation: string;
  }[];
};

export type WeakTopicsResponse = {
  weak_topics: {
    topic_id: string;
    topic_name: string;
    accuracy_percent: number;
    priority: string;
    recommended_minutes: number;
  }[];
};

export type TopicReview = {
  topic: {
    id: string;
    name: string;
    priority: string;
    summary: string;
    materials: string[];
  };
  source_notice: string;
};

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function getGeographyTest() {
  return apiFetch<GeographyTest>("/geography/test");
}

export function submitGeographyTest(answers: { question_id: string; answer_id: string }[]) {
  return apiFetch<TestResult>("/geography/test/submit", {
    method: "POST",
    body: JSON.stringify({ answers }),
  });
}

export function getWeakTopics() {
  return apiFetch<WeakTopicsResponse>("/geography/weak-topics");
}

export function getTopicReview(topicId: string) {
  return apiFetch<TopicReview>(`/geography/review/${topicId}`);
}

export function saveResult(result: TestResult) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("dim-ai-last-result", JSON.stringify(result));
  }
}

export function loadResult(): TestResult | null {
  if (typeof window === "undefined") {
    return null;
  }
  const raw = window.localStorage.getItem("dim-ai-last-result");
  return raw ? (JSON.parse(raw) as TestResult) : null;
}
