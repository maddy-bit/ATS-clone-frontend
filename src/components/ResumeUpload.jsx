import { useEffect, useState } from "react";
import API from "../services/api";

export default function ResumeUpload() {
    const [jobs, setJobs] = useState([]);
    const [jobId, setJobId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState(null);

    useEffect(() => {
        API.get("/jobs").then((res) => {
            setJobs(res.data);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", name);
        formData.append("email", email);
        formData.append("jobId", jobId);
        formData.append("resume", resume);

        try {
            await API.post("/resume", formData);

            alert("Resume Uploaded");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2 className="text-white text-xl mb-4">
                Upload Resume
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >
                <select
                    className="w-full p-3 rounded-xl bg-white/10 text-white"
                    onChange={(e) =>
                        setJobId(e.target.value)
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

                <input
                    className="w-full p-3 rounded-xl bg-white/10 text-white"
                    placeholder="Candidate Name"
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />

                <input
                    className="w-full p-3 rounded-xl bg-white/10 text-white"
                    placeholder="Email"
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <label className="cursor-pointer block bg-white/10 border border-white/20 rounded-xl p-3 text-center text-white hover:bg-white/20 transition">
                    {resume
                        ? resume.name
                        : "Upload PDF Resume"}

                    <input
                        type="file"
                        className="hidden"
                        onChange={(e) =>
                            setResume(e.target.files[0])
                        }
                    />
                </label>

                <button
                    className="w-full bg-green-600 p-3 rounded-xl text-white"
                >
                    Upload Resume
                </button>
            </form>
        </div>
    );
}