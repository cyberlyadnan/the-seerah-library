import { useState, useCallback } from "react";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  getFirestore,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { app } from "@/firebase/firebase"; // your firebase client config

const db = getFirestore(app);

export function useBooks(initialBooks: any[] = [], initialLastDoc: any = null) {
  const [books, setBooks] = useState(initialBooks);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(initialLastDoc);
  const [loading, setLoading] = useState(false);

  const fetchMoreBooks = useCallback(async () => {
    setLoading(true);
    const booksRef = collection(db, "books");
    const bookQuery = query(
      booksRef,
      orderBy("createdAt", "desc"),
      startAfter(lastDoc),
      limit(8)
    );

    const snapshot = await getDocs(bookQuery);
    const newBooks: any[] = [];
    snapshot.forEach((doc) => {
      newBooks.push({ id: doc.id, ...doc.data() });
    });

    setBooks((prev) => [...prev, ...newBooks]);
    setLastDoc(snapshot.docs[snapshot.docs.length - 1] || null);
    setLoading(false);
  }, [lastDoc]);

  return {
    books,
    fetchMoreBooks,
    loading,
  };
}
