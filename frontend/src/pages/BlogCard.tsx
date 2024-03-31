import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:number
}

export default function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
    <div className="border border-slate-200 pb-4 pt-2 p-4 m-4 cursor-pointer w-full">
      <div className="flex  ">
        <div className="flex justify-center flex-col">
          <Avatar name={authorName} />
        </div>
        <div className="flex pt-2 pl-1">
          <div className="font-normal text-xs">{authorName} .</div>
          <div className="pl-2 font-normal text-xs text-slate-600">
            {publishedDate}
          </div>
        </div>
      </div>
      <div className="text-xl font-bold pt-2 pb-1">{title}</div>
      <div className="text-sm font-thin text-slate-600">
        {content.slice(0, 100) + "..."}
      </div>
      <div className="text-slate-500 text-xs font-thin pb-2 pt-5">{`${Math.ceil(
        content.length / 100
      )} minutes read `}</div>
    </div></Link>
  );
}

export function Circle() {
    return <div className="h-6 w-6 rounded-full bg-slate-500">

    </div>
}

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-400 rounded-full dark:bg-gray-600">
      <span className="font-medium text-s text-gray-800 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
