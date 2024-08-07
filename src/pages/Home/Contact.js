
const ContactMe = ({ data }) => {
    console.log(data)
    return (
        <div className=" sm:h-auto lg:h-screen  bg-[#194868] flex justify-center items-center ">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 p-8  bg-white shadow-lg rounded-md mx-auto">
                <div className='lg:w-1/2'>
                    <h1 className="text-blue-950 text-3xl font-extrabold">Let's Connect</h1>
                    <p className="text-sm text-gray-600 mt-4 ">
                        I'm open for work/projects. Have a great idea/opportunity?
                    </p>

                    <div className="mt-12 mb-12">
                        <ul className="flex mt-4 space-x-4">
                            <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href={data.github} target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" style={{ width: '24px', height: '24px', fill: 'currentColor' }}>
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                    </svg>
                                </a>
                            </li>
                            <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5">
                                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.74 0 53.57A53.87 53.87 0 0153.6 0a53.87 53.87 0 0153.6 53.57c0 30.17-24.19 54.53-53.41 54.53zm394.21 339.9h-92.41V305.4c0-34-1.2-77.4-47.2-77.4-47.2 0-54.5 36.7-54.5 74.6v145.4h-92.78V148.9h89.06v40.8h1.3c12.4-23.4 42.8-48.1 88-48.1 94 0 111.3 61.9 111.3 142.3v164.1z" />
                                    </svg>
                                </a>
                            </li>
                            <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href={data.leetcode} target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 32 32">
                                        <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z" />
                                    </svg>
                                </a>
                            </li>
                            <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href={data.codeforces} target="_blank" rel="noopener noreferrer">
                                <svg style={{ width: '24px', height: '24px', fill: 'currentColor' }} viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Codeforces icon</title><path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <form>
                        <div className="">
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700">
                                Full Name <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                                Email <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-bold text-gray-700">
                                Message <span className="text-red-600">*</span>
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Write your message..."
                                required
                            ></textarea>
                        </div>
                        <div className="flex items-center">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-base font-medium rounded-mdtext-white text-center hover:bg-[#1d4167] rounded-md bg-[#1c5490] text-white text-bold"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
