'use client';

import { deleteBook } from '@/services/book-service';
import { useRouter } from 'next/navigation';

type Props = {
  bookId: string;
};

function BookDeleteModal({ bookId }: Props) {
  const router = useRouter();
  const handleDelete = () => {
    deleteBook(bookId)
      .then(() => router.push('/books'))
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div
      className="modal"
      tabIndex={-1}
      id={`book-delete-${bookId}`}
      aria-labelledby={`book-delete-${bookId}-title`}
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`book-delete-${bookId}-title`}>
              Confirm Deletion
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this book?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDeleteModal;
