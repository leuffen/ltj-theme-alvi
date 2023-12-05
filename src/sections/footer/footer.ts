import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("footer-col",
    // language=HTML
    `
        <div class="col-12 col-md-4 col-lg-3 tjs-footer-col">
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
                <div class="col-12 col-lg-3 ps-0 mb-4">
                    <slot data-select="img" data-replace></slot>
                </div>
                <slot data-select=":scope > .children > *"  data-child-layout="use: #footer-col"></slot>
            </div>
        </footer>
    `,
    {},
    {}
);
