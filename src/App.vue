<template>
  <div id="app">
    <home
      class="home"
      v-bind:class="{move: clicked.home}"
      :handleClick="handleClick.bind(this, 'home')"
    />
    <info
      class="info"
      v-bind:class="{move: clicked.info}"
      :handleClick="handleClick.bind(this, 'info')"
    />
    <contact
      class="contact"
      v-bind:class="{move: clicked.contact}"
      :handleClick="handleClick.bind(this, 'contact')"
    />
  </div>
</template>

<script>
import home from './components/home.vue'
import info from './components/info.vue'
import contact from './components/contact.vue'

export default {
    name: 'app',
    components: {
        home,
        info,
        contact,
    },
    data() {
        return {
            clicked: {
                info: false,
                contact: false,
                home: false,
            },
        }
    },
    methods: {
        handleClick(el) {
            this.clicked[el] = !this.clicked[el]
            switch (el) {
                case 'info':
                    this.clicked.contact = false
                    break
                case 'contact':
                    this.clicked.info = false
                    break
                default:
                    this.clicked.home = false
                    this.clicked.info = false
                    this.clicked.contact = false
            }
            this.clicked.info || this.clicked.contact
                ? (this.clicked.home = true)
                : (this.clicked.home = false)

            console.log(this.clicked[el])
        },
    },
}
</script>

<style lang='scss'>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: auto;
}
body {
    background-color: gray;
}
.home,
.info,
.contact {
    position: absolute;
    transition: z-index 0.1s, top 2s, left 2s;
}

.home {
    z-index: 1000;
    top: 75px;
    left: 10px;
    cursor: pointer;
    &.move {
        z-index: 0;
        top: 40px;
    }
}
.info {
    z-index: 600;
    left: 20px;
    top: 70px;
    cursor: pointer;
    &.move {
        z-index: 1000;
        left: 8px;
        top: 75px;
    }
}
.contact {
    z-index: 200;
    left: 30px;
    top: 65px;
    cursor: pointer;
    &.move {
        z-index: 1000;
        left: 8px;
        top: 75px;
    }
}

// @keyframes movecard {
//     from {
//         top: initial;
//         left: initial;
//         z-index: initial;
//     }
//     to {
//         top: 60px;
//         left: 8px;
//         z-index: 5;
//     }
// }
</style>
