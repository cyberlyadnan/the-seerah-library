import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/firebase";

// Your existing function
export async function createBook(bookData: any) {
  try {
    const { createdAt, updatedAt, ...sanitizedBook } = bookData; // Remove invalid Timestamp objects
    const docRef = await addDoc(collection(db, "books"), {
      ...sanitizedBook,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    console.log(`✅ Book added successfully: ${sanitizedBook.title} → ID: ${docRef.id}`);
  } catch (error) {
    console.error(`❌ Error adding book: ${bookData.title}`, error);
  }
}
