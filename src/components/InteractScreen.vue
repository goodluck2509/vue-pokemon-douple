<template>
    <h1>Interact Component here...</h1>
    <card-flip v-for="(card,index) in cardsContext" 
    :key="index" 
    :imgBackFaceUrl="`images/${card}.png`" 
    :card="{index, value:card}"
    :ref="`carrd-${index}`"
    @onFlip="checkRule($event)"
    />
</template>
<script>

import CardFlip from "./CardFlip.vue"

export default {
    props:{
        cardsContext:{
            type: Array,
            default: function (){
             return [];
        }
        }
      
    },
    components:{
        CardFlip,
    },
    methods:{
        checkRule(card){
            if(this.rules.lengt === 2 ) return false;

            this.rules.push(card);

            if(this.rules.lengt === 2 && this.rules[0] === this.rules[1]){
                console.log('Test');
            }
            else if(this.rules.lengt === 2 && this.rules[0] !== this.rules[1]){
                console.log('test');

            }
            else return false;
        }
    }
}
</script>

