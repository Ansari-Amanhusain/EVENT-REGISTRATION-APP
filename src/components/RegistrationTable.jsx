import { useDispatch } from "react-redux";
import { deleteRegistration } from "../features/registrations/registrationThunks";

export default function RegistrationTable({ data }) {
  const dispatch = useDispatch();

  if (!data.length) return <p>No registrations found.</p>;

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Phone</th>
          <th>Session</th><th>Type</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(r => (
          <tr key={r.id}>
            <td>{r.name}</td>
            <td>{r.email}</td>
            <td>{r.phone}</td>
            <td>{r.session}</td>
            <td>{r.type}</td>
            <td>
              <button onClick={() => dispatch(deleteRegistration(r.id))}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
