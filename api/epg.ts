export default function handler(req, res) {
  // Lógica para generar y enviar el EPG con la programación actual
  const epgData = {
    "channels": [
      {
        "channelName": "KQ105 Radio",
        "schedule": [
          {
            "startTime": "12:00 AM",
            "endTime": "6:00 AM",
            "program": "Carlos Gabriel"
          },
          {
            "startTime": "6:00 AM",
            "endTime": "10:00 AM",
            "program": "Héctor Ortiz"
          },
          {
            "startTime": "10:00 AM",
            "endTime": "3:00 PM",
            "program": "Alex Diaz"
          },
          {
            "startTime": "3:00 PM",
            "endTime": "6:00 PM",
            "program": "La Tendencia de Molusco"
          },
          {
            "startTime": "6:00 PM",
            "endTime": "7:00 PM",
            "program": "Pedro Villegas"
          },
          {
            "startTime": "7:00 PM",
            "endTime": "12:00 AM",
            "program": "Edwin Negron"
          }
        ]
      },
      {
        "channelName": "KQ105 TV",
        "schedule": [
          {
            "startTime": "12:00 AM",
            "endTime": "6:00 AM",
            "program": "Infomerciales"
          },
          {
            "startTime": "6:00 AM",
            "endTime": "10:00 AM",
            "program": "Noticias"
          },
          {
            "startTime": "10:00 AM",
            "endTime": "3:00 PM",
            "program": "Alex Diaz"
          },
          {
            "startTime": "3:00 PM",
            "endTime": "6:00 PM",
            "program": "Infomerciales"
          },
          {
            "startTime": "6:00 PM",
            "endTime": "7:00 PM",
            "program": "Pedro Villegas"
          },
          {
            "startTime": "7:00 PM",
            "endTime": "12:00 AM",
            "program": "Edwin Negron"
          }
        ]
      },
      {
        "channelName": "Netflix Eventos",
        "schedule": [
          {
            "startTime": "12:00 AM",
            "endTime": "8:00 AM",
            "program": "OFF AIR"
          },
          {
            "startTime": "8:00 AM",
            "endTime": "12:00 PM",
            "program": "OFF AIR"
          },
          {
            "startTime": "12:00 PM",
            "endTime": "4:00 PM",
            "program": "OFF AIR"
          },
          {
            "startTime": "4:00 PM",
            "endTime": "8:00 PM",
            "program": "WWE RAW"
          },
          {
            "startTime": "8:00 PM",
            "endTime": "12:00 AM",
            "program": "OFF AIR"
          }
        ]
      }
    ]
  };

  // Enviar los datos EPG como respuesta
  res.status(200).json(epgData);
}
