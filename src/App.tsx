import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogApp from "./BlogApp";
import PostDetail from "./PostDetail";
import Contact from "./Contact";

function Header(): React.JSX.Element {
  return (
    <header className="bg-gray-600 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white no-underline">
          Blog
        </Link>
        <Link
          to="/contact"
          className="text-white text-xl hover:text-gray-300 transition-colors duration-200 no-underline"
        >
          お問い合わせ
        </Link>
      </div>
    </header>
  );
}

export default function App(): React.JSX.Element {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BlogApp />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
