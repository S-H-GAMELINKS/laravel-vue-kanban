import Vue from 'vue/dist/vue.esm'
import VueKanban from 'vue-kanban'
import Kanban from './components/Kanban.vue'

Vue.use(VueKanban)

const app = new Vue({
    el: ".kanban",
    components: {
        Kanban
    }
})