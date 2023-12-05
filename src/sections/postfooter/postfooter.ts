import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "postfooter",
    // language=HTML
    `
        <section class="tjs-postfooter container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <slot data-replace></slot>
                    </div>
                </div>
            </div>
        </section>
    `,
    {},
    {
        onAfterConnectedCallback: (element: HTMLElement) => {
            const paragraph = element.querySelector("p");
            if (paragraph) {
                paragraph.innerText = paragraph.innerText.replace('{year}', new Date().getFullYear().toString());
            }
        }
    }
);
