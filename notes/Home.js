import { useState } from 'react';
import './Home.css'

const Home = () => {
    // we need to make values reactive so that react monitors them and responds / reacts when they change.
    // We want react to re-render the template on change, to do this we use a hook. A hook is a special type of function in react, you know it's a hook because it starts with use
    // to use the useState hook we need to import it
    // use array destructuring to access the values the useState method gives us, here we get the value, name, and a function that allows us to change name
    // we can use this hook as often as we want for as many different values and on any type of value
    const [name, setName] = useState(`baby`)
    const [age, setAge] = useState(36)
    const handleClick = (name, age) => {
        // name is now reactive! we update it by passing it to setName
        setName(name)
        setAge(age)
    }
    // const handleClickAgain = (name, e) => {
    //     console.log(`why ${name}`);
    //     console.log(`${Math.floor(e.timeStamp / 60)}`);
    //     console.log('hi');
    // }
    return ( 
        <section className="home">
            <div>
                <h2>welcome home</h2>
            </div>
            {/* Have to wrap the function in an anonymous function so it's not called right away, instead of waiting until button is clicked */}
            <div>
                <p>{name} is {age}</p>
                <button onClick={() => {handleClick(`butts`, 78)}}>click bish</button>
            </div>
        </section>
     );
}
 
export default Home;