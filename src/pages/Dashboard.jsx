import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegistrations } from "../features/registrations/registrationThunks";
import RegistrationForm from "../components/RegistrationForm";
import RegistrationTable from "../components/RegistrationTable";

export default function Dashboard() {
  const dispatch = useDispatch();
  const registrations = useSelector(s => s.registrations.list);

  useEffect(() => {
    dispatch(fetchRegistrations());
  }, [dispatch]);

  return (
    <div>
      <h2>Event Registration Dashboard</h2>
      <RegistrationForm />
      <RegistrationTable data={registrations} />
    </div>
  );
}
