import { Link } from "react-router-dom";
import { Avatar } from "../pages/BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-2">
     <Link to={"/blogs"}> <div className="font-extrabold curser-pointer pt-2">Medium</div></Link>
      <div className="flex pt-2">
        <Link to={"/publish"}><div className="pr-1"><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none  focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add New Blog</button>
        </div></Link>
        <Avatar name="Harkirat Singh" />
      </div>
    </div>
  );
};
