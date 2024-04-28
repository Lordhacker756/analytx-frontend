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

export const PersonalityType = () => {
  const [internName, setInternName] = useState("");
  const [personalityType, setPersonalityType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      internName,
      personalityType,
    };
    const authToken = localStorage.getItem("authToken");
    fetch("http://localhost:8080/api/v1/user/submit-personality-type", {
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
        window.alert("Personality Type form submitted successfully");
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

  const personalityTypeOptions = [
    { value: "Type 1", label: "Type 1" },
    { value: "Type 2", label: "Type 2" },
    { value: "Type 3", label: "Type 3" },
    { value: "Type 4", label: "Type 4" },
    { value: "Type 5", label: "Type 5" },
  ];

  return (
    <div className="flex-1 p-6 md:p-10 bg-gray-900">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-50">
              Personality Type
            </h1>
            <p className="text-gray-400">
              This form is designed to gather information about your Personality
              Type
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
              <Label className="text-gray-50" htmlFor="personality-type">
                Personality Type
              </Label>
              <Select
                id="personality-type"
                onValueChange={(value) => setPersonalityType(value)}
              >
                <SelectTrigger className="bg-gray-800 text-gray-50">
                  <SelectValue
                    className="text-gray-50"
                    placeholder="Select personality type"
                  />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-gray-50">
                  {personalityTypeOptions.map((option) => (
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
