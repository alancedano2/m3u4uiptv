import { NextApiRequest, NextApiResponse } from 'next';

const channels = [
  {
    id: 'KQ105Radio',
    name: 'KQ105 Radio',
    logo: 'https://bloximages.chicago2.vip.townnews.com/kq105.com/content/tncms/custom/image/23c304fa-a5bb-11ee-aed9-ab40ab64f7be.png?resize=990%2C284',
    stream: 'https://streaming-kq105radio.com/live',
    schedule: [
      { start: '20250417T000000Z', stop: '20250417T060000Z', title: 'Carlos Gabriel', desc: 'Carlos Gabriel en vivo.' },
      { start: '20250417T060000Z', stop: '20250417T100000Z', title: 'Héctor Ortiz', desc: 'Programa en vivo con Héctor Ortiz.' },
      { start: '20250417T100000Z', stop: '20250417T150000Z', title: 'Alex Díaz', desc: 'Música y entretenimiento con Alex Díaz.' },
    ],
  },
  {
    id: 'KQ105TV',
    name: 'KQ105 TV',
    logo: 'https://bloximages.chicago2.vip.townnews.com/kq105.com/content/tncms/custom/image/23c304fa-a5bb-11ee-aed9-ab40ab64f7be.png?resize=990%2C284',
    stream: 'https://streaming-kq105tv.com/live',
    schedule: [
      { start: '20250417T000000Z', stop: '20250417T080000Z', title: 'OFF AIR', desc: 'Canal fuera de aire.' },
      { start: '20250417T080000Z', stop: '20250417T100000Z', title: 'KQ Hits', desc: 'Música KQ Hits.' },
      { start: '20250417T100000Z', stop: '20250417T120000Z', title: 'KQ Playlists', desc: 'Playlist de música en vivo.' },
    ],
  },
  {
    id: 'NetflixEventos',
    name: 'Netflix Eventos',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png',
    stream: 'https://streaming-netflixeventos.com/live',
    schedule: [
      { start: '20250417T000000Z', stop: '20250417T200000Z', title: 'OFF AIR', desc: 'Canal fuera de aire.' },
      { start: '20250417T200000Z', stop: '20250417T230000Z', title: 'WWE RAW', desc: 'Evento WWE RAW en vivo.' },
    ],
  },
];

const generateM3U = (channels) => {
  let m3uContent = '#EXTM3U\n';

  channels.forEach(channel => {
    channel.schedule.forEach(program => {
      m3uContent += `#EXTINF:-1 tvg-id="${channel.id}" tvg-name="${channel.name}" tvg-logo="${channel.logo}",${program.title}\n`;
      m3uContent += `${channel.stream}\n`;
    });
  });

  return m3uContent;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const m3uContent = generateM3U(channels);

  res.setHeader('Content-Type', 'application/x-mpegURL');
  res.status(200).send(m3uContent);
};
