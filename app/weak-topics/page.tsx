import { TopicCard } from "@/components/ui/TopicCard";
import { sampleWeakTopics, topicPerformance } from "@/lib/sampleData";

export default function WeakTopicsPage() {
  const weakIds = new Set(sampleWeakTopics.weak_topics.map((topic) => topic.topic_id));
  const weakTopics = topicPerformance.filter((topic) => weakIds.has(topic.id));

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] bg-gradient-to-br from-primary to-primary-dark p-6 text-white shadow-glow md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-white/70">Personalized focus</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">Weak topics</h1>
        <p className="mt-3 max-w-2xl text-white/80">
          Focus on this topic first. These areas have the biggest score improvement potential.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {weakTopics.map((topic) => (
          <TopicCard
            key={topic.id}
            name={topic.name}
            score={topic.score}
            priority={topic.priority}
            reason={topic.reason}
          />
        ))}
      </div>
    </div>
  );
}
