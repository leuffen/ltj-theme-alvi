import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "navbar",
    // language=HTML
    `
        <nav
            class="tjs-navbar"
        >
            <div class="container d-flex :: :md: justify-content-between">
                <slot data-select=".brand"></slot>
                <slot data-select=".navbar-main"></slot>
            </div>
        </nav>
    `,
    {},
    {}
);
