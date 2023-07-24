<template>
  <div class="box">
    <div class="fix">
      <div class="div" @click="openAdd('https://twitter.com/MetaSecond_AI')">
        <img class="img1" src="../assets/image/icon1.png" />
      </div>
      <div class="div" @click="openAdd('https://discord.gg/6HhWJxfaDw')">
        <img class="img1" src="../assets/image/icon2.png" />
      </div>
      <div class="div" @click="openAdd('https://medium.com/@metasecond.ai')">
        <img class="img1" src="../assets/image/icon3.png" />
      </div>
    </div>
    <div class="head">
      <div class="left" @click="go('top')">
        <img alt="" class="img" src="../assets/image/img1.png" />
        MetaSecond.AI
      </div>
      <div class="right">
        <div class="item" @click="go('genesis')">Mint</div>
        <div class="item" @click="go('team')">Team</div>
        <div class="item" style="cursor: default">64AI + Gallery</div>
        <div
          class="item"
          @click="
            openAdd(
              'https://metasecond-ais-organization.gitbook.io/metasecond.ai/overview/about-metasecond.ai'
            )
          "
        >
          Docs
        </div>
        <div class="item itemChoose" style="cursor: default">
          Connect wallet
        </div>
      </div>
    </div>
    <div :class="show == false ? 'head2' : 'head3'">
      <div class="bbx">
        <div class="left" @click="go('top')">
          <img alt="" class="img" src="../assets/image/img1.png" />
          MetaSecond.AI
        </div>
        <div class="right2">
          <img
            v-if="show == false"
            alt=""
            class="img"
            src="../assets/image/phone/phoneIcon.png"
            @click="changeShow()"
          />
          <img
            v-if="show == true"
            alt=""
            class="img"
            src="../assets/image/phone/close.png"
            @click="changeShow()"
          />
        </div>
      </div>
      <div class="head-bbx" @click="go('sixth')">Mint</div>
      <div class="head-bbx" @click="go('second1')">Team</div>
      <div class="head-bbx">64AI + Gallery</div>
      <div
        class="head-bbx"
        @click="
          openAdd(
            'https://metasecond-ais-organization.gitbook.io/metasecond.ai/overview/about-metasecond.ai'
          )
        "
      >
        Docs
      </div>
      <div class="head-bbx2">Connect wallet</div>
      <div class="head-bbx3">
        <img
          alt=""
          src="../assets/image/phone/icon3.png"
          @click="openAdd('https://twitter.com/MetaSecond_AI')"
        />
        <img
          alt=""
          src="../assets/image/phone/icon1.png"
          @click="openAdd('https://discord.gg/6HhWJxfaDw')"
        />
        <img
          alt=""
          src="../assets/image/phone/icon2.png"
          @click="openAdd('https://medium.com/@metasecond.ai')"
        />
      </div>
    </div>
    <div id="top" class="top">
      <div class="cont">
        <div class="txt">MetaSecond.AI</div>
      </div>
    </div>
    <div class="second" id="second1">
      <div class="titleSecond">
        ABOUT
        <div class="span">METASECOND.AI</div>
      </div>
      <div class="cont2">
        <div class="cont-l">
          <div class="txt">
            <!--<span style="color: yellow"> {{heihei}}</span>-->
            MetaSecond.AI is an AI-driven multiverse platform that aims to
            transcend the boundaries of existing virtual worlds and create a
            digital universe where everything is interconnected both online and
            offline.
          </div>
        </div>
        <div class="cont-r">
          <img class="img" src="../assets/image/pic1.png" />
        </div>
      </div>
      <div class="cont">
        <div class="cont-l">
          <div class="title">ABOUT</div>
          <div class="titleS">METASECOND.AI</div>
          <div class="txt">
            MetaSecond.AI is an AI-driven multiverse platform that aims to
            transcend the boundaries of existing virtual worlds and create a
            digital universe where everything is interconnected both online and
            offline.
          </div>
        </div>
        <div class="cont-r">
          <img class="img" src="../assets/image/pic1.png" />
        </div>
      </div>
    </div>
    <div id="team" class="thirdly">
      <div class="h4">
        <div class="icon">Team</div>
        <img class="th-img" src="../assets/image/down.png" />
      </div>
      <swiper
        class="swiper thirdly-box2"
        style="margin: 20px 0"
        :modules="modules"
        :loop="true"
        :autoplay="true"
        :pagination="{ clickable: true }"
      >
        <!-- {
          delay: 3000,
          disableOnInteraction: true,
        } -->
        <swiper-slide class="swiper-slide">
          <div class="team-content">
            <img src="../assets/image/phone/bgs5.png" width="355" alt="" />
            <div class="top-title">
              <span data-v-ddb72a93="">Damon</span
              ><span data-v-ddb72a93="">Founder</span>
            </div>
            <div class="bottom-desc">
              <span data-v-ddb72a93="">• IP & NFT Collector</span
              ><span data-v-ddb72a93="">• BTC Holder</span
              ><span data-v-ddb72a93="">• MIT Master's Degree</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide"
          ><div class="team-content">
            <img src="../assets/image/phone/bgs1.png" width="355" alt="" />
            <div class="top-title">
              <span data-v-ddb72a93="">Lsabella</span
              ><span data-v-ddb72a93="">Co-founder</span>
            </div>
            <div class="bottom-desc">
              <span data-v-ddb72a93="">• Cryptopunk Holder</span
              ><span data-v-ddb72a93="">• Diamond Collector</span
              ><span data-v-ddb72a93=""
                >• Majority Shareholder of VR Company</span
              >
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide"
          ><div class="team-content">
            <img src="../assets/image/phone/bgs2.png" width="355" alt="" />
            <div class="top-title">
              <span data-v-ddb72a93="">Olivia</span
              ><span data-v-ddb72a93="">CMO</span>
            </div>
            <div class="bottom-desc">
              <span data-v-ddb72a93="">• NFT Collector</span
              ><span data-v-ddb72a93="">• Web3 Marketing Officer</span
              ><span data-v-ddb72a93="">• Economics Researcher</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide"
          ><div class="team-content">
            <img src="../assets/image/phone/bgs3.png" width="355" alt="" />
            <div class="top-title">
              <span data-v-ddb72a93="">Hugo</span
              ><span data-v-ddb72a93="">Co-founder</span>
            </div>
            <div class="bottom-desc">
              <span data-v-ddb72a93="">• Artist</span
              ><span data-v-ddb72a93="">• Former BAYC Holder</span
              ><span data-v-ddb72a93="">• AI Algorithm Developer</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide"
          ><div class="team-content">
            <img src="../assets/image/phone/bgs4.png" width="355" alt="" />
            <div class="top-title">
              <span data-v-ddb72a93="">Luke</span
              ><span data-v-ddb72a93="">CBO</span>
            </div>
            <div class="bottom-desc">
              <span data-v-ddb72a93="">• NFT Collector</span
              ><span data-v-ddb72a93=""
                >• Former Top Luxury Brand Designer</span
              >
            </div>
          </div>
        </swiper-slide>
        <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </swiper>
      <div class="thirdly-box">
        <div
          class="thirdly-item"
          @mouseout="handOut(0)"
          @mouseover="handleHover(0)"
        >
          <img class="th-img" src="../assets/image/r1.png" />
          <div
            :class="positions == 0 || positions == -1675 ? 'noCover' : 'cover'"
          ></div>
          <div class="coverTxt">
            <div class="txt2">Founder</div>
            <div class="txt">Damon</div>
          </div>
          <div class="coverTxt-word">
            <div class="txt">
              <!--<p class="p">• IP & NFT Collector</p>-->
              <!--<p class="p">• BTC Holder</p>-->
              <!--<p class="p"> • MIT Master's Degree</p>-->
              • IP & NFT Collector <br />
              • BTC Holder <br />
              • MIT Master's Degree
            </div>
          </div>
        </div>
        <div
          class="thirdly-item"
          @mouseout="handOut(-335)"
          @mouseover="handleHover(-335)"
        >
          <img class="th-img" src="../assets/image/r2.png" />
          <div :class="positions == -335 ? 'noCover' : 'cover'"></div>
          <div class="coverTxt">
            <div class="txt2">Co-founder</div>
            <div class="txt">Isabella</div>
          </div>
          <div class="coverTxt-word">
            <div class="txt">
              • Cryptopunk Holder <br />• Diamond Collector <br />• Majority
              Shareholder of VR Company
            </div>
          </div>
        </div>
        <div
          class="thirdly-item"
          @mouseout="handOut(-670)"
          @mouseover="handleHover(-670)"
        >
          <img class="th-img" src="../assets/image/r3.png" />
          <div :class="positions == -670 ? 'noCover' : 'cover'"></div>
          <div class="coverTxt">
            <div class="txt2">CMO</div>
            <div class="txt">Olivia</div>
          </div>
          <div class="coverTxt-word">
            <div class="txt">
              • NFT Collector <br />• Web3 Marketing Officer <br />• Economics
              Researcher
            </div>
          </div>
        </div>
        <div
          class="thirdly-item"
          @mouseout="handOut(-1005)"
          @mouseover="handleHover(-1005)"
        >
          <img class="th-img" src="../assets/image/r4.png" />
          <div :class="positions == -1005 ? 'noCover' : 'cover'"></div>
          <div class="coverTxt">
            <div class="txt2">Co-founder</div>
            <div class="txt">Hugo</div>
          </div>
          <div class="coverTxt-word">
            <div class="txt">
              • Artist <br />• Former BAYC Holder <br />• AI Algorithm Developer
            </div>
          </div>
        </div>
        <div
          class="thirdly-item"
          @mouseout="handOut(-1340)"
          @mouseover="handleHover(-1340)"
        >
          <img class="th-img" src="../assets/image/r5.png" />
          <div :class="positions == -1340 ? 'noCover' : 'cover'"></div>
          <div class="coverTxt">
            <div class="txt2">CBO</div>
            <div class="txt">Luke</div>
          </div>
          <div class="coverTxt-word">
            <div class="txt">
              • NFT Collector <br />• Former Top Luxury Brand Designer
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fourthly">
      <div class="cont">
        <div class="txt">
          <img class="img" src="../assets/image/right1.png" />Partners
        </div>
      </div>
    </div>
    <div class="fifth">
      <div class="cont">
        <div class="txt">
          <img class="img" src="../assets/image/down.png" />Ecosystem
        </div>
        <div class="txt2">
          <div class="h2">
            I. An AI-driven intelligent aggregation ecosystem <br />for the
            multiverse
          </div>
          <div class="word">
            • MetaSecond.AI is a cross-chain comprehensive multiverse ecosystem
            that combines Metaverse, AI, DAO, Defi, Gamefi, and various Dapps
            application markets. It supports the collaborative development of
            community technology and various applications by leveraging a
            sustainable economic loop. <br />• AI NFT bridges the blockchain
            metaverse: AI customizes and learns based on the elements and skills
            between different metaverses, and AI NFTs can be traded among
            various metaverses to increase value circulation and value
            discovery.
          </div>
        </div>
        <div class="txt2-phone">
          <div class="h2">
            I. An AI-driven intelligent aggregation ecosystem <br />for the
            multiverse
          </div>
          <div class="word">
            • MetaSecond.AI is a cross-chain comprehensive multiverse ecosystem
            that combines Metaverse, AI, DAO, Defi, Gamefi, and various Dapps
            application markets. It supports the collaborative development of
            community technology and various applications by leveraging a
            sustainable economic loop.
          </div>
        </div>
        <div class="txt3-phone">
          <div class="word">
            • AI NFT bridges the blockchain metaverse: AI customizes and learns
            based on the elements and skills between different metaverses, and
            AI NFTs can be traded among various metaverses to increase value
            circulation and value discovery.
          </div>
          <div class="h2">II. Bridging the real and virtual worlds</div>
          <div class="word">
            • 64 Genesis AIs cover 64 fields, AI NFT merges the digital realm
            with reality, achieving interconnectivity of all things both online
            and offline. <br />• MetaSecond.AI will implement self-sovereign
            identities (SSI) that are digital identities linked to verification
            and authorization data used in the real-world (e.g., biometrics) and
            managed in a decentralized way.
          </div>
          <div class="h2">
            III. Decentralized Identity & 3D High-Fidelity Avatars
          </div>
          <div class="word" id="sixth">
            • Avatars form our digital representation in the Metaverse. Create
            your high-fidelity 3D with the most advanced AI engine.<br />
            • Blockchain-based DID avatars empower users to own and keep their
            valuable virtual identity & avatars across the Metaverse. Privacy &
            ZKP feature safeguards users' privacy in the virtual realm.
          </div>
          <div class="h2">Ⅳ. Immersive User Experience</div>
          <div class="word">
            • With Natural Language Processing (NLP), speech
            recognition,computer vision, translation, VR headsets, augmented
            reality (AR), extended reality (XR), and etc. Users are able to
            experience immersive environments within the metaverse.
          </div>
        </div>
        <div class="txt3">
          <div class="h2">II. Bridging the real and virtual worlds</div>
          <div class="word">
            • 64 Genesis AIs cover 64 fields, AI NFT merges the digital realm
            with reality, achieving interconnectivity of all things both online
            and offline. <br />
            • MetaSecond.AI will implement self-sovereign identities (SSI) that
            are digital identities linked to verification and authorization data
            used in the real-world (e.g., biometrics) and managed in a
            decentralized way.
          </div>
        </div>
        <div class="txt4">
          <div class="h2">
            III. Decentralized Identity & 3D High-Fidelity Avatars
          </div>
          <div class="word">
            • Avatars form our digital representation in the Metaverse. Create
            your high-fidelity 3D with the most advanced AI engine. <br />
            • Blockchain-based DID avatars empower users to own and keep their
            valuable virtual identity & avatars across the Metaverse. Privacy &
            ZKP feature safeguards users' privacy in the virtual realm.
          </div>
        </div>
        <div class="txt5" id="genesis2">
          <div class="h2">IV. Immersive User Experience</div>
          <div class="word">
            • With Natural Language Processing (NLP), speech
            recognition,computer vision, translation, VR headsets, augmented
            reality (AR), extended reality (XR), and etc. Users are able to
            experience immersive environments within the metaverse.
          </div>
        </div>
        <div id="genesis" class="txt6">
          Genesis AI<img class="img" src="../assets/image/down.png" />
        </div>
        <div class="txt7">
          <img class="img" src="../assets/image/bg8.png" />
        </div>
        <div class="txt8">
          Roadmap<img class="img" src="../assets/image/left1.png" />
        </div>
      </div>
    </div>
    <div class="sixth">
      <div class="cont">
        <div class="txt1">
          <p>1.1-NFT AI-Passcard genesis launch</p>
          <p>1.2-Genesis AI bot called MirrorSaga launch</p>
          <p>1.3-AI to Earn staking pool launch</p>
        </div>
        <div class="txt2">
          <p>2.1-Found MetaSecond Dao fundation for eco devs</p>
          <p>2.2-DeFi applications bristle in the house</p>
        </div>
        <div class="txt3">
          <p>3-AI algorithm optimization & Full node upgrade</p>
        </div>
        <div class="txt4">
          <p>4-64 AI&X bots launched on MetaSecond.AI</p>
        </div>
      </div>
    </div>
    <div class="seventh">
      <div class="cont">
        <div class="txt1">Join our community</div>
        <div class="txt2">
          <div
            class="txt"
            @click="openAdd('https://twitter.com/MetaSecond_AI')"
          >
            <img alt="" class="img" src="../assets/image/icons2.png" />
            <p style="display: flex; align-items: center; line-height: 21px">
              TWITTER
            </p>
          </div>
          <div class="txt" @click="openAdd('https://discord.gg/6HhWJxfaDw')">
            <img alt="" class="img" src="../assets/image/icons1.png" />
            <p style="display: flex; align-items: center; line-height: 21px">
              DISCORD
            </p>
          </div>
          <div
            class="txt"
            @click="openAdd('https://medium.com/@metasecond.ai')"
          >
            <img alt="" class="img" src="../assets/image/icons3.png" />
            <p style="display: flex; align-items: center; line-height: 21px">
              MEDIUM
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

