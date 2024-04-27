
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import BarChart from "@/pages/BarChart.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx"

export default function InternAnalytics() {

    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-10">
        <div>
            <div className="flex flex-col items-center justify-center gap-3 space-x-2">
                <h2 className="text-lg font-medium">Get intern analytics</h2>
                <Input
                    className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    placeholder="Enter intern name"
                    type="text"
                />
            </div>
            <Button
                className="bg-black w-full text-white px-4 py-2 mt-5 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Get analytics
            </Button>
        </div>

    <div className="w-full max-w-[70vw] mt-8 mb-12 justify-center flex">
        <BarChart/>
    </div>
    <div className="w-full max-w-6xl mt-8">
        <Table className="border border-black">
            <TableHeader>
                <TableRow>
                    <TableHead className="bg-[#9ccc65] dark:bg-[#9ccc65]/50">Attributes</TableHead>
                    <TableHead className="dark:bg-gray-800/50">Search Engine Questionnaire</TableHead>
                    <TableHead className="dark:bg-gray-800/50">Teach a topic</TableHead>
                    <TableHead className="dark:bg-gray-800/50">Group discussion</TableHead>
                            <TableHead className="dark:bg-gray-800/50">Google Spreadsheet</TableHead>
                            <TableHead className="dark:bg-gray-800/50">Origami</TableHead>
                            <TableHead className="dark:bg-gray-800/50">Team Task</TableHead>
                            <TableHead className="dark:bg-gray-800/50">Punctuality</TableHead>
                            <TableHead className="dark:bg-gray-800/50">Attendance</TableHead>
                            <TableHead className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">Average</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="dark:bg-gray-800/50">Responsibility</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating1</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating1</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating1</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating1</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating1</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating1</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating1</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating1</TableCell>
                            <TableCell className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">rating1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="dark:bg-gray-800/50">Ability to learn</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating1</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating2</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating2</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating2</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating2</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating2</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating2</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating2</TableCell>
                            <TableCell className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">rating2</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="dark:bg-gray-800/50">Research skills</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating2</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating3</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating3</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating3</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating3</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating3</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating3</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating3</TableCell>
                            <TableCell className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">rating3</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="dark:bg-gray-800/50">Quality of work</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating3</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating4</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating4</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating4</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating4</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating4</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating4</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating4</TableCell>
                            <TableCell className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">rating4</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="dark:bg-gray-800/50">Communication skills</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating4</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating5</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating5</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating5</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating5</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating5</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating5</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating5</TableCell>
                            <TableCell className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">rating5</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="dark:bg-gray-800/50">Planning and problem solving</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating5</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating6</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating6</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating6</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating6</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating6</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating6</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating6</TableCell>
                            <TableCell className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">rating6</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="bg-[#9ccc65] dark:bg-[#9ccc65]/50">Average</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating6</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating7</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating7</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating7</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating7</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating7</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating7</TableCell>
                            <TableCell className="dark:bg-gray-800/50">rating7</TableCell>
                            <TableCell className="bg-[#b39ddb] dark:bg-[#b39ddb]/50">rating7</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
