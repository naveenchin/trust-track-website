import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Clock, Tag, ArrowLeft, ArrowRight, ChevronRight, ExternalLink } from 'lucide-react';
import { Header } from './Header';
import { ContactForm } from './ContactForm';
import { getArticleBySlug, articles, ArticleBlock } from '../data/articles';

function renderBlock(block: ArticleBlock, index: number) {
  switch (block.type) {
    case 'heading2':
      return (
        <h2 key={index} className="text-2xl font-medium text-gray-900 mt-12 mb-4 leading-snug">
          {block.content}
        </h2>
      );
    case 'heading3':
      return (
        <h3 key={index} className="text-xl font-medium text-gray-900 mt-8 mb-3 leading-snug">
          {block.content}
        </h3>
      );
    case 'paragraph':
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-5 text-lg">
          {block.content}
        </p>
      );
    case 'quote':
      return (
        <blockquote key={index} className="my-8 border-l-4 border-blue-500 pl-6 pr-4 py-2">
          <p className="text-gray-800 text-lg font-medium leading-relaxed italic">
            {block.content}
          </p>
        </blockquote>
      );
    case 'bullet-list':
      return (
        <ul key={index} className="my-5 space-y-2 pl-1">
          {block.items?.map((item, i) => (
            <li key={i} className="flex items-start space-x-3 text-gray-700 text-lg leading-relaxed">
              <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'image':
      return (
        <figure key={index} className="my-10">
          <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
            <img src={block.src} alt={block.caption || ''} className="w-full h-auto" loading="lazy" />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-sm text-gray-500 text-center italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case 'link-ref':
      return (
        <a
          key={index}
          href={block.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group my-4 flex items-center justify-between p-4 bg-blue-50 border border-blue-100 rounded-xl hover:border-blue-300 hover:bg-blue-100/60 transition-colors"
        >
          <span className="text-blue-700 font-medium text-sm break-all pr-4">{block.label}</span>
          <ExternalLink className="h-4 w-4 text-blue-500 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
        </a>
      );
    case 'divider':
      return <hr key={index} className="my-10 border-gray-200" />;
    default:
      return null;
  }
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/blogs" replace />;
  }

  const currentIndex = articles.findIndex(a => a.slug === slug);
  const prevArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;
  const nextArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;

  return (
    <div className="min-h-screen bg-white">
      <Header
        links={[
          { label: 'Products', href: '/#products' },
          { label: 'Battery Passport', to: '/products/dbp' },
          { label: 'Blogs', to: '/blogs', active: true },
        ]}
      />

      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-gray-700 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/blogs" className="hover:text-gray-700 transition-colors">Blogs</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-800 font-medium truncate max-w-xs">{article.title}</span>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <span>{article.date}</span>
            <span>·</span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-5 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">{article.subtitle}</p>

          <div className="flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag} className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium">
                <Tag className="h-3 w-3 mr-1.5" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {article.heroImage && (
        <div className="bg-white pt-10">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
              <img src={article.heroImage} alt={article.title} className="w-full h-auto" />
            </div>
          </div>
        </div>
      )}

      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {article.blocks.map((block, index) => renderBlock(block, index))}
        </div>
      </article>

      <section className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevArticle && (
              <Link
                to={`/blogs/${prevArticle.slug}`}
                className="group flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <ArrowLeft className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs text-gray-500 mb-1">Previous article</div>
                  <div className="text-sm font-medium text-gray-800 leading-snug group-hover:text-blue-600 transition-colors">
                    {prevArticle.title}
                  </div>
                </div>
              </Link>
            )}
            {nextArticle && (
              <Link
                to={`/blogs/${nextArticle.slug}`}
                className="group flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-sm transition-all md:ml-auto text-right"
              >
                <div>
                  <div className="text-xs text-gray-500 mb-1">Next article</div>
                  <div className="text-sm font-medium text-gray-800 leading-snug group-hover:text-blue-600 transition-colors">
                    {nextArticle.title}
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/blogs"
              className="inline-flex items-center text-gray-500 hover:text-gray-700 font-medium transition-colors text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              All articles
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-4">
            Want to see this in practice?
          </h2>
          <p className="text-gray-400 mb-8">
            TrustTrack turns the compliance frameworks described in this article into a working system for your products.
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
