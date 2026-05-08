import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Konsultasi() {
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    jenisDesain: "",
    deskripsi: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:3000/konsultasi", formData)
      .then((response) => {
        alert("Konsultasi berhasil dikirim! Kami akan segera menghubungi Anda.");
        setFormData({
          nama: "",
          whatsapp: "",
          jenisDesain: "",
          deskripsi: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting consultation:", error);
        alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
      });
  };

  return (
    <>
      <Navbar />
      <section className="konsultasi-section">
        <h2>Konsultasi Desain</h2>
        <div className="konsultasi-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nama">Nama Lengkap</label>
              <input
                type="text"
                id="nama"
                name="nama"
                placeholder="Masukkan nama Anda"
                value={formData.nama}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="whatsapp">Nomor WhatsApp</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                placeholder="Contoh: 08123456789"
                value={formData.whatsapp}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="jenisDesain">Jenis Desain</label>
              <select
                id="jenisDesain"
                name="jenisDesain"
                value={formData.jenisDesain}
                onChange={handleChange}
                required
              >
                <option value="">-- Pilih Jenis Desain --</option>
                <option value="Logo">Desain Logo</option>
                <option value="Brosur">Desain Brosur</option>
                <option value="Label">Desain Label Produk</option>
                <option value="Flyer">Desain Flyer</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="deskripsi">Deskripsi Kebutuhan</label>
              <textarea
                id="deskripsi"
                name="deskripsi"
                placeholder="Ceritakan detail desain yang Anda inginkan..."
                value={formData.deskripsi}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary btn-full">
              Kirim Konsultasi
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Konsultasi;
