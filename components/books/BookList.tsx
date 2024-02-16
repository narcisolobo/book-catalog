import Link from 'next/link';
import { getAllBooks } from '@/services/book-service';
import BookDeleteButton from './BookDeleteButton';

export const revalidate = 3600;

async function BookList() {
  const books = await getAllBooks();

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Title:</th>
          <th>Author:</th>
          <th>Page Count:</th>
          <th>Availability:</th>
          <th>Actions:</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book._id.toString()}>
            <td className="align-middle">
              <Link href={`/books/${book._id}`}>{book.title}</Link>
            </td>
            <td className="align-middle">{book.author}</td>
            <td className="align-middle">{book.pages}</td>
            <td className="align-middle">
              {book.isAvailable ? 'Available' : 'Not available'}
            </td>
            <td className="align-middle d-flex align-items-center gap-2">
              <a
                href={`/books/${book.id}/edit`}
                className="btn btn-sm btn-outline-primary">
                Edit
              </a>
              <BookDeleteButton bookId={book._id.toString()} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookList;
