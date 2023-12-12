import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "richtext",
    // language=HTML
    `
        <section class="tjs-richtext container">
            <div class="row">
                <div class="col-12">
                    <slot></slot>
                </div>
            </div>
        </section>
    `,
    {},
    {}
);
