<script lang="ts">
    export let height: string;

</script>

<div class="body" style="--height: {height}">
    <div class="intro">
        <p>Hi, I'm <span class="name">Luke Smith</span>, a software developer and graduate with a BSc in Computer Science</p>
    </div>
</div>

<style scoped>
    .body{
        height: 100vh;
        width: 100%;
        background-color: #222831;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .intro{
        color: #fff;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        width: 40%;
    }

    .name{
        color: #FFD369;
    }
</style>