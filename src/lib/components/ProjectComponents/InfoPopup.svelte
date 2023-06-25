<script lang="ts">
    import type { info } from "src/stores";

    export let dialog: HTMLDialogElement;
    export let info: info;

    export const toggleDialog = () => {
        if (dialog.open) {
            dialog.close();
        } else {
            dialog.showModal();
        }
    }

</script>

<dialog bind:this={dialog}>
    <div>
        <img src={info.img} alt="">
        <h3>{info.title}</h3>
        <h4>Overview</h4>
        <p>{info.overview}</p>
        <h4>Technologies Used</h4>
        <p>{info.techs}</p>
        <h4>Challenges faced during development</h4>
        <p>{info.challenges}</p>

        <button on:click={toggleDialog}>Close</button>
    </div>
</dialog>

<style scoped>

    img{
        width: 100%;
        height: 20rem;
        object-fit: cover;
        object-position: center;
    }

    dialog {
        width: 85%;
        height: 85%;
        background-color: #222831;
        color: #fff;
        border-radius: 10px;
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