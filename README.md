A deep rework of [brandonongzy's custom css](https://github.com/brandonongzy/tomato-css). 
It's an attempt to re-implement AdvancedTomato's look and feel on vanilla Tomato firmware (i.e. css only). Includes 
* custom-drawn controls 
* svg-based icons
* uniform alignment and indents across all the pages. 
* uniform text styles
* css-only animation for spinners, etc. 

Tampermonkey script is provided to make graphs dynamically resizable.  


## Screenshots
Light Theme
![Screenshot](https://raw.githubusercontent.com/tsg2k2/tomato-css/master/light.png)

## Installation

### Using init script

#### 1. Upload script
1. Navigate to __Administration__ > __Scripts__
2. Choose __WAN Up__
3. Paste the contents of [tomato_wanup_light](https://github.com/theredhood13/tomato-css/blob/master/tomato_wanup_light)
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
