export default function Pagination({ total, page, setPage }) {
  const pages = Math.ceil(total / 5);
  return (
    <div>
      {[...Array(pages)].map((_, i) => (
        <button key={i} onClick={()=>setPage(i+1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}
