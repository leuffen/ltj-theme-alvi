import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "navbar",
    // language=HTML
    `
        <nav
            class="tjs-navbar :: :sm: sm :md: md :lg: lg :xl: xl"
        >
            <div class="container d-flex justify-content-between">
                <slot data-select=".brand"></slot>
                <slot data-select=".navbar-main"></slot>

                <button class="toggle outer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <rect y="11" width="24" height="2" rx="1"/>
                        <rect y="4" width="24" height="2" rx="1"/>
                        <rect y="18" width="24" height="2" rx="1"/>
                    </svg>
                </button>
            </div>

            <div class="mobile-nav">
                <div class="mobile-nav__top">
                    <slot data-copy data-select=".brand"></slot>

                    <button class="toggle inner">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <rect y="11" width="24" height="2" rx="1"/>
                            <rect y="4" width="24" height="2" rx="1"/>
                            <rect y="18" width="24" height="2" rx="1"/>
                        </svg>
                    </button>
                </div>
                <slot data-copy data-select=".navbar-main ul"></slot>
            </div>
        </nav>
    `,
    {},
    {
        onAfterConnectedCallback: (el: HTMLElement) => {
            const attributes = {
                open: "open",
                scrolled: "scrolled"
            }

            const outerToggle = el.querySelector<HTMLButtonElement>(".toggle.outer");
            const innerToggle = el.querySelector<HTMLButtonElement>(".toggle.inner");
            const mobileLinks = el.querySelectorAll<HTMLAnchorElement>(".mobile-nav ul a");

            if (outerToggle) {
                outerToggle.addEventListener("click", () => {
                    if (el.hasAttribute(attributes.open)) {
                        el.removeAttribute(attributes.open);
                    } else {
                        el.setAttribute(attributes.open, "");
                    }
                });
            }

            if (innerToggle) {
                innerToggle.addEventListener("click", () => {
                    el.removeAttribute(attributes.open);
                });
            }

            mobileLinks.forEach(link => {
                link.addEventListener("click", () => {
                    el.removeAttribute(attributes.open);
                });
            })

            window.addEventListener("scroll", () => {
                const prenav = el.querySelector(".tjs-prenav");
                const threshold = prenav?.scrollHeight ?? 60;
                if (window.scrollY > threshold) {
                    el.setAttribute(attributes.scrolled, "")
                } else {
                    el.removeAttribute(attributes.scrolled)
                }
            })

            window.addEventListener("resize", () => {
                if (window.innerWidth > 992) {
                    el.removeAttribute(attributes.open);
                }
            });
        }
    }
);
