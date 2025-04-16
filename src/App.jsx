import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { MainLayouts } from './components/layouts/MainLayouts';
import { AddJobs } from './components/pages/AddJobs';
import { HomePage } from './components/pages/HomePage';
import JobPages, { jobDataLoader } from './components/pages/JobPages';
import { JobsPages } from './components/pages/JobsPage';
import { NotFoundPage } from './components/pages/NotFoundPage';


const App = () => {



  const AddJobRequest = async (newJobs) =>{
    console.log(newJobs);
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJobs)
    })
    return;
  }
  

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayouts/>}>
    <Route index element={<HomePage/>} />
    <Route path="/jobs" element={<JobsPages/>} />
    <Route path="/add-job" element={<AddJobs addNewJobRequest={AddJobRequest}/>} />
    <Route path="/jobs/:id" element={<JobPages/> } loader={jobDataLoader}/>
    <Route path="*" element={<NotFoundPage/>} />
    </Route>
    )
    );

  return (
    
    <RouterProvider router={router} />
  )
    
};

export default App;
