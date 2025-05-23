import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
export const JobListing = ({ job }) => {
  const [showJobDescription, setShowJobDescription] = useState(false);
  let jobDescription = job.description;
  if (!showJobDescription) {
    jobDescription = jobDescription.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.title}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{jobDescription}</div>
        <button
          className="text-indigo-500 mb-5 hover:text-indigo-600"
          onClick={() => setShowJobDescription((prev) => !prev)}
        >
          {" "}
          {showJobDescription ? "Less" : "More"}{" "}
        </button>

        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
           <FaMapMarker className="inline text-lg mb-1"/>
            {job.location}
          </div>

          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
