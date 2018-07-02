# vue-hyb-notification


# Demo

[Demo page](https://jiuyekafei.github.io/vue-hyb-notification) 



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
	},
	methods : {
		ccc (){
			alert('callback')
		},
		send(time){
			this.$notify({ type : 'warning' ,title : 'title' ,content : 'content' });
			// or
			this.$notify({ title : 'title' ,content : 'content' ,duration : 2500 });
			// or
			this.$notify({ title : 'title' ,content : 'content' ,isautoclose : true});
			//or
			this.$notify({ type : "warning" ,title : "title" ,content : [{ text : "content" ,fn : this.ccc } ,{ text : "other message" }] ,duration : 2500 });
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
content  Array  
```
* duration 
```
duration(disappear time)   default  2500
```
* isautoclose
```
isautoclose(Disappear automatically)   true or false  , default false
```
* type
```
type   msg or error or success or warning  ,default no
```
# License

[The MIT License](http://opensource.org/licenses/MIT)
