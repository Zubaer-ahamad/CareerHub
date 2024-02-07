import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';



const AppliedJobs = ({ saveJob }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = saveJob;
    return (
        <div className="card card-side bg-base-100 shadow-xl mt-10 mb-10 p-4">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h1 className="card-title text-2xl font-semibold">{job_title}</h1>
                <h2 className='text-xl mt-3 mb-2 font-medium'>{company_name}</h2>
                <div>
                    <button className='px-6 py-3 border border-primary text-lg font-semibold text-primary rounded-md mr-3'>{remote_or_onsite}</button>
                    <button className='px-6 py-3 border border-primary text-lg font-semibold text-primary rounded-md'>{job_type}</button>
                </div>
                <div className='flex gap-5 mt-5 mb-8 items-center'>
                    <h1 className='flex items-center gap-1 text-xl font-semibold'><CiLocationOn /> {location}</h1>
                    <h1 className='flex items-center gap-1 text-xl font-semibold'><CiDollar /> {salary}</h1>
                </div>
                <div className="card-actions justify-end items-center">
                    <Link to={`/feature/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};


AppliedJobs.propTypes = {
    saveJob: PropTypes.object
}

export default AppliedJobs;