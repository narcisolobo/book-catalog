import { BookInterface } from '@/types/types';
import { model, models, Schema } from 'mongoose';

const bookSchema = new Schema<BookInterface>(
  {
    title: {
      type: String,
      required: [true, 'Please enter book title.'],
      minLength: [2, 'Book title must be at least two characters.'],
      maxLength: [255, 'Book title must be less than 255 characters.'],
    },
    author: {
      type: String,
      required: [true, 'Please enter book author.'],
      minLength: [2, 'Book author must be at least two characters.'],
      maxLength: [255, 'Book author must be less than 255 characters.'],
    },
    pages: {
      type: Number,
      required: [true, 'Please enter page amount.'],
      min: [2, 'Page amount must be at least two.'],
      max: [10000, 'Page amount be less than 10,000.'],
    },
    isAvailable: {
      type: Boolean,
      required: [true, 'Is this book available?'],
      default: false,
    },
  },
  { timestamps: true }
);

export default models.Book || model<BookInterface>('Book', bookSchema);
