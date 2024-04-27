import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Register() {
    return (
        <div className="flex min-h-[100dvh] items-center justify-center bg-black px-4">
            <div className="w-full max-w-md space-y-6 rounded-lg border bg-gray-900 p-6 shadow-lg dark:border-gray-800">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold text-white">Create an account</h1>
                    <p className="text-gray-400">Enter your email and password to register.</p>
                </div>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label className="text-gray-400" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            className="bg-gray-800 text-white placeholder:text-gray-500"
                            id="email"
                            placeholder="m@example.com"
                            required
                            type="email"
                        />
                    </div>
                    <div className="space-y-2 relative">
                        <div className="flex items-center justify-between">
                            <Label className="text-gray-400" htmlFor="password">
                                Password
                            </Label>
                            <Button className="absolute bottom-1 right-1 h-7 w-7" size="icon" variant="ghost">
                                <EyeIcon  />
                                <span className="sr-only">Toggle password visibility</span>
                            </Button>
                        </div>
                        <Input className="bg-gray-800 text-white" id="password" required type="password" />
                    </div>
                    <Button className="w-full bg-gray-800 text-white hover:bg-gray-700" type="submit">
                        Register
                    </Button>
                </form>
                <p className="text-center text-sm text-gray-400">
                    Already have an account?
                    <a className="font-medium text-gray-400 hover:underline" href="#">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    )
}

function EyeIcon() {
    return (
        <svg
            className={"h-4 w-4"}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}