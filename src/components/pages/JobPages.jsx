import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link, useLoaderData } from "react-router-dom";


const JobPages = () => {
  // const {id} = useParams();
  const jobs = useLoaderData();
  return (
    <>
      <section>
        <div class="container m-auto py-6 px-6">
          <Link
            to="/"
            class="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
                        <FaArrowLeft className='mr-2' /> Back to Job Listings

          </Link>
        </div>
      </section>

      <section class="bg-indigo-50">
        <div class="container m-auto py-10 px-6">
          <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div class="text-gray-500 mb-4">{jobs.type}</div>
                <h1 class="text-3xl font-bold mb-4">{jobs.title}</h1>
                <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                <FaMapMarker className='text-orange-700 mr-1' />
                <p class="text-orange-700">{jobs.location}</p>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 class="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p class="mb-4">{jobs.description}</p>

                <h3 class="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                <p class="mb-4">{jobs.salary}/ Year</p>
              </div>
            </main>

            <aside>
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-6">Company Info</h3>

                <h2 class="text-2xl">{jobs.company.name}</h2>

                <p class="my-2">{jobs.company.description} </p>

                <hr class="my-4" />

                <h3 class="text-xl">Contact Email:</h3>

                <p class="my-2 bg-indigo-100 p-2 font-bold">
                {jobs.company.contactEmail}
                </p>

                <h3 class="text-xl">Contact Phone:</h3>

                <p class="my-2 bg-indigo-100 p-2 font-bold">{jobs.company.contactPhone}</p>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 class="text-xl font-bold mb-6">Manage Job</h3>
                <a
                  href="/add-job.html"
                  class="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </a>
                <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobDataLoader = async ({ params }) => {
  const response = await fetch(`http://localhost:3000/api/jobs/${params.id}`);
  const data = await response.json();
  return data;
};

export { JobPages as default, jobDataLoader };
