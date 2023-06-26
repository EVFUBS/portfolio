<script lang="ts">
    import Skill from "./components/SkillsComponents/Skill.svelte";
import Skills from "./components/SkillsComponents/Skill.svelte";

    export let height: string;

</script>

<div class="body" style="--height: {height}">
    <div class="skills-wrapper">
        <div class="skills panel">
            <div class="skills-content">
                <h3>Skills</h3>
                <div class="skill">
                    <h4>Front-End Dev</h4>
                    <p>I have experience in designing front-end applications in both my personal projects and during my education. 
                        I try to follow a mobile first approach to my design and development to ensure that my applications are accessible to all users
                        and try to be consious of accessibilty and usability when designing my applications.
                    </p>
                </div>
                <div class="skill">
                    <h4>Back-End Dev</h4>
                    <p>I also have some experience in creating backend services such as APIs and websocket servers and for my personal projects.
                        This lead me to learn frameworks like django and system languages such as Go.</p>
                </div>
                <div class="skill">
                    <h4>Databases</h4>
                    <p>I have used both SQL and NoSQL based database in my studies as well as my own projects leading me to have
                        a decent understanding of how to use and interact with a database.</p>
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
                        <li>Python</li>
                        <li>Java</li>
                        <li>Go</li>
                        <li>SQL</li>
                        <li>Cypher</li>
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

                    <p>I also have limited experience but I am interested in areas such as:</p>
                    <ul>
                        <li>Mobile development</li>
                        <li>Systems/embedding programming</li>
                        <li>Robotics</li>
                        <li>Machine learning</li>
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