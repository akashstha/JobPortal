import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { MainLayouts } from './components/layouts/MainLayouts';
import { HomePage } from './components/pages/HomePage';
import { JobsPages } from './components/pages/JobsPage';
const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<MainLayouts/>}>
<Route index element={<HomePage/>} />
<Route path="/jobs" element={<JobsPages/>} />
</Route>
)
);
const App = () => {

  return (
    
    <RouterProvider router={router} />
  )
    
};

export default App;
