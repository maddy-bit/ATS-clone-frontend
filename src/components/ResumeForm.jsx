import { useEffect, useState } from "react";
import API from "../services/api";

export default function ResumeForm() {
  const [jobs, setJobs] = useState([]);
  const [jobId, setJobId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    API.get("/jobs").then((res) => setJobs(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("jobId", jobId);
    formData.append("resume", file);

    await API.post("/resume", formData);

    alert("Uploaded");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Resume</h2>

      <select onChange={(e) => setJobId(e.target.value)}>
        <option>Select Job</option>
        {jobs.map((job) => (
          <option key={job._id} value={job._id}>
            {job.title}
          </option>
        ))}
      </select>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button type="submit">Upload</button>
    </form>
  );
}