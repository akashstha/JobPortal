import { useEffect, useState } from "react";
// import Jobs from "../jobs.json";
import { JobListing } from "./JobListing";
import Spinner from "./Spinner";
export const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:3001/jobs");
        const data = await response.json();
        // throw new Error("Error fetching
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }finally{
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const homePage = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "All Jobs"}
        </h2>

       { loading?<Spinner/>: <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homePage.map((job) => (
            <>
              <JobListing job={job} key={job.id} />
            </>
          ))}
        </div>}
      </div>
    </section>
  );
};
