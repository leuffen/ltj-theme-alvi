import "./../src/_embed.scss";

import {MicxFormmailFacade} from "@micx/lib-js";
import {initLoader} from "@leuffen/liscom-loader";
import "@leuffen/liscom-loader/index.scss";
(new MicxFormmailFacade).observe();
initLoader()
