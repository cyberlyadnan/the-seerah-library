// lib/firebase/authors.ts
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { Author } from "@/types/author";

export async function getAuthorById(authorId: string): Promise<Author | null> {
  try {
    const authorRef = doc(db, "authors", authorId);
    const authorSnap = await getDoc(authorRef);

    if (authorSnap.exists()) {
      const data = authorSnap.data();

      const author: Author = {
        id: authorSnap.id,
        name: data.name,
        image: data.image,
        designation: data.designation,
        bio: data.bio,
        birthDate: data.birthDate,
        deathDate: data.deathDate || undefined,
        nationality: data.nationality,
        knownFor: data.knownFor || [],
        books: data.books || [],
        notableWorks: data.notableWorks || [],
        website: data.website || undefined,
        social: {
          twitter: data.social?.twitter || undefined,
          wikipedia: data.social?.wikipedia || undefined,
        },
        createdAt: data.createdAt?.toDate() || undefined,
        updatedAt: data.updatedAt?.toDate() || undefined,
      };
      console.log("Author data:", author); // Debugging line    
      return author;
    }

    return null;
  } catch (error) {
    console.error("Error fetching author:", error);
    return null;
  }
}
