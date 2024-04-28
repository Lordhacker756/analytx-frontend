import { useState } from "react";
import { Label } from "@/components/ui/label.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Button } from "@/components/ui/button.tsx";

export const PersonalSuggestion = () => {
  const [internName, setInternName] = useState("");
  const [personalDescription, setPersonalDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      internName,
      personalDescription,
    };
    const authToken = localStorage.getItem("authToken");
    fetch("http://localhost:8080/api/v1/user/submit-personal-description", {
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
        window.alert("Personal Suggestion form submitted successfully");
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

  return (
    <div className="flex-1 p-6 md:p-10 bg-gray-900">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-50">
              Personal Suggestion
            </h1>
            <p className="text-gray-400">
              This form is designed to gather information about your Personal
              Suggestion
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label className="text-gray-50" htmlFor="intern-name">
                Intern Name
              </Label>
              <select
                id="intern-name"
                value={internName}
                onChange={(e) => setInternName(e.target.value)}
                className="bg-gray-800 text-gray-50 w-full p-2 rounded"
              >
                <option value="" disabled>
                  Select Intern Name
                </option>
                {internOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label className="text-gray-50" htmlFor="personal-description">
                Personal Suggestion
              </Label>
              <Textarea
                className="bg-gray-800 text-gray-50"
                id="personal-description"
                value={personalDescription}
                onChange={(e) => setPersonalDescription(e.target.value)}
                placeholder="Enter your suggestion"
                rows={5}
              />
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
