const cheatsheetsState = () => ({
  directory: '/cheatsheets/',
  searchKey: 'files',
  files: {
    animation_development: {
      name: 'Animation Development',
      file: 'CHEATSHEET_ANIMATIONS_DEVELOPMENT',
      file_extension: '.pdf',
      description: 'A quick introduction to animation development using GSAP',
      tags: ['animation', 'GSAP']
    },
    databases: {
      name: 'Databases',
      file: 'CHEATSHEET_DATABASES',
      file_extension: '.pdf',
      description: 'A description of database management.',
      tags: ['MySQL', 'databases']
    },
    deployment: {
      name: 'Deployment',
      file: 'CHEATSHEET_DEPLOYMENT',
      file_extension: '.pdf',
      description: 'A guide to simple HTTP website deployment.',
      tags: ['server', 'deployment']
    },
    dynamic_banners_setup: {
      name: 'Dynamic Banners Setup',
      file: 'CHEATSHEET_DYNAMIC_BANNERS_SETUP',
      file_extension: '.pdf',
      description: 'The process of setting up a dynamic banners campaign.',
      tags: ['dynamic', 'banners']
    },
    website_setup: {
      name: 'Website Setup',
      file: 'CHEATSHEET_WEBSITE_SETUP',
      file_extension: '.pdf',
      description: 'A guide to simple HTTP website setup.',
      tags: ['website']
    },
    wordpress_backup: {
      name: 'Wordpress Backup',
      file: 'CHEATSHEET_WORDPRESS_BACKUP',
      file_extension: '.pdf',
      description: 'A description of the backing up process in Wordpress.',
      tags: ['wordpress', 'backup']
    }
  }
})

const cheatsheetsGetters = () => ({
  directory: state => state.cheatsheets.directory,
  files: state => state.cheatsheets.files
})

export { cheatsheetsGetters, cheatsheetsState }
