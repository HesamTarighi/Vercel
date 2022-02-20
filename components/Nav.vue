<template>
  <div>
    <div class="nav">
      <div class="search-continer">
        <div class="search-box">
          <input type="text" placeholder="Search..." v-model="Search" @keyup="Searching()">
        </div>
        <div class="search-items" v-if="SearchFilterItems != null">
          <ul>
            <li v-for="(item, index) in SearchFilterItems" :key="index">
              <a :href="'/' + item.name"> {{ item.name }} </a>
              <v-divider class="dark-bg7"></v-divider>
            </li>
          </ul>
        </div>
      </div>
      <div class="user-links">
        <ul>
          <li> <nuxt-link to="/" exact> Home </nuxt-link> </li>
          <li> <nuxt-link to="/Cryptocurrency"> Cryptocurrency </nuxt-link> </li>
          <li> <nuxt-link to="/Exchanges"> Exchanges </nuxt-link> </li>
          <li> <nuxt-link to="/Watchlist"> Watchlist </nuxt-link> </li>
          <li> <nuxt-link to="/NFT"> NFT </nuxt-link> </li>
          <li> <nuxt-link to="/Portfolio"> Portfolio </nuxt-link> </li>
          <li> <nuxt-link to="/dashboard"> Dashboard </nuxt-link> </li>
        </ul>
      </div>
      <div class="user-menu">
        <div class="user-menu-box">
          <div class="user-profile"> <button class="user-profile-image"> <img src="/image/me.jpg" alt=""> </button> <button @click="UserToggle = !UserToggle" class="user-profile-name dark-text3"> <span> {{ $auth.user.name ? $auth.user.name : 'Gust' }} </span> <span> {{ $auth.user.email ? $auth.user.email : '' }} </span> </button> </div>
          <div class="user-menu-items dark-bg" :class="UserToggle ? 'active' : 'de-active'">
            <ul>
              <li style="padding: 10px 0;"> <button class="red-text" @click="$auth.logout()"> Logout </button> </li>
              <v-divider></v-divider>
              <li style="padding: 10px 0;"> <button class="red-text" @click="$auth.logout()"> Delete Account </button> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  a {
    width: 100%;
    height: 100%;
    color: var(--text);
    opacity: .7;
  }

  a.nuxt-link-active {
    opacity: 1;
  }

  .nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    padding: 0 2.5rem;
    padding-top: 2rem;
    padding-bottom: .7rem;
  }

  .search-continer {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .search-box {
    width: 100%;
    height: auto;
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    gap: .5rem;
    border: 1px solid rgb(255, 255, 255, .7);
    border-radius: 10000px;
  }

  .search-box input {
    width: 100%;
    height: auto;
    color: rgb(255, 255, 255, .9);
  }

  .search-box input::placeholder {
    color: #fff;
    opacity: .6;
    font-style: italic;
  }

  .search-items {
    max-height: 200px;
    background-color: var(--black1);
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    padding: .2rem 1rem;
    border-radius: 8px;
    z-index: 999999;
    overflow-y: scroll;
    box-shadow: 2px 3px 8px #000;
  }

  .search-items ul {
    list-style: none;
  }

  .search-items ul li {
    line-height: 2rem;
  }

  .search-items ul li a {
    width: 100%;
    opacity: 1;
  }

  .nav > .user-links {
    display: flex;
    align-items: center;
  }

  .nav > .user-links ul {
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .nav > .user-links ul li {
    padding: 0 2rem;
  }

  .user-profile-image {
    width: 2rem;
    height: 2rem;
    border-radius: 10000px;
    overflow: hidden;
    margin: 0 .5rem;
  }

  .user-profile-name {
    display: flex;
    flex-direction: column;
  }

  .user-profile-name span:last-child {
    opacity: .5;
    font-size: 12px;
  }

  .nav > .user-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
  }

  .nav > .user-menu > .user-menu-box > .user-profile {
    padding: 0 3rem;
    display: flex;
    align-items: center;
  }

  .nav > .user-menu > .user-menu-box > .user-menu-items {
    position: absolute;
    top: 100%;
    right: 0;
    padding: 1rem;
    box-shadow: 2px 2px 8px #000;
    transition: all .3s;
    opacity: 0;
    pointer-events: none;
    border-radius: .5rem;
  }

  .nav > .user-menu > .user-menu-box > .user-menu-items.active {
    top: 70%;
    opacity: 1;
    pointer-events: all;
  }

  .nav > .user-menu > .user-menu-box > .user-menu-items.de-active {
    top: 40%;
    opacity: 0;
    pointer-events: none;
  }

  .nav > .user-menu > .user-menu-box > .user-menu-items ul {
    text-align: center;
    list-style: none;
  }

  .nav > .user-menu > .user-menu-box > .user-menu-items ul li {
    line-height: 2rem;
  }
</style>

<script>
export default {
  data() {
    return {
      Coins: this.$store.state.currency,
      UserToggle: false,
      Search: '',
      SearchFilterItems: null,
    }
  },

  methods: {
    Searching() {
      var items = this.Coins.filter((coin) => {
        return coin.name.toLowerCase().includes(this.Search.toLowerCase())
      });

      this.SearchFilterItems = items;
    }
  },
}
</script>
