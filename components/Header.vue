<template>
  <div class="dark-text">
    <section>

      <img class="design-items design-item1" src="/design/ellipse-1.png" alt="">
      <img class="design-items design-item2" src="/design/ellipse-2.png" alt="">
      <img class="design-items design-item3" src="/design/ellipse-3.png" alt="">
      <img class="design-items design-item4" src="/design/star.png" alt="">

      <div>
        <div class="header-article">
          <span id="article1">
            <span id="article11">The World's</span>
            <span id="article12" class="dark-text3 font3 fastest-growing">Fastest Growing</span>
            <span id="article11">Crypto Web</span>
          </span>
          <span id="article2">Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank transfers or your credit/debit card.</span>
        </div>
        <div style="width: 100%;">
          <!-- <canvas width="100%" height="150px" ref="canvas"></canvas> -->
          <LineChart :data="data" :fall="false" :default="true" width="100%" height="200px" />
        </div>
        <div class="box-trade-btn">
          <button class="dark-btn3"> Trade now </button>
        </div>
      </div>

      <div>
        <img src="/logo/crypto2.png" alt="">
      </div>
    </section>
  </div>
</template>

<style scoped>
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
  }

  section > div:first-child {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .header-article #article1 {
    font-size: 3rem;
  }

  .header-article #article2 {
    font-size: 1.4rem;
    opacity: .7;
    padding: 2rem 0;
  }

  .fastest-growing {
    background-image: linear-gradient(20deg, var(--blue), var(--purple) 60%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .header-article span {
    display: block;
  }

  .box-trade-btn {
    padding: 2rem 0;
  }

  .box-trade-btn button {
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1.2rem;
  }

  section > div:last-child {
    position: relative;
  }

  section .design-items {
    position: absolute;
    width: 20px;
    height: 20px;
  }

  section .design-item1 {
    top: 90%;
    left: 20%;
  }

  section .design-item2 {
    top: 10%;
    left: 60%;
  }

  section .design-item3 {
    top: 80%;
    right: 20px;
  }

  section .design-item4 {
    top: 0;
    left: 25%;
  }
</style>

<script>
  export default {
    data() {
      return {
        data: [
          10, 60, 20, 50, 10, 65, 10
        ],
      }
    },
  }
</script>
