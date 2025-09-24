const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CI/CD Pipeline Demo</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(-45deg, #2193b0, #6dd5ed, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #fff;
          text-align: center;
        }

        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .card {
          background: rgba(0, 0, 0, 0.4);
          padding: 50px 70px;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.25);
          backdrop-filter: blur(10px);
          animation: fadeIn 1.5s ease-in-out;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
        }

        p {
          font-size: 1.3rem;
          margin-bottom: 30px;
        }

        .btn {
          display: inline-block;
          padding: 12px 25px;
          font-size: 1rem;
          color: #fff;
          text-decoration: none;
          border-radius: 30px;
          background: linear-gradient(90deg, #23a6d5, #23d5ab);
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>CI/CD Pipeline Success!</h1>
        <p>Your Node.js + Docker + GitHub Actions setup is running smoothly 🎉</p>
        <a href="/status" class="btn">Check Status</a>
      </div>
    </body>
    </html>
  `);
});

// optional health/status route for monitoring
app.get('/status', (req, res) => {
  res.json({
    status: "Running",
    service: "Node.js CI/CD Demo App",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
