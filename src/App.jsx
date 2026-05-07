
import JobPage from "./pages/JobPage";
import UploadPage from "./pages/UploadPage";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
   <div className="min-h-screen bg-gray-100 p-6">
  <h1 className="text-3xl font-bold text-center mb-6">
    ATS Dashboard
  </h1>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white p-4 rounded shadow">
      <JobPage />
    </div>

    <div className="bg-white p-4 rounded shadow">
      <UploadPage />
    </div>

    <div className="bg-white p-4 rounded shadow">
      <Dashboard />
    </div>

  </div>
</div>
  );
}
