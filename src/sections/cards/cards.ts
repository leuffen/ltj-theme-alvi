import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("card",
    // language=HTML
    `
        <div class="tjs-card :: [[layout.colClassSm]] :md: [[layout.colClassMd]] :lg: [[layout.colClassLg]]">
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
                <slot></slot>
                <div class="tjs-cards__cards row mt-5">
                    <slot
                        data-select=":scope > .children > *"
                        data-child-layout="use: #card; colClassSm: [[layout.colClassSm]]; colClassMd: [[layout.colClassMd]]; colClassLg: [[layout.colClassLg]]"
                    ></slot>
                </div>
            </div>
        </section>
    `,
    {
        colClassSm: "col-12",
        colClassMd: "col-12",
        colClassLg: "col-4",
    },
    {}
);
