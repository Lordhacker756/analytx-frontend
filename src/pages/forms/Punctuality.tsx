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

export const Punctuality = () => {
  const [internName, setInternName] = useState("");
  const [planningAndProblemSolving, setPlanningAndProblemSolving] =
    useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      internName,
      rating1: parseFloat(planningAndProblemSolving),
    };
    console.log(data);
    const authToken = localStorage.getItem("authToken");
    fetch("http://localhost:8080/api/v1/user/submit-punctuality", {
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
        window.alert("Punctuality form submitted successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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

  // Define options for intern names
  const internOptions = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
  ];

  return (
    <div className="flex-1 p-6 md:p-10 bg-gray-900">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-50">Punctuality</h1>
            <p className="text-gray-400">
              This form is designed to gather information about your experience
              with Punctuality
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label className="text-gray-50" htmlFor="intern-name">
                Intern Name
              </Label>
              <Select
                id="intern-name"
                value={internName}
                onValueChange={(value) => setInternName(value)}
                className="bg-gray-800 text-gray-50 w-full p-2 rounded"
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
              <Label
                className="text-gray-50"
                htmlFor="planning-and-problem-solving"
              >
                Planning and Problem Solving
              </Label>
              <Select
                id="planning-and-problem-solving"
                onValueChange={(value) => setPlanningAndProblemSolving(value)}
              >
                <SelectTrigger className="bg-gray-800 text-gray-50">
                  <SelectValue
                    className="text-gray-50"
                    placeholder="Select planning and problem solving skills"
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
