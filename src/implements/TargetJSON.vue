<template>
  <pre class="code">
    {{ json }}
  </pre>
</template>

<script>
  export default {
    name: 'TargetJSON',
    props: {
      json: {
        type: String,
        default: ''
      }
    }
  }
</script>

