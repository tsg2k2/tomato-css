A deep rework of [brandonongzy's custom css](https://github.com/brandonongzy/tomato-css). 
It's an attempt to re-implement AdvancedTomato's look and feel on vanilla Tomato firmware (i.e. css only). Includes 
* uniform panel-based UI
* custom-drawn controls 
* svg-based icons in main menu, on all buttons, and some panel titles (embedded, no external dependencies)
* uniform alignment and indents across all the pages. 
* uniform text styles
* multi-column for wide monitors (needs script below )
* css-only animation for spinners
* parametrized to make different accent color easy to apply, etc. 


Optional Tampermonkey (![Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en), ![Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)) scripts are provided:
 * ![script](https://github.com/tsg2k2/tomato-css/raw/master/release/FreshTomatoGraphResizer.user.js) to make graphs dynamically resizable.  
 * [script](https://github.com/tsg2k2/tomato-css/raw/master/release/FreshTomatoProgressBarEnabler.user.js) to add live progress bars on the overview page. Note that only https://192.168.1.1/ or http://freshtomato/ are @included by default
 * [script](https://github.com/tsg2k2/tomato-css/raw/master/release/ColumnEnabler.user.js) to allow tiles to be placed in multiple columns.  Note that only https://192.168.1.1/ or http://freshtomato/ are enabled by default; some pages are excluded.


## Screenshots

Light Theme - Default - Overview

![Screenshot](https://raw.githubusercontent.com/tsg2k2/tomato-css/master/light.png)

Light Theme - Blue - Basic

![Screenshot](https://raw.githubusercontent.com/tsg2k2/tomato-css/master/light-basic-blue.png)

Light Theme - Red - Graphs

![Screenshot](https://raw.githubusercontent.com/tsg2k2/tomato-css/master/light-traffic-red.png)



## Installation

### Using init script

#### 1. Upload script
1. Navigate to __Administration__ > __Scripts__
2. Choose __WAN Up__
3. Paste the contents of [tomato_wanup_light](https://github.com/tsg2k2/tomato-css/blob/master/tomato_wanup_light)
4. Save changes

#### 2. Enable Custom CSS
1. Navigate to __Administration__ > __Admin Access__
2. Change color scheme to __custom.css__
3. Save changes and reboot router
4. You may need to erase your brower's cache before the new UI appears.

### Using SSH

#### 1. Upload Custom CSS over SSH
1. Enable SSH deamon in __Administration__ > __Admin Access__
2. Connect to router over SSH
3. Create folder __wwwext__ in __/var/__
4. Upload custom.css file into __/var/wwwext/__

#### 2. Enable Custom CSS
1. Navigate to __Administration__ > __Admin Access__
2. Change color scheme to __custom.css__
3. Save changes and reboot router
4. You may need to erase your brower's cache before the new UI appears.

_After every reboot, this needs to be performed again. Router will automatically remove custom.css file after reboot_
