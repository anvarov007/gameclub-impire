import React from 'react';

export default function App() {
  const prices = [
    { zone: 'Standart Zal', day: '15 000 so‘m / soat', night: '20 000 so‘m / soat', specs: 'RTX 3060, 144Hz' },
    { zone: 'VIP Zal', day: '25 000 so‘m / soat', night: '30 000 so‘m / soat', specs: 'RTX 4070, 240Hz' },
    { zone: 'Bootcamp (5 kishilik)', day: '110 000 so‘m / soat', night: '140 000 so‘m / soat', specs: 'RTX 4080, 360Hz' },
    { zone: 'PlayStation 5', day: '35 000 so‘m / soat', night: '45 000 so‘m / soat', specs: '4K TV, 4 ta joystik' },
  ];

  const winners = [
    { game: 'CS2 Championship', team: 'Team Tashkent', prize: '5 000 000 so‘m', date: 'Oktabr 2026' },
    { game: 'Dota 2 Cup', team: 'Uzbek Wolves', prize: '4 000 000 so‘m', date: 'Sentabr 2026' },
    { game: 'FC 26 Solo', team: 'Sardor_99', prize: '1 500 000 so‘m', date: 'Avgust 2026' },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
          background-color: #0d1117;
          color: #ffffff;
        }
        .app-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid #21262d;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .logo span {
          color: #00e676;
        }
        .navbar nav a {
          color: #c9d1d9;
          text-decoration: none;
          margin: 0 15px;
          transition: 0.3s;
        }
        .navbar nav a:hover {
          color: #00e676;
        }
        .btn-call {
          background-color: #00e676;
          color: #0d1117;
          padding: 10px 18px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
        }
        .hero {
          text-align: center;
          padding: 60px 20px;
          background: linear-gradient(145deg, #161b22, #0d1117);
          border-radius: 12px;
          margin-top: 20px;
          border: 1px solid #30363d;
        }
        .hero h1 {
          font-size: 40px;
          margin-bottom: 10px;
        }
        .hero p {
          color: #8b949e;
          font-size: 18px;
          margin-bottom: 20px;
        }
        .badge-live {
          background-color: rgba(0, 230, 118, 0.15);
          color: #00e676;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          border: 1px solid #00e676;
        }
        .section {
          margin: 50px 0;
        }
        .section h2 {
          font-size: 28px;
          margin-bottom: 25px;
          border-left: 4px solid #00e676;
          padding-left: 12px;
        }
        .grid-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }
        .card {
          background-color: #161b22;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #30363d;
        }
        .card h3 {
          color: #00e676;
          margin-bottom: 5px;
        }
        .specs {
          color: #8b949e;
          font-size: 14px;
          margin-bottom: 15px;
        }
        .price-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-top: 1px solid #21262d;
        }
        .info-box {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          background-color: #161b22;
          padding: 25px;
          border-radius: 10px;
          border: 1px solid #30363d;
        }
        .info-item h3 {
          margin-bottom: 10px;
          color: #00e676;
        }
        .info-item p {
          color: #c9d1d9;
          margin-bottom: 5px;
          line-height: 1.5;
        }
        .winners-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .winner-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #161b22;
          padding: 15px 20px;
          border-radius: 8px;
          border: 1px solid #30363d;
        }
        .team-name {
          font-weight: bold;
          color: #58a6ff;
        }
        .prize {
          color: #00e676;
          font-weight: bold;
        }
        .footer {
          text-align: center;
          padding: 30px 0;
          color: #8b949e;
          border-top: 1px solid #21262d;
        }
      `}</style>

      <div className="app-container">
        <header className="navbar">
          <div className="logo">EMPIRE <span>CLUB</span></div>
          <nav>
            <a href="#prices">Narxlar</a>
            <a href="#info">Manzil va Vaqt</a>
            <a href="#tournaments">Turnirlar</a>
          </nav>
          <a href="tel:+998901234567" className="btn-call">Joy band qilish</a>
        </header>

        <section className="hero">
          <h1>Haqiqiy g‘oliblar makoni</h1>
          <p>Kuchli kompyuterlar, qulay muhit va yuqori tezlikdagi internet.</p>
          <div className="hero-badges">
            <span className="badge-live">● Hozir 14 ta kompyuter bo‘sh (Tez orada jonli rejimda!)</span>
          </div>
        </section>

        <section id="prices" className="section">
          <h2>Soatlik narxlar</h2>
          <div className="grid-cards">
            {prices.map((item, index) => (
              <div className="card" key={index}>
                <h3>{item.zone}</h3>
                <p className="specs">{item.specs}</p>
                <div className="price-row">
                  <span>Kunduzgi:</span>
                  <strong>{item.day}</strong>
                </div>
                <div className="price-row">
                  <span>Tungi:</span>
                  <strong>{item.night}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="info" className="section info-box">
          <div className="info-item">
            <h3>🕒 Ish vaqti</h3>
            <p>Haftaning barcha kunlari: <strong>24/7 (Tanaffussiz)</strong></p>
            <p>Tungi paketlar: 23:00 dan 07:00 gacha</p>
          </div>
          <div className="info-item">
            <h3>📍 Manzilimiz</h3>
            <p>Toshkent shahri, Shayxontohur tumani, Navoiy ko‘chasi 15-uy</p>
            <p>Mo‘ljal: Markaziy pochta ro‘parasida</p>
          </div>
          <div className="info-item">
            <h3>📞 Aloqa</h3>
            <p>Telefon: <strong>+998 90 123 45 67</strong></p>
            <p>Telegram: <strong>@empire_club_uz</strong></p>
          </div>
        </section>

        <section id="tournaments" className="section">
          <h2>🏆 O‘tgan turnir g‘oliblari</h2>
          <div className="winners-list">
            {winners.map((win, index) => (
              <div className="winner-card" key={index}>
                <div>
                  <h4>{win.game}</h4>
                  <small>{win.date}</small>
                </div>
                <div className="team-name">{win.team}</div>
                <div className="prize">{win.prize}</div>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <p>© 2026 Empire Club. Barcha huquqlar himoyalangan.</p>
        </footer>
      </div>
    </>
  );
}
