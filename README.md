# vue-hyb-notification


# Demo

[Demo page](https://jiuyekafei.github.io/vue-hyb-notification/index.html) 



# Installation
# npm

```html
$ npm install vue-hyb-notification
```


# Requirements

- [Vue.js](https://github.com/vuejs/vue) `^2.0.0`

```html
import notification from 'vue-hyb-notification'
Vue.use(notification);


<template>
	<div id="app">
		<span @click="send"></span>
	</div>
</template>

<script>
export default {
	name: 'App',
	data (){
		return {}
	},
	methods : {
		send(time){
			this.$notify({ title : 'title' ,content : 'content' ,isautoclose : false});
			// or
			this.$notify({ title : 'title' ,content : 'content' ,duration : 2500 });
		}
	}
}
</script>
```


# API  
* title  
```
title   title
```
* content  
```
content  content 
```
* duration 
```
duration(disappear time)   default  2500
```
* isautoclose
```
isautoclose(Disappear automatically)   true or false  , default true
```

# License

[The MIT License](http://opensource.org/licenses/MIT)