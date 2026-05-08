function Footer() {
  return (
    <footer>
      <img src="/images/logo.svg" width="60" className="footer-logo" alt="Logo" />

      <div className="social-links">
        <a href="https://wa.me/6283117661045" target="_blank" rel="noopener noreferrer">
          <img src="/images/wa.svg" width="20" alt="WhatsApp" />
        </a>

        <a href="https://www.instagram.com/rahmanediting" target="_blank" rel="noopener noreferrer">
          <img src="/images/ig.svg" width="20" alt="Instagram" />
        </a>
      </div>

      <p style={{ marginTop: '20px', opacity: '0.4' }}>&copy; 2026 Rahman Editing. All rights reserved.</p>
    </footer>
  );
}

export default Footer;