import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("footer-col",
    // language=HTML
    `
        <div class="tjs-footer__col :: col-12 :md: col-4 tjs-footer__col-md :lg: col-3 tjs-footer__col-lg">
            <slot></slot>
        </div>
    `
);
Joda.registerTemplate(
    "footer",
    // language=HTML
    `
        <footer class="tjs-footer container">
            <div class=":: :md: row">
                <div class="ps-0 mb-4 :: col-12 :lg: col-3">
                    <slot data-select="img"></slot>
                </div>
                <slot data-select=":scope > .children > *"  data-child-layout="use: #footer-col"></slot>
            </div>
        </footer>
    `,
    {},
    {}
);
