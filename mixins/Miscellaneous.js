import Notification from '@/mixins/Notification.js'

export default {
  mixins: [Notification],
  methods: {
    /**
     * Copies the text
     */
    copyText(text) {
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)

      this.notification('Text copied')
    }
  },
  filters: {
    /**
     * Makes a string human readbale
     *
     * @returns {string}
     * @param string
     * @param firstUppercase
     * @param nextUppercase
     * @param allUppercase
     * @param allLowercase
     */
    humanReadable(string, firstUppercase = true, nextUppercase = false, allUppercase = false, allLowercase = false) {
      let humanReadable = ''

      if (!string) {
        return ''
      }
      const splittedString = string.replace(/-/g, ' ').replace(/_/g, ' ').split(' ')

      splittedString.forEach((elem, index) => {
        if (index === 0) {
          humanReadable += `${firstUppercase ? elem.charAt(0).toUpperCase() + elem.slice(1) : elem} `
        } else {
          humanReadable += `${nextUppercase ? elem.charAt(0).toUpperCase() + elem.slice(1) : elem} `
        }
      })

      return allUppercase ? humanReadable.toUpperCase() : allLowercase ? humanReadable.toLowerCase() : humanReadable
    }
  }
}
