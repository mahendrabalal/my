import Link from 'next/link';
import Header from '../components/Header'; // Import Header component
import Footer from '../components/Footer'; // Import Footer component

export default function Home() {
  return (
    <div>
      <Header /> {/* Use Header component */}
      <main>
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my work and get in touch.</p>
        {/* Link to the About page */}
        <Link href="/about">Go to About Page</Link>
      </main>
      <Footer /> {/* Use Footer component */}
    </div>
  );
}
