import { useEffect, useState } from "react";
import API from "../services/api";
import CandidateTable from "../components/CandidateTable";

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [jobId, setJobId] = useState("");
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    API.get("/jobs").then((res) => setJobs(res.data));
  }, []);

  const fetchResumes = async (id) => {
    const res = await API.get(`/resume/job/${id}`);
    setResumes(res.data.resumes);
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <select
        onChange={(e) => {
          setJobId(e.target.value);
          fetchResumes(e.target.value);
        }}
      >
        <option>Select Job</option>
        {jobs.map((job) => (
          <option key={job._id} value={job._id}>
            {job.title}
          </option>
        ))}
      </select>

      <CandidateTable resumes={resumes} />
    </div>
  );
}