import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchCreate } from "../store/comment/commentSlice";
import { useNavigate } from "react-router-dom";
const Comment = ({ _id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.data);
  const allComments = useSelector((state) => state?.comment?.get?.data);
  const isLogged = useSelector((state) => state?.user?.isLogged);

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const blogComments = allComments?.filter((comment) => comment.blog === _id);
    setComments(blogComments);
  }, [allComments, _id, setComments]);

  const token =
    localStorage.getItem("Token") || sessionStorage.getItem("Token");

  const postComment = async (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      setError("Comment cannot be empty");
      return;
    }

    const newComment = {
      comment: comment,
      blog: _id,
    };

    try {
      setLoading(true);
      dispatch(fetchCreate({ post: newComment, token }));
      setComments([...comments, newComment]);
      setComment("");
      setError(null);
    } catch (err) {
      setError("Failed to post comment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-auto py-5 px-5 lg:px-26">
      <hr className="my-10" />
      <div className="flex flex-col gap-y-10">
        {comments?.map((comment, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex flex-row items-center gap-x-2">
              <div className="w-14 h-14">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={`http://localhost:1000/${comment?.user?.image}`}
                  alt="user"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <p className="text-primary text-xl lg:text-lg font-semibold">
                  {comment?.user?.firstName}
                </p>
                <p className="text-primary">{comment?.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center gap-5 mt-10">
        <div className="flex flex-col">
          {isLogged ? (
            <form onSubmit={postComment} className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <div className="w-14 h-14">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src={`http://localhost:1000/${user?.image}`}
                    alt="user"
                  />
                </div>
                <textarea
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  className="resize-none rounded-lg w-64 md:w-[690px] lg:w-96 xl:w-[1200px] pr-2 pt-1 bg-secondary placeholder-primary"
                  rows={2}
                  placeholder="اكتب تعليقك..."
                  name="comment"
                  id="comment"
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="bg-primary text-white w-64 md:w-[690px] lg:w-96 xl:w-[1200px] h-10 hover:bg-green-800 rounded-lg mr-[65px] xl:mr-[65px]"
                disabled={loading}
              >
                {loading ? "نشر..." : "نشر"}
              </button>
            </form>
          ) : (
            <p
              onClick={() => navigate("/signin")}
              className="text-primary hover:underline cursor-pointer font-semibold"
            >
              قم بتسجيل الدخول لكي تكتب تعليقا
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
