import JobForm from "../components/JobForm";
import ResumeUpload from "../components/ResumeUpload";
import CandidateTable from "../components/CandidateTable";
// import AnalyticsCard from "../components/AnalyticsCard";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import JobList from "../components/JobList";
export default function Dashboard() {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 p-6">
        <Navbar />

        <div className="mt-6">
          <StatsCards />
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <JobForm />
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <ResumeUpload />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 mt-6">
          <CandidateTable />
        </div>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 mt-6">
          <JobList />
        </div>

        {/* <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 mt-6">
          
        <AnalyticsCard />
        </div> */}
      </div>
    </div>
  );
}