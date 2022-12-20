<script>
    export let locale = "en";
    export let endpoint = "/api/v1/contact.json";
    import { contact as transRU } from "../locales/ru/forms.json";
    import { contact as transEN } from "../locales/en/forms.json";
    // import { contact as transKZ } from "../locales/kk/forms.json";

    const trans = (() => {
        switch (locale) {
            case "ru":
                return transRU;
            // case "kk":
            //     return transKK;
            default:
                return transEN;
        }
    })();

    let busy = false;
    let done = false;
    let error = null;

    let name = "";
    let email = "";
    let phone = "";
    let message = "";
    const send = () => {
        busy = true;
        fetch(endpoint + "?locale=" + encodeURIComponent(locale), {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                message: message,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.Error) {
                    error = data.Error;
                    return;
                }
                done = true;
            })
            .catch((e) => {
                console.log(e);
                // handle timeout?
                error = `Connection failed! Reason: ${e}`; // TODO: localize
            })
            .finally(() => {
                busy = false;
            });
    };
</script>

{#if done}
    <div class="message is-info">
        <div class="message-body">
            <slot>
                {trans.thankyou}
            </slot>
        </div>
    </div>
{:else}
    <form>
        <section class="columns">
            <fieldset class="column is-one-third">
                <div class="field">
                    <label for="name" class="label">{trans.name}&nbsp;*</label>
                    <input
                        type="text"
                        bind:value={name}
                        name="name"
                        class="input"
                    />
                </div>
                <div class="field">
                    <label for="email" class="label">{trans.email}&nbsp;*</label
                    >
                    <input
                        type="text"
                        bind:value={email}
                        name="email"
                        class="input"
                    />
                </div>
                <div class="field">
                    <label for="phone" class="label">{trans.phone}</label>
                    <input
                        type="text"
                        bind:value={phone}
                        name="phone"
                        class="input"
                    />
                </div>
            </fieldset>
            <fieldset class="column">
                <div class="field">
                    <label for="message" class="label"
                        >{trans.message}&nbsp;*</label
                    >
                    <textarea
                        type=""
                        name="message"
                        class="textarea"
                        style="min-height: 12.3rem;"
                        bind:value={message}
                    />
                </div>
                {#if error}
                    <div class="control message is-danger">
                        <div class="message-body">{error}</div>
                    </div>
                {/if}
                <button
                    on:click={send}
                    type="button"
                    value="send"
                    name="action"
                    class="button is-primary"
                    class:is-loading={busy}>{trans.send}</button
                >
            </fieldset>
        </section>
    </form>
{/if}
