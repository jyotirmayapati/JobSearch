import { useEffect, useState } from "react";
import { fetchJobs } from "../services/api";

const ApplicationManagement = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchJobs().then(setApplications);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Applications</h2>
      <ul>
        {applications.map((app) => (
          <li key={app.id} className="border p-4 mb-4 rounded shadow">
            <h3 className="text-xl font-semibold">{app.title}</h3>
            <p className="text-gray-500">{app.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationManagement;
