"use client";

import { useEffect, useState } from "react";

import { Home, BarChart2, Target, Users, PieChart, Search } from "lucide-react";
import Image from "next/image";
import GaugeChart from "@/components/gauge-chart";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Dashboard() {
  const [maxDate, setMaxDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 7); // Formato YYYY-MM
    setMaxDate(formattedDate);
  }, []);
  return (
    <div className="flex h-screen text-white">
      {/* Sidebar */}
      <div className="w-60 border border-white rounded-3xl flex flex-col items-center py-6 bg-gradient-to-t from-[#2824B4] to-[#1C1463] m-[50px]">
        <div className="flex items-center justify-center mb-8">
          <svg
            width="164"
            height="151"
            viewBox="0 0 164 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M154.064 151C153.399 151 152.723 150.939 152.058 150.818L7.95342 124.046C3.34817 123.185 0 119.477 0 115.199V100.643H15.1333V111.708L148.843 136.541V14.4604L15.1333 39.2935V50.4193H0V35.7909C0 31.5248 3.33609 27.8041 7.94134 26.9436L152.058 0.183449C154.935 -0.349814 157.92 0.292526 160.229 1.94079C162.622 3.66178 164 6.24326 164 9.03077V141.959C164 144.734 162.622 147.328 160.229 149.049C158.452 150.321 156.288 151 154.064 151Z"
              fill="#EBF7FD"
            />
          </svg>
        </div>

        <Navbar active="GERAL"/>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 m-[50px]">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="month"
            className="border p-2 focus:outline-white focus:ring-2 focus:ring-white text-primary-800 rounded-full h-10 flex items-center px-4"
            max={maxDate} // Limita ao mês atual ou anteriores
            defaultValue={maxDate} // Define o valor padrão como o mês atual
            lang="pt-br"
          />
        </div>

        {/* Dashboard Grid */}
        <div className="grid sm:grid-cols-[repeat(auto-fit,_minmax(186px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(186px,_1fr))] lg:grid-cols-5 gap-6">
          {/* First Row */}
          <div className="bg-white text-primary rounded-xl p-4 col-span-1 row-span-2 flex flex-col items-center justify-center lg:min-w-[130px]" >
            <h3 className="text-sm font-medium mb-2">EM ANDAMENTO</h3>
            <div className="text-5xl font-bold mb-4 text-center text-primary-800">
              28
            </div>
            <div className="w-full h-40 flex items-center justify-center">
              <GaugeChart value={28} />
            </div>
          </div>

          <div className="bg-white text-primary rounded-xl p-4 flex flex-col items-center justify-center lg:min-w-[130px]">
            <h3 className="text-sm font-medium mb-2">SALAS</h3>
            <div className="text-5xl font-bold text-center">83</div>
          </div>

          <div className="border border-white rounded-xl p-4 flex flex-col items-center justify-center text-center lg:min-w-[130px]">
            <h3 className="text-sm font-medium mb-2">AGUARDANDO MATERIAIS</h3>
            <div className="text-5xl font-bold">04</div>
          </div>

          <div className="border border-white rounded-xl p-4 flex flex-col items-center justify-center lg:min-w-[130px]">
            <h3 className="text-sm font-medium mb-2">DESIGN FINAL</h3>
            <div className="text-5xl font-bold ">02</div>
          </div>

          <div className="border border-white rounded-xl p-4 flex flex-col items-center justify-center lg:min-w-[130px]">
            <h3 className="text-sm font-medium mb-2">AJUSTES DESIGN</h3>
            <div className="text-5xl font-bold">01</div>
          </div>

          {/* Second Row */}
          <div className="bg-white text-primary rounded-xl p-4 flex flex-col items-center justify-center lg:min-w-[130px]">
            <h3 className="text-sm font-medium mb-2">TELAS</h3>
            <div className="text-5xl font-bold text-center">57</div>
          </div>

          <div className="border border-white rounded-xl p-4 flex flex-col items-center justify-center text-center lg:min-w-[130px]">
            <h3 className="text-sm font-medium mb-2">PRIMEIRAS TELAS</h3>
            <div className="text-5xl font-bold">06</div>
          </div>

          <div className="border border-white rounded-xl p-4 flex flex-col items-center justify-center text-center lg:min-w-[130px]">
            <h3 className="text-sm font-medium mb-2">PROGRAMAÇÃO FINAL</h3>
            <div className="text-5xl font-bold">06</div>
          </div>

          <div className="border border-white rounded-xl p-4 flex flex-col items-center justify-center text-center lg:min-w-[130px]">
            <h3 className="text-sm font-medium mb-2">AJUSTES PROGRAMAÇÃO</h3>
            <div className="text-5xl font-bold">02</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex gap-4 justify-center items-center">
          <div className="border border-white rounded-full px-6 py-3 flex items-center">
            <span className="mr-2 tracking-widest">ENTREGUES</span>
            <span className="font-bold">140</span>
          </div>
          <div className="border border-white rounded-full p-6 px-36 flex items-center">
          </div>
          <div className="rounded-full p-1 relative justify-center items-center w-full h-full"> 
            <div className=" rounded-full"><hr></hr><hr></hr></div>
          </div>
        </div>
      </div>
    </div>
  );
}
