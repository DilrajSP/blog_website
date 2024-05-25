import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {
    return <div>
        <AppBar />
        <div className="flex justify-center">
            <div className="w-full px-10 pt-6 mt-20 max-w-screen-lg">
                <div className="">
                    <div className="leading-snug text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-gray-500 font-medium pt-2">
                        Publishing Date: TBA
                    </div>
                    <div className="py-5">
                        <div className="flex">
                            <div className="pr-4 flex flex-col justify-center">
                                <Avatar size='big' name={blog.author.name || "Anonymous"} />
                            </div>
                            <div>
                                <div className="text-xl font-bold">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="text-gray-500 font-medium">
                                    Random catch phrase about the author's ability to grab the user's attention.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4 pb-10 whitespace-pre-wrap text-lg">
                        {blog.content}
                    </div>
                </div>
            </div>
        </div>
    </div>
}