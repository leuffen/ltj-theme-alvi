import { Joda } from '@leuffen/jodastyle';

Joda.registerTemplate("card-2",
    // language=HTML
    `
        <div class="tjs-card-2">
            <div class="tjs-card-2--inner">
                <div>
                    <slot></slot>
                </div>
                <div>
                    <slot data-select="a"></slot>
                </div>
            </div>
        </div>
    `
);
