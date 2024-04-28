import { useState } from 'react';
import BarChart from './BarChart'; // Assuming BarChart is in the same directory

const InternAnalytics = () => {
    const [internName, setInternName] = useState('');
    const [chartData, setChartData] = useState({});
    const jsonData =  {
        "attendance": {
            "id": 1,
            "internName": "utkarsh",
            "rating1": 5
        },
        "googleSpreadsheet": {
            "id": 1,
            "internName": "utkarsh",
            "rating1": 5,
            "remark": "houeee how is you doing",
            "url": "https://www.pointerpointer.com"
        },
        "groupDiscussion": {
            "id": 1,
            "internName": "utkarsh",
            "rating1": 5,
            "rating2": 4,
            "rating3": 2,
            "remark": "hi i already told you i'm andar the water pls don't the disturb",
            "url": "https://guthib.com"
        },
        "origami": {
            "id": 1,
            "internName": "utkarsh",
            "rating1": 5
        },
        "personalDescription": {
            "id": 1,
            "internName": "utkarsh",
            "personalDescription": "Hi i am under the watar so send hlp plz and chwenchy bucks ka mineral water also"
        },
        "personalityType": {
            "id": 1,
            "internName": "utkarsh",
            "personalityType": "type-1"
        },
        "punctuality": {
            "id": 1,
            "internName": "utkarsh",
            "rating1": 5
        },
        "searchEngineQuestionnaire": {
            "id": 1,
            "internName": "utkarsh",
            "rating1": 5,
            "rating2": 5,
            "rating3": 5,
            "remark": "all good",
            "url": "https://www.test.com"
        },
        "teachATopic": {
            "id": 1,
            "internName": "utkarsh",
            "rating1": 5,
            "rating2": 5,
            "rating3": 5,
            "rating4": 4,
            "remark": "all good",
            "url": "https://www.test.com"
        },
        "teamTask": {
            "id": 1,
            "internName": "utkarsh",
            "rating1": 5,
            "rating2": 5,
            "rating3": 5,
            "rating4": 4,
            "remark": "all good",
            "url": "https://www.test.com"
        },
        "chartData": {
            "responsibility": 5,
            "abilityToLearn": 5,
            "researchSkills": 5,
            "qualityOfWork": 4.75,
            "communicationSkills": 3.6666666666666665,
            "planningAndProblemSolving": 4.666666666666667
        },
        "docsData": {
            "searchEngineQuestionare": {
                "URL": "https://www.test.com",
                "Remark": "all good"
            },
            "teachATopic": {
                "URL": "https://www.test.com",
                "Remark": "all good"
            },
            "googleSpreadSheet": {
                "URL": "https://www.pointerpointer.com",
                "Remark": "houeee how is you doing"
            },
            "teamTask": {
                "URL": "https://www.test.com",
                "Remark": "all good"
            },
            "personalityType": "type-1",
            "personalSuggestion": "Hi i am under the watar so send hlp plz and chwenchy bucks ka mineral water also",
            "groupDiscussion": {
                "URL": "https://guthib.com",
                "Remark": "hi i already told you i'm andar the water pls don't the disturb"
            }
        },
        "tableData": {
            "searchEngineQuestionnare": {
                "researchSkills": 5,
                "responsibility": 5,
                "qualityOfWork": 5
            },
            "teachATopic": {
                "researchSkills": 5,
                "responsibility": 5,
                "communicationSkills": 4,
                "qualityOfWork": 5
            },
            "groupDiscussion": {
                "researchSkills": 5,
                "communicationSkills": 2,
                "qualityOfWork": 4
            },
            "googleSpreadsheet": {
                "abilityToLearn": 5
            },
            "origami": {
                "abilityToLearn": 5
            },
            "teamTask": {
                "researchSkills": 5,
                "planningAndProblemSolving": 5,
                "communicationSkills": 5,
                "qualityOfWork": 5
            },
            "punctuality": {
                "planningAndProblemSolving": 5
            },
            "attendance": {
                "planningAndProblemSolving": 5
            },
            "taskAverages": [
                5,
                4.75,
                3.6666666666666665,
                5,
                5,
                4.75,
                5,
                5
            ],
            "attributeAverages": [
                5,
                5,
                5,
                4.75,
                3.6666666666666665,
                4.666666666666667
            ]
        }
    };

    const fetchAnalyticsData = () => {
        // Assuming the analytics data is fetched from an API or elsewhere
        // Here, setting the data directly for demonstration purposes
        const fetchedChartData = jsonData.chartData;
        setChartData(fetchedChartData);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-10">
            <div>
                <div className="flex flex-col items-center justify-center gap-3 space-x-2">
                    <h2 className="text-lg font-medium">Get intern analytics</h2>
                    <input
                        className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        placeholder="Enter intern name"
                        type="text"
                        value={internName}
                        onChange={(e) => setInternName(e.target.value)}
                    />
                </div>
                <button
                    onClick={fetchAnalyticsData}
                    className="bg-black w-full text-white px-4 py-2 mt-5 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Get analytics
                </button>
            </div>

            <div className="w-full max-w-[70vw] mt-8 mb-12 justify-center flex">
                <BarChart jsonData={chartData} />
            </div>

            {/* Render table data */}
            <div className="w-full max-w-6xl mt-8">
                <table className="border border-black">
                    <thead>
                    <tr>
                        <th>Attribute</th>
                        {Object.keys(jsonData.tableData).map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(jsonData.tableData).map(([attribute, ratings]) => (
                        <tr key={attribute}>
                            <td>{attribute}</td>
                            {Object.values(ratings).map((rating, index) => (
                                <td key={index}>{rating}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Render document data */}
            <div className="mt-8">
                <h3 className="text-lg font-medium">Document Data:</h3>
                {Object.entries(jsonData.docsData).map(([key, value]) => (
                    <div key={key}>
                        <p>{key}:</p>
                        {typeof value === 'object' ? (
                            <ul>
                                {Object.entries(value).map(([subKey, subValue]) => (
                                    <li key={subKey}>{subKey}: {subValue}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{value}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InternAnalytics;
