<script lang="ts">
    import type { info } from "src/stores";
    import Card from "./components/ProjectComponents/Card.svelte";
    import tempimg from "../assets/firewatchTemp.jpg";
    import wordle from "../assets/wordle.jpg";
    import Blitz from "../assets/Blitz.png";
    export let height: string;

    const wordleInfo: info = {
        title: "Wordle Clone",
        img: wordle,
        techs: ["vanilla js"],
        preview: "wordle clone, one of my first projects, used to solidify the basics of manipulating the DOM",
        overview: `This was a clone of the wordle game. I used vanilla js to create the game to solidify the basics of manipulating the DOM before moving on 
        with learning to use frameworks. It works similarly to the original game and is responsive to different screen sizes. Was one of my first projects and
        was a good way to learn the basics of web development and DOM manipulation.`
    };

    const blitzInfo: info = {
        title: "Blitz",
        img: Blitz,
        techs: ["Svelte", "Typescript", "Django"],
        preview: "quiz game using svelte and django, uses websockets to allow for real-time quizes",
        overview: "This was a project is a kahoot-like game that utilises a svelte frontend and a django rest backend using the django rest framework, it also uses channels to access websockets this allows for the real-time quizes that the player take against one another"
    };

    const cowritingInfo: info = {
        title: "Lyric Generator",
        img: tempimg,
        techs: ["Python", "Tensorflow", "Svelte", "Django"],
        preview: "song lyric generator using tensorflow, python, svelte, django.",
        overview: `In this project a custom small scale AI language model was created to generate the next few words in a song. 
        Along with this a svelte frontend was created for the website and FASTAPI for the backend for a simple interface to provide the model.
        
        
        `
    };

    const alphaInfo: info = {
        title: "Alpha Lang",
        img: tempimg,
        techs: ["Go"],
        preview: "Interpreter written in go for a custom language",
        overview: `Alpha Lang is a custom language that was created to learn about how interpreters work. In the course of this project I learnt about how
        lexers, parsers and evaluators work and how to implement them. I also learnt about abstract syntax trees and how to use them to parse code. The interpreter was written 
        in go and uses a recursive descent parser to parse the code. The language is a simple language that supports variables, functions, if statements, for loops, 
        while loops, and arrays. The language is dynamically typed and uses its own file extension (.al) to differentiate it from other languages.
        This project is not meant for use in serious projects and was created for learning purposes. 
        `
    };

</script>

<div class="body" style="--height: {height}">
    <div class="cards">
        <Card img={wordle} title={wordleInfo.title} description={wordleInfo.preview} bgColour="#393E46" github="" project="" projectInfo={wordleInfo}/>
        <Card img={Blitz} title={blitzInfo.title} description={blitzInfo.preview} bgColour="#393E46" github="" project="" projectInfo={blitzInfo}/>
        <Card img={tempimg} title={cowritingInfo.title} description={cowritingInfo.preview} bgColour="#393E46" github="" project="" projectInfo={cowritingInfo}/>
        <Card img={tempimg} title={alphaInfo.title} description={alphaInfo.preview} bgColour="#393E46" github="" project="" projectInfo={alphaInfo}/>
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
        width: 90%;
        height: 80%;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        justify-items: center;
        align-items:center;
        gap: 2rem;
    }


</style>