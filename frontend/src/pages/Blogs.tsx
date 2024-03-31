import { Appbar } from "../components/Appbar";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";
import BlogCard from "./BlogCard";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div className="w-full h-full">
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
    </div>;
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center l">
        <div className="w-12/6">
          {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.auther.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}
                />)}
        </div>
      </div>
    </div>
  );
};
