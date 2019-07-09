<template>
  <div id="loader-container">
    <div class="loader-content">
      <div id="cube-container">
        <div id="cube" class="animate">
          <div> <img src="~/assets/images/preloader/side1.svg"> </div>
          <div> <img src="~/assets/images/preloader/side2.svg"> </div>
          <div> <img src="~/assets/images/preloader/side3.svg"> </div>
          <div> <img src="~/assets/images/preloader/side4.svg"> </div>
          <div> <img src="~/assets/images/preloader/side5.svg"> </div>
          <div> <img src="~/assets/images/preloader/side6.svg"> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    // eslint-disable-next-line no-undef
    // new TimelineMax({ repeat: -1 })
    //   .to('#cube', 0.5, { rotation: 90 })
    //   .to('#cube', 0.5, { rotationX: -90 })
    //   .to('#cube', 0.5, { rotationY: 90 })
    //   .to('#cube', 0.5, { rotation: 180 })
    //   .to('#cube', 1.2, { rotationY: -180 })
    //   .to('#cube', 0.5, { rotationX: -180 })
  }
}
</script>

<style lang="scss" scoped>
  #loader-container {
    display:table;
    overflow-x:hidden;
    /*overflow-y:hidden;*/
    vertical-align:middle;
    top: 20%;
    left: 50%;
    position: absolute;
    @include transform(translate(-50%, 0));
  }

  .loader-content {
    position:relative;
    display:table-cell;
    vertical-align:middle;
    z-index:3;
    text-align:center;
  }

  #cube-container {
    -webkit-perspective:1000px;
    -moz-perspective:1000px;
    -o-perspective:1000px;
    -ms-perspective:1000px;
    perspective:1000px;
    -webkit-perspective-origin:50% 50%;
    -moz-perspective-origin:50% 50%;
    -moz-transform-origin:50% 50%;
    -o-perspective-origin:50% 50%;
    -ms-perspective-origin:50% 50%;
    perspective-origin:50% 50%;
  }
  #cube {
    position:relative;
    margin:0 auto;
    width:100px;
    height:100px;
    -webkit-transform-style:preserve-3d;
    -moz-transform-style:preserve-3d;
    -o-transform-style:preserve-3d;
    -ms-transform-style:preserve-3d;
    transform-style:preserve-3d;
  }
  #cube>div {
    position:absolute;
    width:100px;
    height:100px;
  }
  #cube div:nth-child(1) {
    -webkit-transform:translateZ(50px);
    -moz-transform:translateZ(50px);
    -o-transform:translateZ(50px);
    -ms-transform:translateZ(50px);
    transform:translateZ(50px);
    background-color:#2E272F;
    background-repeat:no-repeat;
  }
  #cube div:nth-child(2) {
    -webkit-transform:rotateY(90deg) translateZ(50px);
    -moz-transform:rotateY(90deg) translateZ(50px);
    -o-transform:rotateY(90deg) translateZ(50px);
    -ms-transform:rotateY(90deg) translateZ(50px);
    transform:rotateY(90deg) translateZ(50px);
    background-color:#2D3A4D;
    background-repeat:no-repeat;
  }
  #cube div:nth-child(3) {
    -webkit-transform:rotateY(180deg) translateZ(50px);
    -moz-transform:rotateY(180deg) translateZ(50px);
    -o-transform:rotateY(180deg) translateZ(50px);
    -ms-transform:rotateY(180deg) translateZ(50px);
    transform:rotateY(180deg) translateZ(50px);
    background-color:#2D1C12;
    background-repeat:no-repeat;
  }
  #cube div:nth-child(4) {
    -webkit-transform:rotateY(-90deg) translateZ(50px);
    -moz-transform:rotateY(-90deg) translateZ(50px);
    -o-transform:rotateY(-90deg) translateZ(50px);
    -ms-transform:rotateY(-90deg) translateZ(50px);
    transform:rotateY(-90deg) translateZ(50px);
    background-color:#693C1F;
    background-repeat:no-repeat;
  }
  #cube div:nth-child(5) {
    -webkit-transform:rotateX(-90deg) translateZ(50px) rotate(180deg);
    -moz-transform:rotateX(-90deg) translateZ(50px) rotate(180deg);
    -o-transform:rotateX(-90deg) translateZ(50px) rotate(180deg);
    -ms-transform:rotateX(-90deg) translateZ(50px) rotate(180deg);
    transform:rotateX(-90deg) translateZ(50px) rotate(180deg);
    background-color:#955122;
    background-repeat:no-repeat;
  }
  #cube div:nth-child(6) {
    -webkit-transform:rotateX(90deg) translateZ(50px);
    -moz-transform:rotateX(90deg) translateZ(50px);
    -o-transform:rotateX(90deg) translateZ(50px);
    -ms-transform:rotateX(90deg) translateZ(50px);
    transform:rotateX(90deg) translateZ(50px);
    background-color:#E34C26;
    background-repeat:no-repeat;
    text-align: center;
  }
</style>
