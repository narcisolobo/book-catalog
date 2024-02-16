import Link from 'next/link';

function Hero() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">Book Catalog</h1>
      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link className="btn btn-primary btn-lg px-4" href="/books">
            Go to Catalog
          </Link>
          <Link className="btn btn-primary btn-lg px-4" href="/books/new">
            Add Book
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
