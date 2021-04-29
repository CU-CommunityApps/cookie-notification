# cookie-notification
This is the cookie notification used in Privacy CRS's site.

This uses the purecookie notification snippet which can be found here: 
https://www.cssscript.com/cookie-consent-popup-purecookie/

It's been tweaked to use Cornell branding colors and approved messaging. To alter, open the purecookie.js file and make modifications.

Implementing in WordPress:

1) Add the purecookie.js to the js folder in the theme
2) Add the purecookie.css to the css folder or add contents into existing styles
3) Enqueue the js and css files in functions.php as you would normally

Implementing in Drupal:

1) Add the purecookie.js to the js folder in the theme
2) Add the purecookie.css to the css folder or add contents into existing styles
3) Enqueue the css and js files in the theme's libraries.yml file (example cwd_privacy_office.libraries.yml)
