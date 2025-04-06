// hooks/useLatestBooks.ts
import { useState } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { SeerahBook } from '@/types/seerahBook';

const useLatestBooks = () => {
  const [books, setBooks] = useState<SeerahBook[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLatestBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const booksRef = collection(db, 'books');
      const q = query(
        booksRef,
        orderBy('createdAt', 'desc'),
        limit(20)
      );

      const querySnapshot = await getDocs(q);
      
      const booksData: SeerahBook[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title || 'Untitled',
          description: data.description || '',
          coverImage: data.coverImage || '/default-book.jpg',
          tags: data.tags || [],
          publishDate: data.publishDate || 'Unknown',
          author: data.author || { 
            name: 'Unknown Author', 
            image: '', 
            designation: '' 
          },
          rating: data.rating || 0,
          createdAt: data.createdAt?.toDate() || new Date(),
        };
      });

      setBooks(booksData);
      return booksData; // Return the data for optional use
    } catch (err) {
      console.error('Error fetching latest books:', err);
      setError('Failed to load books. Please try again.');
      throw err; // Re-throw if you want to handle the error in the calling code
    } finally {
      setLoading(false);
    }
  };

  return { 
    books, 
    loading, 
    error, 
    fetchLatestBooks // Now the fetch function is exposed
  };
};

export default useLatestBooks;