<template>
  <div class="concent">
    <div class="concent_text" v-for="(item,index) in concents">
      <div class="concent_top">
        <div class="concent_top_left">
          <img :src="item.img" alt>
        </div>
        <div class="concent_top_center">
          <a href>{{item.name}}</a>
        </div>
        <div class="concent_top_right">
          <b>{{item.watch}}</b>
        </div>
      </div>
      <div class="concent_mid">
        <img :src="item.video" alt>
      </div>
      <div class="concent_btm">
        <p>{{item.title}}</p>
      </div>
      <div class="concent_bottom">
        <span>{{item.zan}}</span>
        <span>{{item.say}}</span>
        <span>{{item.collect}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Concent",
  data() {
    return {
      concents: [
        {
          img:
            "https://wicdn.xiaohongchun.com/cover/BFD50E8D9216B911.jpg-avatars3x.jpg",
          name: "路遥",
          watch: "+关注",
          video:
            "https://wicdn.xiaohongchun.com/cover/9D4DD1BA22E35ECE.jpg-big2x.jpg",
          title: "一根皮筋，瘦锁骨！",
          zan: "31",
          say: "1",
          collect: "收藏"
        },
        {
           img:
            "https://wicdn.xiaohongchun.com/cover/BFD50E8D9216B911.jpg-avatars3x.jpg",
          name: "路遥",
          watch: "+关注",
          video:
            "https://wicdn.xiaohongchun.com/cover/9D4DD1BA22E35ECE.jpg-big2x.jpg",
          title: "一根皮筋，瘦锁骨！",
          zan: "31",
          say: "1",
          collect: "收藏"
        },
        {
           img:
            "https://wicdn.xiaohongchun.com/cover/BFD50E8D9216B911.jpg-avatars3x.jpg",
          name: "路遥",
          watch: "+关注",
          video:
            "https://wicdn.xiaohongchun.com/cover/9D4DD1BA22E35ECE.jpg-big2x.jpg",
          title: "一根皮筋，瘦锁骨！",
          zan: "31",
          say: "1",
          collect: "收藏"
        },{
           img:
            "https://wicdn.xiaohongchun.com/cover/BFD50E8D9216B911.jpg-avatars3x.jpg",
          name: "路遥",
          watch: "+关注",
          video:
            "https://wicdn.xiaohongchun.com/cover/9D4DD1BA22E35ECE.jpg-big2x.jpg",
          title: "一根皮筋，瘦锁骨！",
          zan: "31",
          say: "1",
          collect: "收藏"
        }
      ]
    };
  }
};
</script>


<style scoped lang="scss">
.concent{
  height: 62.5rem;
  overflow: auto;
}
.concent_text{
  padding: 0 0.9375rem;
  width: 23.4375rem;
  height: 24.3125rem;
  margin-top: 2.8rem;
  border-bottom: 0.625rem solid #efefef;
}
.concent_top {
  width: 21.5625rem;
  height: 4.21875rem;
  display: flex;
  align-items: center;
}
.concent_top_left > img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 0.9375rem;
}
.concent_top_center {
  width: 215px;
  height: 1.2rem;
}
.concent_top_center > a {
  font-size: 0.875rem;
  width: 13.4375rem;
  display: block;
  color: #191919;
  white-space: nowrap;
}
.concent_top_right {
  width: 4.0625rem;
  height: 1.4375rem;
  background: rgb(249, 41, 90);
  border-radius: 0.625rem;
  text-align: center;
}
.concent_top_right > b {
  line-height: 1.4375rem;
  color: #f8f8f8;
  font-size: 0.75rem;
  font-weight: 400;
}
.concent_mid {
  width: 21.5625rem;
  height: 13.808125rem;
}
.concent_mid > img {
  width: 100%;
  height: 100%;
}
.concent_btm {
  width: 21.5625rem;
  height: 1.25rem;
  margin-top: 0.875rem;
  margin-bottom: 0.875rem;
}
.concent_btm > p {
  font-size: 0.875rem;
  line-height: 20px;
  color: #010101;
}
.concent_bottom {
  width: 23.4375rem;
  height: 41px;
  border-top: 1px solid #ebe9e9;
  display: flex;
  align-items: center;
}
.concent_bottom > span {
  padding-left: 0;
  display: inline-block;
  width: 125px;
  height: 19.2px;
  border-right: 1px solid #ebe9e9;
  vertical-align: middle;
  color: #999;
  font-size: 0.875rem;
  text-align: center;
}
</style>
