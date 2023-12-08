import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "header",
    // language=HTML
    `
        <section class="tjs-header">
            <slot data-select="img"></slot>
            <div class="container">
                <div class="row">
                    <div class="tjs-header__content :: col-12 :md: col-8 :lg: col-6">
                        <slot></slot>
                        <slot data-select="a" data-child-class="alvi-btn large d-inline-flex :: mt-1 :lg: mt-3"></slot>
                    </div>
                </div>
            </div>
        </section>
    `,
    {},
    {}
);
