<template>
    <div :class="['container', theme]">
        <app-header></app-header>
        <button @click="toggleTheme">Change Theme</button>
        <br>
        <br>
        <div class="col-xs-12">
            <transition name="slide">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import AppHeader from './components/Header.vue';

export default {
    name: 'app',
    components: {
        AppHeader
    },
    computed: {
        ...mapState(['theme'])
    },
    created() {
        this.$store.dispatch('initTheme');
            this.$store.dispatch('initStocks');
    },
    methods: {
        toggleTheme() {
        this.$store.dispatch('toggleTheme');
        }
    }
}
</script>

<style>
body {
    padding: 30px;
}
.container.light {
    background-color: white;
    color: black;
}
.container.dark {
    background-color: black;
    color: white;
}
.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
}

@keyframes slide-in {
    from {
        transform: translateY(-30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-30px);
        opacity: 0;
    }
}
</style>
