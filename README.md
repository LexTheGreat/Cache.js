# Cache.js | (c) 2015, 2016 LTG.
Cache.js, easy to use image cache'n

# Import
```html
<script src="Cache.js"></script>
```

# Doc
* Cache.getImage(string src) - > returns Image()
  * Gathers the image from memory and does not load it from file unless missing.
* Cache.updateImage(string src) - > returns boolean for fail/success
  * Re-Cache's items. If item is not found then it will add the image, but not get it.
* Cache.addImage(string src, optional boolean force) - > returns boolean for fail/success
  * Adds items. If item is found then it will force if true, otherwise it will fail. 

# License
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Cache.js</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LexTheGreat" property="cc:attributionName" rel="cc:attributionURL">LexTheGreat</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LexTheGreat/Cache.js" rel="dct:source">https://github.com/LexTheGreat/Cache.js</a>.<br />Permissions beyond the scope of this license may be available at the email of <a xmlns:cc="http://creativecommons.org/ns#" href="lexkymbeth@gmail.com" rel="cc:morePermissions">lexkymbeth@gmail.com</a>.
