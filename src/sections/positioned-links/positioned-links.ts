import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "positioned-links",
    // language=HTML
    `
        <section class="tjs-positioned-links container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <slot data-replace></slot>
                        <slot data-select="p a" data-replace data-child-class="alvi-btn outline grey large uppercase d-inline-flex mt-4"></slot>
                    </div>
                    <div class="col-12 col-md-6 mt-5 mt-md-0">
                        <div class="tjs-positioned-links__image-container">
                            <slot data-select="img" data-replace></slot>
                            <slot data-select="li > a" data-replace></slot>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    {},
    {
        onAfterConnectedCallback: (element: HTMLElement) => {
            const anchors = element.querySelectorAll("a");
            anchors.forEach(anchor => {
                const href = anchor.getAttribute("href");
                const url = new URL(href, location.origin);
                const top = url.searchParams.get("top");
                const bottom = url.searchParams.get("bottom");
                const left = url.searchParams.get("left");
                const right = url.searchParams.get("right");

                if (top) {
                    anchor.style.top = top;
                }
                if (bottom) {
                    anchor.style.bottom = bottom;
                }
                if (left) {
                    anchor.style.left = left;
                }
                if (right) {
                    anchor.style.right = right;
                }

                url.searchParams.delete("x");
                url.searchParams.delete("y");

                anchor.setAttribute("href", url.toString());
            });
        }
    }
);
