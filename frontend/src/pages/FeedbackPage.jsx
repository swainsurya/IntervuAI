import { Link, useLocation, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

const Feedback = () => {
  const { id } = useParams();
  const location = useLocation();

  const [feedback, setFeedback] = useState(null);

  const getFeedback = async () => {
    try {
      const response = await axios.post("https://intervuai-3id4.onrender.com/feedback/get-feedback-by-id", { feedbackId: id });
      setFeedback(response.data.feedback);
    } catch (error) {
      console.error("Failed to fetch feedback:", error);
    }
  };

  useEffect(() => {
    getFeedback();
  }, [id]);

  return (
    <section className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Feedback on the{" "}
          <span className="capitalize text-primary-200">{feedback?.role}</span>{" "}
          Interview
        </h1>
      </div>

      {/* Score & Date */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/star.svg" alt="Star" width={22} height={22} />
          <p className="text-lg">
            Overall Impression:{" "}
            <span className="font-bold text-primary-200">{feedback?.totalScore}</span>/100
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/calendar.svg" alt="Calendar" width={22} height={22} />
          <p className="text-lg">
            {feedback?.createdDate
              ? dayjs(feedback.createdDate).format("MMM D, YYYY h:mm A")
              : "N/A"}
          </p>
        </div>
      </div>

      <hr className="border-slate-700" />

      {/* Final Assessment */}
      <div className="bg-slate-900/40 p-5 rounded-xl shadow-md">
        <p className="text-lg text-slate-200">{feedback?.finalAssessment}</p>
      </div>

      {/* Breakdown */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Breakdown of the Interview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(feedback?.categoryScore || {}).map(([key, value]) => (
            <div
              key={key}
              className="bg-slate-800/40 p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <p className="capitalize font-medium">{key}</p>
              <p className="text-primary-200 font-bold text-xl">{value}/100</p>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Strengths</h3>
        <ul className="list-disc list-inside space-y-1 text-slate-300 bg-slate-800/30 p-4 rounded-lg">
          {feedback?.strengths?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Areas for Improvement */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Areas for Improvement</h3>
        <ul className="list-disc list-inside space-y-1 text-slate-300 bg-slate-800/30 p-4 rounded-lg">
          {feedback?.areasForImprovements?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex sm:flex-row gap-4 mt-8 sm:justify-around justify-center">
        <Link to="/" className="">
          <Button className="w-full btn-secondary hover:bg-slate-800">
            <p className="text-sm font-semibold text-primary-200">Back to Dashboard</p>
          </Button>
        </Link>
        <Link to={`/interview/${feedback?.interViewId}`} className="">
          <Button className="w-full btn-primary hover:bg-slate-400">
            <p className="text-sm font-semibold text-black">Retake Interview</p>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Feedback;
