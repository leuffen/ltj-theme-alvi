import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "header-center",
    // language=HTML
    `
        <section class="tjs-header-center :: :sm: sm :xl: xl">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="tjs-header-center__content :: col-12 :md: col-10">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </section>
    `,
    {},
    {}
);
