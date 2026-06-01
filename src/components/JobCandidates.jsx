import { useState, useEffect } from "react";
import API from "../services/api";

export default function JobCandidates() {
  const [jobs, setJobs] = useState([]);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    API.get("/jobs").then((res) => {
      setJobs(res.data);
    });
  }, []);

  const loadCandidates = async (jobId) => {
    const res = await API.get(
      `/resume/job/${jobId}`
    );

    setCandidates(res.data.resumes);
  };

  return (
    <div>
      <select
        onChange={(e) =>
          loadCandidates(e.target.value)
        }
      >
        <option>Select Job</option>

        {jobs.map((job) => (
          <option
            key={job._id}
            value={job._id}
          >
            {job.title}
          </option>
        ))}
      </select>

      {candidates.map((c) => (
        <div key={c._id}>
          {c.name}
        </div>
      ))}
    </div>
  );
}