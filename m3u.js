// m3u.js
const express = require('express');
const app = express();

// Canal M3U
const channels = [
  {
    name: 'KQ105 Radio',
    url: 'https://televicentro.streamguys1.com/wkaqfm/playlist.m3u8?listeningSessionID=6557d57d3d1a82ad_42914703_GIGC3M1Z_MjE2LjI0Ni42MC4yNg!!_0000003qjCt&downloadSessionID=0&key=88245e45637ae0b9d1b336e48bc005b61ac7df65286a5f69e1b33f2deb57bf9b&aw_0_1st.playerId=kq105&source=kq105.com&us_privacy=1YNY&clientType=web&callLetters=WKAQ-FM&devicename=web-desktop&stationid=1846&dist=kq105.com&subscription_type=free&aw_0_1st.version=1.0_html5&aw_0_1st.playerid=kq105_floating_player',
    logo: 'https://bloximages.chicago2.vip.townnews.com/kq105.com/content/tncms/custom/image/23c304fa-a5bb-11ee-aed9-ab40ab64f7be.png?resize=990%2C284'
  },
  {
    name: 'KQ-105 TV',
    url: 'https://ssh101stream.ssh101.com/akamaissh101/ssh101/kq105/playlist.m3u8',
    logo: 'https://bloximages.chicago2.vip.townnews.com/kq105.com/content/tncms/custom/image/23c304fa-a5bb-11ee-aed9-ab40ab64f7be.png?resize=990%2C284'
  },
  {
    name: 'Netflix Eventos',
    url: 'https://giatv.bozztv.com/giatv/giatv-PPVDeportes2/PPVDeportes2/playlist.m3u8',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png'
  }
];

app.get('/m3u', (req, res) => {
  let m3uContent = '#EXTM3U\n';
  
  channels.forEach(channel => {
    m3uContent += `#EXTINF:-1, ${channel.name}\n`;
    m3uContent += `${channel.url}\n`;
  });

  res.setHeader('Content-Type', 'application/x-mpegURL');
  res.send(m3uContent);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
