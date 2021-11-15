



function Projects(props) {



return (


<section id="projects">
<h2 class="text-important">Projects</h2>
<div class="projects-container">
    
{props.projects.map(el=>

<div class="project-card">
    <img src={el.srcimg} alt="project" />
    <h3>{el.name}</h3>
    <p>
    {props.lorem}
    </p>
    <p><a href="#">Github Link</a></p>
</div>

)


};


</div>
</section>
)
}
export default Projects