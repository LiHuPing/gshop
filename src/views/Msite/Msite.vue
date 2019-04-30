<template>
  <section class="msite">
    <!--首页头部-->
    <TopTitle :title="address.name">
      <router-link slot="search" class="header_search" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>

      <router-link slot="login" class="header_login" to="/profile">
        <span class="header_login_text">登录|注册</span>
      </router-link>
    </TopTitle>

    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categoryArr.length>0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(pages,index) in categoryArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="item in pages" :key="item.id">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>{{item.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!-- 附件的商家 -->
    <ShopList/>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import TopTitle from "../../components/TopTitle/TopTitle.vue";
import ShopList from "../../components/ShopList/ShopList.vue";
export default {
  components: {
    TopTitle,
    ShopList
  },

  mounted() {
    this.$store.dispatch("getCategories");
    new Swiper(".swiper-container", {
      loop: true,
      // 分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  computed: {
    //
    ...mapState(["address", "categories"]),
    categoryArr() {
      const { categories } = this;
      const max = 8;
      let pages = [];
      let pageArr = [];
      categories.forEach((item, index) => {
        pageArr.push(item);
        if (pageArr.length === max) {
          pages.push(pageArr);
          pageArr = [];
        }
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl';

.msite {
  width: 100%;

  .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;

    .icon-sousuo {
      font-size: 25px;
      color: #fff;
    }
  }

  .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);

    .header_login_text {
      color: #fff;
    }
  }

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }
}
</style>

