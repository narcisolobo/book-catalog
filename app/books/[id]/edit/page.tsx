'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import BookForm from '@/components/books/BookForm';
import { getOneBook, updateBook } from '@/services/book-service';
import { BookData } from '@/types/types';
import { SubmitHandler } from 'react-hook-form';

type Props = {
  params: {
    id: string;
  };
};

function BookEditPage({ params: { id } }: Props) {
  const [bookToEdit, setBookToEdit] = useState<BookData | null>(null);
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getOneBook(id)
      .then((book) => {
        setBookToEdit(book);
        setLoaded(true);
      })
      .catch((err) => {
        throw err;
      });
  });

  const onSubmit: SubmitHandler<BookData> = async (data: BookData) => {
    try {
      await updateBook(id, data);
      router.push(`/books/${id}`);
    } catch (error) {
      throw error;
    }
  };

  return (
    loaded && (
      <BookForm
        buttonText="Edit Book"
        initialBook={bookToEdit!}
        onSubmit={onSubmit}
      />
    )
  );
}

export default BookEditPage;
