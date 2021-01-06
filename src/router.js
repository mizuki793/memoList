import Vue from "vue";
import VueRouter from 'vue-router'
import Top from "./views/Top";
import Terms from "./views/Terms";
import NoPage from "./views/NoPage";

Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        name: "top",
        component:Top
    },
    {
        path: "/terms",
        name: "terms",  
        component:Terms
    },
    {
        path: "/*",
        name: "notfound",
        component:NoPage
    }
];

export default new VueRouter({
    mode: 'history',
    routes: routes
});