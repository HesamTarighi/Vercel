<template>
  <div class="continer">
    <table>
      <thead>
        <tr>
          <th class="font6"> Name </th>
          <th class="font6"> Price </th>
          <th class="font6"> Chart </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in LimitedCurrency" :key="index">
          <td>
            <!-- Name -->
            <div>
              <img :src="require('@/static/logo/Currency/' + item.logo)" alt="">
              <span> {{ item.short }} </span>
            </div>
          </td>
          <td>
            <!-- Price -->
            {{ item.price }}
            <fa :icon="['fas', 'plus']" class="dark-text5" v-if="!item.fall"/>
            <fa :icon="['fas', 'minus']" class="red-text" v-else/>
          </td>
          <td>
            <!-- Chart -->
            <LineChart :data="item.data" :fall="item.fall" :default="false" width="100%" height="70px" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  .continer {
    width: 100%;
  }

  thead tr th {
    opacity: .7;
    font-size: .9rem;
    letter-spacing: 1px;
    text-align: left;
    padding: 0 1.7rem;
  }

  tbody tr td {
    padding: 0 1.5rem;
    text-align: center;
  }

  tbody tr td div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  tbody tr td:first-child img {
    width: 1.7rem;
    border-radius: 10000px;
  }
</style>

<script>
  export default {
    props: [
      'currency',
      'to',
      'max'
    ],

    computed: {
      LimitedCurrency() {
        return this.currency.slice(this.to - this.max, this.to)
      }
    }
  }
</script>
