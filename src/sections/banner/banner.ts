import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "banner",
    // language=HTML
    `
        <section class="tjs-banner py-5 container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-3 d-flex align-items-center justify-content-md-center mb-5 mb-md-0 d-none tjs-banner__image">
                        <slot data-select="img" data-replace></slot>
                    </div>
                    <div class="col-12 col-md-9">
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
