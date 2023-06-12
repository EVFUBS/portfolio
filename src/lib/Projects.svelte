<script lang="ts">
    import Card from "./components/ProjectComponents/Card.svelte";
    import tempimg from "../assets/firewatchTemp.jpg";
    import wordle from "../assets/wordle.jpg";
    import Blitz from "../assets/Blitz.png";
    export let height: string;

    interface info {
        title: string;
        img: string;
        techs: string[];
        overview: string;
    }

    const groupInfo: info = {
        title: "Group Project",
        img: tempimg,
        techs: ["React", "Express", "TypeScript", "Postgres"],
        overview: "The project was to create a mock e-commerce website using whatever technologies we wanted. We decided to use react for the UI and express as our server. along with postgresql as our relational database"
    };

    const wordleInfo: info = {
        title: "Wordle Clone",
        img: wordle,
        techs: ["vanilla js"],
        overview: "This was a clone of the wordle game. I used vanilla js to create the game to solidify the basics of manipulating the DOM before moving on with learning to use frameworks such as react and svelte"
    };

    const blogInfo: info = {
        title: "Blog",
        img: "",
        techs: ["React", "Express", "Postgres"],
        overview: "This was a my first app using react I learnt alot about the framework during this project and how to seperate parts of the UI into reusable components"
    };

    const blitzInfo: info = {
        title: "Blitz",
        img: Blitz,
        techs: ["Svelte", "Typescript", "Django"],
        overview: "This was a project is a kahoot-like game that utilises a svelte frontend and a django rest backend using the django rest framework, it also uses channels to access websockets this allows for the real-time quizes that the player take against one another"
    };



</script>

<div class="body" style="--height: {height}">
    <div class="cards">
        <Card img={tempimg} title="Group E-commerce Project" description="An ecommerce website using react, express and postgres" bgColour="#393E46" github="" project="" projectInfo={groupInfo}/>
        <Card img={wordle} title="Wordle Clone" description="vanilla javascript wordle clone" bgColour="#393E46" github="" project="" projectInfo={wordleInfo}/>
        <Card img="" title="Blog App" description="react, express and postgres blog app" bgColour="#393E46" github="" project="" projectInfo={blogInfo}/>
        <Card img="" title="lyric generator" description="song lyric generator using tensorflow, python, svelte, django" bgColour="#393E46" github="" project="" projectInfo={blitzInfo}/>
        <Card img="" title="alpha lang" description="Interpreter written in python, first language I've made" bgColour="#393E46" github="" project="" projectInfo={blitzInfo}/>
        <Card img={Blitz} title="Blitz Quiz" description="multiplayer quiz game using svelte and django, utilises websockets to connect player to a room" bgColour="#393E46" github="https://github.com/EVFUBS/Blitz" project="" projectInfo={blitzInfo}/>
    </div>
</div>

<style scoped>
    .body {
        height: var(--height);
        background-color: #393E46;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cards{
        width: 100%;
        height: 80%;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        justify-items: center;
        align-items:center;
        gap: 2rem;
    }


</style>