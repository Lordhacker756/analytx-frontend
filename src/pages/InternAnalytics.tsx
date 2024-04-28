import { useEffect, useState } from "react";
import BarChart from "./BarChart"; // Assuming BarChart is in the same directory
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

const InternAnalytics = () => {
  const [internName, setInternName] = useState("");
  const [chartData, setChartData] = useState({});
  const [jsonData, setJsonData] = useState({
    attendance: {
      id: 1,
      internName: "utkarsh",
      rating1: 5,
    },
    googleSpreadsheet: {
      id: 1,
      internName: "utkarsh",
      rating1: 5,
      remark: "houeee how is you doing",
      url: "https://www.pointerpointer.com",
    },
    groupDiscussion: {
      id: 1,
      internName: "utkarsh",
      rating1: 5,
      rating2: 4,
      rating3: 2,
      remark: "hi i already told you i'm andar the water pls don't the disturb",
      url: "https://guthib.com",
    },
    origami: {
      id: 1,
      internName: "utkarsh",
      rating1: 5,
    },
    personalDescription: {
      id: 1,
      internName: "utkarsh",
      personalDescription:
        "Hi i am under the watar so send hlp plz and chwenchy bucks ka mineral water also",
    },
    personalityType: {
      id: 1,
      internName: "utkarsh",
      personalityType: "type-1",
    },
    punctuality: {
      id: 1,
      internName: "utkarsh",
      rating1: 5,
    },
    searchEngineQuestionnaire: {
      id: 1,
      internName: "utkarsh",
      rating1: 5,
      rating2: 5,
      rating3: 5,
      remark: "all good",
      url: "https://www.test.com",
    },
    teachATopic: {
      id: 1,
      internName: "utkarsh",
      rating1: 5,
      rating2: 5,
      rating3: 5,
      rating4: 4,
      remark: "all good",
      url: "https://www.test.com",
    },
    teamTask: {
      id: 1,
      internName: "utkarsh",
      rating1: 5,
      rating2: 5,
      rating3: 5,
      rating4: 4,
      remark: "all good",
      url: "https://www.test.com",
    },
    chartData: {
      responsibility: 5,
      abilityToLearn: 5,
      researchSkills: 5,
      qualityOfWork: 4.75,
      communicationSkills: 3.6666666666666665,
      planningAndProblemSolving: 4.666666666666667,
    },
    docsData: {
      searchEngineQuestionare: {
        URL: "https://www.test.com",
        Remark: "all good",
      },
      teachATopic: {
        URL: "https://www.test.com",
        Remark: "all good",
      },
      googleSpreadSheet: {
        URL: "https://www.pointerpointer.com",
        Remark: "houeee how is you doing",
      },
      teamTask: {
        URL: "https://www.test.com",
        Remark: "all good",
      },
      personalityType: "type-1",
      personalSuggestion:
        "Hi i am under the watar so send hlp plz and chwenchy bucks ka mineral water also",
      groupDiscussion: {
        URL: "https://guthib.com",
        Remark:
          "hi i already told you i'm andar the water pls don't the disturb",
      },
    },
    tableData: {
      searchEngineQuestionnare: {
        researchSkills: 5,
        responsibility: 5,
        qualityOfWork: 5,
      },
      teachATopic: {
        researchSkills: 5,
        responsibility: 5,
        communicationSkills: 4,
        qualityOfWork: 5,
      },
      groupDiscussion: {
        researchSkills: 5,
        communicationSkills: 2,
        qualityOfWork: 4,
      },
      googleSpreadsheet: {
        abilityToLearn: 5,
      },
      origami: {
        abilityToLearn: 5,
      },
      teamTask: {
        researchSkills: 5,
        planningAndProblemSolving: 5,
        communicationSkills: 5,
        qualityOfWork: 5,
      },
      punctuality: {
        planningAndProblemSolving: 5,
      },
      attendance: {
        planningAndProblemSolving: 5,
      },
      taskAverages: [5, 4.75, 3.6666666666666665, 5, 5, 4.75, 5, 5],
      attributeAverages: [5, 5, 5, 4.75, 3.6666666666666665, 4.666666666666667],
    },
  });
  const [tableData, setTableData] = useState({
    searchEngineQuestionnare: {
      researchSkills: 5,
      responsibility: 5,
      qualityOfWork: 5,
    },
    teachATopic: {
      researchSkills: 5,
      responsibility: 5,
      communicationSkills: 4,
      qualityOfWork: 5,
    },
    groupDiscussion: {
      researchSkills: 5,
      communicationSkills: 2,
      qualityOfWork: 4,
    },
    googleSpreadsheet: {
      abilityToLearn: 5,
    },
    origami: {
      abilityToLearn: 5,
    },
    teamTask: {
      researchSkills: 5,
      planningAndProblemSolving: 5,
      communicationSkills: 5,
      qualityOfWork: 5,
    },
    punctuality: {
      planningAndProblemSolving: 5,
    },
    attendance: {
      planningAndProblemSolving: 5,
    },
    taskAverages: [5, 4.75, 3.6666666666666665, 5, 5, 4.75, 5, 5],
    attributeAverages: [5, 5, 5, 4.75, 3.6666666666666665, 4.666666666666667],
  });

  const fetchAnalyticsData = () => {
    // Assuming the analytics data is fetched from an API or elsewhere
    // Here, setting the data directly for demonstration purposes
    const fetchedChartData = jsonData.chartData;
    setChartData(fetchedChartData);
    console.log("Fetched chart data", fetchedChartData);
  };

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

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
        <BarChart jsonData={jsonData} />
      </div>

      {/* Render table data */}
      <div className="w-full max-w-6xl mt-8">
        <Table className="border border-black">
          <TableHeader>
            <TableRow>
              {/* Render table headers */}
              <TableHead className="bg-[#9ccc65] dark:bg-[#9ccc65]/50">
                Attributes
              </TableHead>
              <TableHead className="dark:bg-gray-800/50">
                Search Engine Questionnaire
              </TableHead>
              <TableHead className="dark:bg-gray-800/50">
                Teach a topic
              </TableHead>
              <TableHead className="dark:bg-gray-800/50">
                Group discussion
              </TableHead>
              <TableHead className="dark:bg-gray-800/50">
                Google Spreadsheet
              </TableHead>
              <TableHead className="dark:bg-gray-800/50">Origami</TableHead>
              <TableHead className="dark:bg-gray-800/50">Team Task</TableHead>
              <TableHead className="dark:bg-gray-800/50">Punctuality</TableHead>
              <TableHead className="dark:bg-gray-800/50">Attendance</TableHead>
              <TableHead className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">
                Average
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="dark:bg-gray-800/50">
                Responsibility
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.searchEngineQuestionnare.responsibility}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.teachATopic.responsibility}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">
                {tableData.attributeAverages[0].toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="dark:bg-gray-800/50">
                Ability to learn
              </TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.googleSpreadsheet.abilityToLearn}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.origami.abilityToLearn}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">
                {tableData.attributeAverages[1].toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="dark:bg-gray-800/50">
                Research skills
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.searchEngineQuestionnare.researchSkills}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.teachATopic.researchSkills}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.groupDiscussion.researchSkills}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.teamTask.researchSkills}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">
                {tableData.attributeAverages[2].toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="dark:bg-gray-800/50">
                Quality of work
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.searchEngineQuestionnare.qualityOfWork}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.teachATopic.qualityOfWork}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.groupDiscussion.qualityOfWork}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.teamTask.qualityOfWork}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">
                {tableData.attributeAverages[3].toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="dark:bg-gray-800/50">
                Communication skills
              </TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.teachATopic.communicationSkills}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.groupDiscussion.communicationSkills}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.teamTask.communicationSkills}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">
                {tableData.attributeAverages[4].toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="dark:bg-gray-800/50">
                Planning and problem solving
              </TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50"></TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.teamTask.planningAndProblemSolving}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.punctuality.planningAndProblemSolving}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.attendance.planningAndProblemSolving}
              </TableCell>
              <TableCell className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">
                {tableData.attributeAverages[5].toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="bg-[#9ccc65] dark:bg-[#9ccc65]/50">
                Average
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.taskAverages[0].toFixed(2)}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.taskAverages[1].toFixed(2)}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.taskAverages[2].toFixed(2)}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.taskAverages[3].toFixed(2)}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.taskAverages[4].toFixed(2)}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.taskAverages[5].toFixed(2)}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.taskAverages[6].toFixed(2)}
              </TableCell>
              <TableCell className="dark:bg-gray-800/50">
                {tableData.taskAverages[7].toFixed(2)}
              </TableCell>
              <TableCell className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">
                {tableData.taskAverages
                  .reduce((acc, curr) => acc + curr, 0)
                  .toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Render document data */}
      <div className="mt-8">
        <h3 className="text-lg font-medium">Document Data:</h3>
        {Object.entries(jsonData.docsData).map(([key, value]) => (
          <div key={key}>
            <p>{key}:</p>
            {typeof value === "object" ? (
              <ul>
                {Object.entries(value).map(([subKey, subValue]) => (
                  <li key={subKey}>
                    {subKey}: {subValue}
                  </li>
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
