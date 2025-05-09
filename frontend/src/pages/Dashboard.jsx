import { useState } from "react"
import { Button } from "@/components/ui/button"
import InterviewCard from "@/components/mycomponents/InterviewCard"
import { Link } from "react-router-dom"
import {  Laptop } from "lucide-react"

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Hero Section */}
        <section className="mb-10">
          <div className="bg-[#1E1E2D] rounded-xl overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Get Interview-Ready with AI-Powered Practice & Feedback
                </h1>
                <p className="text-gray-400 mb-4">Practice real interview questions & get instant feedback</p>
                <Link to={"/generate-interview"}>
                  <Button className="bg-purple-600 hover:bg-purple-700">Create an Interview</Button>
                </Link>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <img
                  src="/robot.png"
                  alt="AI Interview Assistant"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Past Interviews Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Your Past Interviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastInterviews.map((interview) => (
              <InterviewCard key={interview.id} interview={interview} type="own" />
            ))}
          </div>
        </section>

        {/* Pick Interview Section */}
        <section>
          <h2 className="text-xl font-bold mb-4">Pick Your Interview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interviewTypes.map((interview) => (
              <InterviewCard key={interview.id} interview={interview} type="other" />
            ))}
          </div>
        </section>
    </main>
  )
}

// Sample data for past interviews
const pastInterviews = [
  {
    id: 1,
    title: "Frontend Dev Interview",
    date: "Feb 15, 2025",
    rating: "4.2",
    description:
      "This interview focuses on frontend development concepts including React, CSS, and responsive design. Time responded: 45 minutes.",
    technical: true,
    icon: "/covers/adobe.png"
  },
  {
    id: 2,
    title: "Behavioral Interview",
    date: "Feb 10, 2025",
    rating: "4.8",
    description: "This interview focuses on your soft skills and behavioral questions. Time responded: 35 minutes.",
    technical: false,
    icon: "/covers/amazon.png",
  },
  {
    id: 3,
    title: "Backend Dev Interview",
    date: "Feb 05, 2025",
    rating: "4.5",
    description:
      "This interview focuses on backend development concepts including APIs, databases, and server architecture. Time responded: 50 minutes.",
    technical: true,
    icon: "/covers/pinterest.png",
  },
  {
    id: 4,
    title: "Frontend Dev Interview",
    date: "Feb 15, 2025",
    rating: "4.2",
    description:
      "This interview focuses on frontend development concepts including React, CSS, and responsive design. Time responded: 45 minutes.",
    technical: true,
    icon: "/covers/adobe.png"
  },
  {
    id: 5,
    title: "Behavioral Interview",
    date: "Feb 10, 2025",
    rating: "4.8",
    description: "This interview focuses on your soft skills and behavioral questions. Time responded: 35 minutes.",
    technical: false,
    icon: "/covers/amazon.png",
  },
  {
    id: 6,
    title: "Backend Dev Interview",
    date: "Feb 05, 2025",
    rating: "4.5",
    description:
      "This interview focuses on backend development concepts including APIs, databases, and server architecture. Time responded: 50 minutes.",
    technical: true,
    icon: "/covers/pinterest.png",
  },
]

// Sample data for interview types
const interviewTypes = [
  {
    id: 1,
    title: "Full-Stack Dev Interview",
    description:
      "This interview focuses on both frontend and backend development concepts. Time responded: 60 minutes.",
    technical: true,
    icon: "/covers/tiktok.png",
  },
  {
    id: 2,
    title: "DevOps & Cloud Interview",
    description: "This interview focuses on DevOps practices and cloud infrastructure. Time responded: 55 minutes.",
    technical: true,
    icon: "/covers/spotify.png",
  },
  {
    id: 3,
    title: "HR Screening Interview",
    description:
      "This interview focuses on your background, experience, and fit for the company. Time responded: 30 minutes.",
    technical: false,
    icon: "/covers/quora.png",
  },
  {
    id: 4,
    title: "System Design Interview",
    description:
      "This interview focuses on your ability to design scalable systems and architecture. Time responded: 60 minutes.",
    technical: true,
    icon: "/covers/yahoo.png",
  },
  {
    id: 5,
    title: "Business Analyst Interview",
    description:
      "This interview focuses on business analysis, requirements gathering, and stakeholder management. Time responded: 45 minutes.",
    technical: false,
    icon: "/covers/telegram.png",
  },
  {
    id: 6,
    title: "Mobile App Dev Interview",
    description: "This interview focuses on mobile app development for iOS and Android. Time responded: 50 minutes.",
    technical: true,
    icon: "/covers/adobe.png",
  },
  {
    id: 7,
    title: "Database & SQL Interview",
    description:
      "This interview focuses on database design, SQL queries, and optimization. Time responded: 45 minutes.",
    technical: true,
    icon: "/covers/reddit.png",
  },
  {
    id: 8,
    title: "Cybersecurity Interview",
    description:
      "This interview focuses on security concepts, threat modeling, and secure coding practices. Time responded: 55 minutes.",
    technical: true,
    icon: "/covers/skype.png",
  },
  {
    id: 9,
    title: "Sales & Marketing Interview",
    description:
      "This interview focuses on sales strategies, marketing concepts, and customer acquisition. Time responded: 40 minutes.",
    technical: false,
    icon: "/covers/facebook.png",
  },
]
