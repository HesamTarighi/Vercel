<template>
  <div>
    <section class="currency-section">
      <div class="dark-bg currency-box">
        <Currency :currency="All" to="5" max="5" />
        <Currency :currency="All" to="10" max="5" />
        <Currency :currency="All" to="15" max="5" />
      </div>
    </section>
  </div>
</template>

<style scoped>
  .currency-section {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .currency-box {
    width: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    box-shadow: 2px 3px 8px #000;
    border-radius: 8px;
    padding: 1rem 2rem;
    margin-top: -12rem;
  }
</style>

<script>
export default {
  middleware: 'Auth',

  asyncData({store}) {
    return {
      All: store.state.currency,
      Terending: store.getters.Terending,
      Fall: store.getters.Fall,
      Rise: store.getters.Rise,
    }
  },
}
</script>
