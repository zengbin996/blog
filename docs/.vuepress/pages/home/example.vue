<template>
  <div class="foreign-exchange">
    <div class="other-banner">
      <div class="other-banner-text">
        <h1>{{ $t('acts') }}</h1>
        <p>Promotion Activity</p>
      </div>
    </div>
    <div class="active-list">
      <template v-if="activityList.length > 0">
        <div v-for="item in activityList" :key="item.url" class="activity_item" @click="goBack(item.url)">
          <div class="item-left">
            <img :src="item.imgUrl" />
          </div>
          <div class="item-right">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-time">
              <span>{{ item.remarks }}</span>
            </div>
          </div>
        </div>
      </template>
      <!-- 空数据状态 -->
      <div v-show="isNoData" class="no-data">
        <img src="../assets/images/new_images/noData.png" />
        <p style="text-align: center; font-size: 16px; margin-top: 30px">
          {{ $t('lessmore') }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { getFindAllActivity } from '@/api/info';
export default {
  name: 'ActiveList',
  data() {
    return {
      activityList: [],
      isNoData: false,
      ipflag: '1',
    };
  },
  watch: {
    '$i18n.locale': {
      handler(n, o) {
        this.activityList = [];
        if (n === 'zh') {
          this.ipflag = '1';
        } else if (n === 'en') {
          this.ipflag = '5';
        } else if (n === 'tw') {
          this.ipflag = '4';
        }
        this.getActivityList();
      },
    },
  },
  mounted() {
    if (this.$i18n.locale === 'zh') {
      this.ipflag = '1';
    } else if (this.$i18n.locale === 'en') {
      this.ipflag = '5';
    } else if (this.$i18n.locale === 'tw') {
      this.ipflag = '4';
    }
    this.getActivityList();
  },
  methods: {
    getActivityList() {
      getFindAllActivity({
        type: '26',
        languageidentification: this.getLangF(),
        region: this.ipflag,
        brandId: 2,
      }).then(async res => {
        if (res.IsSuccess) {
          if (res.Data.length > 0) {
            this.activityList = res.Data;
            this.isNoData = false;
          } else {
            this.isNoData = true;
          }
        } else {
          this.isNoData = false;
        }
      });
    },
    goBack(url) {
      const reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
      const href = url.replace(reg, url);
      window.open(href, '_blank');
    },
    getLangF() {
      let flag = '';
      if (this.$i18n.locale === 'zh') {
        flag = '1';
      } else if (this.$i18n.locale === 'en') {
        flag = '2';
      } else if (this.$i18n.locale === 'tw') {
        flag = '3';
      }
      return flag;
    },
  },
};
</script>
<style scoped lang="less">
@import './activeList.less';
</style>
