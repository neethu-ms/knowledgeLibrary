import { Comment } from './comment';
export class Book{
   id: number;
   name: string;
   author: string;
   price: string;
   location: string;
   status: boolean;
   image: string;
   comments: Comment[];
}
