// pages/projects.tsx
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        <p className="text-lg">
          Here are some of my notable projects:
        </p>
        {/* List your projects here */}
      </main>
      <Footer />
    </div>
  );
}
