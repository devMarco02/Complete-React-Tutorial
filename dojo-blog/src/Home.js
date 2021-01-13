const Home = () => {

	const clickHandler = () =>{   	
		console.log("Hello nijas", );
	}

	const clickHandlerAgain = (name) =>{
		console.log(name);
	}

	const clickHandlerAgainAgain = (name, e) =>{  /* e(event parameter) */
		console.log(name, e.target);
	}

	return (
		<div className="home">
			<h2>Homepage</h2>
			<button onClick={clickHandler}>Click me</button> {/*automatically being invoked if adding () to the method, dont add ()*/}
			<button onClick={ () => clickHandlerAgain('marco')}>Click me Again</button>  {/*if it has a parameter, wrap it inside an anonymous function*/}
			<button onClick={ (e) => clickHandlerAgainAgain('mario', e)}>Click me Again</button>
		</div>
	  );
}
 
export default Home;
