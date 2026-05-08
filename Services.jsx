function Services() {
  return (
    <section id="services">
      <h2>Layanan Kami</h2>

      <div className="grid">
        <div className="service-card">
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎨</div>
          <h3>Desain Grafis</h3>
          <p>Mulai dari logo, brosur, banner, hingga desain media sosial yang menarik dan profesional.</p>
        </div>

        <div className="service-card">
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🖨️</div>
          <h3>Digital Printing</h3>
          <p>Cetak banner, stiker, kartu nama, ID card, dan dokumen lainnya dengan kualitas tajam.</p>
        </div>
        
        <div className="service-card">
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✨</div>
          <h3>Editing Foto</h3>
          <p>Retouching, manipulasi, dan perbaikan foto untuk hasil yang lebih sempurna dan estetik.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;