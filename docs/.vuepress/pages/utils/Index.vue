<template>
  <div>
    <h1>工具列表</h1>

    <div>
      <h2>上传文件获取在线链接</h2>

      <input type="file" @change="uploadFile" ref="input" multiple />

      <div v-if="url">
        <div>
          <img :src="url" alt="" style="width: 300px" />
        </div>
        <span>{{ url }}</span> <button @click="() => copyTextToClipboard(url)">复制地址</button>
      </div>
    </div>

    <button @click="deleteFiles('/')">删除文件</button>
  </div>
</template>

<script>
import COS from 'cos-js-sdk-v5';
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      url: '',
    };
  },
  methods: {
    //上传文件
    uploadFile() {
      const file = this.$refs.input.files[0];
      const key = `${uuidv4()}.${file.name.split('.').pop()}`; //文件目录及文件名称

      cos.putObject(
        {
          Bucket: 'blog-dist-1258070316', //填入您自己的存储桶，必须字段
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

    //复制
    copyTextToClipboard(text) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    },

    //删除

    deleteFiles(marker) {
      cos.getBucket(
        {
          Bucket: 'blog-dist-1258070316' /* 填入您自己的存储桶，必须字段 */,
          Region: 'ap-chengdu' /* 存储桶所在地域，例如ap-beijing，必须字段 */,
          Prefix: 'a/',
          Marker: marker,
          MaxKeys: 1000,
        },
        function (listError, listResult) {
          if (listError) return console.log('list error:', listError);
          var nextMarker = listResult.NextMarker;
          var objects = listResult.Contents.map(function (item) {
            return { Key: item.Key };
          });
          cos.deleteMultipleObject(
            {
              Bucket: 'blog-dist-1258070316' /* 填入您自己的存储桶，必须字段 */,
              Region: 'ap-chengdu' /* 存储桶所在地域，例如ap-beijing，必须字段 */,
              Objects: objects,
            },
            function (delError, deleteResult) {
              if (delError) {
                console.log('delete error', delError);
                console.log('delete stop');
              } else {
                console.log('delete result', deleteResult);
                if (listResult.IsTruncated === 'true') deleteFiles(nextMarker);
                else console.log('delete complete');
              }
            }
          );
        }
      );
    },
  },
};
</script>
