export default function CriticalCSS() {
  return (
    <style jsx>{`
      /* Critical above-the-fold styles */
      body {
        margin: 0;
        font-family: system-ui, -apple-system, sans-serif;
        background: white;
      }
      
      /* Hero section critical styles */
      .hero-section {
        min-height: 100vh;
        background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      /* Navigation critical styles */
      nav {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 50;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
      }
      
      /* Typography critical styles */
      h1, h2, h3 {
        margin: 0;
        font-weight: 700;
        line-height: 1.2;
      }
      
      h1 {
        font-size: clamp(2rem, 5vw, 4rem);
        color: #111827;
      }
      
      /* Button critical styles */
      .btn-primary {
        background: #00f400;
        color: #000;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        font-weight: 600;
        text-decoration: none;
        display: inline-block;
        transition: transform 0.2s;
      }
      
      .btn-primary:hover {
        transform: translateY(-2px);
      }
      
      /* Loading skeleton */
      .skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      
      /* Prevent layout shift */
      img {
        max-width: 100%;
        height: auto;
      }
      
      /* High contrast fix */
      .text-gray-400 {
        color: #6b7280 !important; /* Better contrast */
      }
      
      .text-gray-500 {
        color: #374151 !important; /* Better contrast */
      }
    `}</style>
  );
}
