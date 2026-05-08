import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Portofolio() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/portofolio")
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Gagal mengambil data portofolio. Pastikan json-server sudah berjalan di port 3000.", error);
      });
  }, []);

  return (
    <section id="portofolio">
      <h2>Portofolio</h2>

      <div className="grid portfolio-grid">
        {data.map((item) => (
          <Card key={item.id} title={item.title} image={item.image} />
        ))}
      </div>
    </section>
  );
}

export default Portofolio;