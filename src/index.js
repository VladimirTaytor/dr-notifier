require('dotenv').config()
const Discord = require('discord.js')
const scheduler = require('./services/scheduler')
const { handleCommand } = require('./services/handler')

const bot = new Discord.Client()

const TOKEN = process.env.TOKEN

bot.login(TOKEN)

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`)

  scheduler.register(bot)
})

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong')
    return msg.channel.send('pong')
  }

  if (msg.content.startsWith('+dren')) {
    return handleCommand(msg)
  }
})
