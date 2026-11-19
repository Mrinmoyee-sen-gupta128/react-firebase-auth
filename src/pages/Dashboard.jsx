import { useAuth } from "../AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}