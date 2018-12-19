<template>
  <div class="card" @click="handleClick">
    <div class="box">
      <div class="tab">info</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'info',
    props: {
        handleClick: Function,
    },
}
</script>

<style lang="scss" scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}

.card {
    background-color: lightblue;
    display: flex;
    width: 70%;
    height: 70vh;
    margin: auto;
    padding: 10px;
    border-radius: 3px;
}
.box {
    text-align: center;
    background-color: blue;
    width: 100%;
    position: relative;
    border-radius: 10px;
    img {
        height: 50px;
    }
}

.tab {
    position: absolute;
    background-color: lightblue;
    padding: 10px;
    width: 15%;
    border-radius: 5px 5px 0;
    top: -40px;
    left: 150px;
}
</style>
