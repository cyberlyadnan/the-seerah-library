// async function sequentialCreateAuthors(authors: Omit<Author, 'id'>[]) {
  //   const results = [];
    
  //   for (const author of authors) {
  //     try {
  //       const authorId = await createAuthor(author);
  //       results.push({ ...author, id: authorId });
  //       console.log(`Uploaded ${author.name}`);
  //     } catch (error) {
  //       console.error(`Failed to upload ${author.name}:`, error);
  //       results.push({ ...author, error: String(error) });
  //     }
  //   }
    
  //   return results;
    
  // }
  // sequentialCreateAuthors(authorsData).then((results) => {
  //   console.log("All authors processed:", results);
  // } );