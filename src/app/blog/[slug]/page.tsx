import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, MessageSquare, Phone, BookOpen, ChevronRight } from "lucide-react";
import { blogs, BlogPost } from "@/data/blogs";
import FAQSection from "@/components/FAQSection";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static routes for all blog posts
export async function generateStaticParams() {
  return blogs.map(b => ({
    slug: b.slug
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = blogs.find(b => b.slug.toLowerCase() === resolvedParams.slug.toLowerCase());
  if (!post) return {};

  return {
    title: `${post.title} | AJ Safe Net Solutions`,
    description: post.metaDesc,
    keywords: post.keywords,
    alternates: {
      canonical: `https://www.ajsafenetsolutions.com/blog/${post.slug}`
    },
    openGraph: {
      title: `${post.title} | AJ Safe Net Solutions`,
      description: post.metaDesc,
      url: `https://www.ajsafenetsolutions.com/blog/${post.slug}`,
      images: [`https://www.ajsafenetsolutions.com/images/${post.featuredImage}`],
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogs.find(b => b.slug.toLowerCase() === resolvedParams.slug.toLowerCase());
  if (!post) notFound();

  const phone = "+918121488961";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone.replace("+", "")}&text=Hi,%20I%20read%20your%20blog%20post%20about%20"${encodeURIComponent(post.title)}".%20Please%20contact%20me.`;

  // Get dynamic headings for Table of Contents
  const tocItems = post.sections
    .filter(s => s.type === "heading2" || s.type === "heading3")
    .map(s => {
      const text = s.content as string;
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return { text, id, type: s.type };
    });

  // Get related posts (exclude current)
  const relatedPosts = blogs.filter(b => b.slug !== post.slug).slice(0, 2);

  // BlogPosting Schema JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://www.ajsafenetsolutions.com/images/${post.featuredImage}`,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author.split(",")[0]
    },
    "description": post.excerpt,
    "publisher": {
      "@type": "Organization",
      "name": "AJ Safe Net Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ajsafenetsolutions.com/images/ajslogo.webp"
      }
    }
  };

  return (
    <article className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 space-y-12 animate-fade-reveal">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Back button */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xxs font-bold text-gray-500 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog Listings
        </Link>
      </div>

      {/* Header Info */}
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-2xl md:text-5xl font-extrabold font-sora text-navy tracking-tight leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-xxs md:text-xs text-gray-500 font-semibold border-b border-gray-100 pb-6">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-primary" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-primary" />
            Published {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" />
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Grid: TOC & Content Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Table of Contents (Sticky on desktop) */}
        {tocItems.length > 0 && (
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 bg-gray-50/50 p-6 rounded-2xl border border-gray-100 hidden lg:block">
            <h3 className="font-extrabold font-sora text-navy text-sm uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-primary" />
              Table of Contents
            </h3>
            <ul className="space-y-3 text-xxs font-semibold">
              {tocItems.map(item => (
                <li 
                  key={item.id}
                  className={`pl-1.5 ${item.type === "heading3" ? "ml-4 border-l border-gray-200" : ""}`}
                >
                  <a 
                    href={`#${item.id}`}
                    className="text-gray-600 hover:text-primary transition-colors hover:underline block leading-tight"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Right Side: Article Body Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Featured Image */}
          <div className="relative h-64 sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src={`/images/${post.featuredImage}`}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>

          {/* Main Content Render */}
          <div className="prose prose-sm md:prose-base max-w-none text-gray-705 space-y-6 leading-relaxed font-medium text-xs md:text-sm">
            {post.sections.map((section, idx) => {
              if (section.type === "heading2") {
                const text = section.content as string;
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                return (
                  <h2 
                    key={idx} 
                    id={id} 
                    className="text-xl md:text-3xl font-bold font-sora text-navy pt-6 border-b border-gray-150 pb-2 scroll-mt-24"
                  >
                    {text}
                  </h2>
                );
              }

              if (section.type === "heading3") {
                const text = section.content as string;
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                return (
                  <h3 
                    key={idx} 
                    id={id} 
                    className="text-base md:text-xl font-bold font-sora text-navy pt-4 scroll-mt-24"
                  >
                    {text}
                  </h3>
                );
              }

              if (section.type === "list") {
                const listItems = section.content as string[];
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-2 text-gray-600">
                    {listItems.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                );
              }

              if (section.type === "table") {
                const tableData = section.content as { headers: string[]; rows: string[][] };
                return (
                  <div key={idx} className="overflow-x-auto rounded-xl border border-gray-150 shadow-sm bg-white my-6">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-navy text-white text-xxs font-bold uppercase tracking-wider">
                          {tableData.headers.map((h, i) => (
                            <th key={i} className="p-3 font-semibold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-xxs md:text-xs">
                        {tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-gray-50/50">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3 font-medium text-gray-700">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }

              return (
                <p key={idx} className="text-gray-600">
                  {section.content as string}
                </p>
              );
            })}
          </div>

          {/* Quick Action Box inside Article */}
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 my-8">
            <div>
              <h4 className="font-bold font-sora text-navy text-sm md:text-base">
                Have safety net queries?
              </h4>
              <p className="text-xxs text-gray-500 mt-1">
                Consult Owner Ajay directly on call or WhatsApp for instant professional recommendations.
              </p>
            </div>
            <div className="shrink-0 flex gap-2 w-full sm:w-auto">
              <a
                href={`tel:${phone}`}
                className="flex-grow sm:flex-grow-0 text-center bg-primary hover:bg-primary-dark text-white font-bold py-2.5 px-5 rounded-full text-xxs md:text-xs transition-all cursor-pointer"
              >
                Call Ajay
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow sm:flex-grow-0 text-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 px-5 rounded-full text-xxs md:text-xs transition-all cursor-pointer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Specific to the Post */}
      {post.faqs.length > 0 && (
        <section className="border-t border-gray-100 pt-10">
          <FAQSection 
            items={post.faqs.map((f, i) => ({ id: `blog-faq-${i}`, question: f.question, answer: f.answer }))}
            title="Questions Addressed in this Article"
            subtitle="Immediate summaries of key concepts discussed above."
            injectSchema={false}
          />
        </section>
      )}

      {/* Related Posts Panel */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-gray-100 pt-12 space-y-6">
          <h3 className="text-lg md:text-2xl font-bold font-sora text-navy">
            Related Articles You May Find Helpful
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map(p => (
              <div 
                key={p.slug}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xxs text-gray-400 font-bold block mb-2">{p.date} • {p.readTime}</span>
                  <h4 className="font-bold text-navy text-sm group-hover:text-primary transition-colors leading-snug">
                    {p.title}
                  </h4>
                  <p className="text-xxs text-gray-500 mt-2 line-clamp-2">{p.excerpt}</p>
                </div>
                
                <Link
                  href={`/blog/${p.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-xxs font-bold text-primary hover:text-primary-dark"
                >
                  Read: {p.title.length > 40 ? p.title.slice(0, 40) + '…' : p.title}
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