// import 'swiper/css/scrollbar'

// export default {
//   name: "SwiperCom",
//   data() {
//     return {};
//   },
//   components: {
//     Swiper,
//     SwiperSlide,
//   },
//   setup() {
//     return {
//       onSwiper,
//       onSlideChange,
//       prevEl,
//       nextEl,
//       navigation,
//       modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
//     };
//   },
// };
</script>
<script setup>
import {
  onBeforeUnmount,
  defineComponent,
  onMounted,
  reactive,
  ref,
  watch,
  nextTick,
} from "vue";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
} from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/autoplay";

const onSwiper = (swiper) => {
  console.log(swiper);
};
// const navigation = ref({
//   nextEl: ".swiper-button-next",
//   prevEl: ".swiper-button-prev",
// });
const prevEl = (item, index) => {
  // console.log('上一张' + index + item)
};
const nextEl = () => {
  // console.log('下一张')
};
// 更改当前活动swiper
const onSlideChange = (swiper) => {
  // swiper是当前轮播的对象，里面可以获取到当前swiper的所有信息，当前索引是activeIndex
  console.log(swiper.activeIndex);
};
const modules = [Autoplay, Navigation, Pagination, Scrollbar, A11y, FreeMode];
defineProps({
  msg: String,
});
let positions = ref(0);
const route = useRouter();
// console.log(route, "route");
let toWay = ref(1);
onMounted(() => {
  nextTick(() => {
    if (document.body.clientWidth < 768) {
      document.body.style.zoom = "normal";
    } else {
      document.body.style.zoom = "normal"; //避免zoom尺寸叠加
      let scale = document.body.clientWidth / 1280;
      document.body.style.zoom = scale;
      window.onresize = function () {
        document.body.style.zoom = "normal"; //避免zoom尺寸叠加
        let scale = document.body.clientWidth / 1280;
        document.body.style.zoom = scale;
      };
    }
  });
  time = setInterval(() => {
    positions.value -= 335;
    // if (toWay.value == 1) {
    //     positions.value -= 335
    // } else {
    //     positions.value += 335
    // }
  }, 2000);
});
watch(positions, (newValue, oldValue) => {
  if (newValue <= -1675) {
    setTimeout(() => {
      positions.value = 0;
    }, 1000);
  }
  // if (newValue <= -1240) {
  //     toWay.value = 2
  // }
  // if (newValue == 0) {
  //     toWay.value = 1
  // }
});

