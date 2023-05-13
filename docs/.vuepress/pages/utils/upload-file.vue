<template>
  <div>
    <h2>OSS 管理</h2>

    <div>
      <h3>获取在线链接(点击图片即可复制地址)</h3>
      <input type="file" @change="uploadFile" ref="input" multiple />
      <ul v-if="filesUrl.length">
        <li v-for="item in filesUrl" style="display: inline-block">
          <img :src="item" :title="item" style="width: 300px" @click="() => copyTextToClipboard(item)" />
        </li>
      </ul>
    </div>

    <div>
      <h3>文件列表</h3>
      <button @click="getFiles()">获取文件</button>

      <ul v-if="allFile.length">
        <li v-for="item in allFile" style="display: inline-block">
          <img :src="item.Key" :title="item.Key" style="width: 300px" @click="() => copyTextToClipboard(item.Key)" />
        </li>
      </ul>
    </div>

    <div>
      <h3>网站发布</h3>
    </div>
  </div>
</template>

<script>
import COS from 'cos-js-sdk-v5';
import { v4 as uuidv4 } from 'uuid';

const Bucket = 'blog-zengbin-1258070316';
const Region = 'ap-chengdu';

export default {
  data() {
    return {
      filesUrl: [],

      allFile: [],
    };
  },
  methods: {
    //上传文件
    uploadFile() {
      const filesArray = [...this.$refs.input.files];
      filesArray.forEach((a) => {
        const key = `${uuidv4()}.${a.name.split('.').pop()}`; //文件目录及文件名称
        cos.putObject(
          {
            Bucket, //填入您自己的存储桶，必须字段
            Region, //存储桶所在地域，必须字段
            Key: key, //存储在桶里的对象键，必须字段
            Body: a, //上传文件对象，必须字段
          },
          (err, data) => {
            if (err) return console.log('上传失败');

            this.filesUrl.push('https://' + data.Location + '?imageMogr2/thumbnail/!5p');
          }
        );
      });
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
          Bucket,
          Region,
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
              Bucket,
              Region,
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

    //获取全部文件
    getFiles() {
      cos.getBucket(
        {
          Bucket,
          Region,
        },
        (err, data) => {
          if (err) return;

          data.Contents.forEach((item) => {
            item.Key =
              'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/' + item.Key + '?imageMogr2/thumbnail/!10p';
          });

          this.allFile = data.Contents;
        }
      );
    },
  },
};
</script>
