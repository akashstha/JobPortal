import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { MainLayouts } from './components/layouts/MainLayouts';
import { AddJobs } from './components/pages/AddJobs';
import { EditPage } from './components/pages/EditPage';
import { HomePage } from './components/pages/HomePage';
import JobPages, { jobDataLoader } from './components/pages/JobPages';
import { JobsPages } from './components/pages/JobsPage';
import { NotFoundPage } from './components/pages/NotFoundPage';


const App = () => {



  const addJobRequest = async (newJobs) =>{
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJobs)
    })
    return;
  }
  const updateJobRequest = async (job) =>{
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job)
    })
    return;
  }
  const deleteJobID = async (id) =>{
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return;
    
  }
  

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayouts/>}>
    <Route index element={<HomePage/>} />
    <Route path="/jobs" element={<JobsPages/>} />
    <Route path="/add-job" element={<AddJobs addNewJobRequest={addJobRequest}/>} />
    <Route path="/jobs/:id" element={<JobPages deleteJobID={deleteJobID}/> } loader={jobDataLoader}/>
    <Route path="/edit-job/:id" element={<EditPage updateJobRequest={updateJobRequest}/> } loader={jobDataLoader}/>
    <Route path="*" element={<NotFoundPage/>} />
    </Route>
    )
    );

  return (
    
    <RouterProvider router={router} />
  )
    
};

export default App;
