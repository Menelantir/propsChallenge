function Navbar(props) {
return (
<div>
<title>{props.name}</title>
<header>
<h1>{props.name}</h1>
<ul class="navmenu">
<li><a href="#">About</a></li>
<li><a href="#">Projects</a></li>
<li><a href="#">Contact</a></li>
</ul>
</header>
</div>
)
}



export default Navbar;
