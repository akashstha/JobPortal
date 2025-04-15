import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { MainLayouts } from './components/layouts/MainLayouts';
import { HomePage } from './components/pages/HomePage';
import { JobsPages } from './components/pages/JobsPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<MainLayouts/>}>
<Route index element={<HomePage/>} />
<Route path="/jobs" element={<JobsPages/>} />
<Route path="*" element={<NotFoundPage/>} />
</Route>
)
);
const App = () => {

  return (
    
    <RouterProvider router={router} />
  )
    
};

export default App;
