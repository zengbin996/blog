<template>
  <el-form :model="form" label-width="auto" label-position="top" style="max-width: 600px" class="p-3">
    <el-form-item label="Account">
      <el-input v-model="formData.account" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="formData.password" />
    </el-form-item>
    <el-form-item label="Code">
      <el-input v-model="formData.code" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading">Submit</el-button>
      <el-button type="primary" @click="onSend" :loading="loading">SendCode</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
function generateRandomPhoneNumber() {
  var phoneNumber = '13'; // 手机号码以"13"开头

  // 生成剩余的9位数字
  for (var i = 0; i < 9; i++) {
    phoneNumber += Math.floor(Math.random() * 10); // 生成0到9之间的随机数字
  }

  return phoneNumber;
}

const a = `
||||

`;

const formData = ref({
  account: generateRandomPhoneNumber(),
  password: 'www123',
  code: '',
});

const loading = ref(false);

const onSend = () => {
  loading.value = true;
  validateSendCode({
    mobile: formData.value.account,
    ticket: '',
    randstr: '',
  }).then(res => {
    loading.value = false;
    showToast(res.data.Data);
  });
};

const onSubmit = () => {
  loading.value = true;

  postRegister({
    mobile: formData.value.account,
    pwd: formData.value.password,
    code: formData.value.code,
    fromType: '1',
    type: '2',
    issueCountry: '1',
    clientid: 'adb7675fb4c53138c05dd480242ece73',
    ip: '127.0.0.1',
    appcode: '',
    fromurl: '',
  }).then(res => {
    loading.value = false;

    showFailToast(res.data.Data);
  });
};
</script>
