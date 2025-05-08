import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Laptop } from "lucide-react"
import { Link } from "react-router-dom"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#121212] text-white">
            {/* Header */}
            <header className="border-b border-gray-800 px-4 py-3 flex justify-between items-center">
                <Link href="/dashboard" className="flex items-center gap-2">
                    <div className="bg-purple-600 rounded-full p-1.5">
                        <Laptop className="h-5 w-5" />
                    </div>
                    <span className="text-xl font-semibold">IntervuAI</span>
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/dashboard">
                        <Button variant="ghost" className="text-white hover:text-purple-300">
                            Dashboard
                        </Button>
                    </Link>
                </div>
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

                {/* Student Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-center">Developer</h2>
                    <Card className="bg-[#1E1E2D] border-gray-800 text-white">
                        <div className="md:flex">
                            <div className="md:w-1/3 p-6 flex justify-center">
                                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-600">
                                    <img src="/placeholder.svg?height=200&width=200" alt="Student" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="md:w-2/3 p-6">
                                <CardHeader className="p-0 mb-4">
                                    <CardTitle className="text-2xl text-white">Suryakanta Swain</CardTitle>
                                    <CardDescription className="text-gray-400">
                                        Computer Science Student | Final Year Project
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-0 space-y-4">
                                    <p className="text-gray-300">
                                        I am a final year Computer Science student passionate about AI, web development, and creating tools
                                        that help people. IntervuAI is my capstone project that combines my interest in AI with practical
                                        applications to help students prepare for job interviews.
                                    </p>
                                    <div className="space-y-2">
                                        <p className="font-medium text-white">Skills:</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                                React.js
                                            </Badge>
                                            <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                                Next.js
                                            </Badge>
                                            <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                                JavaScript
                                            </Badge>
                                            <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                                Tailwind CSS
                                            </Badge>
                                            <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                                AI Integration
                                            </Badge>
                                            <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                                Fullstack Development
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <Button variant="" size="icon" className="rounded-full">
                                            <Github className="h-4 w-4" />
                                            <span className="sr-only">GitHub</span>
                                        </Button>
                                        <Button variant="" size="icon" className="rounded-full">
                                            <Linkedin className="h-4 w-4" />
                                            <span className="sr-only">LinkedIn</span>
                                        </Button>
                                        <Button variant="" size="icon" className="rounded-full">
                                            <Mail className="h-4 w-4" />
                                            <span className="sr-only">Email</span>
                                        </Button>
                                    </div>
                                </CardContent>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* College Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-center">College</h2>
                    <Card className="bg-[#1E1E2D] border-gray-800 text-white">
                        <div className="md:flex flex-row-reverse">
                            <div className="md:w-1/3 p-6 flex justify-center items-center">
                                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-700">
                                    <img src="/placeholder.svg?height=200&width=300" alt="College" fill className="object-cover" />
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
                                        Visit College Website
                                    </Button>
                                </CardContent>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Guide Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-center">Project Guide</h2>
                    <Card className="bg-[#1E1E2D] border-gray-800 text-white">
                        <div className="md:flex">
                            <div className="md:w-1/3 p-6 flex justify-center">
                                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-600">
                                    <img
                                        src="/placeholder.svg?height=200&width=200"
                                        alt="Project Guide"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="md:w-2/3 p-6">
                                <CardHeader className="p-0 mb-4">
                                    <CardTitle className="text-2xl text-white">Prof. Nibedita Chhatoi</CardTitle>
                                    <CardDescription className="text-gray-400">
                                        Associate Professor, Department of Computer Science
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-0 space-y-4">
                                    <p className="text-gray-300">
                                        Prof. Nibedita Chhatoi has been teaching at Einstein Academy of Technology and Management for over 5 years, specializing in
                                        Artificial Intelligence, Machine Learning, and Web Technologies. With extensive industry experience
                                        and academic research, they provide valuable guidance to students working on innovative projects.
                                    </p>
                                    <div className="space-y-2">
                                        <p className="font-medium text-white">Areas of Expertise:</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge className="bg-green-900/50 text-green-300 border-green-700 hover:bg-green-900/70">
                                                Artificial Intelligence
                                            </Badge>
                                            <Badge className="bg-green-900/50 text-green-300 border-green-700 hover:bg-green-900/70">
                                                Machine Learning
                                            </Badge>
                                            <Badge className="bg-green-900/50 text-green-300 border-green-700 hover:bg-green-900/70">
                                                Web Development
                                            </Badge>
                                            <Badge className="bg-green-900/50 text-green-300 border-green-700 hover:bg-green-900/70">
                                                Software Engineering
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <Button variant="" size="icon" className="rounded-full">
                                            <Mail className="h-4 w-4" />
                                            <span className="sr-only">Email</span>
                                        </Button>
                                        <Button variant="" size="icon" className="rounded-full">
                                            <Linkedin className="h-4 w-4" />
                                            <span className="sr-only">LinkedIn</span>
                                        </Button>
                                        <Button variant="" size="icon" className="rounded-full">
                                            <ExternalLink className="h-4 w-4" />
                                            <span className="sr-only">Website</span>
                                        </Button>
                                    </div>
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
                            <CardDescription className="text-gray-400">Final Year Project, 2024-2025</CardDescription>
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
                                        Next.js
                                    </Badge>
                                    <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                        React
                                    </Badge>
                                    <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                        TypeScript
                                    </Badge>
                                    <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                        Tailwind CSS
                                    </Badge>
                                    <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                        Supabase
                                    </Badge>
                                    <Badge className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-900/70">
                                        OpenAI API
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
