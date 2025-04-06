import { FieldValue } from "firebase/firestore";

// types/author.ts
export interface Author {
    id?: string; // Optional for new documents
    name: string;
    image: string;
    designation: string;
    bio: string;
    birthDate: string;
    deathDate?: string;
    nationality: string;
    knownFor: string[];
    books: string[];
    notableWorks: string[];
    website?: string;
    social?: {
      twitter?: string;
      wikipedia?: string;
      // other social links
    };
    createdAt?: Date | FieldValue;
    updatedAt?: Date | FieldValue;
  }