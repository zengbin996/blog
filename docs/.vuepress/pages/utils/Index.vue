<template>
  <div>
    <h1>工具列表</h1>

    <div>
      <h2>上传文件获取在线链接</h2>

      <input type="file" @change="uploadFile" ref="input" />

      <div v-if="url">
        <span>{{ url }}</span> <button>复制地址</button>
      </div>
    </div>
  </div>
</template>

<script>
import COS from 'cos-js-sdk-v5';
import { v4 as uuidv4 } from 'uuid';

const cos = new COS({
  SecretId: 'AKID5zd1way5vTklUw71e070dz5zcx1nJXVB',
  SecretKey: 'QaT5SZPyGI3XkgLjpfDUTBdoENGsDH3Z',
});

export default {
  data() {
    return {
      url: '',
    };
  },
  methods: {
    //上次文件
    uploadFile() {
      const file = this.$refs.input.files[0];
      const key = `${uuidv4()}.${file.name.split('.').pop()}`; //文件目录及文件名称

      cos.putObject(
        {
          Bucket: 'blog-zengbin-1258070316', //填入您自己的存储桶，必须字段
          Region: 'ap-chengdu', //存储桶所在地域，必须字段
          Key: key, //存储在桶里的对象键，必须字段
          Body: file, //上传文件对象，必须字段
        },
        (err, data) => {
          if (err) return console.log('上传失败');

          this.url = 'https://' + data.Location;
        }
      );
    },
  },
};
</script>
