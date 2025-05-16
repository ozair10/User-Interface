'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white fixed w-full top-0 z-50 shadow-sm">
        <div className="flex items-center space-x-3">
          <Image src="/kida-logo.png" alt="KIDA Logo" width={40} height={40} />
          <span className="text-xl font-bold text-gray-900 tracking-tight">KIDA</span>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/catalog" className="text-sm text-gray-700 hover:underline">Catalog</Link>
          <Link href="/login" className="text-sm text-gray-700 hover:underline">Sign In</Link>
          <Link href="/register" className="px-4 py-2 text-sm bg-green-700 text-white rounded-md hover:bg-green-800 transition">Register</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mt-24 mb-12 px-6 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="max-w-xl mb-10 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Semantic Intelligence for Agriculture</h1>
          <p className="text-lg text-gray-600 mb-6">
            Explore and query structured agricultural knowledge with ease through our intuitive, graph-powered interface.
          </p>
          <Link href="/catalog" className="inline-block px-6 py-3 bg-green-700 text-white text-sm rounded-md hover:bg-green-800 transition">
            Get Started
          </Link>
        </div>
        <div className="flex justify-center">
          <Image src="/kida-logo.png" alt="KIDA Logo Large" width={240} height={240} />
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3 text-center">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Query Access</h3>
            <p className="text-sm text-gray-600">Use a visual interface to explore RDF datasets. Registered users can build advanced SPARQL queries.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Private Graphs</h3>
            <p className="text-sm text-gray-600">Registered users receive personal, writable graph spaces with the ability to share curated data.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Publishing</h3>
            <p className="text-sm text-gray-600">Data uploads require license acceptance and go through administrator curation before publication.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} KIDA – AI for Food and Agriculture · Powered by CONET
      </footer>

    </div>
  );
}
