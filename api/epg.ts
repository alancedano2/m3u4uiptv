import { NextRequest } from 'next/server'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export const config = { runtime: 'edge' }

const tz = 'America/Puerto_Rico'

export default async function handler(req: NextRequest) {
  const now = dayjs().tz(tz)
  const today = now.startOf('day')
  const weekday = now.format('dddd').toLowerCase()

  const channels = [
    {
      id: "kq105radio",
      name: "KQ105 Radio",
      schedule: {
        weekday: [
          ["12:00", "06:00", "Carlos Gabriel"],
          ["06:00", "10:00", "Hector Ortiz"],
          ["10:00", "15:00", "Alex Diaz"],
          ["15:00", "18:00", "La Tendencia de Molusco"],
          ["18:00", "19:00", "Pedro Villegas"],
          ["19:00", "00:00", "Edwin Negron"]
        ],
        weekend: [
          ["00:00", "19:00", "KQ-105 Air"],
          ["19:00", "21:00", "Top 20 Countdown con Manolo Castro y Dessire Lowry"],
          ["21:00", "00:00", "KQ-105 Air"]
        ]
      }
    },
    {
      id: "kq105tv",
      name: "KQ-105 TV",
      schedule: {
        weekday: [
          ["00:00", "08:00", "OFF AIR"],
          ["08:00", "10:00", "KQ Hits"],
          ["10:00", "12:00", "KQ Playlists"],
          ["12:00", "15:00", "Programa Pagado"],
          ["15:00", "18:00", "La Tendencia de Molusco"],
          ["18:00", "00:00", "KQ Videos Musicales Top #1"]
        ],
        weekend: [
          ["00:00", "00:00", "OFF AIR"]
        ]
      }
    },
    {
      id: "netflixeventos",
      name: "Netflix Eventos",
      schedule: {
        monday: [
          ["00:00", "20:00", "OFF AIR"],
          ["20:00", "23:00", "WWE RAW"],
          ["23:00", "00:00", "OFF AIR"]
        ],
        tuesday: [
          ["00:00", "20:00", "OFF AIR"],
          ["20:00", "23:00", "WWE NXT"],
          ["23:00", "00:00", "OFF AIR"]
        ],
        wednesday: [
          ["00:00", "24:00", "OFF AIR"]
        ],
        thursday: [
          ["00:00", "24:00", "OFF AIR"]
        ],
        friday: [
          ["00:00", "20:00", "OFF AIR"],
          ["20:00", "23:00", "WWE SmackDown"],
          ["23:00", "00:00", "OFF AIR"]
        ],
        saturday: [
          ["00:00", "24:00", "OFF AIR"]
        ],
        sunday: [
          ["00:00", "24:00", "OFF AIR"]
        ]
      }
    }
  ]

  function timeRange(start: string, end: string) {
    return [
      today.add(+start.split(":")[0], 'hour').add(+start.split(":")[1], 'minute'),
      today.add(+end.split(":")[0], 'hour').add(+end.split(":")[1], 'minute')
    ]
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<tv generator-info-name="EPGmoment">
  ${channels.map(c => {
    const daySchedule = c.schedule[weekday] || c.schedule.weekend
    return daySchedule.map(([start, end, title]) => {
      const [startTime, endTime] = timeRange(start, end)
      return `<programme start="${startTime.format('YYYYMMDDHHmmss')} +0000" stop="${endTime.format('YYYYMMDDHHmmss')} +0000" channel="${c.id}"><title>${title}</title></programme>`
    }).join('\n')
  }).join('\n')}
</tv>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
