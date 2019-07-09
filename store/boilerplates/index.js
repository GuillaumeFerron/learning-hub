const boilerplatesState = () => ({
  directory: 'boilerplates',
  searchKey: 'links',
  links: {
    cd_nuxt_boilerlate: {
      name: 'Nuxt Boilerplate (old)',
      type: {
        name: 'github',
        icon: {
          prefix: 'fab fa-',
          type: 'fab',
          slug: 'github'
        }
      },
      link: 'https://github.com/GuillaumeFerron/nuxt-boilerplate',
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
