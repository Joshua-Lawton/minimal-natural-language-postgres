import { generateQuery, runGenerateSQLQuery } from '../aiactions';
import "dotenv/config";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const { input } = req.body;
  try {
    const query = await generateQuery(input);
    const rows = await runGenerateSQLQuery(query);
    res.status(200).json({ rows });
  } catch (e: any) {
    res.status(500).json({ error: e.message || 'Error running query' });
  }
}
