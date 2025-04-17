export default function handler(req, res) {
  // Generación del archivo M3U
  const m3uData = `#EXTM3U
#EXTINF:-1, KQ105 Radio
https://televicentro.streamguys1.com/wkaqfm/playlist.m3u8
#EXTINF:-1, KQ105 TV
https://ssh101stream.ssh101.com/akamaissh101/ssh101/kq105/playlist.m3u8
#EXTINF:-1, Netflix Eventos
https://giatv.bozztv.com/giatv/giatv-PPVDeportes2/PPVDeportes2/playlist.m3u8
`;

  res.status(200).send(m3uData);
}
