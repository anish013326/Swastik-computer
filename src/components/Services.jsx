import React from "react";
import {
  MdLaptopMac,
  MdDesktopWindows,
  MdBuild,
  MdVideocam,
  MdPrint,
} from "react-icons/md";


const services = [
  {
    id: 1,
    name: "NEW LAPTOPS",
    desc: "Student & Professional",
    icon: MdLaptopMac,
    bg: "bg-blue-500/20",
    color: "text-blue-400",
  },
  {
    id: 2,
    name: "REFURBISHED LAPTOP",
    desc: "Repair & Maintenance",
    icon: MdDesktopWindows,
    bg: "bg-purple-500/20",
    color: "text-purple-400",
  },
    {
    id: 3,
    name: "PRINTER",
    desc: "Sales & Installation",
    icon: MdPrint,
    bg: "bg-emerald-500/20",
    color: "text-emerald-400",
  },
  {
    id: 4,
    name: "CCTV",
    desc: "Sales & Installation",
    icon: MdVideocam,
    bg: "bg-red-500/20",
    color: "text-red-400",
  },
  {
    id: 5,
    name: "EXPERT SERVICE",
    desc: "Screen, Battery & Logic Board",
    icon: MdBuild,
    bg: "bg-orange-500/20",
    color: "text-orange-400",
  }
];

const Services = () => {
  return (
    <section id="repair" className="py-16 sm:py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-3/4 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5 lg:gap-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="flex items-center gap-4 sm:gap-5 bg-white/5 p-5 sm:p-6 lg:p-8 rounded-2xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm hover:shadow-[0_8px_30px_rgba(168,85,247,0.1)] hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${service.bg} flex items-center justify-center flex-shrink-0 ring-1 ring-white/10 group-hover:ring-white/20 transition-all`}
                >
                  <Icon className={`text-3xl sm:text-4xl ${service.color}`} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                    {service.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mt-1">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
