import { Link } from "react-router-dom";
import banner from "../../assets/images/the_dating_playbook_for_men.png";

const Banner = () => {
  return (
    <div className="h-[500px] rounded-3xl flex justify-between items-center">
      <div className="w-2/3">
        <p>Books to freshen up your bookshelf</p>
        <Link to={`/listedBooks`}>
          <button className="btn btn-primary">View The List</button>
        </Link>
      </div>
      <img className="w-1/3 h-full" src={banner} alt="" />
    </div>
  );
};

export default Banner;
