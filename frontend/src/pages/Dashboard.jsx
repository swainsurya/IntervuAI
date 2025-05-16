import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/mycomponents/InterviewCard";
import { Link } from "react-router-dom";
import axios from "axios";
import CardSkeleton from "@/components/mycomponents/CardSkeleton";
import { Home, PlusCircle, User } from "lucide-react";

export default function DashboardPage() {
  const [allInterviews, setAllInterviews] = useState([]);
  const [pastInterviews, setPastInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const userid = localStorage.getItem("userid");

  const getAllInterviews = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://intervuai-3id4.onrender.com/ai/others", {});
      setAllInterviews(response.data.interviews || []);
    } catch (error) {
      setAllInterviews([]);
    } finally {
      setTimeout(() => setLoading(false), 2000);
    }
  };

  const getPastInterviews = async () => {
    try {
      const response = await axios.post(`https://intervuai-3id4.onrender.com/feedback/all-feedback`, { userid });
      setPastInterviews(response.data.pastInterviews || []);
    } catch (error) {
      setPastInterviews([]);
    }
  };

  useEffect(() => {
    getAllInterviews();
    getPastInterviews();
  }, []);

  return (
    <main className="container mx-auto px-4 py-10 max-w-7xl no_Scrollbar">
      {/* Hero Section */}
      <section className="mb-14">
        <div className="rounded-3xl bg-gradient-to-br from-[#1E1E2D] via-[#292943] to-[#1E1E2D] p-8 md:p-12 shadow-2xl backdrop-blur-md border border-gray-700">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold text-white mb-4 hidden sm:block">
                Crack Interviews Confidently with AI
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                Generate mock interviews, get real-time feedback, and build confidence — all powered by AI.
              </p>
              <Link to="/generate-interview">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-xl hover:brightness-110 transition">
                  🎯 Create Interview
                </Button>
              </Link>
            </div>
            <img src="/images/home_logo.png" alt="AI Robot" width={290} className=" object-contain drop-shadow-lg hidden sm:block" />
          </div>
        </div>
      </section>

      {/* Past Interviews */}
      {pastInterviews.length > 0 && (
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">🗂️ Your Past Interviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)
              : pastInterviews.reverse().map((interview) => (
                <InterviewCard key={interview._id} interview={interview} type="own" />
              ))}
          </div>
        </section>
      )}

      {/* Public Interviews */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white mb-6">🌍 Interviews by Others</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)
            : allInterviews.map((interview) => (
              <InterviewCard key={interview._id} interview={interview} type="other" />
            ))}
        </div>
      </section>

      {/* Floating Resume Button */}
      {userid == "68205b3161be9593900eda0c" && (
        <Link to={"/admin"}>
          <Button className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white font-semibold px-4 py-2 rounded-2xl shadow-lg">
            ADMIN PANEL
          </Button>
        </Link>
      )}

      {/* Mobile nav */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#1e1e2d] border-t border-gray-700 sm:hidden z-50">
        {
          userid == "68205b3161be9593900eda0c" ? (
            <Link to={"/admin"}>
              <Button className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white font-semibold px-4 py-2 rounded-2xl shadow-lg">
                ADMIN PANEL
              </Button>
            </Link>
          ) : (
            <div className="flex justify-around items-center py-2 text-white text-sm">
              <Link to="/" className="flex flex-col items-center gap-1">
                <Home className="text-xl" />
                <span className="text-xs">Home</span>
              </Link>
              <Link to="/generate-interview" className="flex flex-col items-center gap-1">
                <PlusCircle className="text-xl" />
                <span className="text-xs">Create</span>
              </Link>
              <Link to="/interview/my-interviews" className="flex flex-col items-center gap-1">
                <User className="text-xl" />
                <span className="text-xs">Profile</span>
              </Link>
            </div>
          )
        }
      </nav>
    </main>
  );
}
