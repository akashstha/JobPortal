 import { useLoaderData } from "react-router-dom";
 const JobPages = () => {
// const {id} = useParams();
const jobs = useLoaderData()
    return(<>{jobs.title}</>)
}

const jobDataLoader = async({params})=>{
const response = await fetch(`http://localhost:3000/api/jobs/${params.id}`);
const data = await response.json();
return data;
}

export { JobPages as default, jobDataLoader };
