import "dotenv/config";
// Minimal Express server with a web page for natural language SQL queries
import express from 'express';
import bodyParser from 'body-parser';
import { generateQuery, runGenerateSQLQuery } from './aiactions';

const app = express();
const port = 3123;


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// The static middleware now serves index.html at '/'

// Handle query requests
app.post('/query', async (req: any, res: any) => {
  const { input } = req.body;
  try {
    const query = await generateQuery(input);
    const rows = await runGenerateSQLQuery(query);
    res.json({ rows });
  } catch (e: any) {
    res.json({ error: e.message || 'Error running query' });
  }
});

app.listen(port, () => {
  console.log(`Web server running at http://localhost:${port}`);
});
