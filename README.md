
# Publitio jQuery SDK

---
### Description

Simple jQuery SDK for [Publitio API](https://publit.io/)

---

### Requirements

 This SKD is dependent on **jQuery** and **CryptoJS**.
 For obvious reasons it needs to be loaded **after** jQuery and CryptoJS, otherwise it won't work. 

---

### Instalation

##### Using npm: 

```shell

$ npm install publitio_jquery_sdk --save

```

##### Using yarn:

```

$ yarn add publitio_jquery_sdk

```

---
 
### Usage

```html

<!-- Your jQuery script-->
<script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
<!-- Your CryptoJS CDN script -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js"></script>
<!-- Or if you use the npm package for CryptoJS
<script src="./node_modules/crypto-js/crypto-js.js"></script> -->
<!-- Include Publitio jQuery Plugin script-->
<script src="node_modules/publitio_jquery_sdk/dist/publitio.js"></script>

```

```javascript

$(document).ready(() => {

	// xxxx => YOUR API_KEY
	// yyyy => YOUR API_SECRET
	$.publitio.init('xxxx', 'yyyy')

})
```

Sample api call to list files: 

```javascript

// list files
$.publitio.call('/files/list', 'GET', { offset: '0', limit: '10' })
	.then((data) => { console.log(data) })
    .catch((error) => { console.log(error) })

```

See **`examples.js`** file for full list of available classes, methods and options, or check the official docs on [Publitio Docs](https://publit.io/docs)

---
