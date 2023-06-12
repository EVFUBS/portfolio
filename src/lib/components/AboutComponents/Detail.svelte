<script lang="ts">
    export let svg;
    export let desc: string;
</script>

<div class="body">
    <img src="{svg}" alt="">
    <p>{desc}</p>
</div>

<style scoped>

    .body{
        background-color: #FFFFFF;
        padding: 1rem;
        border-radius: 0.5rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2rem;
    }

    img{
        height: 100px;
    }

    p{
        width: 80%;
        text-align: center;
    }
</style>