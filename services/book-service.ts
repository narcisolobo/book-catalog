'use server';

import { cache } from 'react';
import { revalidatePath } from 'next/cache';
import dbConnect from '@/lib/db-connect';
import Book from '@/models/book-model';
import { BookData, BookInterface } from '@/types/types';

function extractFormData(formData: FormData): BookData {
  const title = formData.get('title')! as string;
  const author = formData.get('author')! as string;
  const pages = formData.get('pages')! as string;
  const isAvailable = formData.get('isAvailable')! as string;

  const bookData: BookData = {
    title,
    author,
    pages: +pages,
    isAvailable: isAvailable === 'true',
  };

  return bookData;
}
async function createBook(bookData: BookData): Promise<BookInterface> {
  try {
    await dbConnect();
    const newBook = await Book.create(bookData);
    revalidatePath('/books');
    return newBook;
  } catch (error) {
    throw error;
  }
}

const getAllBooks = cache(async (): Promise<BookInterface[]> => {
  try {
    await dbConnect();
    const allBooks = await Book.find({});
    return allBooks;
  } catch (error) {
    throw error;
  }
});

const getOneBook = cache(async (bookId: string): Promise<BookInterface> => {
  try {
    await dbConnect();
    const oneBook = await Book.findById(bookId);
    if (!oneBook) {
      throw new Error(`Book with id ${bookId} not found.`);
    }
    return oneBook;
  } catch (error) {
    throw error;
  }
});

async function updateBook(
  bookId: string,
  bookData: BookData
): Promise<BookInterface> {
  try {
    await dbConnect();
    const updatedBook = await Book.findByIdAndUpdate(bookId, bookData, {
      new: true,
      runValidators: true,
    });
    if (!updatedBook) {
      throw new Error(`Book with id ${bookId} not found.`);
    }
    return updatedBook;
  } catch (error) {
    throw error;
  }
}

async function deleteBook(bookId: string): Promise<BookInterface> {
  try {
    await dbConnect();
    const deletedBook = await Book.findByIdAndDelete(bookId);
    if (!deletedBook) {
      throw new Error(`Book with id ${bookId} not found.`);
    }
    revalidatePath('/books');
    return deletedBook;
  } catch (error) {
    throw error;
  }
}

export { createBook, getAllBooks, getOneBook, updateBook, deleteBook };
