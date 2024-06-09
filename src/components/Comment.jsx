import mr from "../assets/mr.png"
import miss from "../assets/miss.png"
const Comment = () => {
  return (
    <div className="m-auto py-5 px-5 lg:px-26">
        <hr className="my-10"/>

     <div className="flex flex-col gap-y-10">
        <div className="flex flex-col">
        <div className="flex flex-row items-center gap-x-2">
            <div>
                <img className="w-10 lg:w-14" src={mr} alt="mr" />
            </div>
            <div className="flex flex-col gap-y-1">
                <p className="text-primary text-xl lg:text-lg font-semibold">ابو حمزة</p>
                <p className="text-primary ">حلووووو</p>
            </div>
        </div>
        </div>

        <div className="flex flex-col">
        <div className="flex flex-row items-center gap-x-2">
            <div>
                <img className="w-10 lg:w-14" src={miss} alt="miss" />
            </div>
            <div className="flex flex-col gap-y-1">
                <p className="text-primary text-xl lg:text-xl font-semibold">ام حمزة</p>
                <p className="text-primary ">رؤؤؤؤعة</p>
            </div>
        </div>
        </div>
     </div>

     <div className="flex flex-row items-center gap-5 mt-10">  
        <div className="flex flex-col">
            <form className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                <img className="w-14 lg:w-14" src={mr} alt="mr" />
                <textarea className="resize-none rounded-lg w-64 md:w-[690px] lg:w-96 xl:w-[1200px] pr-2 pt-1 bg-secondary placeholder-primary" rows={2} placeholder="اكتب تعليقك..." name="comment" id="comment"/>
                </div>
                <button className="bg-primary text-white w-64 md:w-[690px] lg:w-96 xl:w-[1200px] h-10 hover:bg-green-800 rounded-lg mr-[65px] xl:mr-[65px]">نشر</button>
            </form>
        </div>
     </div>
     
    </div>
  )
}

export default Comment