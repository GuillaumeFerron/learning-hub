const boilerplatesState = () => ({
  directory: 'boilerplates',
  links: {
    cd_nuxt_boilerlate: {
      name: 'Nuxt Boilerplate',
      type: {
        name: 'github',
        icon: {
          prefix: 'fab fa-',
          type: 'fab',
          slug: 'github'
        }
      },
      link: 'https://bitbucket.org/cddevteam/cd-nuxt-boilerplate/src',
      description: 'A boilerplate for Nuxt projects. It includes Bootstrap | SCSS | JQuery.',
      tags: ['Nuxt', 'Bootstrap', 'JQuery', 'Scss']
    }
  }
})
const boilerplatesGetters = () => ({
  directory: state => state.boilerplates.directory,
  links: state => state.boilerplates.files
})

export { boilerplatesGetters, boilerplatesState }
