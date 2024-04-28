import { useState } from "react";
import { Label } from "@/components/ui/label.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Button } from "@/components/ui/button.tsx";

export const TeamTask = () => {
  const [internName, setInternName] = useState("");
  const [researchSkills, setResearchSkills] = useState("");
  const [qualityOfWork, setQualityOfWork] = useState("");
  const [communicationSkills, setCommunicationSkills] = useState("");
  const [planningAndProblemSolving, setPlanningAndProblemSolving] =
    useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      internName,
      rating1: parseFloat(researchSkills),
      rating2: parseFloat(qualityOfWork),
      rating3: parseFloat(communicationSkills),
      rating4: parseFloat(planningAndProblemSolving),
    };
    const authToken = localStorage.getItem("authToken");
    fetch("http://localhost:8080/api/v1/user/submit-team-task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        window.alert("Team Task form submitted successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const internOptions = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
  ];

  const ratingOptions = [
    { value: "1", label: "1 Star" },
    { value: "1.5", label: "1.5 Stars" },
    { value: "2", label: "2 Stars" },
    { value: "2.5", label: "2.5 Stars" },
    { value: "3", label: "3 Stars" },
    { value: "3.5", label: "3.5 Stars" },
    { value: "4", label: "4 Stars" },
    { value: "4.5", label: "4.5 Stars" },
    { value: "5", label: "5 Stars" },
  ];

  return (
    <div className="flex-1 p-6 md:p-10 bg-gray-900">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-50">Team Task</h1>
            <p className="text-gray-400">
              This form is designed to gather information about your experience
              with Team Task
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label className="text-gray-50" htmlFor="intern-name">
                Intern Name
              </Label>
              <Select
                id="intern-name"
                onValueChange={(value) => setInternName(value)}
              >
                <SelectTrigger className="bg-gray-800 text-gray-50">
                  <SelectValue
                    className="text-gray-50"
                    placeholder="Select intern name"
                  />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-gray-50">
                  {internOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      className="hover:bg-gray-700"
                      value={option.value}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-gray-50" htmlFor="research-skills">
                Research Skills
              </Label>
              <Select
                id="research-skills"
                onValueChange={(value) => setResearchSkills(value)}
              >
                <SelectTrigger className="bg-gray-800 text-gray-50">
                  <SelectValue
                    className="text-gray-50"
                    placeholder="Select research skills"
                  />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-gray-50">
                  {ratingOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      className="hover:bg-gray-700"
                      value={option.value}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-gray-50" htmlFor="quality-of-work">
                Quality of Work
              </Label>
              <Select
                id="quality-of-work"
                onValueChange={(value) => setQualityOfWork(value)}
              >
                <SelectTrigger className="bg-gray-800 text-gray-50">
                  <SelectValue
                    className="text-gray-50"
                    placeholder="Select quality of work"
                  />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-gray-50">
                  {ratingOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      className="hover:bg-gray-700"
                      value={option.value}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-gray-50" htmlFor="communication-skills">
                Communication Skills
              </Label>
              <Select
                id="communication-skills"
                onValueChange={(value) => setCommunicationSkills(value)}
              >
                <SelectTrigger className="bg-gray-800 text-gray-50">
                  <SelectValue
                    className="text-gray-50"
                    placeholder="Select communication skills"
                  />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-gray-50">
                  {ratingOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      className="hover:bg-gray-700"
                      value={option.value}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button
              className="w-full bg-gray-900 text-gray-50 hover:bg-gray-800 border border-white"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
