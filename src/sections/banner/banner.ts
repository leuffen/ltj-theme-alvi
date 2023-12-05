import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "banner",
    // language=HTML
    `
        <section class="tjs-banner py-5 container-fluid">
            <div class="container">
                <div class="row">
                    <div class="d-none tjs-banner__image d-flex align-items-center :: col-12 mb-5 :md: col-3 justify-content-center mb-0">
                        <slot data-select="img" data-replace></slot>
                    </div>
                    <div class=":: col-12 :md: col-9">
                        <slot data-replace></slot>
                        <slot data-select="a" data-replace data-child-class="alvi-btn outline white uppercase d-inline-flex mt-4"></slot>
                    </div>
                </div>
            </div>
        </section>
    `,
    {},
    {
        // TODO: Find a solution to show/hide the image conditionally using joda-framework
        onAfterConnectedCallback: function (element) {
            const imageContainer = element.querySelector(".tjs-banner__image");
            const image = element.querySelector(".tjs-banner__image img");

            if (image) {
                imageContainer.classList.remove("d-none");
            }
        }
    }
);
