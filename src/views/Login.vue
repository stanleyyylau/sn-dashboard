<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

</script>

<template>
  <div class="home">
    <div class="login-form">
      <form>
        <p class="input-wrap">
          <label for="user_login">用户名/手机号</label>
          <input type="text" name="user_login" class="text" />
        </p>
        <p class="input-wrap">
          <label for="user_pass">密码</label>
          <input type="text" name="user_pass" class="text" />
        </p>
        <p class="login-button">
          <input type="submit" value="登录" />
        </p>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  background-color: #084c3f;
  height: 100vh;
  padding-top: 100px;
}
.login-form {
  background-color: white;
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto;
}

.input-wrap {
  margin-bottom: 10px;
  label {
    display: block;
  }
}
</style>
