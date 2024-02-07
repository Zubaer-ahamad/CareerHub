import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const SingleFeature = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Company Image" /></figure>
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
                <div className="card-actions justify-center">
                    <Link className="btn btn-primary w-1/2" to={`feature/${id}`}><button>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

SingleFeature.propTypes = {
    job: PropTypes.object
}

export default SingleFeature;