watch(route.currentRoute, (newValue, oldValue) => {
  console.log(newValue, "newValue");
  console.log(oldValue, "oldValue");
  heihei.value = newValue.query.id;
});
let handleHover = (po) => {
  window.clearInterval(time);
  positions.value = po;
};
let clientXs = ref(0);
let centerX = ref(0);
let touchMove = (e) => {
  window.clearInterval(time);
  console.log(e);
  clientXs.value = e.changedTouches[0].clientX;
};
let touchMoveTo = (e) => {
  // 获取差值

  let dy = e.changedTouches[0].clientX - clientXs.value;
  clientXs.value = e.changedTouches[0].clientX;
  positions.value += dy;
};
let touchMoveOut = (e) => {
  // 获取差值
  if (Math.abs(positions.value) % 335 < 167) {
    positions.value = positions.value + Math.abs(positions.value % 335);
  } else {
    positions.value = positions.value - (335 - Math.abs(positions.value % 335));
  }
  if (positions.value > 0) {
    positions.value = 0;
  }
  if (positions.value < -1340) {
    positions.value = -1340;
  }
  time = setInterval(() => {
    positions.value -= 335;
  }, 3000);
};
let handOut = (po) => {
  positions.value = po;
  // console.log(777)
  time = setInterval(() => {
    positions.value -= 335;
  }, 2000);
};
let time = null;
let show = ref(false);
let heihei = ref("");

