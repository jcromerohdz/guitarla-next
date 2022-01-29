import Link from "next/link"; 

const Header = () => {
  return (
    <header>
      <div className='contenedor'>
        <div>

        </div>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/aboutus">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/store">Store</Link>

        </nav>

      </div>

    </header>
  );
};

export default Header;
