<template>
  <div class="content">
    <div class="section flex-row">

      <div class="flex-row margin-right-max"> 
        <div :class="className"> {{ data.type }} </div>
        <div> {{ data.name }} </div> 
      </div>

      <div class="target">
        {{ data.link }}
      </div>

    </div>

    <div class="section">
      <div class="text">
        {{ data.description }}
      </div>
    </div>

    <div class="section">
      <div class="medium-title padding-bottom-10">Headers</div>
      <div class="padding-10 background-gray border-radius-5">
        <TargetTable 
          v-bind:data="headers"
        />
      </div>
    </div>

    <div class="section">
      <div class="medium-title padding-bottom-10">Body</div>
      <div class="padding-10 background-gray border-radius-5">
        <TargetTable 
          v-bind:data="body"
        />
      </div>
    </div>

    <div class="section">
      <div class="medium-title padding-bottom-10">Response</div>
      <TargetJSON 
        v-bind:json="json"
      />
    </div>
  </div>
</template>

<script>
  import TargetTable from '../implements/TargetTable.vue'
  import TargetJSON from '../implements/TargetJSON.vue'
  export default {
    name: 'Content',
    props: {
      data: {
        type: Object,
        default: {}
      }
    },
    components: {
      TargetTable,
      TargetJSON
    },
    data () {
      return {
        headers: null,
        body: null  
      }
    },
    computed: {
      className: function () {
        return `${this.data.className} text-size-15 margin-right`;
      },
      json: function () {
        return this.data.json(
          `
          {
            ok: true,
            admin: {
              id: "INTEGER",
              name: "STRING",
              email: "STRING",
              password: "STRING BCRYP",
              superAdmin: "BOOLEAN",
              createdAt: "DATE",
              updatedAt: "DATE"
            },
            token: "STRING TOKEN"
          }
          `
        )
      }
    },
    created () {
      this.data.setHeader('Content-Type', 'application/json')
      this.data.setBody('email', 'name@email.com');
      this.data.setBody('password', 'password123');

      this.headers = this.data.headers;
      this.body = this.data.body;
    }
  }
</script>