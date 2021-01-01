const cron = require('node-schedule')
const schedule = require('../../config/schedule.json')

const sendNotification = (bot, event) => {
  console.log(event.message)
}

const register = (bot) => {
  for (const day in schedule) {
    const { events } = schedule[day]

    const jobs = events.map((event) => {
      return cron.scheduleJob(event.date, () => sendNotification(bot, event))
    })

    console.log(`For ${day} scheduled ${jobs.length} events`)
  }
}

module.exports = { register }
