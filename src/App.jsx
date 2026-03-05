import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  Briefcase, 
  LineChart, 
  Users, 
  Calculator, 
  Headphones, 
  FileText,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Check,
  Plus,
  Minus,
  ShieldCheck,
  BookOpen,
  ChevronRight,
  Target,
  Wrench,
  TrendingUp,
  Mail,
  Send,
  MessageSquare,
  Clock
} from 'lucide-react';

// --- DATA ---

const articlesData = [
  {
    id: 'stop-being-bottleneck',
    title: 'How to Stop Being the Bottleneck in Your Handyman Business',
    excerpt: 'If your business stops making money the second you take a day off, you do not own a business—you own a stressful job. Here is how to fix it.',
    category: 'Business Growth',
    date: 'March 2, 2026',
    readTime: '5 min read',
    content: (
      <>
        <p>Most local handyman businesses hit a wall right around the $250K to $500K mark. It’s not because the owner doesn't know how to do the work. It’s because the owner is doing <em>everything</em>.</p>
        <h2>The Trap of the "Do-It-All" Owner</h2>
        <p>When you first started, doing everything made sense. You answered the phone, drove to the house, gave the estimate, did the repair, and sent the invoice. But as you grow, this becomes your biggest weakness.</p>
        <p>Every missed call because you were under a sink is a lost job. Every estimate you forgot to follow up on because you were exhausted at 8 PM is lost revenue.</p>
        <h2>How to Break Free</h2>
        <p>To scale your home service business, you have to separate the <strong>field work</strong> from the <strong>office work</strong>. Here are the first three things you must delegate:</p>
        <ul>
          <li><strong>Phone Answering:</strong> You need a dedicated person (or team) to answer calls live. Customers rarely leave voicemails; they just call the next handyman on Google.</li>
          <li><strong>Scheduling and Dispatch:</strong> Your calendar should be managed by someone else, ensuring efficient routing and no missed appointments.</li>
          <li><strong>Invoicing and Follow-ups:</strong> Sending quotes and following up should be a daily, automated habit, not something you do "when you have time."</li>
        </ul>
        <p>By getting the back-office support you need, you stop being the bottleneck and start being the CEO of your growing company.</p>
      </>
    )
  },
  {
    id: 'cost-of-missed-calls',
    title: 'The True Cost of Missing Customer Calls in Home Services',
    excerpt: 'Think missing a few calls a week is no big deal? Let’s do the math on how much revenue your handyman business is actually losing.',
    category: 'Customer Service',
    date: 'February 24, 2026',
    readTime: '4 min read',
    content: (
      <>
        <p>It happens every day. You are up on a ladder, your phone rings, and you let it go to voicemail. You tell yourself, "I'll call them right back." But by the time you do, they’ve already hired someone else.</p>
        <h2>Let’s Do The Math</h2>
        <p>Let's say your average job is worth $500. If you miss just two calls a week that result in lost jobs, that’s $1,000 a week. Over a year, that is <strong>$52,000 in lost revenue</strong>—just from letting the phone ring.</p>
        <h2>The "Speed to Lead" Rule</h2>
        <p>In the home service and contractor industry, the company that answers the phone and books the appointment first wins 80% of the time. Homeowners with a broken door or a leaking pipe don't want to leave a message; they want an immediate solution.</p>
        <h2>Fixing the Problem</h2>
        <p>You cannot safely answer the phone while holding a power tool. The solution is investing in proper <strong>back-office support</strong>. Having a dedicated team answer your phones with a proven script not only captures those lost leads but makes your business look highly professional from the very first second.</p>
      </>
    )
  },
  {
    id: 'flat-rate-vs-hourly',
    title: 'Flat-Rate vs. Hourly Pricing: Which is Better for Your Growth?',
    excerpt: 'Charging by the hour punishes you for being fast and efficient. Here is why switching to flat-rate pricing can instantly boost your profits.',
    category: 'Pricing Strategy',
    date: 'February 15, 2026',
    readTime: '6 min read',
    content: (
      <>
        <p>One of the biggest debates among local contractors and handyman businesses is how to price their work. If you are still charging by the hour, you are likely leaving thousands of dollars on the table.</p>
        <h2>The Problem with Hourly Pricing</h2>
        <p>When you charge hourly, you are punishing yourself for your own experience. If a repair takes a beginner three hours, they make $300. If you are an expert and fix it in 30 minutes, you make $50. That makes no sense.</p>
        <p>Furthermore, hourly pricing makes customers anxious. They hover over you, watching the clock, wondering how much the final bill will be.</p>
        <h2>The Power of Flat-Rate (Upfront) Pricing</h2>
        <p>Flat-rate pricing means you give the customer a fixed price for the job before you start. Here is why it works:</p>
        <ul>
          <li><strong>Peace of Mind:</strong> The customer knows exactly what they will pay. No surprises.</li>
          <li><strong>Reward for Speed:</strong> If you use your expertise to finish quickly, your hourly profit margin skyrockets.</li>
          <li><strong>Higher Perceived Value:</strong> You are selling the <em>solution</em> to their problem, not your time.</li>
        </ul>
        <p>Switching to a flat-rate pricing model is one of the fastest ways to increase your revenue without working longer hours. It’s a core strategy we teach inside the Champion Partners coaching network.</p>
      </>
    )
  }
];

