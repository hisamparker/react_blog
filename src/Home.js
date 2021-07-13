import { useState } from 'react';
import ListBlogs from './ListBlogs';
import useFetch from './useFetch';
import './Home.css'
import { div } from 'prelude-ls';

const Home = () => {
    const {
			data: blogs,
			isPending,
			isError,
		} = useFetch("http://localhost:8080/blogs");
    // we need to make values reactive so that react monitors them and responds / reacts when they change.
    // We want react to re-render the template on change, to do this we use a hook. A hook is a special type of function in react, you know it's a hook because it starts with use
    // to use the useState hook we need to import it
    // use array destructuring to access the values the useState method gives us, here we get the value, name, and a function that allows us to change name
    // we can use this hook as often as we want for as many different values and on any type of value
    const [name, setName] = useState(`baby`);

    return ( 
        <section className="home">
            <div className="set_name__wrapper">
                <div>
                    {blogs && <button onClick={() => setName((prevName) => prevName === 'baby' ? prevName = 'cookie' : prevName = 'baby')}>SET NAME</button>}
                </div>
                <h1>{name}</h1>
            </div>
                {isError && <div className="isPending">{isError}</div>}
                {isPending && <div className="isPending">Loading...</div>}
           <ListBlogs title='blog roll' blogs={blogs}/> 
           <ListBlogs title='charlie!' blogs={blogs && blogs.filter((blog) => blog.author === 'hicharlie')}/> 
           <ListBlogs title='sam!' blogs={blogs && blogs.filter((blog) => blog.author === 'hisam')}/> 
        </section>
     );
}
 
export default Home;