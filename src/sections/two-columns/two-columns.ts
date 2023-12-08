import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "two-columns",
    // language=HTML
    `
        <section class="tjs-two-columns container">
            <div class="row">
                <div class=":: col-12 :md: col-6 :lg: col-7">
                    <slot></slot>
                    <slot data-select="a" data-child-class="alvi-link-arrow d-inline-flex mt-4"></slot>
                </div>
                <div class=":: col-12 :md: col-6 :lg: col-5">
                    <slot data-select="img" data-child-class=":: mt-3 :md: mt-0"></slot>
                </div>
            </div>
        </section>
    `,
    {},
    {}
);
