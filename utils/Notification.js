export default class Notification {
  constructor(id, content, priority, mode, delay) {
    this.validateNotification(id, content, priority, mode, delay)

    this.id = id
    this.content = content
    this.priority = priority
    this.mode = mode
    this.delay = delay
  }

  validateNotification(id, content, priority, mode, delay) {
    if (!this.constructor.validateId(id)) {
      throw new SyntaxError('Invalid Notification Id. Required | String | Max: 10 characters')
    } else if (!this.constructor.validateContent(content)) {
      throw new SyntaxError('Invalid Notification Content. Required | String | Max: 255 characters')
    } else if (!this.constructor.validatePriority(priority)) {
      throw new SyntaxError('Invalid Notification Priority. Required | Integer | Values: [0, 1, 2, 3]')
    } else if (!this.constructor.validateMode(mode)) {
      throw new SyntaxError('Invalid Notification Mode. Required | Integer | Values: [0, 1, 2]')
    } else if (!this.constructor.validateDelay(delay)) {
      throw new SyntaxError('Invalid Notification Delay. Required | Integer | Min: 0 | Max: 10000')
    }
  }

  static validateId(id) {
    const maxLength = 10
    const type = typeof ''
    return typeof id === type && id.length <= maxLength
  }

  static validateContent(content) {
    const maxLength = 255
    const type = typeof ''
    return typeof content === type && content.length <= maxLength
  }

  static validatePriority(priority) {
    const values = [0, 1, 2, 3]
    const type = typeof 0
    return typeof priority === type && values.indexOf(priority) !== -1
  }

  static validateMode(mode) {
    const values = [0, 1, 2]
    const type = typeof 0
    return typeof mode === type && values.indexOf(mode) !== -1
  }

  static validateDelay(delay) {
    const min = 0
    const max = 10000
    const type = typeof 0
    return typeof delay === type && delay >= min && delay <= max
  }
}

if (process.browser) {
  // Register the class as a global scope
  window.Notification = Notification
}
