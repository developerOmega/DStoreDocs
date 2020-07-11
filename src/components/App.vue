<template>
  <div class="container">
    <header>
      <nav class="background-black">
        <div class="logo bold-200"> API Documentation / DStore </div> 
      </nav>

      <div class="main">
        <Header />
      </div>
    </header>
    <div class="main grid-column">
      <div class="options column-3 flex-column">
        <div class="flex-row padding-10 space-between">
          <div class="chip green"> TYPE </div>
          <button class="text-size-12 link"> Guardar imagen </button>
        </div>

        <div class="flex-row padding-10 space-between">
          <div class="chip orange"> TYPE </div>
          <button class="text-size-12 link"> Name </button>
        </div>
      </div>

      <div class="column-7 padding-10">
        <Content 
          v-bind:data="adminLogin"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Content from './Content.vue'
  import Header from './Header.vue'

  import Post from '../js/components/Post.js'
  export default {
    name: 'App',
    components: {
      Content,
      Header
    },
    data () {
      return {
        requests: [
          {
            name: 'Admin login',
            link: '/api/v1/login/admin',
            description: 'Autenticar administrador'
          }
        ],
        adminLogin: null
      }
    },
    created () {
      this.adminLogin = new Post(this.requests[0].name, this.requests[0].link, this.requests[0].description)
    }
  }
</script>