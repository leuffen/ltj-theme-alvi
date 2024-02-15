import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "navbar",
    // language=HTML
    `
        <nav
            class="tjs-navbar :: :md: md :lg: lg :xl: xl"
        >
            <div class="container d-flex justify-content-between">
                <slot data-select=".brand"></slot>
                <slot data-select=".navbar-main"></slot>

                <button class="toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <rect y="11" width="24" height="2" rx="1"/>
                        <rect y="4" width="24" height="2" rx="1"/>
                        <rect y="18" width="24" height="2" rx="1"/>
                    </svg>
                </button>
            </div>
        </nav>
    `,
    {},
    {
        onAfterConnectedCallback: (el: HTMLElement) => {
            const toggle = el.querySelector<HTMLButtonElement>(".toggle");

            if (toggle) {
                toggle.addEventListener("click", () => {
                    const OPEN = "open";
                    if (el.hasAttribute(OPEN)) {
                        el.removeAttribute(OPEN);
                    } else {
                        el.setAttribute(OPEN, "");
                    }
                });
            }
        }
    }
);
