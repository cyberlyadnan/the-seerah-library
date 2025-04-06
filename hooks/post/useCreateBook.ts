import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {db} from "@/firebase/firebase"

export async function createBook(bookData: any) {
  try {
    const docRef = await addDoc(collection(db, "books"), {
      ...bookData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    console.log("Book added with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding book:", e);
  }
}
