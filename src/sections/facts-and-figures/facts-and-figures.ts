import { Joda } from '@leuffen/jodastyle';

Joda.registerTemplate("facts-and-figures",
    // language=HTML
    `
        <section class="tjs-facts-and-figures :: :md: md">
            <div class="container">
                <div class="row justify-content-center">
                    <div class=":: col-10 :md: col-12">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </section>
    `
);
