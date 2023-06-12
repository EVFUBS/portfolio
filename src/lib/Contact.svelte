<script lang="ts">
    export let height: string;

</script>

<div class="body" style="--height: {height}">
    <div class="contact">
        <h1>Contact <span>Me</span></h1>
        <p>Feel free to contact me using the form regarding any enquires or opportunities</p>
    </div>
    <form>
        <div>
            <input type="text" placeholder="Name">
            <input type="email" placeholder="Email">
        </div>
        <input type="text" placeholder="subject">
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
    </form>
</div>

<style scoped>
    .body{
        height: var(--height);
        background-color: #222831;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .contact{
        width: 25%;
        color: white;
    }
    
    .contact h1{
        color: white;
        font-weight: bold;
        text-align: center;
    }

    .contact span{
        color: #FFD369;
    }

    .contact p{
        text-align: center;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        gap: 0.5rem;
        width: 40%;
    }

    form div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
        width: 92.5%;
    }

    input, textarea{
        width: 90%;
        height: 1.8rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #EEEEEE;
        font-weight: bold;
        font-size: 1rem;
        padding: 0.5rem;
        border-bottom: 4px white solid;
        resize: none;
        transition: 0.5s;
    }

    input:focus, textarea:focus{
        outline: none;
        border-bottom: 4px #FFD369 solid;
    }

    textarea{
        height: 10rem;
    }

    button{
        width: 92.5%;
        height: 2rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #222831;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        color: white;
        border: 2px white solid;
    }

    button:hover{
        background-color: white;
        color: #222831;
    }

</style>