Vue.component('dices', {
    props: {
        value: Number,
        isSelected: Boolean
    },
    template: '\
        <button :class="`dice_${this.value}`" v-on:click="$emit(\'select\')"></button>'
});
Vue.component('pointsRound', {
    props: {
        value: String,
    }
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
            ],
            throwdice:0,
            totalpoint:0,
            roundsofGame:0,
            roundsPoint:[],
        },
            methods: {

                turnthedice: function () {
                    if (this.throwdice < 3)
                        this.dices.forEach(function (entry) {
                            if(!entry.isSelected){
                                entry.value=Math.floor(Math.random() * 6) + 1;
                            }
                        });
                    this.throwdice++;},
                newGame:function(){
                    location.reload()
                },
                checkdices:function(){
                    var sum = 0;
                    this.dices.forEach(function (entry){
                        if(entry.isSelected) {
                           sum += entry.value;
                        }
                    })

                    vm.totalpoint += sum;
                    vm.turn_around_bright_eyes();
                    vm.roundsPoint.push({id:vm.roundsofGame.valueOf()
                        ,value:sum+' points in round '+vm.roundsofGame.valueOf()})
                },
                turn_around_bright_eyes: function(entry){
                    if (this.roundsofGame<12){
                        vm.throwdice=0;
                        vm.roundsofGame++;
                    this.dices.forEach(function(entry){
                        entry.value = Math.floor(Math.random() * 6) + 1;
                        entry.isSelected = false;

                    })
                    }else if (this.roundsofGame>=12){
                        vm.throwdice=4;
                    alert('Wow you have now earned '+this.totalpoint+' points total');
                    }
                }
            },
        });