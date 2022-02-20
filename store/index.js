export default {
  state: {
    currency: [
      {
        name: 'BITCOIN',
        short: 'BTC',
        logo: 'bitcoin.png',
        price: '43500.00',
        data: [10, 40, 35, 50, 60, 75, 30],
        fall: true,
      },

      {
        name: 'ETHEREUM',
        short: 'ETHE',
        logo: 'ethereum.png',
        price: '3123.00',
        data: [10, 50, 65, 45, 65, 20, 30],
        fall: false,
      },

      {
        name: 'SOLANA',
        short: 'SOL',
        logo: 'solana.png',
        price: '102.000',
        data: [0, 20, 50, 40, 65, 30, 10],
        fall: true,
      },

      {
        name: 'CARDANO',
        short: 'ADA',
        logo: 'ada.png',
        price: '1.000',
        data: [0, 65, 30, 35, 20, 25, 10],
        fall: true,
      },

      {
        name: 'SHIBA',
        short: 'SHIB',
        logo: 'shiba.png',
        price: '0.00003085',
        data: [10, 25, 20, 65, 30, 35, 20],
        fall: true,
      },

      {
        name: 'DOGECOIN',
        short: 'DOGE',
        logo: 'dogecoin.png',
        price: '0.1505100',
        data: [0, 25, 20, 65, 30, 35, 0],
        fall: true,
      },

      {
        name: 'FLOKI',
        short: 'FLOKI',
        logo: 'floki.png',
        price: '0.00003940',
        data: [0, 55, 50, 40, 45, 25, 10],
        fall: true,
      },

      {
        name: 'GALA',
        short: 'GALA',
        logo: 'gala.png',
        price: '0.31453',
        data: [0, 65, 20, 30, 20, 10, 20],
        fall: false,
      },

      {
        name: 'SAND',
        short: 'SAND',
        logo: 'sand.png',
        price: '3.9900',
        data: [0, 25, 20, 65, 30, 35, 0],
        fall: true,
      },

      {
        name: 'POLKADOT',
        short: 'DOT',
        logo: 'dot.png',
        price: '18.85',
        data: [0, 35, 30, 50, 20, 20, 10],
        fall: true,
      },

      {
        name: 'TSLA',
        short: 'TSLA',
        logo: 'tsla.png',
        price: '913.82',
        data: [0, 65, 45, 60, 35, 60, 35],
        fall: true,
      },

      {
        name: 'HOLO',
        short: 'HOT',
        logo: 'holo.png',
        price: '0.003945',
        data: [0, 65, 30, 40, 10, 40, 5],
        fall: true,
      },

      {
        name: 'ELON',
        short: 'ELON',
        logo: 'elon.png',
        price: '0.000000956',
        data: [65, 50, 55, 40, 45, 20, 40],
        fall: false,
      },

      {
        name: 'BABYDOGE',
        short: 'BABYDOGE',
        logo: 'baby.png',
        price: '0.0000000041',
        data: [0, 60, 65, 20, 10, 5, 10],
        fall: true,
      },

      {
        name: 'ATOM',
        short: 'ATOM',
        logo: 'atom.png',
        price: '29.8254',
        data: [0, 65, 50, 65, 55, 30, 45],
        fall: false,
      },

      // {
      //   name: 'DOGE',
      //   logo: 'dogecoin.png',
      //   price: '0.1505100',
      //   data: [0, 25, 20, 65, 30, 35, 0],
      //   fall: true,
      // },

      // {
      //   name: 'DOGE',
      //   logo: 'dogecoin.png',
      //   price: '0.1505100',
      //   data: [0, 25, 20, 65, 30, 35, 0],
      //   fall: true,
      // },

      // {
      //   name: 'DOGE',
      //   logo: 'dogecoin.png',
      //   price: '0.1505100',
      //   data: [0, 25, 20, 65, 30, 35, 0],
      //   fall: true,
      // },

      // {
      //   name: 'DOGE',
      //   logo: 'dogecoin.png',
      //   price: '0.1505100',
      //   data: [0, 25, 20, 65, 30, 35, 0],
      //   fall: true,
      // },

    ],
  },

  actions: {
    Login({commit}, data) {
      commit('Login', data)
    },

    Register({commit}, data) {
      commit('Register', data)
    },
  },

  mutations: {
    async Login(state, data) {
      try {
        await this.$auth.loginWith('local', {
          data: {
            data
          },
        })

        // this.$auth.setUser('Hesam')

        // this.$router.push('/')

        // this.$auth.refreshToken()
        console.log(this.$auth.loggedIn);
      } catch (err) {
        console.log(err);
      }
    },
  },

  getters: {
    Terending(state) {
      return state.currency.filter((item) => {
        var split = item.price.split('.');
        return split[1].length < 3
      })
    },

    Fall(state) {
      return state.currency.filter((item) => {
        return item.fall == true
      })
    },

    Rise(state) {
      return state.currency.filter((item) => {
        return item.fall == false
      })
    },
  },
}
