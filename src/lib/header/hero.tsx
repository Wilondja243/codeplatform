
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span className="badge-text">Nouveaux cours disponibles</span>
          </div>
          <h1 className="hero-title">
            Apprenez la programmation. <br />
            <span className="gradient-text">Créez de vrais projets.</span> <br />
            Changez votre avenir.
          </h1>
          <p className="hero-description">
            Maîtrisez les compétences pratiques en codage avec une formation
            dirigée par des experts, conçue pour les développeurs autodidactes.
            De Python au développement web Full-Stack, nous nous concentrons sur
            ce qui vous fait embaucher.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Commencer à apprendre
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="btn-secondary">Voir les cours</button>
          </div>
          <div className="hero-students">
            <div className="student-avatars">
              <div
                className="avatar"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBENp_VQWW5M3RJtO2CfIIx4jgFgsj7t0UvMdWS2mH8HGJjNZ6AZ3j3keLlu9z21hpCSqwPJAkrFAgufHgR3Z-MnsDlWYtTNd88E5uesY2SxiHxmr13sprAD0KnsPJQyv5K4_puc0vnD2f2qgS76YPILNwWIeLEY-96Kp5_8UzJrbvckL3toQAYNeR463frVw3kk4Norz3XDMytpjKZYjWfPunDe3XP5V7aqxva7AGOnButygk3jeqfKfK7kps9BSNqWDMysSr_SNs')",
                }}
              ></div>
              <div
                className="avatar"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAN7OvwdUsmrGXMgrgqW5SAM45J2QpEwMlr6MbsUX4SV4DXlPeeRNi7Ni20InvmtJL5u8hkY5TuTdfMbH4Bigl_XbRMGgR3BxRhHFf-RJ0H6-B0qyDNcwEuh4wCi5u8JFWK2ynSFs7kx-28VOCp2FXFfOU6g4y6f-ZKRqqdUe4vnt4xd1rxcVCwOg0e1QdjhiS5qwdd4Id7_m0LQGG-5waftgSu_J6R3qHqd__lgNFQP6AR1fiyZ1kWnSy_5ZOtckndlMFgxtSVySg')",
                }}
              ></div>
              <div
                className="avatar"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuFEJF5UDyv3ofulZHYdN5Or6c4r2JiTJYoVCyK-UZpc6DKLje8fOvSicR6WY8vS0HQbB7Bn2Vp3ItqdPjP5qQRznCzHrH5Gi6c7EqZhhHAdDMWvqqE1FoEYUqKPwQL_F8dsaprXaloF0vkxFxd5QRTVLVe-3QRrx6YwGOWY0ESd6b33Z37b12i4lvzTaBt5k3DuLP2Pmdy_5zek3kOT6IsubJER5dPZeHfFQ4gjGGkTzX3P3wPOMwjjrVn5qB_1HioHZCZ7kNcOs')",
                }}
              ></div>
            </div>
            <p>Rejoignez plus de 10 000 étudiants dans le monde</p>
          </div>
        </div>
        <div className="hero-image">
          <div
            className="hero-image-bg"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPa0UIBdPSLKflWpLXspjv210wiIB99yO9rR56XDfBXKunHKzVgcgmYasMw8eagO_jlrRzbXL4LfNatvPN7RS7hoCldrt2JsyjcQ5gnq7zTXVBiM9nau2mpfPd5uhBHJLnJVf-tRWGyJj8yaIdMa2ncK5fjFCKE-6BatlyOrAndyzvAzHDYVzBfJmBmJTSVIqMWShT3hF_xChCde4rUgA0156AxCln5SgcNBZjnG-Umt_rjTiHZBtbMpEzwHcBT3UYxlG3_0XvCTs')",
            }}
          ></div>
          <div className="hero-image-overlay"></div>
        </div>
      </div>
    </section>
  );
}
