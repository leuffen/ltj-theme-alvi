import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "tabs",
    // language=HTML
    `
        <section class="tjs-tabs">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="tjs-tabs__tabs d-flex gap-2">
                            <slot data-select="li > a[data-tab]"></slot>
                        </div>
                    </div>
                </div>
            </div>
            <slot></slot>
        </section>
    `,
    {},
    {
        onAfterAllTemplatesConnectedCallback: (element: HTMLElement) => {
            const tabs = element.querySelectorAll<HTMLAnchorElement>(".tjs-tabs__tabs a");
            const activeClass = "active";

            function deactivateTabsAndSections(): void {
                const sections = element.querySelectorAll(".children > section");
                sections.forEach(child => {
                    child.classList.remove(activeClass);
                });
                tabs.forEach(tab => {
                    tab.classList.remove(activeClass);
                });
            }

            function activateTabAndSection(tab: HTMLAnchorElement): void {
                const id = tab.getAttribute('href');
                const parent = tab.closest('section');
                const tabContentIdElem = parent.querySelector(`.children ${id}`);
                if (tabContentIdElem) {
                    const tabContentSection = tabContentIdElem.closest('section');
                    if (tabContentSection) {
                        tabContentSection.classList.add(activeClass);
                        tab.classList.add(activeClass);
                    }
                }
            }

            function isActive(tab: HTMLAnchorElement): boolean {
                return tab.classList.contains(activeClass);
            }

            tabs.forEach(tab => {
                if (isActive(tab)) {
                    activateTabAndSection(tab);
                }

                tab.addEventListener("click", (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    if (isActive(tab)) {
                        return;
                    }

                    deactivateTabsAndSections();
                    activateTabAndSection(tab);
                });
            })
        }
    }
);
