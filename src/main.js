// LIBS
import Vue 								from "vue";
import { sync }						from "vuex-router-sync";
import VueGun 						from "vue-gun";

// STORE
import store 							from "./vuex/store.js";

// ROUTER
import router 						from "./router/router.js";

// Combine
sync(store, router);

Vue.use(VueGun, {
	peers: [location.origin + "/gun"]
});

// CORE
import App 								from "./components/App.vue";

// INSTANCE
new Vue({
	el: "#app",
	render: h => h(App),
	router,
	store,
});
