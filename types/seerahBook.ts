import { Author } from "./author";

// This file defines the types for the Seerah Book data model.  
  export interface SeerahBook {
    id: string; // Changed from number to string to match Firebase ID
    title: string;
    description: string; // Changed from 'paragraph'
    coverImage: string; // Changed from 'image'
    authorId: string; // Reference to author document
    author?: Author; // Optional populated author data
    tags: string[];
    publishDate: string;
    language: string;
    genre: string[];
    isFeatured: boolean;
    rating: number;
    totalRatings: number;
    totalReviews: number;
    createdAt: Date | FirebaseTimestamp;
    updatedAt: Date | FirebaseTimestamp;
  }
  
  type FirebaseTimestamp = {
    seconds: number;
    nanoseconds: number;
  };