import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export async function createAuthor(authorData: any) {
  try {
    const docRef = await addDoc(collection(db, "authors"), {
      ...authorData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    console.log("Author added with ID:", docRef.id);
  } catch (e) {
    console.error("Error adding author:", e);
  }
}
