<script lang="ts">
    import { info } from "../../stores";
    import { navigate } from 'svelte-navigator';

    console.log($info);

</script>

<div>
    <button class="back" on:click={() => navigate('/')}> back </button>
    <div>
        <img src={$info.img} alt="">
        <h2>{$info.title}</h2>
        <ul>
            {#each $info.techs as tech}
                <li>{tech}</li>
            {/each}
        </ul>
    </div>
    <div>
        <div>
            <h2>Project Overview</h2>
            <p>{$info.overview}</p>
        </div>
    </div>
</div>

<style scoped>

    img{
        width: 40%;
        height: auto;
    }



</style>