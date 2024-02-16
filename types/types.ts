import { Document } from 'mongoose';

interface BookInterface extends Document {
  title: string;
  author: string;
  pages: number;
  isAvailable: boolean;
}

type BookData = {
  title: string;
  author: string;
  pages: number;
  isAvailable: boolean;
};

export { type BookInterface, type BookData };
