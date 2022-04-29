/* Import all the font awesome goodness */
import { library } from '@fortawesome/fontawesome-svg-core'

// loads all the "solid" icons
import { fas } from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'

// loads only the "twitter" brand icon
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'

// add each of the imported icons into the app
library.add(fas); // can be a list of all the icons e.g. (fas, fab, faTwitter, etc)

// to use component based icons
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// to use class based icons
dom.watch();
