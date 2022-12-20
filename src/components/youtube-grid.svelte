<script>
    export let videoFeed = null;
    //     <a
    //     href={"https://www.youtube.com/watch?v=" + video["yt:videoId"]}
    //     target="_blank"
    // >
</script>

{#if videoFeed}
    <section>
        {#each videoFeed.feed?.entry || [] as video, index}
            <a href={"/sermon/" + video["yt:videoId"] + ".html"}>
                <figure>
                    <img
                        alt={video.title}
                        src={"https://i2.ytimg.com/vi/" +
                            video["yt:videoId"] +
                            "/hqdefault.jpg"}
                    />
                    <figcaption>
                        📽 {video.title}
                    </figcaption>
                </figure>
            </a>
        {/each}
    </section>
    <a
        class="button is-fullwidth"
        target="_blank"
        href="https://www.youtube.com/channel/{videoFeed.feed['yt:channelId']}"
        >View on Youtube</a
    >
{/if}

<style>
    section {
        background-color: #161616;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 0;
        /* margin-bottom: 2em; */
    }

    figure {
        position: relative;
        margin: 0;
    }

    img {
        object-fit: cover;
        width: 100%;
        min-height: 8rem;
    }

    figcaption {
        bottom: 0;
        left: 0;
        width: 100%;
        color: rgb(177, 182, 170);
        background-color: #303030;
        padding: 0.2rem 1rem 0.8rem 1rem;
        text-align: left;
        font-size: 0.8rem;
        font-style: normal !important;
    }
</style>
