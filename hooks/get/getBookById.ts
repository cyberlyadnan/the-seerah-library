// lib/firebase/books.ts
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { SeerahBook } from "@/types/seerahBook";

export async function getBookById(bookId: string): Promise<SeerahBook | null> {
  try {
    const bookRef = doc(db, "books", bookId);
    const bookSnap = await getDoc(bookRef);

    if (bookSnap.exists()) {
      const data = bookSnap.data();
      console.log("Book data:", data); // Debugging line
      return {
        id: bookSnap.id,
        title: data.title,
        description: data.description,
        coverImage: data.coverImage,
        tags: data.tags || [],
        publishDate: data.publishDate,
        language: data.language || "English",
        genre: data.genre || [],
        author: data.author, // This could be just authorId if you fetch separately
        isFeatured: data.isFeatured || false,
        rating: data.rating || 0,
        totalRatings: data.totalRatings || 0,
        totalReviews: data.totalReviews || 0,
        createdAt: data.createdAt?.toDate(),
        updatedAt: data.updatedAt?.toDate()
      };
    }
    return null;
  } catch (error) {
    console.error("Error getting book:", error);
    return null;
  }
}