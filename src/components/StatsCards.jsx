import { useEffect, useState } from "react";
import API from "../services/api";

export default function StatsCards() {
  const [stats, setStats] = useState({
    jobs: 0,
    candidates: 0,
    topScore: 0,
    averageScore: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const jobsRes = await API.get("/jobs");

      const resumesRes =
        await API.get("/resume/ranked");

      const jobs = jobsRes.data;
      const resumes = resumesRes.data;

      const totalScore = resumes.reduce(
        (sum, resume) =>
          sum + (resume.score || 0),
        0
      );

      setStats({
        jobs: jobs.length,
        candidates: resumes.length,
        topScore:
          resumes.length > 0
            ? resumes[0].score
            : 0,

        averageScore:
          resumes.length > 0
            ? Math.round(
                totalScore /
                  resumes.length
              )
            : 0,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const cards = [
    {
      title: "Jobs Posted",
      value: stats.jobs,
    },
    {
      title: "Candidates",
      value: stats.candidates,
    },
    {
      title: "Top ATS Score",
      value: stats.topScore,
    },
    {
      title: "Average Score",
      value: stats.averageScore,
    },
  ];

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
        >
          <p className="text-gray-300">
            {card.title}
          </p>

          <h2 className="text-white text-4xl font-bold mt-2">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}