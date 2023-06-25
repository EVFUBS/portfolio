<script lang="ts">
    import { navigate } from "svelte-navigator";
    import { info } from "../../../stores";
    import InfoPopup from "./InfoPopup.svelte";
    import { bind } from "svelte/internal";

    interface info {
        img: string;
        title: string;
        techs: string[];
        overview: string;
    }

    export let img;
    export let title:string;
    export let description:string;
    export let bgColour:string;
    export let github:string;
    export let project:string;
    export let projectInfo: info;
    
    let hover;
    let dialog;
    let dialogToggle;

    const showInfo = () => {
        hover.style.display = "flex"
    }
    const hideInfo = () => {
        if (dialog.open) {
            return
        }

        hover.style.display = "none"
    }

</script>

<div class="card" style="--bg-colour: {bgColour}; --img: url({img});" on:mouseenter={showInfo} on:mouseleave={hideInfo}>
    <div bind:this={hover} class="content">
        <h4>{title}</h4>
        <p>{description}</p>
        <div class="links">
            <div class="link">
                <a href={github} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
            </div>
            <div class="link">
                <a href={project} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M21.172 11.486l-5.172-5.072 1.414-1.414 6.586 6.485-6.586 6.515-1.414-1.414 5.172-5.1zm-18.344 0l5.172-5.072-1.414-1.414-6.586 6.485 6.586 6.515 1.414-1.414-5.172-5.1zm4.672-1.486c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/></svg></a>
            </div>

            <InfoPopup bind:dialog={dialog} bind:toggleDialog={dialogToggle} bind:info={projectInfo}/>
            <button on:click={() => dialogToggle()}>More Info</button>
        </div>
    </div>
</div>

<style scoped>
    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 1rem;
        height: 80%;
        width: 80%;
        background-image: var(--img);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-blend-mode: darken;
    }

    .card:hover{
        background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), var(--img);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .content{
        height: 0;
        display: none;
        flex-direction: column;
        align-items: center;
        width: 50%;
        position: relative;
        top: -100px;
    }

    .content p{
        text-align: center;
    }

    .links{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 100%;
    }

    svg{
        width: 2rem;
        height: 2rem;
        transition: 0.2s;
        fill: white;
    }

    svg:hover{
        cursor: pointer;
        fill: #FFD369;
    }

    button{
        background-color: var(--bg-colour);
        color: white;
        border: none;
        padding: 0.5rem;
        border-radius: 0.5rem;
        transition: 0.2s;
        border: 1px white solid;
    }

    button:hover{
        cursor: pointer;
        background-color: white;
        color: var(--bg-colour);
    }

</style>