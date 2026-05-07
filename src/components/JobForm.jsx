import { useState } from "react";
import API from "../services/api";

export default function JobForm({ refreshJobs }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Description required");
      return;
    }

    try {
      await API.post("/jobs", {
        title,
        description,
        skills: skills.split(",").map(s => s.trim()),
      });

      setTitle("");
      setDescription("");
      setSkills("");

      refreshJobs();
    } catch (err) {
      console.error(err);
      alert("Error creating job");
    }
  };

  return (
    <div>
      <h2>Create Job</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <button type="submit">Create Job</button>
      </form>
    </div>
  );
}