// --- COMPONENTS ---

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [activeArticleId, setActiveArticleId] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // SEO: Update Meta tags, Title, and JSON-LD Schema based on routing
  useEffect(() => {
    let title = "Champion Partners | Back-Office Support for Handyman Businesses";
    let desc = "Grow your local handyman business with our back-office support, answering service, scheduling, and business coaching. We help you scale past $500K.";
    let ogType = "website";
    let schemaData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Champion Partners",
      "url": "https://championservicepartners.com",
      "logo": "https://championservicepartners.com/logo.png",
      "description": "Providing back-office support, call answering, bookkeeping, and coaching to local home service and handyman businesses.",
      "areaServed": "United States",
      "knowsAbout": ["Handyman Business Growth", "Contractor Dispatching", "Home Service Bookkeeping"]
    };

    if (currentView === 'about') {
      title = "About Us | Champion Partners | Contractor Coaching";
      desc = "Learn how Champion Partners helps local contractors and handyman owners break free from the daily grind and scale their businesses with expert operational support.";
    } else if (currentView === 'services') {
      title = "Our Services | Office Support & Coaching for Handymen";
      desc = "Explore our three lanes to growth: Business Coaching Network, Managed Office Support, and Equity Partnerships for home service businesses.";
    } else if (currentView === 'articles') {
      title = "Articles & Resources | Grow Your Handyman Business";
      desc = "Read our latest tips, strategies, and guides on how to run a more profitable and organized local home service or handyman business.";
    } else if (currentView === 'contact') {
      title = "Contact Us | Champion Partners";
      desc = "Get in touch with Champion Partners to learn how we can help your home service business grow with dedicated back-office support.";
    } else if (currentView === 'book') {
      title = "Book a Call | Champion Partners";
      desc = "Schedule your free discovery call with Champion Partners and start scaling your handyman business today. No obligation, 100% confidential.";
    } else if (currentView === 'article' && activeArticleId) {
      const article = articlesData.find(a => a.id === activeArticleId);
      if (article) {
        title = `${article.title} | Champion Partners`;
        desc = article.excerpt;
        ogType = "article";
        schemaData = {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "abstract": article.excerpt,
          "datePublished": article.date,
          "author": {
            "@type": "Organization",
            "name": "Champion Partners"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Champion Partners"
          }
        };
      }
    }

    // Update document title
    document.title = title;
    
    // Helper to safely update meta tags
    const setMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property')) {
          element.setAttribute('property', selector.match(/"([^"]+)"/)[1]);
        } else {
          element.setAttribute('name', selector.match(/"([^"]+)"/)[1]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    setMetaTag('meta[name="description"]', 'content', desc);
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', desc);
    setMetaTag('meta[property="og:type"]', 'content', ogType);

    // Update structured data (JSON-LD)
    let scriptTag = document.getElementById('seo-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

  }, [currentView, activeArticleId]);

  // Scroll listener for sticky nav
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Helper
  const navigate = (view, articleId = null) => {
    setCurrentView(view);
    setActiveArticleId(articleId);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900 flex flex-col">
      
      {/* --- NAVBAR --- */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md border-slate-200 py-0 shadow-sm' : 'bg-slate-50 border-transparent py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 cursor-pointer" onClick={(e) => { e.preventDefault(); navigate('home'); }} aria-label="Champion Partners Home">
              <div className="bg-slate-900 p-2 rounded-xl shadow-sm">
                <ShieldCheck className="w-6 h-6 text-amber-500" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                Champion<span className="text-amber-600 font-bold">Partners</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8 font-semibold text-slate-600" aria-label="Main Navigation">
              <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }} className={`hover:text-amber-600 transition-colors ${currentView === 'home' ? 'text-amber-600' : ''}`}>Home</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); navigate('about'); }} className={`hover:text-amber-600 transition-colors ${currentView === 'about' ? 'text-amber-600' : ''}`}>About Us</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); navigate('services'); }} className={`hover:text-amber-600 transition-colors ${currentView === 'services' ? 'text-amber-600' : ''}`}>Services</a>
              <a href="#articles" onClick={(e) => { e.preventDefault(); navigate('articles'); }} className={`hover:text-amber-600 transition-colors ${currentView === 'articles' || currentView === 'article' ? 'text-amber-600' : ''}`}>Articles</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className={`hover:text-amber-600 transition-colors ${currentView === 'contact' ? 'text-amber-600' : ''}`}>Contact</a>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="#book"
                onClick={(e) => { e.preventDefault(); navigate('book'); }}
                className="bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-amber-700 transition-all shadow-sm inline-block"
              >
                Book a Free Chat
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-slate-900 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 absolute w-full shadow-2xl">
            <nav className="px-4 pt-4 pb-8 flex flex-col space-y-2" aria-label="Mobile Navigation">
              <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="text-left block text-lg font-bold text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-50">Home</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); navigate('about'); }} className="text-left block text-lg font-bold text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-50">About Us</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); navigate('services'); }} className="text-left block text-lg font-bold text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-50">Services</a>
              <a href="#articles" onClick={(e) => { e.preventDefault(); navigate('articles'); }} className="text-left block text-lg font-bold text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-50">Articles</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className="text-left block text-lg font-bold text-slate-900 py-3 px-4 rounded-lg hover:bg-slate-50">Contact</a>
              <hr className="border-slate-100 my-4 mx-4" />
              <a 
                href="#book"
                onClick={(e) => { e.preventDefault(); navigate('book'); }}
                className="mx-4 bg-amber-600 text-white px-6 py-4 rounded-xl font-bold text-lg text-center block"
              >
                Book a Free Chat
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* --- MAIN CONTENT AREA (ROUTER) --- */}
      <main className="flex-grow pt-20">
        {currentView === 'home' && <HomeView navigate={navigate} />}
        {currentView === 'about' && <AboutView navigate={navigate} />}
        {currentView === 'services' && <ServicesView navigate={navigate} />}
        {currentView === 'articles' && <ArticlesView navigate={navigate} />}
        {currentView === 'contact' && <ContactView navigate={navigate} />}
        {currentView === 'book' && <BookView navigate={navigate} />}
        {currentView === 'article' && <SingleArticleView articleId={activeArticleId} navigate={navigate} />}
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10 text-slate-400 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#home" className="flex items-center space-x-2 mb-6 cursor-pointer" onClick={(e) => { e.preventDefault(); navigate('home'); }} aria-label="Champion Partners Footer Logo">
                <ShieldCheck className="w-8 h-8 text-amber-500" />
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  Champion<span className="text-amber-500 font-bold">Partners</span>
                </span>
              </a>
              <p className="font-medium mb-6 leading-relaxed">
                Back-office support, handyman answering services, and contractor coaching to help you grow your home service business safely.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-extrabold text-white text-lg mb-6">How We Help</h3>
              <ul className="space-y-4 font-medium">
                <li><a href="#services" onClick={(e) => { e.preventDefault(); navigate('services'); }} className="hover:text-amber-400 transition-colors">Business Coaching Network</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); navigate('services'); }} className="hover:text-amber-400 transition-colors">Contractor Office & Admin Support</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); navigate('services'); }} className="hover:text-amber-400 transition-colors">Funding & Partnership</a></li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="font-extrabold text-white text-lg mb-6">Company</h3>
              <ul className="space-y-4 font-medium">
                <li><a href="#about" onClick={(e) => { e.preventDefault(); navigate('about'); }} className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#articles" onClick={(e) => { e.preventDefault(); navigate('articles'); }} className="hover:text-amber-400 transition-colors">Read Our Articles</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className="hover:text-amber-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-extrabold text-white text-lg mb-6">Ready to grow?</h3>
              <a 
                href="#book"
                onClick={(e) => { e.preventDefault(); navigate('book'); }}
                className="bg-amber-600 text-white font-bold text-sm px-6 py-4 rounded-xl hover:bg-amber-700 transition-colors w-full mb-4 shadow-lg block text-center"
              >
                Book a Free Chat
              </a>
              <p className="text-sm">For local handyman businesses looking to scale without the stress of managing back-office administration.</p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center font-medium text-sm">
            <p>&copy; {new Date().getFullYear()} Champion Partners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- VIEW COMPONENTS ---

