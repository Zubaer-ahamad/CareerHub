import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilitis/LocalStorage";
import { useEffect, useState } from "react";
import AppliedJobs from "../AppliedJobs/AppliedJobs";
import { FaChevronDown } from "react-icons/fa";

const Applied = () => {
    const appliedJobs = useLoaderData();
    const [saveJobs, setSaveJobs] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);

    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJob(saveJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = saveJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJob(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = saveJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJob(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobs = getStoredJobApplication();
        if (appliedJobs) {
            const jobApplied = appliedJobs.filter(job => storedJobs.includes(job.id));
            setSaveJobs(jobApplied);
            setDisplayJob(jobApplied);
        }
    }, [appliedJobs])

    return (
        <div>
            <details className="dropdown">
                <summary className="m-1 btn"><span className="flex items-center gap-1">Filter By <FaChevronDown /></span></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a className="font-bold">All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a className="font-bold">Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a className="font-bold">Onsite</a></li>
                </ul>
            </details>
            {
                displayJob.map(saveJob => <AppliedJobs key={saveJob.id} saveJob={saveJob}></AppliedJobs>)
            }
        </div>
    );
};

export default Applied;