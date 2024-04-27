import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Login() {
    return (
        <div className="flex min-h-[100dvh] items-center justify-center bg-black px-4">
            <div className="w-full max-w-md space-y-6 rounded-lg border bg-gray-900 p-6 shadow-lg dark:border-gray-800">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold text-white">Welcome back</h1>
                    <p className="text-gray-400">Enter your email and password to sign in.</p>
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
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label className="text-gray-400" htmlFor="password">
                                Password
                            </Label>
                            <a className="text-sm font-medium text-gray-400 hover:underline" href="#">
                                Forgot password?
                            </a>
                        </div>
                        <Input className="bg-gray-800 text-white" id="password" required type="password" />
                    </div>
                    <Button className="w-full bg-gray-800 text-white hover:bg-gray-700" type="submit">
                        Sign in
                    </Button>
                </form>
                <p className="text-center text-sm text-gray-400">
                    Don't have an account?
                    <a className="font-medium text-gray-400 hover:underline" href="#">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    )
}
