import {Vue} from 'vue-property-decorator';
import 'bootstrap';
import BackOfficeApp from './BackOfficeApp.vue';

import 'swiper/dist/css/swiper.css';

new Vue({
    render: h => h(BackOfficeApp),
}).$mount('#app');

