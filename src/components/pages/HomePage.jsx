import { Hero } from "../Hero";
import { HomeCards } from "../HomeCards";
import { JobListings } from "../JobListings";
import { ViewAllJobs } from "../ViewAllJobs";

export const HomePage = () => {
    return(
        <>
        <Hero/>
        <HomeCards />

        <JobListings isHome={true}/>
        <ViewAllJobs />
        </>
    )
}