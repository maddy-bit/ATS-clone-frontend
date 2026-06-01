import { useEffect, useState } from "react";
import API from "../services/api";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="text-white text-xl mb-4">
        Active Jobs
      </h2>

      <div className="space-y-3">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white/10 p-4 rounded-xl"
          >
            <h3 className="text-white">
              {job.title}
            </h3>

            <p className="text-gray-300 text-sm">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}