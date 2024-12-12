import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "form",
    // language=HTML
    `
        <section class="tjs-form :: sm :md: md" >
            <form data-micx-formmail-preset="default" data-micx-formmail-sent-message="E-Mail erfolgreich gesendet!">
                <slot></slot>
            </form>
        </section>
    `,
    {},
    {

    }
);