onBeforeUnmount(() => {
  time = null;
});
let changeShow = () => {
  show.value = !show.value;
  uni.postMessage({
    data: {
      action: "message信息啊",
      address: window.location.href,
    },
  });
  heihei.value = window.location.href;
  // console.log('jinlaile')
};
let infoList = reactive({
  data: [
    {
      id: 1,
      name: "Damon",
      position: "Founder",
      txt: `• IP & NFT Collector `,
      txt2: "• BTC Holder ",
      txt3: "• MIT Master's Degree",
    },
    {
      id: 2,
      name: "Isabella",
      position: "Co-Founder",
      txt: `• Cryptopunk Holder `,
      txt2: "• Diamond Collector",
      txt3: "• Majority Shareholder of VR Company",
    },
    {
      id: 3,
      name: "Olivia",
      position: "CMO",
      txt: `• NFT Collector`,
      txt2: "• Web3 Marketing Officer",
      txt3: "• Economics Researcher",
    },
    {
      id: 4,
      name: "Hugo",
      position: "Co-founder",
      txt: `• Artist `,
      txt2: "• Former BAYC Holder",
      txt3: "• AI Algorithm Developer",
    },
    {
      id: 5,
      name: "Luke",
      position: "CBO",
      txt: `• NFT Collector `,
      txt2: "• Former Top Luxury Brand Designer",
      txt3: "",
    },
    {
      id: 6,
      name: "Damon",
      position: "Founder",
      txt: `• IP & NFT Collector `,
      txt2: "• BTC Holder ",
      txt3: "• MIT Master's Degree",
    },
  ],
});
let openAdd = (path) => {
  window.open(path, "_blank");
};
let go = (id) => {
  window.document.getElementById(id).scrollIntoView(true);
  show.value = false;
};
let go2 = (id) => {
  // window.document.getElementById('genesis2').scrollIntoView()
  window.scrollTo(800, 0);
  console.log(668);
  show.value = false;
};
const count = ref(0);
</script>


<style lang="scss" scoped>
@import "../style/index.scss";
</style>
<style lang="scss">
.swiper {
  .swiper-slide {
    display: flex;
    justify-content: center;
    color: #fff;
  }
  //   改变小圆点的样式
  // .swiper-pagination-bullet-active {
  //   background: white;
  // }
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 75px;
    display: flex;
    justify-content: center;
  }
  .swiper-pagination-bullet-active {
    width: 20px;
    height: 8px;
    background: #ff7500;
    border-radius: 4px;
  }
}
</style>