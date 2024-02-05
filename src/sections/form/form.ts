import {Joda} from "@leuffen/jodastyle";

Joda.registerTemplate(
    "form",
    // language=HTML
    `
        <section class="tjs-form :: sm :md: md">
            <slot></slot>
        </section>
    `,
    {},
    {
        onAfterConnectedCallback: (el: HTMLElement) => {
            const form = el.querySelector("form");

            let radioNodeLists: RadioNodeList[] = [];
            for (let element of form.elements) {
                const el = form.elements[element.name];
                if (el instanceof RadioNodeList) {
                    if (!radioNodeLists.includes(el)) {
                        radioNodeLists.push(el);
                    }
                }
            }

            radioNodeLists.forEach(list => {
                list.forEach((radioButton: HTMLInputElement) => {
                    radioButton.addEventListener("change", () => {
                        if (radioButton.checked) {
                            list.forEach(btn => (btn as HTMLInputElement).removeAttribute('checked'));
                            radioButton.setAttribute('checked', 'checked');
                        }
                    });
                });
            });
        }
    }
);
