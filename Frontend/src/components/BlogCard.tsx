import { Link } from "react-router-dom";

interface BlogCardProps {
    id: string;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`} >
        <div className="p-5 border-b border-zinc-200 pb-7 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="flex justify-center flex-col pr-1">
                    <Avatar name={authorName} />
                </div>
                <div className="flex justify-center flex-col font-medium text-zinc-700 pl-1 text-sm">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-1">
                    <Circle />
                </div>
                <div className="flex justify-center flex-col pl-1 text-zinc-500 text-sm font-medium ">
                    Publishing Date: TBA
                </div>
            </div>
            <div className="text-2xl font-bold pt-2">
                {title}
            </div>
            <div className="text-md font-medium text-zinc-600">
                {content.slice(0, 200) + "...."}
            </div>
            <div className="text-zinc-500 text-sm pt-5">
                {`${Math.ceil(content.length / 1000)} minute(s) read`}
            </div>
        </div>
    </Link>
}

function Circle() {
    return <div className="h-0.5 w-0.5 rounded-full bg-zinc-400">

    </div>
}

export function Avatar({ size = "small", name }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden  rounded-full bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"} font-medium text-slate-50 "`}>
            {name[0]}
        </span>
    </div>
}