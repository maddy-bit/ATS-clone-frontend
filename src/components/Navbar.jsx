export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
      <h2 className="text-white text-xl font-semibold">
        ATS Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search..."
          className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white outline-none"
        />

        <div className="w-10 h-10 rounded-full bg-indigo-500"></div>
      </div>
    </div>
  );
}