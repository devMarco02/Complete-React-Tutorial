// const BlogList = (props) => {

// 	const blogs = props.blogs;      //this works too
// 	const title = props.title;

const BlogList = ({blogs, title}) => {   //direct

	return ( 
		<div className="blog-list">
				<h2> {title} </h2>
				{blogs.map( (blog) => (
					<div className="blog-preview" key={blog.id}>
						<h2>{blog.title}</h2>
						<p>Written by: {blog.author}</p>
					</div>
			))}
		</div>
	 );
}
 
export default BlogList;
