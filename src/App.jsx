import { Hero } from "./components/Hero";
import { HomeCards } from "./components/HomeCards";
import { JobListings } from "./components/JobListings";
import { NavBar } from "./components/NavBar";
import { ViewAllJobs } from "./components/ViewAllJobs";
const App = () => {
  return (
    <>
      <NavBar />

      <Hero />

      <HomeCards />

      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
