

import ProjectCard from './projectCard.js';


function Projects(props) {



return (


<section id="projects">
<h2 class="text-important">Projects</h2>
<div class="projects-container">
    
{props.projects.map(el=>

<ProjectCard el={el} lorem={props.lorem}/>

)


};


</div>
</section>
)
}
export default Projects