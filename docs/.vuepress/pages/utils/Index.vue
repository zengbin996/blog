<template>
  <div>
    <h1>运营管理工具</h1>
    <div v-if="!showContent">
      <label for="password">Please enter the password:</label>
      <input type="password" v-model="password" id="password" />
      <button @click="checkPassword">Submit</button>
    </div>
    <div v-if="showContent">
      <UploadFile></UploadFile>
    </div>
  </div>
</template>

<script>
import UploadFile from './upload-file.vue';
import uploadFile from './upload-file.vue';

export default {
  data() {
    return {
      password: '',
      showContent: true,
    };
  },
  methods: {
    checkPassword() {
      // Replace this with your actual password validation logic
      if (this.password === '000') {
        this.showContent = true;
      } else {
        alert('Incorrect password');
      }
    },
  },
  components: { UploadFile },
};
</script>
