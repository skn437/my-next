import { db } from '@/firebase/firebase';
import { NextApiRequest, NextApiResponse } from 'next';

const Entries = async (
  req: NextApiRequest, 
  res: NextApiResponse
  ) => {
    try {
      const snapshot = await db.collection('notes').orderBy("createdAt", "desc").get();
      const entriesData = snapshot.docs.map(entry => ({
        id: entry.id,
        ...entry.data()
      }));
      res.status(200).json(entriesData);
    } catch (err) {
        res.status(400).end();
      }
};

export default Entries;