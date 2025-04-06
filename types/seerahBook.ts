// types/seerahBook.ts
export interface SeerahBook {
    id: number;
    title: string;
    paragraph: string;
    image: string;
    author: {
      name: string;
      image: string;
      designation: string;
    };
    tags: string[];
    publishDate: string;
  }
  