<template>
    <div class="slider">
        <h2>Не знаете с чего начать?</h2>
        <p>Программы предлагают ежедневные рекомендации в интерактивном календаре</p>
        <div class="blocks" :style="'transform: translateX(' + translate + 'px)'">
            <div class="item" v-for="item in items" :key="item.id">
                <h3>{{ item.header }}</h3>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <a href=""><i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
        <div class="buttons">
            <div class="back" @click="moveSlider('back')">
                <i class="fa-solid fa-arrow-right fa-rotate-180"></i>
            </div>
            <div class="next" @click="moveSlider('next')">
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Slider",
    data() {
        return {
            items: [
                {id: 1, header: 'Видео тренировки'},
                {id: 2, header: 'Программа курса'},
                {id: 3, header: 'Тарифы'},
                {id: 4, header: 'Полный доступ'},
                {id: 5, header: 'Лучшая команда'},
                {id: 6, header: 'Хорошие тренера'},
            ],
            translate: 0,
            itemWidth: 0,
        }
    },
    mounted() {
        this.itemWidth = document.querySelector('.item').offsetWidth;
    },
    methods: {
        moveSlider(value) {
            let currentWindowWidth = document.querySelector('.container').clientWidth;
            let maxVisibleItems = Math.floor(currentWindowWidth / (this.itemWidth + 30));
            
            let maxTranslate = -((this.itemWidth + 30) * (this.items.length - maxVisibleItems));
            
            if (window.innerWidth > 1500 || window.innerWidth <= 320) {
                maxTranslate = -((this.itemWidth + 30) * (this.items.length - 1 - maxVisibleItems));
            }

            if (value === 'next') {
                this.translate -= this.itemWidth + 30;
            }

            if (value === 'back') {
                this.translate += this.itemWidth + 30;
            }
    
            if (this.translate >= 0) {
                this.translate = 0;
            } else if (this.translate <= maxTranslate) {
                this.translate = maxTranslate;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/components/store/styles/slider.scss";
</style>