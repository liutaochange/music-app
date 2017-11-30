<template>
  <div>
    <mu-dialog :open="dialog" title="提示" @close="close">
      {{msg}}
      <mu-flat-button slot="actions" @click="close" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="close" label="确定"/>
    </mu-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false
      }
    },
    props: ['msg','dialog'],
    methods: {
      open () {
        this.dialog = true
      },
      close () {
        this.dialog = false
      }
    }
  }
</script>
