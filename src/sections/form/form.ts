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
            const CHECKED = "checked";

            const checkboxes: HTMLInputElement[] = [];
            const radioNodeLists: RadioNodeList[] = [];

            // @ts-ignore: It has an iterator; it works in Firefox, Chrome, Safari
            for (const formElement of form.elements) {
                // In Chrome and Safari, the radio node lists can be found directly in the form elements
                if (formElement instanceof RadioNodeList) {
                    if (!radioNodeLists.includes(formElement)) {
                        radioNodeLists.push(formElement);
                    }
                }

                // Alternative way to get the radio node lists for Firefox.
                if (formElement instanceof HTMLFormElement && formElement.type === 'radio') {
                    const radioNodeList = form.elements[formElement.name];
                    if (radioNodeList instanceof RadioNodeList) {
                        if (!radioNodeLists.includes(radioNodeList)) {
                            radioNodeLists.push(radioNodeList);
                        }
                    }
                }

                if (formElement instanceof HTMLInputElement && formElement.type === "checkbox") {
                    const alreadyAdded = checkboxes.find(checkbox => checkbox.id === formElement.id);
                    if (!alreadyAdded) {
                        checkboxes.push(formElement);
                    }
                }
            }

            radioNodeLists.forEach(list => {
                list.forEach((radioButton: HTMLInputElement) => {
                    radioButton.addEventListener("change", () => {
                        if (radioButton.checked) {
                            list.forEach(btn => (btn as HTMLInputElement).removeAttribute(CHECKED));
                            radioButton.setAttribute(CHECKED, CHECKED);
                        }
                    });
                });
            });

            checkboxes.forEach(checkbox => {
                const label = form.querySelector(`label[for="${checkbox.id}"]`);
                const span = document.createElement("span");
                span.innerHTML = label.innerHTML;

                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                const size = 36;
                svg.setAttribute('viewBox', '0 0 24 24');
                svg.setAttribute('width', `${size}`);
                svg.setAttribute('height', `${size}`);
                svg.innerHTML = '<g fill-rule="nonzero"><path d="m14.9203298 1.2464705c-.0609896-.54890683.3345454-1.04332562.8834522-1.10431526.5489069-.06098965 1.0433256.33454537 1.1043153.8834522l1.4142136 12.72792206c.0658184.5923659-.3978725 1.1104315-.9938838 1.1104315h-5.6568542c-.5522848 0-1-.4477152-1-1 0-.5522847.4477152-1 1-1h4.5395892z" transform="matrix(.707 .707 -.707 .707 9.55 -8.056)"></path><path d="m17 13.5000015c0-.5522847.4477152-1 1-1 .5522847 0 1 .4477153 1 1v5.6250026c0 1.5878167-1.2871811 2.8749959-2.8749987 2.8749959h-11.25000263c-1.58781758 0-2.87499867-1.2871792-2.87499867-2.8749961l.00000232-11.25001036c0-1.58781542 1.28718005-2.87499354 2.87499719-2.87499354 4.03194167.00000316 4.03194167.00000316 6.09375549.00000379.5522847 0 1 .44771525 1 1s-.4477153 1-1 1c-2.0618152-.00000063-2.0618152-.00000063-6.09375633-.00000379-.48324748 0-.87499635.39174829-.87499635.87499374l-.00000232 11.25001036c0 .4832466.39174991.8749959.87499867.8749959h11.25000263c.4832488 0 .8749987-.3917493.8749987-.8749959z"></path></g>';

                label.innerHTML = "";
                label.appendChild(svg);
                label.appendChild(span);

                checkbox.addEventListener("change", () => {
                    if (checkbox.checked) {
                        checkbox.setAttribute(CHECKED, CHECKED);
                    } else {
                        checkbox.removeAttribute(CHECKED);
                    }
                });
            });
        }
    }
);
