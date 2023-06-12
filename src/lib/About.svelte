<script lang="ts">
    import Detail from "./components/AboutComponents/Detail.svelte";
    import web from "../assets/internet-svgrepo-com.svg";
    import phone from "../assets/phone-svgrepo-com.svg";
    import speedometer from "../assets/speedometer-svgrepo-com.svg";

    export let height: string;

</script>

<div class="body" style="--height: {height}">
    <div class="details">
        <Detail svg="{web}" desc="Computers have always been an interest for me, especially the web as it only seems to grow in scope and possiblities"/>
        <Detail svg="{phone}" desc="Mobile Responsiveness is a cornerstone of how I develop for the web, as mobile devices are increasingly becoming the choice for browsing the web"/> 
        <Detail svg="{speedometer}" desc="Fast and effcient services are aspects I strive for in my work, with Fast load and response times being a must"/>  
    </div>
</div>

<style scoped>
    .body{
        height: var(--height);
        background-color: #393E46;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    .details{
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
</style>