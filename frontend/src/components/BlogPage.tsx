import { Blog } from "../hooks"
import { Avatar } from "../pages/BlogCard";
import { Appbar } from "./Appbar"

export const BlogPage=({ blog }: {blog: Blog})=>{
       return (
    <div>
        <Appbar />
       <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl h-screen align-middle pt-12 ">
                <div className="col-span-8 pr-2">
                    <div className="text-5xl font-extrabold">{blog.title}</div>
                    <div className="pt-3 text-slate-500">
                        Posted on 2nd December 2023
                    </div>
                    <div className="pt-3">{blog.content}</div>
                </div>
                <div className=" col-span-4 pl-2">
                    Author
                    <div className="flex pt-2">
                        <div className="pr-2">
                            <Avatar name={blog.auther.name.toUpperCase()}/>
                        </div>
                        <div className="text-xl font-bold">
                        {blog.auther.name}
                        </div>
                    </div>
                        <div className="pt-2 text-slate-500">
                        Identify the author’s academic background and areas of research, if possible. If your source is a book, look for an author’s note, a foreword, or an “about the author” section towards the beginning or the end of the book.
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
);


} 