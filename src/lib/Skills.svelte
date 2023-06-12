<script lang="ts">
    import Skill from "./components/SkillsComponents/Skill.svelte";
import Skills from "./components/SkillsComponents/Skill.svelte";

    export let height: string;

</script>

<div class="body" style="--height: {height}">
    <div class="skills">
        <Skill heading="Front-End Dev" desc="UI/UX is one of the most important aspects of a website to me as a good user experience is integral to a successful product" subHeading="Languages I use:" items={["Javascript", "Typescript", "HTML", "CSS"]} frameHeading="Frameworks I use:" frames={["React.js", "Svelte"]}/>
        <Skill heading="Back-End Dev" desc="Back-End development is full of complex and unique challenges that allow my to exercise my problem solving" subHeading="Languages I use:" items={["Python", "Java", "SQL"]} frameHeading="Frameworks I use:" frames={["Node.js", "Express", "Django"]}/>
        <Skill heading="Tools" desc="I use a variety of tools to help me develop my skills and knowledge" subHeading="Tools I use:" items={["Git", "GitHub", "Visual Studio Code", "Firebase tools"]} frameHeading="Databases I use:" frames={["MySQL", "Postgres"]}/>
    </div>
</div>

<style scoped>
    .body{
        height: var(--height);
        width: 100%;
        background-color: #EEEEEE;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .skills{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
</style>