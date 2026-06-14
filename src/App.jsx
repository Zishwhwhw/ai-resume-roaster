import React from 'react'

function App() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">📄</span>
          RoastMyResume<span style={{color: 'var(--primary)'}}>.</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#pricing">Pricing</a>
          <button className="nav-btn">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">🚀 Launching 2026</div>
          <h1 className="hero-title">The Ultimate Platform for <span className="highlight">RoastMyResume</span></h1>
          <p className="hero-subtitle">
            Automate your workflow, scale your business, and save hundreds of hours every month. Trusted by 10,000+ professionals.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">Start Your Free Trial</button>
            <button className="btn-secondary">View Demo</button>
          </div>
          <p className="guarantee">No credit card required. 14-day free trial.</p>
        </div>
        <div className="hero-image">
          <img src={`https://placehold.co/800x500/1e293b/ffffff?text=$RoastMyResume+Dashboard`} alt="App Dashboard" className="mockup-img" />
        </div>
      </section>

      {/* Logos Section */}
      <section className="trusted-by">
        <p>TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE</p>
        <div className="logos">
          <span>Google</span>
          <span>Amazon</span>
          <span>Stripe</span>
          <span>Netflix</span>
          <span>Vercel</span>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Everything you need to succeed</h2>
        <p className="section-desc">We built RoastMyResume to be the only tool you will ever need.</p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="f-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Built on edge infrastructure to deliver sub-millisecond response times globally.</p>
          </div>
          <div className="feature-card">
            <div className="f-icon">🔒</div>
            <h3>Enterprise Security</h3>
            <p>SOC2 compliant with end-to-end encryption to keep your data perfectly safe.</p>
          </div>
          <div className="feature-card">
            <div className="f-icon">📊</div>
            <h3>Deep Analytics</h3>
            <p>Understand your users with powerful, privacy-friendly analytics and reports.</p>
          </div>
          <div className="feature-card">
            <div className="f-icon">🤖</div>
            <h3>AI-Powered</h3>
            <p>Leverage the power of cutting-edge AI to automate your most boring tasks.</p>
          </div>
        </div>
      </section>

      {/* Interactive App Demo Placeholder */}
      <section className="app-demo">
        <div className="demo-container">
            <h2>Try RoastMyResume Now</h2>
            <div className="demo-box">
                <input type="text" placeholder="Enter your data here..." />
                <button className="btn-primary">Run Magic</button>
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <h2>Simple, transparent pricing</h2>
        <div className="pricing-cards">
          <div className="price-card">
            <h3>Starter</h3>
            <div className="price">$15<span>/mo</span></div>
            <ul>
              <li>✅ Up to 100 uses</li>
              <li>✅ Basic Support</li>
              <li>✅ Standard Analytics</li>
            </ul>
            <button className="btn-outline">Choose Starter</button>
          </div>
          <div className="price-card popular">
            <div className="popular-badge">Most Popular</div>
            <h3>Pro</h3>
            <div className="price">$49<span>/mo</span></div>
            <ul>
              <li>✅ Unlimited Uses</li>
              <li>✅ Priority Support</li>
              <li>✅ Advanced Analytics</li>
              <li>✅ Custom Domain</li>
            </ul>
            <button className="btn-primary">Choose Pro</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>📄 RoastMyResume</h3>
            <p>Making the web a better place, one app at a time.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Changelog</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
