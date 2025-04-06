import { getFirestore, collection, getDocs, orderBy, limit, query } from "firebase/firestore";
import { app } from "@/firebase/firebase";
import { SeerahBook } from "@/types/seerahBook";

const db = getFirestore(app);

export async function getFeaturedBooks() {
  const booksRef = collection(db, "books");
  const q = query(booksRef, orderBy("createdAt", "desc"), limit(8));
  const snapshot = await getDocs(q);

  const books = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as SeerahBook[];

  return books;
}
