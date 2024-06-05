import mintHome from "../assets/mintHome.svg";
import pic1 from "../assets/pic1Home.png";
import blogLogo from "../assets/blog.png";
import drugLogo from "../assets/drug.png";
import medicineLogo from "../assets/medicine.png";
import search from "../assets/search.png";
const Home = () => {
  return (
    <div className="w-full p-8">
      <div className=" w-full h-[667px]">
        <div className="bg-secondary rounded-xl h-3/4 flex flex-row-reverse justify-between items-center p-20">
          <div id="left">
            <img src={pic1} alt="logo" />
          </div>
          <div id="right" className="flex flex-col gap-5 pr-20">
            <div className="flex flex-row items-center">
              <img src={mintHome} alt="mint" />
              <p className="text-2xl text-primary font-extrabold">نعناع</p>
            </div>
            <p className="">بوابتك الصحية الموثوقة</p>
            <form className="flex flex-row-reverse">
              <input
                className="pr-2 rounded-bl-lg rounded-tl-lg w-80 h-10 border border-black"
                type="search"
                placeholder="ابحث عن طبيبك..."
              />
              <img
                className="rounded-br-lg rounded-tr-lg bg-primary h-10 p-2"
                src={search}
                alt="search"
              />
            </form>
          </div>
        </div>
        {/* <div className="relative bottom-10 flex flex-row justify-center gap-10">
          <img src={blogLogo} alt="article" />
          <img src={drugLogo} alt="drug" />
          <img src={medicineLogo} alt="medicine" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
