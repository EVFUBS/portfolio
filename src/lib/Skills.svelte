<script lang="ts">
    import Skill from "./components/SkillsComponents/Skill.svelte";
import Skills from "./components/SkillsComponents/Skill.svelte";

    export let height: string;

</script>

<div class="body" style="--height: {height}">
    <div class="skills-wrapper">
<!--     <Skill heading="Front-End Dev" desc="UI/UX is one of the most important aspects of a website to me as a good user experience is integral to a successful product" subHeading="Languages I use:" items={["Javascript", "Typescript", "HTML", "CSS"]} frameHeading="Frameworks I use:" frames={["React.js", "Svelte"]}/>
        <Skill heading="Back-End Dev" desc="Back-End development is full of complex and unique challenges that allow my to exercise my problem solving" subHeading="Languages I use:" items={["Python", "Java", "SQL"]} frameHeading="Frameworks I use:" frames={["Node.js", "Express", "Django"]}/>
        <Skill heading="Tools" desc="I use a variety of tools to help me develop my skills and knowledge" subHeading="Tools I use:" items={["Git", "GitHub", "Visual Studio Code", "Firebase tools"]} frameHeading="Databases I use:" frames={["MySQL", "Postgres"]}/> -->
        <div class="skills panel">
            <div class="skills-content">
                <h3>Skills</h3>
                <div class="skill">
                    <h4>Front-End Dev</h4>
                    <p>UI/UX is one of the most important aspects of a website to me as a good user experience is integral to a successful product</p>
                </div>
                <div class="skill">
                    <h4>Back-End Dev</h4>
                    <p>Back-End development is full of complex and unique challenges that allow my to exercise my problem solving</p>
                </div>
                <div class="skill">
                    <h4>Databases</h4>
                    <p>I use a variety of tools to help me develop my skills and knowledge</p>
                </div>
            </div>
        </div>
        <div class="languages panel">

            <div class="languages-content content">
                <h3>Languages</h3>
                <div class="language">
                    <p>I'm am proficient in a few languages and I am always willing and excited to expand my knowledge around known and new languages and tools</p>
                    <ul>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>SQL</li>
                    </ul>
                    <p>As well as languages I am capable in a few frameworks as well those being</p>
                    <ul>
                        <li>React.js</li>
                        <li>Svelte</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Django</li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="tools panel">
            <div class="tools-content content">
                <h3>Tools</h3>
                <div class="tool">
                    <p>I use a variety of tools to help me develop my skills and knowledge</p>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Visual Studio Code</li>
                        <li>Vite</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</div>

<style scoped>
    .body {
        height: var(--height);
        width: 100%;
        background-color: #EEEEEE;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .skills-wrapper {
        height: 80%;
        width: 90%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        background-color: #222831;
        border-radius: 0.5rem;
    }

    .panel {
        color: white;
        margin: 2rem;
        width: 80%;
    }
</style>