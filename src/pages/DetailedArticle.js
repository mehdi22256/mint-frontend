import Comment from "../components/Comment";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const DetailedArticle = () => {
  const { _id } = useParams();
  const blogs = useSelector((state) => state?.blog?.data);
  const blog = blogs?.find((blog) => blog._id === _id);
  console.log(blog);
  return (
    <div className="m-auto pt-5 lg:px-32">
      <div
        className="flex items-center justify-center m-auto bg-cover bg-center bg-no-repeat h-[480px]"
        style={{
          backgroundImage: `url(${`http://localhost:1000/${blog?.image}`})`,
        }}
      ></div>
      <div className="flex flex-col justify-center items-center px-5 lg:px-10">
        <div className="flex flex-row w-max gap-x-2 lg:gap-x-3 ">
          <p className="text-slate-400 text-sm lg:text-xl ">
            {`${blog?.user?.role?.name === "doctor" ? `الدكتور` : `الصيدلي`} ${
              blog?.user.firstName
            } ${blog?.user.lastName}`}
          </p>
          <p className="text-slate-400 text-sm lg:text-xl ">.</p>
          <p className="text-slate-400 text-sm lg:text-xl ">{blog?.date}</p>
          <p className="text-slate-400 text-sm lg:text-xl ">
            {blog?.timeOfReading}
          </p>
        </div>
        <p className="font-bold text-right font-serif text-2xl lg:text-5xl pt-5 leading-relaxed">
          {blog?.title}
        </p>
        <p className="text-xl pt-5 lg:pt-10 leading-loose font-serif text-justify">
          {blog?.content}
        </p>
      </div>

      <Comment _id={_id} />
    </div>
  );
};

export default DetailedArticle;
