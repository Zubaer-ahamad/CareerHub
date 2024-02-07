import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilitis/LocalStorage";
import { useEffect, useState } from "react";
import AppliedJobs from "../AppliedJobs/AppliedJobs";

const Applied = () => {
    const appliedJobs = useLoaderData();
    const [saveJobs, setSaveJobs] = useState([]);

    useEffect(() => {
        const storedJobs = getStoredJobApplication();
        if(appliedJobs){
            const jobApplied = appliedJobs.filter(job => storedJobs.includes(job.id));
            setSaveJobs(jobApplied);
        }
    }, [])

    return (
        <div>
            {
                saveJobs.map(saveJob => <AppliedJobs key={saveJob.id} saveJob={saveJob}></AppliedJobs>)
            }
        </div>
    );
};

export default Applied;