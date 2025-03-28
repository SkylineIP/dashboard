import Navbar from "@/components/navbar";
import {
  Home,
  BarChart2,
  Target,
  Users,
  PieChart,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AtuacaoPage() {
  return (
    <div className="flex h-screen bg-primary text-white">
      {/* Sidebar - same as in the dashboard */}
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

        <Navbar active="ATUACAO" />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-4 justify-between">
          <div className="w-44">
            <FilterDropdown label="SELECIONAR PERÍODO" />
          </div>

          <div className="flex gap-4">
            <div className="w-44">
              <FilterDropdown label="LOCAL" />
            </div>
            <div className="w-44">
              <FilterDropdown label="CLIENTE" />
            </div>
            <div className="w-44">
              <FilterDropdown label="PROJETO" />
            </div>
          </div>
        </div>

        {/* Locations Table */}
        <div className="bg-white rounded-lg overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left font-medium">
                  <div className="flex items-center">
                    EMPRESA <ChevronDown size={16} className="ml-1" />
                  </div>
                </th>
                <th className="py-3 px-4 text-left font-medium">
                  EMPREENDIMENTO
                </th>
                <th className="py-3 px-4 text-left font-medium">LOCAL</th>
              </tr>
            </thead>
            <tbody className="text-primary">
              <TableRow
                empresa="ÁGUA SANTA"
                empreendimento="INSPIRE"
                local="GOIÂNIA/GO"
              />
              <TableRow
                empresa="ZIP"
                empreendimento="BENVINDO"
                local="BELO HORIZONTE/MG"
              />
              <TableRow empresa="WSANTOS" empreendimento="WSANTOS" local="-" />
              <TableRow
                empresa="VILA BRASIL"
                empreendimento="PORTO DAS ARARAS"
                local="AP. GOIÂNIA/GO"
              />
            </tbody>
          </table>
        </div>

        {/* Map */}
        <div className="w-full h-[450px] rounded-lg overflow-hidden relative">
          {/* In a real implementation, this would be a Google Maps component */}
          {/* For the preview, we'll use a placeholder image */}
          <div className="absolute inset-0 bg-[#009ee2]/10 z-10 pointer-events-none"></div>
          <BrazilMap />
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-full ${
        active ? "bg-primary-700" : ""
      } w-full justify-center`}
    >
      <div className="w-6 h-6 rounded-full bg-primary-700 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

function FilterDropdown({ label }) {
  return (
    <div className="bg-white text-primary rounded-full px-4 py-2 flex items-center justify-between">
      <span className="text-sm">{label}</span>
      <ChevronDown size={16} />
    </div>
  );
}

function TableRow({ empresa, empreendimento, local }) {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-3 px-4">{empresa}</td>
      <td className="py-3 px-4">{empreendimento}</td>
      <td className="py-3 px-4">{local}</td>
    </tr>
  );
}

function BrazilMap() {
  // In a real implementation, this would be a Google Maps component with markers
  // For the preview, we'll use a placeholder image
  return (
    <div className="w-full h-full bg-[#80fff8]/30 relative">
      {/* This would be replaced with an actual Google Maps implementation */}
      <Image
        src="/placeholder.svg?height=450&width=1200"
        alt="Map of Brazil with project locations"
        width={1200}
        height={450}
        className="opacity-90"
      />

      {/* Sample markers - in a real implementation these would be Google Maps markers */}
      <div className="absolute top-[25%] left-[30%] w-3 h-3 rounded-full bg-pink-500"></div>
      <div className="absolute top-[40%] left-[60%] w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="absolute top-[50%] left-[45%] w-3 h-3 rounded-full bg-blue-500"></div>
      <div className="absolute top-[60%] left-[70%] w-3 h-3 rounded-full bg-red-500"></div>
      <div className="absolute top-[65%] left-[55%] w-3 h-3 rounded-full bg-green-500"></div>
      <div className="absolute top-[70%] left-[65%] w-3 h-3 rounded-full bg-purple-500"></div>
      <div className="absolute top-[30%] left-[40%] w-3 h-3 rounded-full bg-orange-500"></div>
      <div className="absolute top-[45%] left-[50%] w-3 h-3 rounded-full bg-cyan-500"></div>
    </div>
  );
}
