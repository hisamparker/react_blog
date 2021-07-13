import { Link } from 'react-router-dom';
import './ListBlogs.css'

const ListBlogs = (props) => {
    const { blogs, title } = props;
    return (
			<section className="list_blogs">
            <h2>{title}</h2>
				{blogs && blogs.map(blog => (
					// react needs us to add a unique key for each root element it renders in the dom, react uses this to keep track of each element in the dom as it outputs it, otherwise react can't distinguish between list items
					<section className="blog_preview" key={blog.id}>
						<Link to={`blog/${blog.id}`}>
							<h3>{blog.title}</h3>
							<p>Author : {blog.author}</p>
						</Link>
					</section>
				))}
			</section>
		);
}
 
export default ListBlogs;