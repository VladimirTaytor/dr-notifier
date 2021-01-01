const {BOT_HELPER_TEXT} = require('../../config/constants')

const sendHelperText = message => {
  return message.channel.send(BOT_HELPER_TEXT)
}

const sendGeneralMessage = message => {
  return message.channel.send('Invalid command. Use `+dren help` to get list of commands')
}

const handleCommand = (message) => {
  const command = message.content.replace('+dren', '').trim()

  if (!command) return sendGeneralMessage(message)

  switch (command) {
  case 'help':
    sendHelperText(message)
    break
  default:
    sendGeneralMessage(message)
  }
}

module.exports = { handleCommand }
