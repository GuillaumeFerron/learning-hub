<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        Candy Digital Learning Hub
      </h1>
      <h2 class="subtitle">
        A learning hub for the CandyDigital web development team.
      </h2>
      <h3 class="subtitle website-link">
        <a href="https://candydigital.co" target="_blank">Go to website <span class="link-space">&rarr;</span></a>
      </h3>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">

  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 80px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .website-link {
    a {
      text-decoration: none;
      color: #526488;

      .link-space {
        @include transition();
      }
    }

    &:hover {
      a {
        .link-space {
          margin-left: 10px;
        }
      }
    }
  }
</style>