function HomeView({ navigate }) {
  const features = [
    { title: 'Answering the Phones', desc: 'We take your customer calls, book appointments, and handle questions using friendly, proven home service scripts.', icon: <Headphones className="w-6 h-6 text-amber-600" /> },
    { title: 'Scheduling & Dispatch', desc: 'We manage your daily calendar so your team knows exactly where to go, and lucrative jobs stop falling through the cracks.', icon: <Users className="w-6 h-6 text-amber-600" /> },
    { title: 'Bookkeeping & Invoicing', desc: 'We keep your finances clean and organized, so you get paid faster and actually trust your contractor business numbers.', icon: <Calculator className="w-6 h-6 text-amber-600" /> },
    { title: 'Following Up on Estimates', desc: 'We consistently check in on quotes you have sent out to help you win more jobs without the extra administrative effort.', icon: <FileText className="w-6 h-6 text-amber-600" /> },
  ];

  const faqs = [
    { q: "Are you a franchise?", a: "No. You keep your brand name and your ownership. We just act as your back-office team, coaching network, and funding partner to help you grow the business you already built." },
    { q: "Is this just another coaching program or online course?", a: "We don't just give advice; we actually do the work. While we do offer a community network, our main service is taking over your daily office tasks like scheduling, bookkeeping, and customer calls." },
    { q: "Who is this service for?", a: "We work specifically with local handyman and home service businesses making between $250K and $2M a year. If you have too much work but can't seem to grow because you're stuck doing paperwork, we're for you." },
  ];
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 font-bold shadow-sm text-sm mb-6 border border-amber-200">
                For Local Handyman Businesses Making $250K - $2M
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Grow Your Handyman Business Without <span className="text-amber-600">Doing It All.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed font-medium">
                Get the back-office support, business coaching, and funding you need to scale your home service business. We handle the paperwork and phone calls so you can focus on making money.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a 
                  href="#book"
                  onClick={(e) => { e.preventDefault(); navigate('book'); }}
                  className="bg-amber-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-amber-700 transition-all flex items-center justify-center shadow-lg shadow-amber-600/20 w-full sm:w-auto"
                >
                  Book a Free Discovery Call
                </a>
                <a href="#services" onClick={(e) => { e.preventDefault(); navigate('services'); }} className="bg-white text-slate-900 border-2 border-slate-200 font-bold text-lg px-8 py-4 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-center flex items-center justify-center">
                  See How We Help
                </a>
              </div>
            </div>
            
            <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional home service contractor reviewing project plans" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-80 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">The Hard Truth</p>
                <p className="text-lg font-bold text-slate-900 leading-snug">
                  "You are the dispatcher, estimator, and bookkeeper all at once. You can't grow if you're stuck doing paperwork."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Does This Sound Like You?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              You know how to do the actual work. That was never the problem. The problem is everything else it takes to run a local home service business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-rose-50/50 border border-rose-100 rounded-[2rem] p-8 lg:p-12">
              <div className="inline-block bg-white text-rose-700 font-extrabold px-5 py-2 rounded-full text-sm mb-8 border border-rose-200 shadow-sm uppercase tracking-wide">
                The Problem • Doing It All Yourself
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 leading-tight">
                Working 70 hours a week but the business isn't growing.
              </h3>
              <ul className="space-y-6">
                {[
                  'Hiring full-time office staff is expensive and feels too risky.',
                  'Your bookkeeping is a mess and you don\'t really know your profit.',
                  'Missed calls mean missed jobs. Customers slip through the cracks.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <XCircle className="w-6 h-6 text-rose-500 mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-semibold text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50/50 border border-amber-100 rounded-[2rem] p-8 lg:p-12">
              <div className="inline-block bg-white text-amber-700 font-extrabold px-5 py-2 rounded-full text-sm mb-8 border border-amber-200 shadow-sm uppercase tracking-wide">
                The Solution • A Business That Runs Itself
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 leading-tight">
                A clean, organized business that lets you scale up.
              </h3>
              <ul className="space-y-6">
                {[
                  'Your back-office is handled: phones, scheduling, and follow-ups.',
                  'One affordable team does the work of five expensive hires.',
                  'Your time is finally freed up to hire more techs and add trucks.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-semibold text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// NOTE: Your paste ended mid-file in this chat message.
// Replace the placeholder components below with the rest of your updated components.
function AboutView() { return <div />; }
function ServicesView() { return <div />; }
function ArticlesView() { return <div />; }
function SingleArticleView() { return <div />; }
function ContactView() { return <div />; }
function BookView() { return <div />; }

