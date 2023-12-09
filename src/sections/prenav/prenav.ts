import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "prenav",
    // language=HTML
    `
        <section class="tjs-prenav container d-flex gap-2 :: flex-column align-items-end :md: flex-row align-items-center justify-content-end">
            <slot></slot>
            <slot data-select="a" data-child-class="alvi-btn draw-border"></slot>
        </section>
    `,
    {},
    {}
);
