import bannerImage from '../../../images/user.png'

const Banner = () => {
    return (
        <div className='p-4 md:flex justify-between items-center gap-10'>
            <div>
                <h1 className="text-7xl font-semibold font-sans mb-5">One Step<br /> Closer To Your <br /> <span className="text-primary">Dream Job</span></h1>
                <p className='mb-5'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            <div>
                <img src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;