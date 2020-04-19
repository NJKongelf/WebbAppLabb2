Vue.component('dices', {
    props: {
        value: Number,
        isSelected: Boolean
    },
    template: '\
        <button :class="`dice_${this.value}`" v-on:click="$emit(\'select\')"></button>'
});






var vm = new Vue({
        el: '#app',
        data: {
            dices: [
                {id: 1, value: Math.floor(Math.random() * 6) + 1,  isSelected: false},
                {id: 2, value: Math.floor(Math.random() * 6) + 1,  isSelected: false},
                {id: 3, value: Math.floor(Math.random() * 6) + 1,  isSelected: false},
                {id: 4, value: Math.floor(Math.random() * 6) + 1,  isSelected: false},
                {id: 5, value: Math.floor(Math.random() * 6) + 1,  isSelected: false}
            ]
        },
            methods: {}
    });