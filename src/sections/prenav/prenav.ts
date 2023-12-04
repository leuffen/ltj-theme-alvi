import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "prenav",
    // language=HTML
    `
        <section class="tjs-prenav container d-flex gap-1 :: flex-column align-items-end :md: flex-row align-items-center justify-content-end">
            <slot data-replace></slot>
            <slot data-select="a" data-replace data-child-class="alvi-btn"></slot>
        </section>
    `,
    {},
    {}
);
