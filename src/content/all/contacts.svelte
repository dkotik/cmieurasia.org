<script>
    export let locale = "ua";
</script>

<div class="columns content">
    <div class="column">
        <h3>
            {#if locale === "en"}
                Address
            {:else if locale === "ru"}
                Адрес
            {:else}
                Адрес
            {/if}
        </h3>
        <p>
            {#if locale === "en"}
                Kyiv Theological Seminary<br />
                Ulitsa Gorlovskaya, 75<br />
                Kyiv, Ukraine, 02000
            {:else if locale === "ru"}
                Киевская богословская семинария<br />
                ул. Горловская, 75<br />
                г. Киев, Украина
            {:else}
                Київська богословська семінарія<br />
                вул. Горлівська, 75<br />
                м. Київ, Україна
            {/if}
        </p>
    </div>
    <div class="column">
        <h3>
            {#if locale === "en"}
                Telephone
            {:else if locale === "ru"}
                Телефон
            {:else}
                Телефон
            {/if}
        </h3>
        {#if locale === "en"}
            <p>+38 (095) 508-4571 (Vladimir)</p>
            <p>+38 (098) 946-1778 (Alexandr)</p>
        {:else if locale === "ru"}
            <p>+38 (095) 508-4571 (Владимир)</p>
            <p>+38 (098) 946-1778 (Александр)</p>
        {:else}
            <p>+38 (095) 508-4571 (Володимир)</p>
            <p>+38 (098) 946-1778 (Олександр)</p>
        {/if}
    </div>
</div>

<iframe
    width="425"
    height="350"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    title="Ulitsa Gorlovskaya, 75, Kyiv, Ukraine, 02000"
    src="https://www.openstreetmap.org/export/embed.html?bbox=30.64892649650574%2C50.41657152536674%2C30.65622210502625%2C50.420686875189574&amp;layer=mapnik&amp;marker=50.418629138932495%2C30.65257430076599"
    style="width:100%;clear:both;border: 1px solid black"
/>

<div class="has-text-centered">
    <small
        ><a
            target="_blank"
            title="Ulitsa Gorlovskaya, 75, Kyiv, Ukraine, 02000"
            class="button is-info"
            href="https://www.openstreetmap.org/?mlat=50.41863&amp;mlon=30.65257#map=17/50.41863/30.65257"
        >
            {#if locale === "en"}
                Enlarge Map
            {:else if locale === "ru"}
                Увеличить Карту
            {:else}
                Збільшити карту
            {/if}
        </a></small
    >
</div>
