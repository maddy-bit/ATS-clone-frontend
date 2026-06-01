import { useState } from "react";
import API from "../services/api";

export default function JobForm({ refreshJobs }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/jobs", {
        title,
        description,
        skills: skills.split(",").map((s) => s.trim()),
      });

      setTitle("");
      setDescription("");
      setSkills("");

      refreshJobs && refreshJobs();

      alert("Job Created");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Failed");
    }
  };

  return (
    <div>
      <h2 className="text-white text-xl mb-4">
        Create Job
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          className="w-full p-3 rounded-xl bg-white/10 text-white border border-white/20"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full p-3 rounded-xl bg-white/10 text-white border border-white/20"
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="w-full p-3 rounded-xl bg-white/10 text-white border border-white/20"
          placeholder="React, Node, MongoDB"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-xl"
        >
          Create Job
        </button>
      </form>
    </div>
  );
}