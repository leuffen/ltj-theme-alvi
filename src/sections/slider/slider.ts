import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate("slider-item",
    // language=HTML
    `
        <div class="col-12 tjs-slider-item">
            <slot data-select="img"></slot>
            <div class="tjs-slider-item__content">
                <slot></slot>
            </div>
        </div>
    `
);
Joda.registerTemplate(
    "slider",
    // language=HTML
    `
        <section class="tjs-slider container">
            <slot></slot>
            <div class="arrow left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4,9.88,10.81,5.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14,11.29a1,1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0,15.4,9.88Z"/></svg>
            </div>
            <div class="arrow right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4,9.88,10.81,5.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14,11.29a1,1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0,15.4,9.88Z"/></svg>
            </div>
            <div class="tjs-slider__items">
                <slot data-select=":scope > .children > *"  data-child-layout="use: #slider-item"></slot>
            </div>
        </section>
    `,
    {},
    {
        onAfterConnectedCallback: function (element) {
            const arrowLeft = element.querySelector(".arrow.left");
            const arrowRight = element.querySelector(".arrow.right");
            const itemsContainer = element.querySelector(".tjs-slider__items");

            function scroll(direction: 1 | -1): void {
                const imageWidth = itemsContainer.querySelector(".tjs-slider-item").scrollWidth;
                itemsContainer.scroll({
                    left: itemsContainer.scrollLeft + (imageWidth * direction),
                    behavior: "smooth"
                });
            }

            arrowLeft.addEventListener("click", function () {
                scroll(-1);
            });
            arrowRight.addEventListener("click", function () {
                scroll(1);
            });
        }
    }
);
