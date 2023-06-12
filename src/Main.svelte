<script lang="ts">
    import FrontPage from "./lib/Front.svelte";
    import Projects from "./lib/Projects.svelte";
    import Skills from "./lib/Skills.svelte";
    import About from "./lib/About.svelte";
    import Contact from "./lib/Contact.svelte";
    
    let frontPage
    let projects
    let skills
    let about
    let contact
    let nav
    let navColour = "#222831"
    let navText = "white"
    let navHover = "black"
    
    const height = '100vh'
    
    let y: number
    
    const changeColour = (y: number) => {
        if (y < projects.offsetTop-20) {
            navColour = "#222831"
            navText = "white"
            navHover = "black"
        }
        else if(y >= projects.offsetTop-20 && y < skills.offsetTop-20) {
            navColour = "#393E46"
            navText = "white"
            navHover = "black"
        }
        else if(y >= skills.offsetTop-20 && y < about.offsetTop-20){
            navColour = "#EEEEEE"
            navText = "black"
            navHover = "white"
        }
        else if(y >= about.offsetTop-20 && y < contact.offsetTop-25){
            navColour = "#393E46"
            navText = "white"
            navHover = "black"
        }
        else if(y >= contact.offsetTop-25){
            navColour = "#222831"
            navText = "white"
            navHover = "black"
        }
    }
    
    const scrollToPage= (el) => {
        el.scrollIntoView({behavior: "smooth"})
    }
</script>

<svelte:window bind:scrollY={y} on:scroll={() => changeColour(y)}/>
<main>
    <header>
        <nav style="--colour: {navColour}; --textColour: {navText}; --hoverColour: {navHover}">
            <ul bind:this={nav}>
                <p class="logo">LS</p>
                <div class="pages">
                    <li on:click={() => scrollToPage(frontPage)}>Home</li>
                    <li on:click={() => scrollToPage(projects)}>Projects</li>
                    <li on:click={() => scrollToPage(skills)}>Skills</li>
                    <li on:click={() => scrollToPage(about)}>About</li>
                    <li on:click={() => scrollToPage(contact)}>Contact</li>
                </div>
            </ul>
        </nav>
    </header>
    
    <div bind:this={frontPage}>
        <FrontPage height={height}/>
    </div>
    <div bind:this={projects}>
        <Projects height={height}/>
    </div>
    <div bind:this={skills}>
        <Skills height={height}/>
    </div>
    <div bind:this={about}>
        <About height={height}/>
    </div>
    <div bind:this ={contact}>
        <Contact height={height}/>
    </div>

</main>

<style scoped>
	:global(body){
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}

	main{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	header{
		width: 100%;
		height: 0px;
		display: flex;
		justify-content: flex-end;
		position: sticky;
		top: 0;
	}

	.logo{
		padding: 0%;
		margin: 0%;
		color: var(--textColour);
		font-size: 1.7rem;
	}

	nav{
		width: 100%;
	}

	ul{
		list-style: none;
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		padding: 1rem;
		margin: 0;
		width: calc(100% - 2rem);
		background-color: var(--colour); 
	}

	.pages{
		display: flex;
		flex-direction: row;
	}

	li{
		text-decoration: none;
		color: var(--textColour);
		padding: 0.5rem;
		border-radius: 0.5rem;
		transition: 0.1s;
		cursor: pointer;
	}

	li:hover{
		color: var(--hoverColour);
		background-color: var(--textColour);
	}

</style>