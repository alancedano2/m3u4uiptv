import { VercelRequest, VercelResponse } from '@vercel/node';

// Handler para servir el archivo EPG
export default function handler(req: VercelRequest, res: VercelResponse) {
  // Generación del contenido EPG en formato XML
  const epgXml = `<?xml version="1.0" encoding="UTF-8"?>
  <tv>
      <!-- Canal KQ105 Radio -->
      <channel id="KQ105Radio">
          <display-name>KQ105 Radio</display-name>
          <logo src="https://bloximages.chicago2.vip.townnews.com/kq105.com/content/tncms/custom/image/23c304fa-a5bb-11ee-aed9-ab40ab64f7be.png?resize=990%2C284"/>
      </channel>
  
      <!-- Programación de KQ105 Radio -->
      <programme start="20250417T000000Z" stop="20250417T060000Z" channel="KQ105Radio">
          <title lang="es">Carlos Gabriel</title>
          <desc lang="es">Carlos Gabriel en vivo.</desc>
      </programme>
      <programme start="20250417T060000Z" stop="20250417T100000Z" channel="KQ105Radio">
          <title lang="es">Héctor Ortiz</title>
          <desc lang="es">Programa en vivo con Héctor Ortiz.</desc>
      </programme>
      <programme start="20250417T100000Z" stop="20250417T150000Z" channel="KQ105Radio">
          <title lang="es">Alex Díaz</title>
          <desc lang="es">Música y entretenimiento con Alex Díaz.</desc>
      </programme>
      <programme start="20250417T150000Z" stop="20250417T180000Z" channel="KQ105Radio">
          <title lang="es">La Tendencia de Molusco</title>
          <desc lang="es">El show de Molusco, entretenimiento y noticias.</desc>
      </programme>
      <programme start="20250417T180000Z" stop="20250417T190000Z" channel="KQ105Radio">
          <title lang="es">Pedro Villegas</title>
          <desc lang="es">Pedro Villegas con música y temas interesantes.</desc>
      </programme>
      <programme start="20250417T190000Z" stop="20250417T240000Z" channel="KQ105Radio">
          <title lang="es">Edwin Negrón</title>
          <desc lang="es">El show nocturno con Edwin Negrón.</desc>
      </programme>
  
      <!-- Canal KQ105 TV -->
      <channel id="KQ105TV">
          <display-name>KQ105 TV</display-name>
          <logo src="https://bloximages.chicago2.vip.townnews.com/kq105.com/content/tncms/custom/image/23c304fa-a5bb-11ee-aed9-ab40ab64f7be.png?resize=990%2C284"/>
      </channel>
  
      <!-- Programación de KQ105 TV -->
      <programme start="20250417T000000Z" stop="20250417T080000Z" channel="KQ105TV">
          <title lang="es">OFF AIR</title>
          <desc lang="es">Canal fuera de aire.</desc>
      </programme>
      <programme start="20250417T080000Z" stop="20250417T100000Z" channel="KQ105TV">
          <title lang="es">KQ Hits</title>
          <desc lang="es">Música KQ Hits.</desc>
      </programme>
      <programme start="20250417T100000Z" stop="20250417T120000Z" channel="KQ105TV">
          <title lang="es">KQ Playlists</title>
          <desc lang="es">Playlist de música en vivo.</desc>
      </programme>
      <programme start="20250417T120000Z" stop="20250417T150000Z" channel="KQ105TV">
          <title lang="es">Programa Pagado</title>
          <desc lang="es">Publicidad y anuncios de marcas.</desc>
      </programme>
      <programme start="20250417T150000Z" stop="20250417T180000Z" channel="KQ105TV">
          <title lang="es">La Tendencia de Molusco</title>
          <desc lang="es">El show de Molusco en TV.</desc>
      </programme>
      <programme start="20250417T180000Z" stop="20250417T240000Z" channel="KQ105TV">
          <title lang="es">KQ Videos Musicales Top #1</title>
          <desc lang="es">Los mejores videos musicales del momento.</desc>
      </programme>
  
      <!-- Canal Netflix Eventos -->
      <channel id="NetflixEventos">
          <display-name>Netflix Eventos</display-name>
          <logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png"/>
      </channel>
  
      <!-- Programación de Netflix Eventos -->
      <programme start="20250417T000000Z" stop="20250417T200000Z" channel="NetflixEventos">
          <title lang="es">OFF AIR</title>
          <desc lang="es">Canal fuera de aire.</desc>
      </programme>
      <programme start="20250417T200000Z" stop="20250417T230000Z" channel="NetflixEventos">
          <title lang="es">WWE RAW</title>
          <desc lang="es">Evento WWE RAW en vivo.</desc>
      </programme>
      <programme start="20250417T230000Z" stop="20250417T240000Z" channel="NetflixEventos">
          <title lang="es">OFF AIR</title>
          <desc lang="es">Canal fuera de aire.</desc>
      </programme>
  </tv>`;

  // Configura la respuesta como XML
  res.setHeader('Content-Type', 'application/xml');
  
  // Envía la respuesta con el contenido del EPG
  res.status(200).send(epgXml);
}
