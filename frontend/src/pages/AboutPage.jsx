import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Laptop } from "lucide-react"
import { Link } from "react-router-dom"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#121212] text-white">
            {/* Header */}
            <header  className="cursor-pointer container mx-auto py-6 px-4 flex justify-between items-center">
                <Link to={"/"} className="flex items-center gap-2">
                    <div className="bg-purple-600 rounded-full p-1.5">
                        <Laptop className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-xl">IntervuAI</span>
                </Link>
                <div className="hidden md:flex items-center gap-4">
                    <Link to={"/login"}>
                        <Button variant="outline" className="text-white border-gray-700 bg-gray-800">
                            Login
                        </Button>
                    </Link>
                    <Link to={"/register"}>
                        <Button className="bg-purple-600 hover:bg-purple-700">
                            Sign Up
                        </Button>
                    </Link>
                </div>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-menu"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </Button>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8 max-w-5xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">About This Project</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        IntervuAI is an AI-powered interview preparation platform developed as a college project to help students
                        practice and improve their interview skills.
                    </p>
                </div>

                {/* College Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-center">College</h2>
                    <Card className="bg-[#1E1E2D] border-gray-800 text-white">
                        <div className="md:flex flex-row-reverse">
                            <div className="md:w-1/3 p-6 flex justify-center items-center">
                                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-700">
                                    <img src="/images/college.png" alt="College" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="md:w-2/3 p-6">
                                <CardHeader className="p-0 mb-4">
                                    <CardTitle className="text-2xl text-white">Einstein Academy of Technology and Management</CardTitle>
                                    <CardDescription className="text-gray-400">
                                        Department of Computer Science & Engineering
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-0 space-y-4">
                                    <p className="text-gray-300">
                                        Founded in [year], [College Name] is one of the premier institutions for technical education in the
                                        region. The Department of Computer Science & Engineering offers comprehensive programs that blend
                                        theoretical knowledge with practical applications, preparing students for the challenges of the
                                        technology industry.
                                    </p>
                                    <div className="space-y-2">
                                        <p className="font-medium text-white">Programs Offered:</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge className="bg-blue-900/50 text-blue-300 border-blue-700 hover:bg-blue-900/70">
                                                B.Tech in Computer Science
                                            </Badge>
                                            <Badge className="bg-blue-900/50 text-blue-300 border-blue-700 hover:bg-blue-900/70">
                                                M.Tech in Computer Science
                                            </Badge>
                                            <Badge className="bg-blue-900/50 text-blue-300 border-blue-700 hover:bg-blue-900/70">
                                                PhD in Computer Science
                                            </Badge>
                                        </div>
                                    </div>
                                    <Button variant="" className="gap-2">
                                        <ExternalLink className="h-4 w-4" />
                                        <a href="https://eatm.in/" target="_blank">Visit College Website</a>
                                    </Button>
                                </CardContent>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Project Details */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-center">Project Details</h2>
                    <Card className="bg-[#1E1E2D] border-gray-800 text-white">
                        <CardHeader>
                            <CardTitle className="text-xl text-white">IntervuAI: AI-Powered Interview Preparation Platform</CardTitle>
                            <CardDescription className="text-gray-400">Final Year Project, 2025-2026</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-gray-300">
                                IntervuAI is designed to help students prepare for job interviews by providing AI-powered practice
                                sessions and personalized feedback. The platform offers various types of interview simulations, from
                                technical coding interviews to behavioral questions, allowing users to improve their skills in a
                                risk-free environment.
                            </p>
                            <div className="space-y-2">
                                <p className="font-medium text-white">Key Features:</p>
                                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                                    <li>AI-powered interview simulations</li>
                                    <li>Real-time feedback on responses</li>
                                    <li>Multiple interview types (technical, behavioral, etc.)</li>
                                    <li>Performance tracking and analytics</li>
                                    <li>Personalized improvement suggestions</li>
                                    <li>User-friendly interface with responsive design</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <p className="font-medium text-white">Technologies Used:</p>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                        React Js
                                    </Badge>
                                    <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                        MongoDB
                                    </Badge>
                                    <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                        JavaScript
                                    </Badge>
                                    <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                        Tailwind CSS
                                    </Badge>
                                    <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                        Shadcn
                                    </Badge>
                                    <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                        Gemini Api
                                    </Badge>
                                    <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                        Vapi Api
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </div>
    )
}
