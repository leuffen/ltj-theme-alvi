import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("card",
    // language=HTML
    `
        <div class="tjs-card :: col-12 :md: col-4">
            <div class="tjs-card__content">
                <slot data-select="img"></slot>
                <div class="tjs-card__content__text">
                    <slot></slot>
                </div>
            </div>
        </div>
    `
);
Joda.registerTemplate(
    "cards",
    // language=HTML
    `
        <section class="tjs-cards container-fluid">
            <div class="container">
                <slot data-replace></slot>
                <div class="tjs-cards__cards row">
                    <slot data-select=":scope > .children > *"  data-child-layout="use: #card"></slot>
                </div>
            </div>
        </section>
    `,
    {},
    {}
);
