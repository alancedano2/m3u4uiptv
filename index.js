const moment = require('moment');

const channels = {
  // Tu objeto de programación de canales aquí...
};

function getCurrentProgram(channelName) {
  const channel = channels[channelName];
  const currentTime = moment().format('HH:mm');
  const currentDay = moment().format('dddd').toLowerCase();

  let schedule = channel.schedule.weekdays;
  if (currentDay === 'saturday' || currentDay === 'sunday') {
    schedule = channel.schedule.weekends;
  }

  for (let i = 0; i < schedule.length; i++) {
    const show = schedule[i];
    const startTime = moment(show.start, 'HH:mm');
    const endTime = moment(show.end, 'HH:mm');
    const currentTimeMoment = moment(currentTime, 'HH:mm');

    if (currentTimeMoment.isBetween(startTime, endTime, null, '[)')) {
      return {
        show: show.show,
        m3u8: channel.m3u8,
        logo: channel.logo,
      };
    }
  }

  return {
    show: 'OFF AIR',
    m3u8: channel.m3u8,
    logo: channel.logo,
  };
}

module.exports = (req, res) => {
  const channelName = req.query.channel || 'KQ105 Radio'; // Se toma el canal como parámetro
  const currentProgram = getCurrentProgram(channelName);
  res.status(200).json(currentProgram);
};
