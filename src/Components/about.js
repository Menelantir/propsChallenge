function About(props) {

    console.log(props)
return (
    <section id="about-me">
    <h1>
    Hello, my name is
    <span class="rotate text-important">{props.name}</span>,<br />
    and i make horrible websites.
    </h1>
    <img class="avatar" src={props.img} alt="jhon-doe" />
</section>
)
}
export default About