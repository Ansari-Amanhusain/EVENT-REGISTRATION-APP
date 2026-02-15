import { useSelector } from "react-redux";

export default function AttendanceSummary() {
  const list = useSelector(s => s.registrations.list);
  const online = list.filter(r=>r.type==="Online").length;
  const offline = list.filter(r=>r.type==="Offline").length;

  return (
    <div>
      <h4>Attendance Summary</h4>
      <p>Online: {online}</p>
      <p>Offline: {offline}</p>
    </div>
  );
}
