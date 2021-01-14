import { useState } from 'react';

const Home = () => {

	// let name = "mario";   //when need a reactive value, a value that might change at some point, use useState hook
	const [name, setName] = useState('mario');  //useState is a Hook that lets you add React state to function components
	const [age , setAge] = useState (25);

	const clickHandler = () =>{  
		// name = "luigi"; 	      // this wont work
		// age = 30;
		setName('luigi');         // use this function instead
		setAge(30);
	}

	return (
		<div className="home">
			<h2>Homepage</h2>
			<p>{name} is {age} years old</p>
			<button onClick={clickHandler}>Click me</button>
		</div>
	  );
}
 
export default Home;
