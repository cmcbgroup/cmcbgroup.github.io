
var app = new Vue({
	el: '#app',
	data() {
		return pdata
	},
	mounted() {
		if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
			this.isPhone = false
		}
	},
	methods: {
		_showPhoneMenu() {
			this.showPhoneMenu = !this.showPhoneMenu
		},
		_showPhoneSubMenu(e, i, len) {
			if(i === this.show_sub_menu_index){
				this.show_sub_menu_index = false
			} else {
				this.show_sub_menu_index = i
			}
		}
	}
})