<template>
    <div class="card">
        <div class="card_inner" :class="{'is-flipped': isFlipped}" @click="onToggleFlipCard">
            <div class="card_face card_face--front">
                <div class="card_content"/>
            </div>
            <div class="card_face card_face--back">
                <div class="card_content" :style="{backgroundImage: `url(${require('@/assets/'+ imgBackFaceUrl)})`}"/>
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
.card {
    display: inline-block;
    margin-right: 1rem;
    margin-bottom: 1rem;
    width: 90px;
    height: 120px;
}
.card_inner{
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
}
.card_inner.is-flipped{
    transform: rotateY(-180deg);
}
.card_face{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.2);
}
.card_face--back{
    background-color: var(--light);
    transform:  rotateY(-180deg);
}
.card_face--front .card_content {
    background: url("../assets/images/20.png") no-repeat center center;
    height: 100%;
    width: 100%;
    background-size: 40px 40px;
}
.card_face--back .card_content {
   background-size: contain;
   background-position: center center;
   background-repeat: no-repeat;
   height: 100%;
   width: 100%;
}
</style>
<script>
export default {
    props:{
        card :{
            type:[String, Number, Array, Object],
        },
        imgBackFaceUrl:{
            type: String,
            required: true,
        }
    },
    data(){
        return {
            isFlipped: false,
        }
    },
    methods:{
        onToggleFlipCard(){
            console.log('hello');
            this.isFlipped= !this.isFlipped

        }
    }
}
</script>