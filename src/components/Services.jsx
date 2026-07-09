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
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    id: 2,
    name: "REFURBISHED LAPTOP",
    desc: "Repair & Maintenance",
    icon: MdDesktopWindows,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
    {
    id: 3,
    name: "PRINTER",
    desc: "Sales & Installation",
    icon: MdVideocam,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    id: 4,
    name: "EXPERT SERVICE",
    desc: "Screen, Battery & Logic Board",
    icon: MdBuild,
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  
];

const Services = () => {
  return (
    <section id="repair" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="flex items-center gap-4 sm:gap-5 bg-white p-5 sm:p-6 lg:p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${service.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`text-3xl sm:text-4xl ${service.color}`} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {service.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">{service.desc}</p>
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