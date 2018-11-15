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
      tags: ['animation', 'extension', 'css']
    }
  }
})

const videosGetters = () => ({
  directory: state => state.videos.directory,
  files: state => state.videos.files
})

export { videosGetters, videosState }
