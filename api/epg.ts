import { VercelRequest, VercelResponse } from '@vercel/node';
import path from 'path';
import fs from 'fs';

export default (req: VercelRequest, res: VercelResponse) => {
  const filePath = path.join(__dirname, '../epg.xml');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error al leer el archivo EPG');
      return;
    }
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(data);
  });
};
