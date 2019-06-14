import {Vue} from 'vue-property-decorator';

import HelloWorld from './HelloWorld.vue';


new Vue({
    render: h => h(HelloWorld),
}).$mount('#app');

