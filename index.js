module.exports = (req, res) => {
  const { pathname } = req.url;

  if (pathname === '/playlist.m3u') {
    res.setHeader('Content-Type', 'audio/x-mpegurl');
    res.send(`
#EXTM3U
#EXTINF:-1, Canal 1
https://miservidor.com/canal1
#EXTINF:-1, Canal 2
https://miservidor.com/canal2
    `);
  } else if (pathname === '/epg.xml') {
    res.setHeader('Content-Type', 'application/xml');
    res.send(`
<?xml version="1.0" encoding="UTF-8"?>
<tv>
  <channel id="canal1">
    <display-name>Canal 1</display-name>
  </channel>
  <programme start="20250418080000 +0000" stop="20250418083000 +0000" channel="canal1">
    <title>Noticiero</title>
    <desc>Últimas noticias del día</desc>
  </programme>
  <channel id="canal2">
    <display-name>Canal 2</display-name>
  </channel>
  <programme start="20250418083000 +0000" stop="20250418100000 +0000" channel="canal2">
    <title>Deportes</title>
    <desc>Resumen deportivo</desc>
  </programme>
</tv>
    `);
  } else {
    res.status(404).send('Not Found');
  }
};
