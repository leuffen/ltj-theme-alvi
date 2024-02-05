import { Joda } from '@leuffen/jodastyle';

Joda.registerTemplate("cards-2",
    // language=HTML
    `
        <section class="tjs-cards-2 :: :md: md">
            <div class="gradient [[layout.gradient ? '' : 'd-none']]"></div>
            <div class="container">
                <div class="row">
                    <slot data-select=".children > *" data-child-class="tjs-card-2 :: col-12 :md: col-6"></slot>
                </div>
            </div>
        </section>
    `
);
