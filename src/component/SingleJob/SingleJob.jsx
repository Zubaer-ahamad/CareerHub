import PropTypes from 'prop-types';

const SingleJob = ({ singleCategory }) => {
    return (
        <div className='bg-blue-100 p-3 md:p-5 lg:p-10 rounded-lg'>
            <img src={singleCategory.logo} alt="" />
            <h2 className='text-xl font-semibold mt-4 mb-1'>{singleCategory.category_name}</h2>
            <p>{singleCategory.availability}</p>
        </div>
    );
};

SingleJob.propTypes = {
    singleCategory: PropTypes.object
}

export default SingleJob;