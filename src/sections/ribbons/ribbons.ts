import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "ribbons",
    // language=HTML
    `
        <section class="tjs-ribbons container">
            <slot data-replace></slot>
        </section>
    `,
    {},
    {}
);
