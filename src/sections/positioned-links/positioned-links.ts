import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "positioned-links",
    // language=HTML
    `
        <div class="tjs-positioned-links">
            <slot data-select="img"></slot>
            <slot data-select="li > a"></slot>
        </div>
    `,
    {},
    {
    }
);
