import PropTypes from 'prop-types';
import SingleJob from '../singleJob/singleJob';
import { useEffect, useState } from 'react';


const JobCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center mt-20 mb-4'>Job Category List</h1>
            <p className='text-xl text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='mt-5 grid grid-cols-2 lg:grid-cols-4 gap-5 p-2 md:p-5 lg:p-10'>
                {
                    categories.map(category => <SingleJob key={category.id} singleCategory={category}></SingleJob>)
                }
            </div>
        </div>
    );
};

JobCategory.propTypes = {
    categories: PropTypes.array
}

export default JobCategory;