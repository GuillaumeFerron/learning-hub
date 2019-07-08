const videosState = () => ({
  directory: '/videos/',
  files: {
    keyframes: {
      name: 'Keyframes Chrome Extension',
      file: 'keyframes',
      file_extension: '.mp4',
      description: 'A description of the Chrome Extension Keyframes.',
      meta: {
        author: 'PK',
        length: '00:01:37'
      },
      tags: ['animation', 'extension', 'css', 'Learn Hub']
    },
    troubleshooting: {
      name: 'Troubleshooting Older Nuxt.js Framework',
      file: 'troubleshooting',
      file_extension: '.mp4',
      description: 'In this screencast we will be troubleshooting how to get Learning hub working',
      meta: {
        author: 'PK',
        length: '00:12:01'
      },
      tags: ['Nuxt.js', 'troubleshooting', 'nodejs', 'npm']
    },
    learnHubAuth01: {
      name: 'Learn Hub Authentication - 01 Adding Laravel',
      file: 'learnHubAuth01',
      file_extension: '.mp4',
      description: 'In this Video We will be installing laravel and cleaning up framework to add API Authentication',
      meta: {
        author: 'PK',
        length: '00:05:12'
      },
      tags: ['Nuxt.js', 'Laravel', 'Auth', 'Learn Hub']
    }
  }
})

const videosGetters = () => ({
  directory: state => state.videos.directory,
  files: state => state.videos.files
})

export { videosGetters, videosState }
