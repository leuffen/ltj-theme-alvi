import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "tabs",
    // language=HTML
    `
        <section class="tjs-tabs :: :md: medium">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="tjs-tabs__tabs d-flex gap-2">
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
            const activeClass = "active";
            const sections = element.querySelectorAll<HTMLElement>(".children > section");
            const tabContainer = element.querySelector<HTMLDivElement>(".tjs-tabs__tabs");

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
                const id = tab.getAttribute('data-tab-id');
                const parent = tab.closest('section');
                const tabContentIdElem = parent.querySelector(`.children section[data-tab-id="${id}"]`);
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

            // Build Tabs
            sections.forEach((section, i) => {
                const tabName = section.getAttribute('data-title');
                const tabId = tabName?.toLowerCase().replace(/ /g, '-');
                section.setAttribute('data-tab-id', tabId);
                if (tabName) {
                    const tab = document.createElement('a');
                    tab.setAttribute('href', '#');
                    tab.setAttribute('data-tab-id', tabId);
                    tab.innerText = tabName;
                    if (i === 0) {
                        tab.classList.add(activeClass);
                    }
                    tabContainer?.appendChild(tab);
                }
            });

            // Add Event Listeners
            const tabs = element.querySelectorAll<HTMLAnchorElement>(".tjs-tabs__tabs a");
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
