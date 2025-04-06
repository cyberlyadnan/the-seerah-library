// scripts/uploadAuthors.ts
import { batchCreateAuthors } from "@/hooks/post/useCreateAuthor"; // Adjust the import path as necessary
import { authorsData } from "@/constants/data"; // Adjust the import path as necessary
import { Author } from "@/types/author";

async function uploadAllAuthors() {
  try {
    console.log("Starting author upload process...");
    
    // Transform data to match Firestore schema
    const authorsToUpload = authorsData.map(author => ({
      name: author.name,
      image: author.image,
      designation: author.designation,
      bio: author.bio,
      birthDate: author.birthDate,
      deathDate: author.deathDate || null,
      nationality: author.nationality,
      knownFor: author.knownFor,
      books: author.books,
      notableWorks: author.notableWorks,
      website: author.website || null,
      social: author.social || {}
    }));

    const results = await batchCreateAuthors(authorsToUpload);
    
    console.log("\nUpload results:");
    results.forEach((result, index) => {
      if (result.error) {
        console.error(`❌ ${index + 1}. ${result.name} - Failed: ${result.error}`);
      } else {
        console.log(`✅ ${index + 1}. ${result.name} - Success (ID: ${result.id})`);
      }
    });

    console.log(`\nProcess completed. ${results.filter(r => !r.error).length}/${authorsData.length} authors uploaded successfully.`);
  } catch (error) {
    console.error("Fatal error during author upload:", error);
  }
}

uploadAllAuthors();