'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-50 text-black">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-white shadow-sm fixed w-full top-0 z-30 border-b border-gray-300">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="KIDA Logo" width={40} height={40} />
          <span className="text-2xl font-bold">Knowledge Graph Navigator</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#catalog" className="text-sm px-4 py-2 hover:underline">Browse as Guest</a>
          <a href="#signin" className="text-sm px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">Sign In</a>
          <a href="#register" className="text-sm px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">Register</a>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="pt-24"></div>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-32 bg-gray-100">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">Explore, Query, Curate</h1>
        <p className="text-lg text-gray-700 mb-8">
          Your gateway to agricultural knowledge: public access, private collaboration.
        </p>
        <div className="w-full max-w-xl">
          <input
            type="text"
            placeholder="Search the catalog..."
            className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </section>

      {/* Access Levels Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          {/* Guest Users */}
          <div className="border rounded-xl p-8 hover:shadow-md transition">
            <h3 className="text-2xl font-bold mb-4">Guest Users</h3>
            <p className="text-gray-600">
              Search and explore metadata without registration. Visualize datasets. Download public results.
              Full-text search available in Catalog.
            </p>
          </div>

          {/* Registered Users */}
          <div className="border rounded-xl p-8 hover:shadow-md transition">
            <h3 className="text-2xl font-bold mb-4">Registered Users</h3>
            <p className="text-gray-600">
              Define SPARQL queries, create private visualizations, manage personal graphs.
              Upload new RDF data (CC-BY license required).
            </p>
          </div>

          {/* Admin Approval */}
          <div className="border rounded-xl p-8 hover:shadow-md transition">
            <h3 className="text-2xl font-bold mb-4">Administrator Approval</h3>
            <p className="text-gray-600">
              Registrations reviewed by Admin. Roles assigned. Uploaded content curated before being integrated into shared graphs.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Knowledge Graph Catalog</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Access a growing collection of structured agricultural knowledge.
          Visualize, search, and download curated datasets.
        </p>
        <a
          href="#signin"
          className="px-8 py-4 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition"
        >
          Browse as Guest
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-300 p-6 text-center text-gray-500 text-sm">
        &copy; 2025 Knowledge Graph Navigator | Powered by CONET
      </footer>

    </div>
  );
}
