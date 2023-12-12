import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "ribbon-col",
    // language=HTML
    `
        <div class="tjs-ribbon__col :: col-12 tjs-ribbon__col-border-y :md: col-4 tjs-ribbon__col-border-x tjs-ribbon__col-content-padding-x">
            <slot></slot>
            <div class="divider-bottom :: :md: d-none"></div>
        </div>
    `,
    {},
    {}
);

Joda.registerTemplate(
    "ribbons",
    // language=HTML
    `
        <section class="tjs-ribbon container-fluid :: :md: border-bottom">
            <div class="container">
                <div class="row">
                    <slot data-select=":scope > .children > *" data-child-layout="use: #ribbon-col"></slot>
                </div>
            </div>
        </section>
    `,
    {},
    {}
);
