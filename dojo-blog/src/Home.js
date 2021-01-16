import { useState, useEffect} from 'react';
import BlogList from './Bloglist';

const Home = () => {

	const [blogs, setBlogs] = useState([
		{title: 'My new website', body: 'lorem ipsum ...', author: 'mario', id: '1'},
		{title: 'Welcome party', body: 'lorem ipsum ...', author: 'yoshi', id: '2'},
		{title: 'Web dev top tips', body: 'lorem ipsum ...', author: 'mario', id: '3'}
	])

	const [name, setName] = useState('mario');

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	}

	useEffect(() => {            //useEffect runs everytime the component is rendered
		console.log("use effect ran");
		console.log(name);
	// }, []);                  []empty array to run useEffect once
	}, [name]);                 //useEffect runs everytime the dependency(name) is changed

	return (
		<div className="home">
			<BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
			<button onClick={() => setName('luigi')}>change name</button>
		</div>
	  );
}
 
export default Home;
