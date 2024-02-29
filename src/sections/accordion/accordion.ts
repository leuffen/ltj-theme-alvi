import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "accordion",
    // language=HTML
    `
        <details>
            <summary><slot data-select="h3"></slot></summary>
            <div>
                <slot></slot>
            </div>
        </details>
    `
);



Joda.registerTemplate(
    "accordion-pane",
    // language=HTML
    `
        <section class="tjs-accordion">
            <div class="container">
                <slot data-select=".section-h3" data-child-layout="use:#accordion"></slot>
            </div>
        </section>
    `
);


