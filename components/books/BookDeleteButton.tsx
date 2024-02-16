'use client';
import { Fragment } from 'react';
import BookDeleteModal from './BookDeleteModal';

type Props = {
  bookId: string;
};

function BookDeleteButton({ bookId }: Props) {
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-sm btn-outline-danger"
        data-bs-toggle="modal"
        data-bs-target={`#book-delete-${bookId}`}>
        Delete
      </button>
      <BookDeleteModal bookId={bookId} />
    </Fragment>
  );
}

export default BookDeleteButton;
