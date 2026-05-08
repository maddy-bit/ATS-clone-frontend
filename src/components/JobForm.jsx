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
      const res = await API.post("/jobs", {
        title,
        description,
        skills: skills.split(",").map((s) => s.trim()),
      });

      console.log("Job created:", res.data);

      alert("Job created successfully");

      setTitle("");
      setDescription("");
      setSkills("");

      refreshJobs();

    } catch (err) {
      console.error("FULL ERROR:", err);

      alert(
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message ||
        "Error creating job"
      );
    }
  };

  return (
    <div className="bg-white/30 backdrop-blur-lg p-5 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">
        Create Job
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          className="w-full border p-2 rounded"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Create Job
        </button>

      </form>
    </div>
  );
}