import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "ribbons",
    // language=HTML
    `
        <section class="tjs-ribbons container-fluid">
            <div class="container">
                <slot data-replace></slot>
            </div>
        </section>
    `,
    {},
    {}
);
