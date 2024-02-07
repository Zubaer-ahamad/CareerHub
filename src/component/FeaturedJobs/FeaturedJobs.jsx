import { useEffect, useState } from "react";
import SingleFeature from "../SingleFeature/SingleFeature";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="mt-20 mb-20">
            <h1 className="text-4xl font-semibold text-center mb-4">Featured Jobs</h1>
            <p className='text-xl text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2 p-4 gap-10 md:gap-8 lg:gap-16 mb-8 mt-16">
                {
                    jobs.slice(0, dataLength).map(job => <SingleFeature key={job.id} job={job}></SingleFeature>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : 'flex justify-center'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary w-1/3">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;