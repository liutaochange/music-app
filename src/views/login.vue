<template>
 <div class="body">
   <div class="headerTop">
     <div class="go_back" @click="goBack">
       <img src="../../static/images/go_back.png" alt="图片" />
     </div>
     <span>登录</span>
   </div>
   <div class="login-body">
     <div>
       <mu-text-field hintText="手机号" type="text" icon="phone" v-model.trim="phone"/><br/>
       <mu-text-field hintText="密码" type="password" icon="comment" v-model.trim="password"/><br/>
     </div>
     <div>
       <mu-raised-button label="登录" class="raised-button" secondary @click="handleClick"/>
     </div>
   </div>
 </div>
</template>
<script>
  import { setItem } from 'utils/store.js'
  import { login } from '../api/index.js'
  import { USERKEY } from 'api/config.js'
  export default{
    data () {
      return {
        phone: '',
        password: '',
        model: 12,
        status: ''
      }
    },
    methods: {
      handleClick: function () {
        var _this = this
        let regPhone = /^1[3456789]\d{9}$/
        let options = {
          id: 'my-toast',
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 1500,
          mode: 'override',
          transition: 'slide-down'
        }
        if (_this.phone === '') {
          _this.$toast('手机号不能为空', options)
          return false
        } else if (!regPhone.test(_this.phone)) {
          _this.$toast('手机号不合规则', options)
          return false
        } else if (_this.password === '') {
          _this.$toast('密码不能为空', options)
          return false
        } else {
          login(_this.phone, _this.password).then(res => {
            if (res.status === 200) {
              setItem(USERKEY, JSON.stringify(res.data.i))
              _this.$router.go(-1)
            }
          })
        }
      },
      goBack: function () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/common.less";
  .login-body{
    width: 100%;
    margin: 30px 0 20px 0;
    .raised-button{
      width: 80%;
      display: block;
      margin: 20px auto;
    }
    .mu-text-field{
      width: 90% !important;
    }
    .mu-text-field-content{
      width: 100% !important;
    }
  }
  #my-toast .et-top{
    top: 70px !important;
  }
</style>
