import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "accordion",
    // language=HTML
    `
        <section class="tjs-accordion">
            <div class="container">
                <slot data-select="details"></slot>
            </div>
        </section>
    `
);
