<script lang="ts">
    export let heading: string;
    export let desc: string;
    export let subHeading: string;
    export let items: string[];
    export let frameHeading: string;
    export let frames: string[];

</script>

<div class="body">
    <h4>{heading}</h4>
    <p>{desc}</p>
    <p class="sub-heading">{subHeading}</p>
    <ul>
        {#each items as item}
            <li>{item}</li>
        {/each}
    </ul>
    <p class="sub-heading">{frameHeading}</p>
    <ul>
        {#each frames as frame}
            <li>{frame}</li>
        {/each}
    </ul>
</div>

<style scoped>

    .body{
        background-color: #222831;
        width: 300px;
        color: white;
        padding: 1rem;
        border-radius: 0.5rem;
        height: 70%;
        text-align: center;
        display: grid;
        grid-template-columns: 1fr;
    }

    h4{
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
    }

    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li{
        margin-bottom: 0.2rem;
    }


</style>