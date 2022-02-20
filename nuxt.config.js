import colors from 'vuetify/es5/util/colors'

export default {
  head: {
    titleTemplate: '%s - auth',
    title: 'auth',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/static/css/all.css',
    '@/static/css/ui.css',
  ],

  plugins: [
    '@/plugins/CustomDirectives.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true,
    }
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy'
  ],

  axios: {
    baseURL: '',
    proxy: true,
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
  },

  proxy: {
    '/auth': 'http://127.0.0.1/'
  },

  auth: {
    redirect: {
      login: '/admin',
      logout: '/login',
      callback: '/login',
      home: '/'
    },
    strategies: {
      // LOCAL
      local: {
        token: {
          maxAge: 5000,
        },
        refreshToken: {
          maxAge: 5000,
        },
        endpoints: {
          login: { url: '/auth/login.php', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/login.php', method: 'delete' },
          user: { url: '/auth/login.php', method: 'get', propertyName: 'user' },
          logout: false
        }
      },

      // AUTH0

      // auth0: {
      //   domain: 'domain.auth0.com',
      //   clientId: '....',
      //   audience: 'https://my-api-domain.com/'
      // },

      // OAUTH2

      social: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/auth',
          token: undefined,
          userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
          logout: 'https://example.com/logout'
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        responseType: 'token',
        grantType: 'authorization_code',
        accessType: undefined,
        redirectUri: undefined,
        // logoutRedirectUri: undefined,
        logoutRedirectUri: '/',
        clientId: '154564',
        scope: ['openid', 'profile', 'email'],
        state: 'UNIQUE_AND_NON_GUESSABLE',
        codeChallengeMethod: '',
        responseMode: '',
        acrValues: '',
        // autoLogout: false
      },

      // google: {
      //   clientId: '651451',
      //   codeChallengeMethod: '',
      //   responseType: 'code',
      //   endpoints: {
      //     token: 'https://accounts.google.com/o/oauth2/auth', // somm backend url to resolve your auth with google and give you the token back
      //     userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo' // the endpoint to get the user info after you recived the token
      //   },
      // },
    }
  }
}
