import { Link, useLocation, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

const Feedback = () => {
  const { id } = useParams();
  const location = useLocation();

  const [feedback, setFeedback] = useState(null);

  const {interviewRole} = location?.state ;

  console.log(location.state)

  const getFeedback = async () => {
    try {
      const feedback = await axios.post("https://intervuai-3id4.onrender.com/feedback/get-feedback-by-id", { feedbackId: id });
      const data = feedback.data.feedback;
      setFeedback(data);
      console.log(data)
    } catch (error) {

    }
  }

  useEffect(() => {
    getFeedback();
  }, [, id])

  return (
    <section className="section-feedback">
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-semibold">
          Feedback on the Interview -{" "}
          <span className="capitalize">{interviewRole}</span> Interview
        </h1>
      </div>

      <div className="flex flex-row justify-center ">
        <div className="flex flex-row gap-5">
          {/* Overall Impression */}
          <div className="flex flex-row gap-2 items-center">
            <img src="/star.svg" width={22} height={22} alt="star" />
            <p>
              Overall Impression:{" "}
              <span className="text-primary-200 font-bold">
                {feedback?.totalScore}
              </span>
              /100
            </p>
          </div>

          {/* Date */}
          <div className="flex flex-row gap-2">
            <img src="/calendar.svg" width={22} height={22} alt="calendar" />
            <p>
              {feedback?.createdDate
                ? dayjs(feedback?.createdDate).format("MMM D, YYYY h:mm A")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>

      <hr />

      <p>{feedback?.finalAssessment}</p>

      {/* Interview Breakdown */}
      <div className="flex flex-col gap-4">
        <h2>Breakdown of the Interview:</h2>
        <div>
          <p className="font-bold">
            {"Communication: "} {feedback?.categoryScore?.communication || 10}/100
          </p>
          <p className="font-bold">
            {"initiative: "} {feedback?.categoryScore?.initiative || 10}/100
          </p>
          <p className="font-bold">
            {"problemSolving: "} {feedback?.categoryScore?.problemSolving || 10}/100
          </p>
          <p className="font-bold">
            {"professionalism: "} {feedback?.categoryScore?.professionalism || 10}/100
          </p>
          <p className="font-bold">
            {"technicalSkills: "} {feedback?.categoryScore?.technicalSkills || 10}/100
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3>Strengths</h3>
        <ul>
          {feedback?.strengths?.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3>Areas for Improvement</h3>
        <ul>
          {feedback?.
            areasForImprovements?.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
        </ul>
      </div>

      <div className="buttons">
        <Button className="btn-secondary flex-1">
          <Link href="/" className="flex w-full justify-center">
            <p className="text-sm font-semibold text-primary-200 text-center">
              Back to dashboard
            </p>
          </Link>
        </Button>

        <Button className="btn-primary flex-1">
          <Link
            href={`/interview/${id}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black text-center">
              Retake Interview
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Feedback;