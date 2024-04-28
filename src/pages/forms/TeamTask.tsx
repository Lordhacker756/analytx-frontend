import { useState } from 'react';
import { Label } from "@/components/ui/label.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Button } from "@/components/ui/button.tsx";

export const TeamTask = () => {
    const [internName, setInternName] = useState('');
    const [researchSkills, setResearchSkills] = useState('');
    const [qualityOfWork, setQualityOfWork] = useState('');
    const [communicationSkills, setCommunicationSkills] = useState('');
    const [planningAndProblemSolving, setPlanningAndProblemSolving] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            internName,
            rating1: parseFloat(researchSkills),
            rating2: parseFloat(qualityOfWork),
            rating3: parseFloat(communicationSkills),
            rating4: parseFloat(planningAndProblemSolving)
        };
        fetch('http://localhost:8080/submit-team-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="flex-1 p-6 md:p-10 bg-gray-900">
            <div className="mx-auto max-w-2xl">
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-50">Team Task</h1>
                        <p className="text-gray-400">
                            This form is designed to gather information about your experience with Team Task
                        </p>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <Label className="text-gray-50" htmlFor="intern-name">
                                Intern Name
                            </Label>
                            <input
                                type="text"
                                id="intern-name"
                                value={internName}
                                onChange={(e) => setInternName(e.target.value)}
                                className="bg-gray-800 text-gray-50 w-full p-2 rounded"
                                placeholder="Enter Intern Name"
                            />
                        </div>
                        <div>
                            <Label className="text-gray-50" htmlFor="research-skills">
                                Research Skills
                            </Label>
                            <Select id="research-skills">
                                <SelectTrigger className="bg-gray-800 text-gray-50">
                                    <SelectValue className="text-gray-50" placeholder="Select research skills"/>
                                </SelectTrigger>
                                <SelectContent className="bg-gray-800 text-gray-50">
                                    <SelectItem className="hover:bg-gray-700" value="1">
                                        1 star
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="2">
                                        2 stars
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="3">
                                        3 stars
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="4">
                                        4 stars
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="5">
                                        5 stars
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="text-gray-50" htmlFor="quality-of-work">
                                Quality of Work
                            </Label>
                            <Select id="quality-of-work">
                                <SelectTrigger className="bg-gray-800 text-gray-50">
                                    <SelectValue className="text-gray-50" placeholder="Select quality of work"/>
                                </SelectTrigger>
                                <SelectContent className="bg-gray-800 text-gray-50">
                                    <SelectItem className="hover:bg-gray-700" value="1">
                                        1 star
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="2">
                                        2 stars
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="3">
                                        3 stars
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="4">
                                        4 stars
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="5">
                                        5 stars
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="text-gray-50" htmlFor="communication-skills">
                                Communication Skills
                            </Label>
                            <Select id="communication-skills">
                                <SelectTrigger className="bg-gray-800 text-gray-50">
                                    <SelectValue className="text-gray-50" placeholder="Select communication skills"/>
                                </SelectTrigger>
                                <SelectContent className="bg-gray-800 text-gray-50">
                                    <SelectItem className="hover:bg-gray-700" value="1">
                                        1 star
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="2">
                                        2 stars
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="3">
                                        3 stars
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="4">
                                        4 stars
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="5">
                                        5 stars
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="text-gray-50" htmlFor="planning-and-problem-solving">
                                Planning and Problem Solving
                            </Label>
                            <Select id="planning-and-problem-solving">
                                <SelectTrigger className="bg-gray-800 text-gray-50">
                                    <SelectValue className="text-gray-50" placeholder="Select planning and problem solving skills"/>
                                </SelectTrigger>
                                <SelectContent className="bg-gray-800 text-gray-50">
                                    <SelectItem className="hover:bg-gray-700" value="1">
                                        1 star
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="2">
                                        2 stars
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="3">
                                        3 stars
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="4">
                                        4 stars
                                    </SelectItem>
                                    <SelectItem className="hover:bg-gray-700" value="5">
                                        5 stars
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button className="w-full bg-gray-900 text-gray-50 hover:bg-gray-800 border border-white" type="submit">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
