import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag, ChevronRight } from 'lucide-react';
import { Header } from './Header';
import { ContactForm } from './ContactForm';
import { articles } from '../data/articles';

export function BlogsPage() {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const sorted = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-white">
      <Header
        links={[
          { label: 'Products', href: '/#products' },
          { label: 'Battery Passport', to: '/products/dbp' },
          { label: 'Blogs', to: '/blogs', active: true },
        ]}
      />

      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-800 font-medium">Blogs</span>
          </div>
          <div className="max-w-3xl">
            <div className="text-blue-600 font-medium text-sm mb-4 tracking-wide uppercase">Insights & Analysis</div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Digital Compliance,
              <br />
              <span className="font-medium">Explained</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              In-depth articles on Digital Product Passports, Battery Passports, CBAM, and the evolving landscape of EU sustainability regulation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((article) => (
              <Link
                key={article.slug}
                to={`/blogs/${article.slug}`}
                className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-200"
              >
                {article.heroImage && (
                  <div className="aspect-[16/10] bg-gray-50 overflow-hidden">
                    <img
                      src={article.heroImage}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-7">
                  <div className="flex items-center space-x-3 text-xs text-gray-500 mb-4">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-medium text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {article.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Read article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">
            Ready to meet your compliance mandate?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            See how TrustTrack turns the regulations described in these articles into a working compliance system for your products.
          </p>
          <button
            onClick={() => setContactFormOpen(true)}
            className="bg-blue-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-600 transition-colors inline-flex items-center"
          >
            Request a Compliance Demo
            <ArrowRight className="ml-3 h-5 w-5" />
          </button>
        </div>
      </section>

      <ContactForm isOpen={contactFormOpen} onClose={() => setContactFormOpen(false)} />
    </div>
  );
}
