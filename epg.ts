// epg.js
const express = require('express');
const app = express();

// Hora actual en Puerto Rico (UTC-4)
const moment = require('moment-timezone');
moment.tz.setDefault('America/Puerto_Rico');

// Programación
const schedule = [
  {
    channel: 'KQ105 Radio',
    schedule: [
      { start: '2023-04-18T00:00:00', end: '2023-04-18T06:00:00', title: 'Carlos Gabriel' },
      { start: '2023-04-18T06:00:00', end: '2023-04-18T10:00:00', title: 'Hector Ortiz' },
      { start: '2023-04-18T10:00:00', end: '2023-04-18T15:00:00', title: 'Alex Diaz' },
      { start: '2023-04-18T15:00:00', end: '2023-04-18T18:00:00', title: 'La Tendencia de Molusco' },
      { start: '2023-04-18T18:00:00', end: '2023-04-18T19:00:00', title: 'Pedro Villegas' },
      { start: '2023-04-18T19:00:00', end: '2023-04-18T24:00:00', title: 'Edwin Negron' }
    ]
  },
  {
    channel: 'KQ-105 TV',
    schedule: [
      { start: '2023-04-18T00:00:00', end: '2023-04-18T08:00:00', title: 'OFF AIR' },
      { start: '2023-04-18T08:00:00', end: '2023-04-18T10:00:00', title: 'KQ Hits' },
      { start: '2023-04-18T10:00:00', end: '2023-04-18T12:00:00', title: 'KQ Playlists' },
      { start: '2023-04-18T12:00:00', end: '2023-04-18T15:00:00', title: 'Programa Pagado' },
      { start: '2023-04-18T15:00:00', end: '2023-04-18T18:00:00', title: 'La Tendencia de Molusco' },
      { start: '2023-04-18T18:00:00', end: '2023-04-18T24:00:00', title: 'KQ Videos Musicales Top #1' }
    ]
  },
  {
    channel: 'Netflix Eventos',
    schedule: [
      { start: '2023-04-18T00:00:00', end: '2023-04-18T08:00:00', title: 'OFF AIR' },
      { start: '2023-04-18T08:00:00', end: '2023-04-18T23:00:00', title: 'WWE RAW' },
      { start: '2023-04-18T23:00:00', end: '2023-04-18T24:00:00', title: 'OFF AIR' }
    ]
  }
];

app.get('/epg', (req, res) => {
  let epgContent = '<tv>\n';
  
  schedule.forEach(channel => {
    epgContent += `<channel id="${channel.channel.replace(' ', '_')}">\n`;
    epgContent += `  <display-name>${channel.channel}</display-name>\n`;
    epgContent += `  <icon src="https://example.com/logo.png"/>\n`;
    epgContent += `</channel>\n`;
    
    channel.schedule.forEach(program => {
      const start = moment(program.start).format('YYYYMMDDHHmmss Z');
      const end = moment(program.end).format('YYYYMMDDHHmmss Z');
      
      epgContent += `<programme start="${start}" stop="${end}" channel="${channel.channel.replace(' ', '_')}">\n`;
      epgContent += `  <title>${program.title}</title>\n`;
      epgContent += `  <desc>${program.title} en ${channel.channel}</desc>\n`;
      epgContent += `</programme>\n`;
    });
  });

  epgContent += '</tv>';

  res.setHeader('Content-Type', 'application/xml');
  res.send(epgContent);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
