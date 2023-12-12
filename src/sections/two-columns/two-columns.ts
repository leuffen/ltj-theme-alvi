import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "two-columns",
    // language=HTML
    `
        <section class="tjs-two-columns container-fluid">
            <slot data-select="h3"></slot>
            <div class="container">
                <div class="row :: mobile :md: desktop">
                    <slot data-select=":scope > .children > *" data-replace data-child-class=":: col-12 :md: col-6"></slot>
                </div>
            </div>
        </section>
    `,
    {},
    {
        onAfterConnectedCallback: (element: HTMLElement) => {
            const h3Slot = element.querySelector("slot[data-select='h3']");
            const firstColumn = element.querySelector(".row :first-child");

            // We need to select the heading separately and move it into the right place
            if (h3Slot && firstColumn) {
                firstColumn.prepend(h3Slot)
            }
        }
    }
);
