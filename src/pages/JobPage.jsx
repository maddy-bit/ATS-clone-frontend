import { useEffect, useState } from "react";
import API from "../services/api";
import JobForm from "../components/JobForm";

export default function JobPage() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await API.get("/jobs");
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <JobForm refreshJobs={fetchJobs} />
      <h3>Jobs</h3>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
}