import React from "react";

interface Comment {
  name: string;
  cloud: string;
  time: string;
  comment: string;
  avatar: string;
}

const comments: Comment[] = [
  {
    name: "Timothy Smith",
    cloud: "Killan James",
    time: "1 hour ago",
    comment:
      "It’s an Affiliate commissions SaaS application that allows you to track your affiliate revenue.",
    avatar: "https://via.placeholder.com/40",
  },
  {
    name: "Nancy Martino",
    cloud: "Matney",
    time: "2 hours ago",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    avatar: "https://via.placeholder.com/40",
  },
  {
    name: "Michael Morris",
    cloud: "Williams Son",
    time: "3 hours ago",
    comment:
      "It’s an Affiliate commissions SaaS application that allows you to track your affiliate revenue.",
    avatar: "https://via.placeholder.com/40",
  },
];

const Feedback: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md">
      <div className="flex justify-between items-center pb-3 ">
        <h2 className="text-lg font-semibold text-[#2B3674] mb-3">Feedback</h2>
        <img
          src="/fire.svg"
          alt=""
          className="bg-[#FEEFEE] rounded-[50px] p-1"
        />
      </div>

      {comments.map((comment, index) => (
        <div key={index} className="mb-4 ">
          <div className="flex items-center justify-between md:justify-start gap-6 mb-4">
            <div>
              {" "}
              <img
                src={comment.avatar}
                alt="avatar"
                className="w-12 h-12 rounded-full mr-2"
              />
            </div>
            <div>
              <p className="font-semibold ">{comment.name}</p>
              <p className="text-xs text-[#A3AED0]">
                Commented on Cloud {comment.cloud}
              </p>
              <p className="text-xs text-[#01B574]">{comment.time}</p>
              <p className="text-gray-800 text-[13px] pt-2">
                {comment.comment}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
