import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "map",
    // language=HTML
    `
        <section class="tjs-map">
            <div class="tjs-map__image-wrapper">
                <slot data-select="img" data-child-class=""></slot>

                <button class="alvi-btn">
                    Mit Google Maps anzeigen
                </button>
            </div>
            <slot data-select="object"></slot>
        </section>
    `,
    {},
    {
        onAfterConnectedCallback: (el: HTMLElement) => {
            const btn = el.querySelector("button");

            btn.addEventListener("click", () => {
                const object = el.querySelector("object");
                const img = el.querySelector("img");
                const src = object.getAttribute("data-src");
                const iframe = document.createElement("iframe");

                iframe.setAttribute("height", img.scrollHeight.toString());
                iframe.setAttribute("src", src);
                iframe.setAttribute("allowfullscreen", "");
                iframe.setAttribute("loading", "lazy");
                iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
                iframe.style.setProperty("border", "0");

                object.replaceWith(iframe);
                img.classList.add("d-none");
                btn.classList.add("d-none");
            });
        }
    }
);
