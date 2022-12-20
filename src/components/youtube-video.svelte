<script>
    export let ID;
</script>

<figure>
    <iframe
        src={"https://www.youtube.com/embed/" + ID + "?"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    />
</figure>

<style>
    figure {
        background-color: black;
        padding: 1em 2em;
        margin: 0;
        justify-content: center;
    }

    figure iframe {
        aspect-ratio: 16 / 9;
        height: 100%;
        width: 100%;
    }
</style>
