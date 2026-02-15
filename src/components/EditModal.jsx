import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { updateRegistration } from "../features/registrations/registrationThunks";

export default function EditModal({ data, onClose }) {
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(updateRegistration({ id: data.id, data }));
    onClose();
  };

  return createPortal(
    <div className="modal">
      <h3>Edit Registration</h3>
      <input value={data.name} readOnly />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById("modal-root")
  );
}
