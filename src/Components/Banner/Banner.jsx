import { Link } from "react-router-dom";
import banner from "../../assets/images/the_dating_playbook_for_men.png";

const Banner = () => {
  return (
    <div className="h-[500px] bg-[#1313130D] rounded-3xl flex justify-evenly items-center mt-6">
      <div className="w-3/5  p-20">
        <p className=".playfair font-bold text-6xl text-[#131313] mb-10 leading-tight">
          Books to freshen <br /> up your bookshelf
        </p>
        <Link to={`/listedBooks`}>
          <button className="btn bg-[#23BE0A] hover:bg-[#23BE0A] text-white font-bold text-xl .workSans">
            View The List
          </button>
        </Link>
      </div>
      <img className="w-2/5 h-3/4 pr-16" src={banner} alt="" />
    </div>
  );
};

export default Banner;
