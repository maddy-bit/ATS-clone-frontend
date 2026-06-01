import { useEffect, useState } from "react";
import API from "../services/api";

export default function CandidateTable() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const res = await API.get("/resume/ranked");

      setCandidates(res.data.resumes);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <p className="text-white">
        Loading candidates...
      </p>
    );
  }

  return (
    <div>
      <h2 className="text-white text-2xl font-semibold mb-4">
        Top Candidates
      </h2>

      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full text-white">
          <thead>
            <tr className="border-b border-white/20">
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Score</th>
            </tr>
          </thead>

          <tbody>
            {candidates.length > 0 ? (
              candidates.map((candidate) => (
                <tr
                  key={candidate._id}
                  className="border-b border-white/10 hover:bg-white/5"
                >
                  <td className="p-4">
                    {candidate.name}
                  </td>

                  <td className="p-4">
                    {candidate.email}
                  </td>

                  <td className="p-4 font-bold text-green-400">
                    {candidate.score}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center p-6 text-gray-400"
                >
                  No candidates found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}