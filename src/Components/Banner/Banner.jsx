import { Link } from "react-router-dom";
import banner from "../../assets/images/the_dating_playbook_for_men.png";

const Banner = () => {
  return (
    <div className="lg:h-[500px] bg-[#1313130D] rounded-3xl flex flex-col-reverse lg:flex-row justify-between items-center mt-6">
      <div className="lg:w-3/5  lg:p-20 flex flex-col lg:items-start items-center">
        <p className="playfair font-bold text-3xl lg:text-6xl text-[#131313] mb-10 leading-tight text-center lg:text-left">
          Books to freshen <br /> up your bookshelf
        </p>
        <Link to={`/listedBooks`}>
          <button className="btn bg-[#23BE0A] hover:bg-[#23BE0A] text-white font-bold text-xl workSans mb-4 lg:mb-0">
            View The List
          </button>
        </Link>
      </div>
      <img className="w-2/5 h-3/4 lg:pr-16 mt-4 lg:mt-0" src={banner} alt="" />
    </div>
  );
};

export default Banner;
