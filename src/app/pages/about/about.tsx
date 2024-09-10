import Header from '../../components/Header'; // Import Header component
import Footer from '../../components/Footer'; // Import Footer component

export default function About() {
  return (
    <div>
      <Header /> {/* Use Header component */}
      <main>
        <h1>About Us</h1>
        <p>This is the about page.</p>
      </main>
      <Footer /> {/* Use Footer component */}
    </div>
  );
}
