This is a fork of mReXiTuS's custom css. Changed to a dark theme for use with Fresh Tomato.


Custom CSS for older routers running Tomato Firmware (that are unsupported by AdvancedTomato firmware). Design inspired by [AdvancedTomato](https://advancedtomato.com/).

![Screenshot](http://tomato-design.dot26.sk/tomato-design-screenshot.png)

## Installation

### Using init script

#### 1. Upload script
1. Navigate to __Administration__ > __Scripts__
2. Choose __WAN Up__
3. Paste content of __tomato_wanup.sh__ script
4. Save changes

#### 2. Enable Custom CSS
1. Navigate to __Administration__ > __Admin Access__
2. Change color scheme to __custom.css__
3. Save changes and reboot router

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

_After every reboot, this needs to be performed again. Router will automatically remove custom.css file after reboot_
