export default function CandidateTable({ resumes }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Matched</th>
          <th>Missing</th>
        </tr>
      </thead>
      <tbody>
        {resumes.map((r) => (
          <tr key={r._id}>
            <td>{r.name}</td>
            <td>{r.score.toFixed(2)}</td>
            <td>{r.analysis?.matched.join(", ")}</td>
            <td>{r.analysis?.missing.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}