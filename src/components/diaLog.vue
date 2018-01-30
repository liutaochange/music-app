<template>
  <div>
    <mu-dialog :open="show" title="提示">
      {{dialogMsg}}
      <mu-flat-button label="确定" slot="actions" primary @click="close"/>
    </mu-dialog>
  </div>
</template>

<script>
  export default {
    props:{
      show:{
        type: Boolean,
        default: true
      },
      dialogMsg:{
        type:String,
        default:''
      }
    },
    methods: {
      close () {
        this.$emit('update:show', false)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
