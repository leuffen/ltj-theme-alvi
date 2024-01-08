import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "two-columns",
    // language=HTML
    `
        <section class="tjs__sec-card-2col [[layout.class]] :: mobile :lg: desktop">
            <div class="tjs__sec-card-2col--container [[layout.container]]">
                <div class="row :: d-flex gap-5 :lg: gap-0">
                    <div class="tjs__sec-card-2col--col-start tjs__section-text p-4 p-lg-5 :: col-12 :lg: col-[[layout.cols]]">
                        <slot></slot>
                    </div>
                    <div class="tjs__sec-card-2col--col-end image-side :: col-12 :lg: col-[[12 - layout.cols]] ">
                        <slot data-select="img:not([data-two-columns-ignore]), .children > *, .children > .section-hr.aside, .aside"></slot>
                    </div>
                </div>
            </div>
        </section>
    `,
    {
        cols: 6,
        container: 'container',
    },
    {
    }
);
