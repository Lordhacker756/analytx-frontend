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

export const TeachATopic = () => {
  const [internName, setInternName] = useState("");
  const [rating1, setRating1] = useState("");
  const [rating2, setRating2] = useState("");
  const [rating3, setRating3] = useState("");
  const [rating4, setRating4] = useState("");
  const [URL, setURL] = useState("");
  const [remark, setRemark] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      internName,
      rating1: parseFloat(rating1),
      rating2: parseFloat(rating2),
      rating3: parseFloat(rating3),
      rating4: parseFloat(rating4),
      URL,
      remark,
    };
    const authToken = localStorage.getItem("authToken");
    fetch("http://localhost:8080/api/v1/user/submit-teach-a-topic", {
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

  return (
    <div className="flex-1 p-6 md:p-10 bg-gray-900">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-50">Teach A Topic</h1>
            <p className="text-gray-400">
              This form is designed to gather information about your experience
              with explaining concepts
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
              <Label className="text-gray-50" htmlFor="rating1">
                Responsibility
              </Label>
              <Select id="rating1" onValueChange={(value) => setRating1(value)}>
                <SelectTrigger className="bg-gray-800 text-gray-50">
                  <SelectValue
                    className="text-gray-50"
                    placeholder="Select a rating"
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
              <Label className="text-gray-50" htmlFor="rating2">
                Research Skills
              </Label>
              <Select id="rating2" onValueChange={(value) => setRating2(value)}>
                <SelectTrigger className="bg-gray-800 text-gray-50">
                  <SelectValue
                    className="text-gray-50"
                    placeholder="Select a rating"
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
              <Label className="text-gray-50" htmlFor="rating3">
                Quality of Work
              </Label>
              <Select id="rating3" onValueChange={(value) => setRating3(value)}>
                <SelectTrigger className="bg-gray-800 text-gray-50">
                  <SelectValue
                    className="text-gray-50"
                    placeholder="Select a rating"
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
              <Label className="text-gray-50" htmlFor="rating4">
                Communication Skills
              </Label>
              <Select id="rating4" onValueChange={(value) => setRating4(value)}>
                <SelectTrigger className="bg-gray-800 text-gray-50">
                  <SelectValue
                    className="text-gray-50"
                    placeholder="Select a rating"
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
              <Label className="text-gray-50" htmlFor="URL">
                URL
              </Label>
              <input
                type="text"
                id="URL"
                value={URL}
                onChange={(e) => setURL(e.target.value)}
                className="bg-gray-800 text-gray-50 w-full p-2 rounded"
                placeholder="Enter URL"
              />
            </div>
            <div>
              <Label className="text-gray-50" htmlFor="remark">
                Remark
              </Label>
              <Textarea
                className="bg-gray-800 text-gray-50"
                id="remark"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                placeholder="Enter your remark"
                rows={3}
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
