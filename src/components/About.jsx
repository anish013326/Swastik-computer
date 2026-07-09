import React from "react";
import { FiAward, FiTool, FiShield, FiUsers, FiZap } from "react-icons/fi";

const highlights = [
  {
    title: "2011",
    text: "Established and trusted by local businesses and families in Dehri On Sone.",
    icon: FiAward,
  },
  {
    title: "100% Support",
    text: "Sales, service, and maintenance for laptops, desktops, printers, UPS, and CCTV.",
    icon: FiTool,
  },
  {
    title: "",
    text: "",
    videoEmbedUrl: "https://drive.google.com/file/d/1F49atwQGdHAOzOPYZXfvtYpPXuuyJpcg/preview",
  },
];

const brands = [
  "HP",
  "Dell",
  "Lenovo",
  "Brother",
  "Canon",
  "EPSON",
  "CP Plus",
  "D-Link",
  "ProDot",
  "Zebronics",
  "Consistent",
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f6f7fb] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_32%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-blue-700 shadow-sm">
              About Swastik Computer
            </span>

            <div className="space-y-4">
              <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                COMPLETE IT SHOP
              </h2>
              <p className="max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                Established in 2011, we are the leading computer shop in Dehri On Sone.
                We deal in laptops, desktops, printers, on line UPS, CCTV, and all types
                of accessories. Our focus is simple: reliable products, practical advice,
                and service you can count on.
              </p>
              <p className="max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                We are also the authorized partner of HP, Dell, Lenovo, Brother, Canon,
                EPSON, CP Plus, D-Link, ProDot, Zebronics, Consistent, and other trusted
                brands. Along with sales, we provide expert repair services for desktops,
                laptops, and printers, plus annual maintenance contracts for businesses,
                schools, banks, and corporate offices.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/70 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
                  >
                    {item.videoEmbedUrl ? (
                      <div className="relative mb-4 overflow-hidden rounded-2xl bg-black">
                        <iframe
                          src={item.videoEmbedUrl}
                          title={item.title || "Shop video"}
                          className="h-48 w-full border-0 sm:h-56"
                          allow="autoplay; encrypted-media; picture-in-picture"
                          allowFullScreen
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                      </div>
                    ) : (
                      <div className="mb-4 inline-flex rounded-2xl bg-gray-950 p-3 text-white">
                        <item.icon className="text-xl" />
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-gray-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gray-950 p-6 text-white shadow-2xl sm:p-8">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                 
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    Complete IT & CCTV Solution Under One Roof 
                  </h3>
                </div>
                <div className="rounded-2xl bg-white/10 p-3">
                  <FiShield className="text-2xl text-blue-300" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <FiUsers className="text-2xl text-emerald-300" />
                  <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-gray-300">
                    For Teams
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    AMC plans and dependable support for offices, schools, banks, and
                    corporate setups.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <FiZap className="text-2xl text-yellow-300" />
                  <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-gray-300">
                    For Everyday Use
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Laptops, desktops, printers, CCTV, UPS, and accessories for home and
                    study needs.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-50/90">
                  Brands we support
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+917004084867"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-gray-950 transition hover:bg-gray-100"
                >
                  Call for Support
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Visit Store Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;