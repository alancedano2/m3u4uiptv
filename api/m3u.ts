import { NextRequest } from 'next/server'

export const config = { runtime: 'edge' }

export default async function handler(req: NextRequest) {
  const channels = [
    {
      name: "KQ105 Radio",
      logo: "https://bloximages.chicago2.vip.townnews.com/kq105.com/content/tncms/custom/image/23c304fa-a5bb-11ee-aed9-ab40ab64f7be.png?resize=990%2C284",
      url: "https://televicentro.streamguys1.com/wkaqfm/playlist.m3u8?..."
    },
    {
      name: "KQ-105 TV",
      logo: "https://bloximages.chicago2.vip.townnews.com/kq105.com/content/tncms/custom/image/23c304fa-a5bb-11ee-aed9-ab40ab64f7be.png?resize=990%2C284",
      url: "https://ssh101stream.ssh101.com/akamaissh101/ssh101/kq105/playlist.m3u8"
    },
    {
      name: "Netflix Eventos",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png",
      url: "https://giatv.bozztv.com/giatv/giatv-PPVDeportes2/PPVDeportes2/playlist.m3u8"
    }
  ];

  let m3u = "#EXTM3U\n";
  for (const c of channels) {
    m3u += `#EXTINF:-1 tvg-logo="${c.logo}",${c.name}\n${c.url}\n`;
  }

  return new Response(m3u, {
    headers: {
      "Content-Type": "application/x-mpegURL",
    },
  })
}
