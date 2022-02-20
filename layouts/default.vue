<template>
  <div id="app">
    <header class="dark-bg2">
      <div class="header-box">
        <nav class="dark-text">
          <Nav />
        </nav>
        <Header/>
      </div>
    </header>
    <main class="dark-bg dark-text">
      <Nuxt />
    </main>
  </div>
</template>

<style scoped>
  header {
    min-height: 120vh;
    padding-bottom: 4rem;
  }

  .header-box {
    width: 80%;
    margin: auto;
  }

  nav {
    margin-bottom: 3rem;
  }

  main {
    width: 100%;
    min-height: 100vh;
  }
</style>
