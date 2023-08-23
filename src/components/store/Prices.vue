<template>
    <div class="prices">
        <h2>Тарифы</h2>
        <div class="blocks">
            <div class="item"
                 v-for="(item) in items"
                 :key="item.id"
            >
                <div class="header">
                    <h3>{{ item.header }}</h3>
                    <span class="price">
                        {{ item.price }}
                        <span>$</span>
                    </span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Quis nostrud exercitation ullamco</li>
                    <li>Exercitation ullamco</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Excepteur sint occaecat excepteur sint occaecat</li>
                    <li>Sed ut perspiciatis unde omnis</li>
                </ul>
                <span>
                    <router-link to="/log-in">Больше
                        <i class="fa-solid fa-arrow-right"></i>
                    </router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Prices",
    data() {
        return {
            items: [
                {id: 1, header: 'Free', price: 0},
                {id: 2, header: 'Plus +', price: 10},
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/components/store/styles/prices.scss";
</style>