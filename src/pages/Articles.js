import arrow from "../assets/arrow.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Articles = () => {
  const navigate = useNavigate();
  const blogs = useSelector((state) => state?.blog?.data);

  return (
    <div className="flex flex-row flex-wrap justify-evenly items-center gap-5 gap-y-20 p-10">
      {blogs?.map((blog) => (
        <div
          onClick={() => navigate(`/articles/${blog?._id}`)}
          className="flex flex-col justify-center gap-5 w-96 px-5 h-[550px] border shadow-lg drop-shadow-xl rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-secondary duration-300"
        >
          <div
            className="h-56 bg-cover bg-center bg-no-repeat text-sm rounded-3xl border"
            style={{
              backgroundImage: `url(${`http://localhost:1000/${blog?.image}`})`,
            }}
          ></div>
          <p className="font-[500]">{blog?.title}</p>
          <div className="flex flex-row gap-2 text-right text-gray-400">
            <p>{blog?.category?.name}</p>

            <p>.</p>
            <p>{blog?.timeOfReading} </p>
          </div>
          <hr className="h-1 w-36 bg-primary" />
          <p className="text-sm line-clamp-3">{blog?.description}</p>
          <div className="flex flex-row justify-end items-center gap-2">
            <p
              onClick={() => navigate(`/articles/${blog?._id}`)}
              className="hover:underline cursor-pointer"
            >
              اقرأ المزيد{" "}
            </p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
