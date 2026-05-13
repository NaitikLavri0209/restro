import { useState, useEffect } from "react";

export default function App() {
  const [page, setPage] = useState("home");
  const [slideIdx, setSlideIdx] = useState(0);

  const slides = [
    "/images/restro1.webp",
    "/images/restro2.webp",
    "/images/restro3.webp",
  ];

  const C = {
    bg: "#f8f6f2",
    bgAlt: "#f2eee8",
    surface: "#ebe5dc",
    card: "#ffffff",
    border: "#ddd6cb",
    borderDark: "#c8bfb1",

    accent: "#8b6a47",
    accentDk: "#6f5235",
    accentLt: "#b6936d",

    text: "#1f1b17",
    textMid: "#4d4338",
    textMuted: "#7c7267",

    white: "#ffffff",

    iron: "#f3efe9",
    ironLight: "#ebe5dc",
  };

  const F = {
    display: "'Cormorant Garamond', serif",
    body: "'DM Sans', sans-serif",
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");

    style.textContent = `
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      html{
        scroll-behavior:smooth;
      }

      body{
        background:${C.bg};
        color:${C.text};
        font-family:${F.body};
      }

      button{
        transition:all .3s ease;
        cursor:pointer;
      }

      button:hover{
        opacity:.9;
      }

      @keyframes kenburns{
        0%{
          transform:scale(1.08);
        }
        100%{
          transform:scale(1);
        }
      }

      .kb{
        animation:kenburns 8s ease-out forwards;
      }

      @keyframes fadeUp{
        from{
          opacity:0;
          transform:translateY(20px);
        }
        to{
          opacity:1;
          transform:translateY(0);
        }
      }

      .fu{
        animation:fadeUp .8s ease both;
      }
    `;

    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setSlideIdx((i) => (i + 1) % slides.length);
    }, 7000);

    return () => clearInterval(t);
  }, []);

  const downloadFoodMenu = () => {
    const a = document.createElement("a");
    a.href = "/pdfs/menu.pdf";
    a.download = "Ristretto_Food_Menu.pdf";
    a.click();
  };

  const downloadDrinksMenu = () => {
    const a = document.createElement("a");
    a.href = "/pdfs/drinks.pdf";
    a.download = "Ristretto_Drinks_Menu.pdf";
    a.click();
  };

  const NavBar = () => (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.82)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.border}`,
        padding: "0 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 75,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: F.display,
              fontSize: 24,
              letterSpacing: ".08em",
              fontWeight: 600,
            }}
          >
            RISTRETTO
          </div>

          <div
            style={{
              fontSize: 10,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: C.textMuted,
            }}
          >
            Behind The Rods
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          <button
            onClick={() => setPage("home")}
            style={{
              background: "transparent",
              border: "none",
              color: C.text,
              fontSize: 12,
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            Home
          </button>

          <button
            onClick={() => setPage("menu")}
            style={{
              background: C.accent,
              border: "none",
              color: C.white,
              padding: "12px 24px",
              fontSize: 11,
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            Menu
          </button>
        </div>
      </div>
    </nav>
  );

  if (page === "home") {
    return (
      <div>
        <NavBar />

        <section
          style={{
            height: "100vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {slides.map((src, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                opacity: i === slideIdx ? 1 : 0,
                transition: "opacity 1.8s ease-in-out",
              }}
            >
              <img
                src={src}
                className={i === slideIdx ? "kb" : ""}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,.28), rgba(0,0,0,.45))",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              textAlign: "center",
              paddingTop: "180px",
              paddingInline: "20px",
            }}
          >
            <div
              className="fu"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "10px 22px",
                borderRadius: "50px",
                color: "rgba(255,255,255,.8)",
                fontSize: 11,
                letterSpacing: ".28em",
                textTransform: "uppercase",
              }}
            >
              Est. Ahmedabad · Pure Vegetarian
            </div>

            <h1
              className="fu"
              style={{
                marginTop: 28,
                fontFamily: F.display,
                fontSize: "clamp(70px,12vw,150px)",
                fontWeight: 300,
                color: C.white,
                lineHeight: .9,
              }}
            >
              Ristretto
            </h1>

            <div
              className="fu"
              style={{
                marginTop: 8,
                fontFamily: F.display,
                fontSize: "clamp(22px,4vw,42px)",
                fontStyle: "italic",
                color: "#e9dccd",
              }}
            >
              Behind The Rods
            </div>

            <div
              style={{
                width: 50,
                height: 1,
                background: "rgba(255,255,255,.4)",
                marginTop: 30,
                marginBottom: 30,
              }}
            />

            <p
              className="fu"
              style={{
                maxWidth: 650,
                color: "rgba(255,255,255,.78)",
                lineHeight: 1.9,
                fontSize: 15,
              }}
            >
              A refined café experience in Ahmedabad,
              crafted around coffee, comfort, and cuisine.
            </p>

            <div
              style={{
                display: "flex",
                gap: 18,
                marginTop: 45,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => setPage("menu")}
                style={{
                  background: C.accent,
                  border: "none",
                  padding: "14px 34px",
                  color: C.white,
                  fontSize: 11,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                }}
              >
                View Menu
              </button>

              <button
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,.4)",
                  padding: "14px 34px",
                  color: C.white,
                  fontSize: 11,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                }}
              >
                Reserve Table
              </button>
            </div>
          </div>
        </section>

        <section
          style={{
            padding: "100px 30px",
            background: C.bg,
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 60,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: ".25em",
                  textTransform: "uppercase",
                  color: C.accent,
                  marginBottom: 18,
                }}
              >
                About
              </div>

              <h2
                style={{
                  fontFamily: F.display,
                  fontSize: "clamp(42px,6vw,64px)",
                  lineHeight: 1.1,
                  fontWeight: 300,
                  marginBottom: 28,
                }}
              >
                Contemporary dining
                <br />
                in Ahmedabad.
              </h2>

              <p
                style={{
                  color: C.textMid,
                  lineHeight: 1.9,
                  fontSize: 15,
                }}
              >
                Ristretto Behind The Rods brings together modern interiors,
                handcrafted beverages and thoughtfully curated vegetarian cuisine
                in an elegant industrial setting.
              </p>
            </div>

            <img
              src="/images/restro2.webp"
              style={{
                width: "100%",
                borderRadius: 4,
                objectFit: "cover",
              }}
            />
          </div>
        </section>

        <section
          style={{
            padding: "90px 30px",
            background: C.card,
            borderTop: `1px solid ${C.border}`,
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 30,
            }}
          >
            {[
              [
                "Handcrafted Coffee",
                "Freshly brewed specialty coffees and signature beverages.",
              ],

              [
                "Multi-Cuisine Dining",
                "Italian, Indian, Mexican and global vegetarian dishes.",
              ],

              [
                "Modern Ambience",
                "Minimal industrial interiors with warm elegant lighting.",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                style={{
                  padding: 35,
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                }}
              >
                <h3
                  style={{
                    fontFamily: F.display,
                    fontSize: 30,
                    marginBottom: 14,
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    color: C.textMuted,
                    lineHeight: 1.8,
                    fontSize: 14,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer
          style={{
            padding: "40px 20px",
            textAlign: "center",
            background: C.bgAlt,
          }}
        >
          <div
            style={{
              fontFamily: F.display,
              fontSize: 26,
            }}
          >
            Ristretto Behind The Rods
          </div>

          <div
            style={{
              marginTop: 8,
              color: C.textMuted,
              fontSize: 12,
              letterSpacing: ".18em",
              textTransform: "uppercase",
            }}
          >
            Ahmedabad · Pure Vegetarian
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div
      style={{
        background: C.bg,
        minHeight: "100vh",
      }}
    >
      <NavBar />

      <div
        style={{
          paddingTop: 120,
          maxWidth: 1200,
          margin: "0 auto",
          paddingInline: 24,
          paddingBottom: 100,
        }}
      >
        <div
          style={{
            marginBottom: 50,
          }}
        >
          <div
            style={{
              color: C.accent,
              fontSize: 11,
              letterSpacing: ".24em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Ristretto Behind The Rods
          </div>

          <h1
            style={{
              fontFamily: F.display,
              fontSize: "clamp(48px,8vw,90px)",
              fontWeight: 300,
              marginBottom: 14,
            }}
          >
            Our Menu
          </h1>

          <p
            style={{
              color: C.textMuted,
              fontSize: 15,
            }}
          >
            Curated food and beverage selections
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            border: `1px solid ${C.border}`,
            padding: "40px",
            marginBottom: 30,
          }}
        >
          <h2
            style={{
              fontFamily: F.display,
              fontSize: 42,
              marginBottom: 12,
            }}
          >
            Food Menu
          </h2>

          <p
            style={{
              color: C.textMuted,
              lineHeight: 1.8,
              marginBottom: 28,
            }}
          >
            Explore our full vegetarian dining selections.
          </p>

          <button
            onClick={downloadFoodMenu}
            style={{
              background: C.accent,
              border: "none",
              padding: "14px 32px",
              color: C.white,
              fontSize: 11,
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            Download Food Menu
          </button>
        </div>

        <div
          style={{
            background: "#fff",
            border: `1px solid ${C.border}`,
            padding: "40px",
          }}
        >
          <h2
            style={{
              fontFamily: F.display,
              fontSize: 42,
              marginBottom: 12,
            }}
          >
            Drinks Menu
          </h2>

          <p
            style={{
              color: C.textMuted,
              lineHeight: 1.8,
              marginBottom: 28,
            }}
          >
            Signature coffees, mocktails, frappes and beverages.
          </p>

          <button
            onClick={downloadDrinksMenu}
            style={{
              background: C.accent,
              border: "none",
              padding: "14px 32px",
              color: C.white,
              fontSize: 11,
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            Download Drinks Menu
          </button>
        </div>
      </div>
    </div>
  );
}