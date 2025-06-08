// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(prev => !prev);

  const valform = (e) => {
    e.preventDefault();
    // You can add form validation logic here
    console.log("Form submitted");
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-blue-700 text-white p-6 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Library Management System</h1>
        <nav className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Home</a>
          <a href="#login-section" className="hover:underline">Login</a>
          <a href="#catalog" className="hover:underline">Catalog</a>
        </nav>
      </header>

      {/* Intro Section */}
      <section className="text-center py-16 bg-blue-50 px-4">
        <h2 className="text-3xl font-bold text-blue-700">Welcome to SmartLibrary</h2>
        <p className="max-w-xl mx-auto mt-4 text-gray-700">
          Manage your library access with ease. Whether you're a student, librarian, or admin,
          our system helps you find, borrow, and organize books effortlessly.
        </p>
        <a href="#login-section" className="inline-block mt-6 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition">
          Get Started
        </a>
      </section>

      {/* Login Section */}
      <section id="login-section" className="py-16 bg-white flex justify-center">
        <form onSubmit={valform} className="w-full max-w-sm bg-gray-50 shadow-md rounded-lg p-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Login</h2>
          <input type="text" id="name" placeholder="Enter your name" required className="w-full p-3 mb-4 border rounded" />
          <input type="email" id="mail" placeholder="Enter your email" required className="w-full p-3 mb-4 border rounded" />
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              id="pass"
              placeholder="Enter your password"
              required
              className="w-full p-3 border rounded"
            />
            <span onClick={togglePassword} className="absolute right-3 top-3 text-sm text-blue-600 cursor-pointer">
              {showPassword ? "Hide" : "Show"} Password
            </span>
          </div>
          <select id="role" required className="w-full p-3 mb-4 border rounded">
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="librarian">Librarian</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">
            Login
          </button>
        </form>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-gray-100 px-4">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Explore Our Catalog</h2>
        <p className="text-center mb-8 text-gray-700">Browse our library's curated collection of books and resources.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              img: "/Book1.jpg",
              title: "Digital Logic Design",
              author: "M. Morris Mano",
              category: "Engineering",
            },
            {
              img: "/Book2.jpeg",
              title: "Introduction to Algorithms",
              author: "Cormen et al.",
              category: "Computer Science",
            },
            {
              img: "/Book3.jpg",
              title: "Atomic Habits",
              author: "James Clear",
              category: "Self-help",
            },
          ].map((book, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-4 text-center">
              <img src={book.img} alt="Book Cover" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs mb-4">{book.category}</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Borrow</button>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-8">Why Choose SmartLibrary?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
              title: "Tracks Lending",
              text: "Keep a detailed record of who borrowed what and when. Smart tracking prevents losses and improves accountability.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
              title: "Calculates Fine Amounts",
              text: "Automatic fine calculation for late returns ensures fairness while saving manual effort.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png",
              title: "Smart Notifications",
              text: "Get instant alerts on due dates, return reminders, and new arrivals through email or SMS.",
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded-xl shadow">
              <img src={feature.img} alt={feature.title} className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-700">{feature.title}</h3>
              <p className="mt-2 text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-6 text-sm text-gray-700">
        <p>© 2025 SmartLibrary. All rights reserved.</p>
        <p>
          <a href="#" className="text-blue-700 hover:underline">Contact</a> |{" "}
          <a href="#" className="text-blue-700 hover:underline">Privacy</a> |{" "}
          <a href="#" className="text-blue-700 hover:underline">GitHub</a>
        </p>
      </footer>
    </div>
  );
}
