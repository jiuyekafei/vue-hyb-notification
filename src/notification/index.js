import Vue from 'vue'
import notificationMain from './notification'
const NotificationConstructor = Vue.extend(notificationMain);

let instance ,seed = 1 ,instances = [];

const Notification = (options)=>{
	const id = `notification_${seed++}`;

	options = Object.assign({
		title : '',
		content : [],
		type : '',
		top : 10,
		isautoclose : false,
		duration : 2500,
		fn : ''
	} ,options);

	options.onClose = ()=>{
		Notification.onClose(id);
	}

	options.isautoclose && setTimeout(()=>{
		Notification.onClose(id);
	},options.duration);

	instance = new NotificationConstructor({
		data : options
	});
	instance.vm = instance.$mount();
	document.body.appendChild(instance.vm.$el);

	instance.visible = true;
	instance.id = id;
	instance.dom = instance.vm.$el;
	instance.dom.style.zIndex = 2000*1 + seed;

	if(instances.length > 0){
		let top = options.top;
		instances.forEach((item)=>{
			top += item.vm.$el.offsetHeight + options.top;
		});
		instance.posTop = top;
		instance.dom.style.top = `${top}px`;
	}else{
		instance.posTop = options.top;
		instance.dom.style.top = `${options.top}px`;
	}

	instances.push(instance);
	return instance.vm;
}

Notification.onClose = (id)=>{
	let index = -1 ,removeHeight = 0;
	instances.filter((item ,i)=>{
		if(item.id==id){
			index = i;
			item.visible = false;
			removeHeight = item.vm.$el.offsetHeight;
		}
	});
	if(index==-1) return;
	instances.splice(index ,1);
	for(let i = index; i < instances.length; i++){
		instances[i].dom.style.top = parseInt(instances[i].dom.style.top) - (removeHeight + instances[i].top) + 'px';
	}
}

Notification.closeAll = ()=>{
	for(let i = 0; i < instances.length; i++){
		instances[i].close();
	}
}

const notification = {
	install (Vue ,options){
		Vue.prototype.$notify = Notification;
	}
}

export default notification;