// lib/firebase/authors.ts
import { collection, addDoc, serverTimestamp, writeBatch, doc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { Author } from "@/types/author";

export async function createAuthor(authorData: Omit<Author, 'id'>) {
  try {
    const docRef = await addDoc(collection(db, "authors"), {
      ...authorData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding author:", e);
    throw e;
  }
}

export async function batchCreateAuthors(authors: Omit<Author, 'id'>[]) {
  const batch = writeBatch(db);
  const authorsRef = collection(db, "authors");
  const results: {name: string; id?: string; error?: string}[] = [];

  try {
    // Add all authors to batch
    authors.forEach(author => {
      const docRef = doc(authorsRef); // Create new doc reference
      batch.set(docRef, {
        ...author,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      results.push({ name: author.name, id: docRef.id });
    });

    // Commit the batch
    await batch.commit();
    console.log(`${authors.length} authors added successfully`);
    return results;
  } catch (error) {
    console.error("Error adding authors:", error);
    throw error;
  }
}


