

function About({data}) {
    return (
        <div className="min-h-screen w-screen bg-[#1b5982] flex justify-center items-center">
            <div className="flex w-full  h-auto items-center sm:flex-col  p-8">
                <div className="w-1/2 sm:w-full  flex  justify-evenly pt-2">
                    <img src={'/profilepicture.jpg' || data.imgUrl} alt="Profile" className="rounded-full shadow-xl w-64 h-64 scale-125  object-cover" />
                </div>
                <div className="flex flex-col w-1/2 sm:w-full sm:mt-8 sm:text-center px-2 sm:py-6 gap-10">
                    <h1 className="text-5xl sm:text-4xl drop-shadow-md font-extrabold text-white">About me</h1>
                    <p className="text-white text-wrap">
                        {data.description1}
                        </p>
                    {/* <div className="flex justify-center gap-4 ">
                        <div className="bg-gray-100 p-4 rounded-md shadow-lg w-1/4 sm:w-auto text-center">
                            <h2 className="font-bold text-lg">Experience</h2>
                            <p className="text-gray-600">2+ Years</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-md shadow-lg w-1/4 sm:w-auto text-center">
                            <h2 className="font-bold text-lg">Completed</h2>
                            <p className="text-gray-600">4+ Projects</p>
                        </div>
                      
                    </div> */}
                   
                </div>
            </div>
        </div>
    );
}

export default About;
