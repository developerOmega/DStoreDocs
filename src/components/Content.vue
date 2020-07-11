<template>
  <div class="content">
    <div class="section flex-row">

      <div class="flex-row margin-right-max"> 
        <div class="chip text-size-15 margin-right">TYPE</div>
        <div>name</div> 
      </div>

      <div class="target">
        /products/:id
      </div>

    </div>

    <div class="section">
      <div class="text">
        Description
      </div>
    </div>

    <div class="section">
      <div class="medium-title padding-bottom-10">Headers</div>
      <div class="padding-10 background-gray border-radius-5">
        <TargetTable />
      </div>
    </div>

    <div class="section">
      <div class="medium-title padding-bottom-10">Body</div>
      <div class="padding-10 background-gray border-radius-5">
        <TargetTable />
      </div>
    </div>

    <div class="section">
      <div class="medium-title padding-bottom-10">Response</div>
      <TargetJSON />
    </div>
  </div>
</template>

<script>
  import TargetTable from '../implements/TargetTable.vue'
  import TargetJSON from '../implements/TargetJSON.vue'
  export default {
    name: 'Content',
    components: {
      TargetTable,
      TargetJSON
    }
  }
</script>