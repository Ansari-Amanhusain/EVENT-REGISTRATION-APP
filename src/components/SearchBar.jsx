export default function SearchBar({ setSearch }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <input
        type="text"
        placeholder="Search by name or email"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        style={{
          padding: "8px",
          width: "250px"
        }}
      />
    </div>
  );
}
