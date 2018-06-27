<template>
	<div id="app">
		<p>标题 : <input type="text" v-model="title"></p>
		<p>内容 : <input type="text" v-model="content"></p>
		<p>自动关闭时间 : <input type="text" v-model="time"></p>
		<p>消息类型：<select v-model="selected">
			<option>no</option>
			<option>msg</option>
			<option>error</option>
			<option>success</option>
			<option>warning</option>
		</select></p>
		<button @click="aaa">增加一个不能自动关闭的消息</button>
		<button @click="bbb">增加一个自动关闭的消息</button>
		<button @click="ddd">增加一个自动关闭的消息 并且点击内容有回调函数</button>
	</div>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			title : '标题',
			content : '内容',
			time : 3000,
			selected : 'no'
		}
	},
	methods : {
		ccc(){
			alert('callback');
		},
		aaa(){
			this.$notify({ type : this.selected ,title : this.title ,content : this.content ,duration : this.time });
		},
		bbb(){
			this.$notify({ type : this.selected ,title : this.title ,content : this.content ,isautoclose : true });
		},
		ddd(){
			this.$notify({ type : this.selected ,title : this.title ,content : this.content ,duration : this.time ,fn : this.ccc});
		}
	}
}
</script>

<style lang="scss">
	button{
		display : block;
		margin-bottom : 10px;
	}
</style>
