import { db } from "@/firebase/firebase";

export default async function handler(req, res) {
  const user = await db.collection("notes").get();

  const noteName = [...user.docs].map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    };
  });

  /*if (!user.exists) {
    return res.status(404).json({});
  }*/

  return res.status(404).json({noteName});
}