import { useState } from 'react';
import { Label } from "@/components/ui/label.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Button } from "@/components/ui/button.tsx";

export const Attendance = () => {
    const [internName, setInternName] = useState('');
    const [rating1, setRating1] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            internName,
            rating1: parseFloat(rating1)
        };
        fetch('http://localhost:8080/submit-attendance', {
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
                        <h1 className="text-3xl font-bold text-gray-50">Attendance</h1>
                        <p className="text-gray-400">
                            This form is designed to gather information about your Attendance
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
                            <Label className="text-gray-50" htmlFor="attendance-rating">
                                Attendance Rating
                            </Label>
                            <Select id="attendance-rating">
                                <SelectTrigger className="bg-gray-800 text-gray-50">
                                    <SelectValue className="text-gray-50" placeholder="Select attendance rating"/>
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
