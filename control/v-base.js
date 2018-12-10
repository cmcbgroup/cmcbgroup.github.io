
var app = new Vue({
	el: '#app',
	data() {
		return {
			h_menu: h_menu,
			v_menu: f_menu,
			p_title: '公司簡介',
			des: about_description,
			showPhoneMenu: false,
			show_sub_menu_index: false,
			isPhone: true
		}
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