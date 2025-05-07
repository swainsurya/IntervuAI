import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Laptop, Star, ArrowRight, CheckCircle, Users, Clock, MessageSquare } from "lucide-react"
import { Link } from "react-router-dom"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog"

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-black text-white cursor-pointer">
            {/* Navigation */}
            <header className="container mx-auto py-6 px-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="bg-purple-600 rounded-full p-1.5">
                        <Laptop className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-xl">IntervuAI</span>
                </div>
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

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-6">
                    <div className="flex gap-2">
                        <Badge className="bg-purple-600 text-white px-3 py-1">New</Badge>
                        <Badge className="bg-gray-800 text-white px-3 py-1">AI-Powered</Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Get Interview-Ready with AI-Powered Practice & Feedback
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl">
                        Practice real interview questions & get instant feedback. Boost your confidence and land your dream job.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
                            Start Practicing Free
                        </Button>
                        <Dialog>
                            <DialogTrigger>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-gray-700 bg-gray-800 text-white w-full sm:w-auto"
                                >
                                    Watch Demo
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                                    <DialogDescription>
                                        <video
                                            src={"/images/hero.jpg"}
                                            alt="AI Interview Assistant"
                                            width={500}
                                            height={400}
                                            className="rounded-lg object-cover"
                                        />
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>No credit card required</span>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <div className="relative z-10">
                        <img
                            src={"/images/hero.jpg"}
                            alt="AI Interview Assistant"
                            width={500}
                            height={400}
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="absolute -top-5 -left-5 w-full h-full bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg -z-10"></div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-900 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose IntervuAI?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our AI-powered platform provides personalized interview preparation for any role or industry
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 p-6 rounded-xl">
                            <div className="bg-purple-600/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                                <MessageSquare className="h-6 w-6 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">AI-Powered Feedback</h3>
                            <p className="text-gray-400">
                                Get instant, detailed feedback on your answers to improve your interview performance
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-xl">
                            <div className="bg-purple-600/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                                <Users className="h-6 w-6 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Industry Experts</h3>
                            <p className="text-gray-400">
                                Questions crafted by hiring managers and industry professionals from top companies
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-xl">
                            <div className="bg-purple-600/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                                <Clock className="h-6 w-6 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Practice Anytime</h3>
                            <p className="text-gray-400">24/7 access to practice interviews at your own pace, whenever you need it</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interview Types Section */}
            <section id="interview_type" className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Prepare for Any Interview</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Choose from a wide range of interview types tailored to your career path
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {interviewTypes.map((interview, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-600 transition group"
                        >
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`${interview.bgColor} rounded-full p-3`}>
                                        <interview.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{interview.title}</h3>
                                        <Badge
                                            className={`${interview.isTechnical ? "bg-blue-900 text-blue-300" : "bg-green-900 text-green-300"}`}
                                        >
                                            {interview.isTechnical ? "Technical" : "Non-Technical"}
                                        </Badge>
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-6">This interview focuses on {interview.focus}</p>
                                <Button className="w-full bg-gray-700 hover:bg-purple-600 group-hover:bg-purple-600 transition">
                                    Start Interview <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="outline" className="border-gray-700 bg-gray-800 text-white">
                        View All Interview Types <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-900 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Join thousands of job seekers who have improved their interview skills with IntervuAI
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-xl">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center">
                                        <span className="font-bold">{testimonial.name.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <p className="font-medium">{testimonial.name}</p>
                                        <p className="text-gray-400 text-sm">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 md:p-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ace Your Next Interview?</h2>
                        <p className="text-gray-300 mb-8">
                            Start practicing with our AI-powered platform today and get the job you deserve
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 w-full sm:w-auto">
                                Get Started Free
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white bg-white/10 w-full sm:w-auto"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <div className="bg-purple-600 rounded-full p-1.5">
                                <Laptop className="h-5 w-5" />
                            </div>
                            <span className="font-bold text-xl">IntervuAI</span>
                        </div>
                        <div className="flex gap-6">
                            <Link href="#" className="text-gray-400 hover:text-white transition font-bold">
                                Terms
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition font-bold">
                                About
                            </Link>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
                        <p>© {new Date().getFullYear()} IntervuAI. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

// Data
const interviewTypes = [
    {
        title: "Frontend Dev Interview",
        icon: Laptop,
        bgColor: "bg-purple-600",
        isTechnical: true,
        focus: "assessing your frontend development skills, including React, JavaScript, and CSS.",
    },
    {
        title: "Behavioral Interview",
        icon: Users,
        bgColor: "bg-blue-600",
        isTechnical: false,
        focus: "evaluating your soft skills, communication, and past experiences.",
    },
    {
        title: "Backend Dev Interview",
        icon: Laptop,
        bgColor: "bg-red-600",
        isTechnical: true,
        focus: "testing your backend development knowledge, including APIs, databases, and server architecture.",
    },
    {
        title: "Full-Stack Dev Interview",
        icon: Laptop,
        bgColor: "bg-yellow-600",
        isTechnical: true,
        focus: "assessing both frontend and backend skills, system design, and full application development.",
    },
    {
        title: "DevOps & Cloud Interview",
        icon: Laptop,
        bgColor: "bg-orange-600",
        isTechnical: true,
        focus: "evaluating your knowledge of cloud platforms, CI/CD, and infrastructure management.",
    },
    {
        title: "HR Screening Interview",
        icon: Users,
        bgColor: "bg-cyan-600",
        isTechnical: false,
        focus: "initial assessment of your background, expectations, and cultural fit.",
    },
]

const testimonials = [
    {
        name: "Alex Johnson",
        position: "Software Engineer at Google",
        quote:
            "IntervuAI helped me prepare for my technical interviews with real-world questions. The AI feedback was incredibly helpful in improving my responses.",
    },
    {
        name: "Sarah Williams",
        position: "Product Manager at Microsoft",
        quote:
            "After practicing with IntervuAI for two weeks, I felt so much more confident in my interviews. I received offers from 3 companies!",
    },
    {
        name: "Michael Chen",
        position: "Data Scientist at Amazon",
        quote:
            "The variety of technical questions and detailed feedback helped me understand exactly what I needed to improve. Highly recommended!",
    },
]

export default LandingPage;