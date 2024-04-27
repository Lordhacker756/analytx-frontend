
function StarIcon(props: { className: string }) {
    return <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
}

export const RateIntern = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 dark:bg-gray-900">
            <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md dark:bg-gray-800">
                <h1 className="text-2xl font-bold mb-4 text-center text-white">Form Submission</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block font-medium mb-1 text-gray-300 dark:text-gray-300" htmlFor="category">
                            Category
                        </label>
                        <select
                            className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            id="category"
                        >
                            <option value="">Select a category</option>
                            <option value="search-engine-questionnaire">Search Engine Questionnaire</option>
                            <option value="teach-a-topic">Teach a Topic</option>
                            <option value="group-discussion">Group Discussion</option>
                            <option value="google-spreadsheet">Google Spreadsheet</option>
                            <option value="origami">Origami</option>
                            <option value="team-task">Team Task</option>
                            <option value="punctuality">Punctuality</option>
                            <option value="attendance">Attendance</option>
                            <option value="personality-type">Personality Type</option>
                            <option value="personal-suggestion">Personal Suggestion</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium mb-1 text-gray-300 dark:text-gray-300" htmlFor="rating">
                            Rating
                        </label>
                        <div className="flex items-center space-x-2">
                            <StarIcon className="w-6 h-6 text-yellow-500" />
                            <StarIcon className="w-6 h-6 text-yellow-500" />
                            <StarIcon className="w-6 h-6 text-yellow-500" />
                            <StarIcon className="w-6 h-6 text-yellow-500" />
                            <StarIcon className="w-6 h-6 text-gray-600 dark:text-gray-600" />
                        </div>
                    </div>
                    <div>
                        <label className="block font-medium mb-1 text-gray-300 dark:text-gray-300" htmlFor="url">
                            URL
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            id="url"
                            placeholder="Enter a URL"
                            type="url"
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1 text-gray-300 dark:text-gray-300" htmlFor="remark">
                            Remark
                        </label>
                        <textarea
                            className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            id="remark"
                            placeholder="Enter your remark"
                            rows="3"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:bg-black dark:hover:bg-gray-800 dark:focus:ring-gray-800"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
