import { useState } from "react";
import { fetchCreate } from "../store/blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timeOfReading, setTimeOfReading] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state?.category?.data?.getCategory);

  const token =
    localStorage.getItem("Token") || sessionStorage.getItem("Token");
  console.log(token);
  const createBlog = (e) => {
    e.preventDefault();
    const post = {
      title,
      content,
      description,
      timeOfReading,
      image,
      category,
    };
    dispatch(fetchCreate({ post, token }));
    navigate("/");
  };

  return (
    <div className="flex flex-col h-auto items-center lg:items-start lg:p-7 lg:pl-40 font-serif">
      <p className="text-4xl font-bold mb-5 w-max text-primary">مقال جديد...</p>
      <form
        onSubmit={createBlog}
        className="flex flex-col justify-center items-center lg:items-start gap-5 font-serif"
      >
        <label class=" flex flex-col items-center  px-6 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-primary hover:text-white text-primary">
          <svg
            class="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span class="mt-2 text-base leading-normal">اختر صورة للمقال:</span>
          <input
            type="file"
            class="hidden"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>

        <textarea
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="عنوان المقال"
          className="w-80 h-10 lg:w-[1000px] resize-none p-1 align-text border bg-secondary opacity-90 rounded-md  pr-2 placeholder:text-black"
        />
        <textarea
          required
          rows={4}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="الوصف"
          className="w-80 lg:w-[1000px] resize-none p-1 border bg-secondary opacity-90 rounded-md placeholder:text-black pr-2"
        />
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <label
            htmlFor="categories"
            className="flex flex-row items-center border-2 rounded-md"
          >
            <p>تصنيف المقال:</p>
            <select
              name="categories"
              id="categories"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option selected disabled hidden>
                التصنيف
              </option>
              {categories?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <input
            required
            onChange={(e) => setTimeOfReading(e.target.value)}
            placeholder='الوقت المتوقع لقراءة المقالة "بالدقائق"'
            className="w-80 self-start resize-none p-1 lg:w-72 bg-secondary opacity-90 placeholder:text-black border rounded-md lg:ml-9 pr-2"
          />
        </div>

        <textarea
          required
          rows={15}
          onChange={(e) => setContent(e.target.value)}
          placeholder="محتوى المقال"
          className="w-80 lg:w-[1000px] resize-none p-1 bg-secondary opacity-90 placeholder:text-black border rounded-md pr-2"
        />

        <button
          type="submit"
          className="my-5 text-2xl font-serif border-black border bg-primary rounded-xl px-32 lg:px-40 py-2 hover:bg-green-800 cursor-pointer text-white font-bold"
        >
          نشر
        </button>
      </form>
    </div>
  );
};

export default NewArticle;
