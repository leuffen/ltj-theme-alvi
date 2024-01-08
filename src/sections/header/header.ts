import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "header",
    // language=HTML
    `
        <section class="tjs-header :: :sm: sm :xl: xl">
            <slot data-select="img"></slot>
            <div class="tjs-header__fade [[layout.fade ? '' : 'd-none']]" style="background: [[layout.fade]]"></div>
            <div class="container">
                <div class="row">
                    <div class="tjs-header__content :: col-12 :md: col-8 :lg: col-6">
                        <slot></slot>
                        <slot data-select="a" data-child-class="alvi-btn draw-border large d-inline-flex :: mt-3 :md: mt-5"></slot>
                    </div>
                </div>
            </div>
        </section>
    `,
    {},
    {}
);
