// hooks/useBookById.ts
import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export const useBookById = (bookId: string) => {
  return useQuery({
    queryKey: ["book", bookId],
    queryFn: async () => {
      const docRef = doc(db, "books", bookId);
      const snap = await getDoc(docRef);

      if (!snap.exists()) {
        throw new Error("Book not found");
      }

      return { id: snap.id, ...snap.data() };
    },
    enabled: !!bookId, // only run when bookId is available
  });
};
