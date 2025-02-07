import { useEffect, useState } from "react";
import { fetchJobs } from "../services/api";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => { fetchJobs().then(setJobs); }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="border p-4 mb-4 rounded shadow">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p>{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListing;
