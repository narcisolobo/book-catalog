import Link from 'next/link';
import NavLink from './NavLink';

const navLinks = [
  { id: 1, href: '/books', label: 'Catalog' },
  { id: 2, href: '/books/new', label: 'Add Book' },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Book Catalog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((navlink) => (
              <li className="nav-item" key={navlink.id}>
                <NavLink href={navlink.href}>{navlink.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
