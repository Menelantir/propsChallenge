import './Css/style.css';
import JohnDoe from './images/John-Doe.jpg';
import About from './Components/about.js';
import Contact from './Components/contact.js';
import Footer from './Components/footer.js'; 
import Navbar from './Components/Navbar.js'; 
import Projects from './Components/projects.js';
import Projectimg from './images/proj1.jpg';
import Projectimg2 from './images/proj2.jpg';
import Projectimg3 from './images/proj3.jpg';
import Projectimg4 from './images/proj4.jpg';

function App() {
  const name ="John Doe" 
  const lorem ="Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantiumaliquam."
 
  const projects = [{name : "Project 1", srcimg:Projectimg} , {name : "Project 2", srcimg:Projectimg2} , {name : "Project 3", srcimg:Projectimg3}, {name :"Project 4", srcimg:Projectimg4} ]
  const year = "2020"


  return (
    <div className="App">
      <Navbar name={name}/>
      <About img={JohnDoe} name={name}/>
      <Projects projects={projects} lorem= {lorem}/>
      <Contact/>
      <Footer year={year}/>
    </div>
  );
}

export default App;
