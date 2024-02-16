import { Fragment } from 'react';
import { getOneBook } from '@/services/book-service';
import { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const book = await getOneBook(id);
  return {
    title: `Book Details: ${book.title}`,
  };
}

async function BookDetailsPage({ params: { id } }: Props) {
  const book = await getOneBook(id);
  return (
    <Fragment>
      <h1 className="display-3 my-3">Book Details: {book.title}</h1>
      <div className="card shadow">
        <div className="card-body">
          <p className="card-text">
            <strong>Title: </strong>
            {book.title}
          </p>
          <p className="card-text">
            <strong>Author: </strong>
            {book.author}
          </p>
          <p className="card-text">
            <strong>Pages: </strong>
            {book.pages}
          </p>
          <p className="card-text">
            This book{' '}
            <strong>{book.isAvailable ? 'is' : 'is not'} available</strong>.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
export default BookDetailsPage;
