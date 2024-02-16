'use client';

import { Fragment } from 'react';
import { BookData } from '@/types/types';
import BookForm from '@/components/books/BookForm';
import { createBook } from '@/services/book-service';
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

function AddBookPage() {
  const router = useRouter();

  const emptyBook: BookData = {
    title: '',
    author: '',
    pages: 0,
    isAvailable: false,
  };

  const onSubmit: SubmitHandler<BookData> = async (data: BookData) => {
    try {
      await createBook(data);
      router.push('/books');
    } catch (error) {
      throw error;
    }
  };

  return (
    <Fragment>
      <h1 className="display-3 my-3">Add Book</h1>
      <BookForm
        buttonText="Add Book"
        initialBook={emptyBook}
        onSubmit={onSubmit}
      />
    </Fragment>
  );
}
export default AddBookPage;
