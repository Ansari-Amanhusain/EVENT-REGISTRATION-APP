export default function SessionFilter({ setSession }) {
  return (
    <select onChange={e=>setSession(e.target.value)}>
      <option value="">All Sessions</option>
      <option value="React">React</option>
      <option value="Redux">Redux</option>
      <option value="Node">Node</option>
    </select>
  );
}
