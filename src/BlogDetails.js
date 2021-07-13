import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const { data:blog, isPending, isError } = useFetch("http://localhost:8080/blogs/" + id);
    return ( 
        <article className="BlogDetails">
            {isPending && <div>Loading...</div>}
            {isError && <div>{isError}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by : {blog.author}</p>
                    <p>{blog.body}</p>
                </article>
            )}
        </article>
     );
}
 
export default BlogDetails;