import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utilitis/LocalStorage";

const ShowDetail = () => {
    const jobs = useLoaderData();
    const { jobId } = useParams();
    const jobInt = parseInt(jobId);
    const job = jobs.find(job => job.id === jobInt);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;
    const handleApplyJob = () => {
        saveJobApplication(jobInt);
        toast("Your Apply Be Done !");
    }
    return (
        <div className="mt-20 mb-20">
            <h1 className="text-4xl font-semibold font-sans text-center mt-20 mb-20 ">Job Details</h1>
            <div className="grid p-4 md:grid-cols-4 gap-10">
                <div className="md:col-span-3">
                    <p><span className="text-lg font-bold">Job Description:</span> {job_description}</p>
                    <p className="mt-4 mb-4"><span className="text-lg font-bold">Job Responsibility:</span> {job_responsibility}</p>
                    <div>
                        <p className="text-lg font-bold mb-3">Educational Requirements:</p>
                        <p>{educational_requirements}</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-lg font-bold mb-3">Experiences:</p>
                        <p>{experiences}</p>
                    </div>
                </div>
                <div className="card card-compact bg-purple-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-serif mt-5 mb-3">Job Details</h2>
                        <h1 className='flex items-center gap-1 text-xl font-semibold'><CiLocationOn /> {job_title}</h1>
                        <h1 className='flex items-center gap-1 text-xl font-semibold'><CiDollar /> {salary}</h1>
                        <h1 className="card-title text-3xl font-serif">Contact Information</h1>
                        <p className="flex items-center gap-1 text-xl font-semibold">Phone: {contact_information.phone}</p>
                        <p className="flex items-center gap-1 text-xl font-semibold">Email: {contact_information.email}</p>
                        <p className="flex items-center gap-1 text-xl font-semibold">Address: {contact_information.address}: </p>
                        <div className="card-actions justify-center mt-5 mb-4">
                            <button onClick={handleApplyJob} className="btn btn-primary">Apply Now</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetail;