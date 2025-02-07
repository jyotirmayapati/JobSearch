import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const JobSeekerProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Please log in.</p>;

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold">Profile</h2>
      <p className="mt-2">Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p className="mt-4 font-semibold">Saved Jobs:</p>
      <ul className="list-disc pl-6">
        {user.savedJobs?.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobSeekerProfile;
