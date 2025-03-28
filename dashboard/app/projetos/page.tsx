import {
  Home,
  BarChart2,
  Target,
  Users,
  PieChart,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function ProjetosPage() {
  return (
    <div className="flex h-screen text-white">
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

        <Navbar active="PROJETOS" />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto  m-[50px]">
        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-4">
          <div className="w-44">
            <FilterDropdown label="SELECIONAR PERÍODO" />
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <div className="w-44">
              <FilterDropdown label="CLIENTE" />
            </div>
            <div className="w-44">
              <FilterDropdown label="STATUS" />
            </div>
            <div className="w-44">
              <FilterDropdown label="PROJETO" />
            </div>
            <div className="w-44">
              <FilterDropdown label="DESIGNER" />
            </div>
            <div className="w-44">
              <FilterDropdown label="PROGRAMADOR" />
            </div>
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-lg overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left font-medium">EMPRESA</th>
                <th className="py-3 px-4 text-left font-medium">
                  EMPREENDIMENTO
                </th>
                <th className="py-3 px-4 text-left font-medium">PROJETO</th>
                <th className="py-3 px-4 text-left font-medium">DESIGNER</th>
                <th className="py-3 px-4 text-left font-medium">PROGRAMADOR</th>
                <th className="py-3 px-4 text-left font-medium">STATUS</th>
                <th className="py-3 px-4 text-left font-medium">FASE</th>
                <th className="py-3 px-4 text-left font-medium">VÍDEO</th>
              </tr>
            </thead>
            <tbody className="text-primary">
              <TableRow
                empresa="ABL"
                empreendimento="RIVIERA"
                projeto="SALA 3 PROJEÇÕES"
                designer="Beatriz Leão"
                programador="Beatriz Fernandes"
                status="Instalado"
                fase="entregue"
                video="-"
              />
              <TableRow
                empresa="ABL PRIME"
                empreendimento="SALTO IMPERIAL"
                projeto="SALA 3 PROJEÇÕES"
                designer="Beatriz Leão"
                programador="Beatriz Fernandes"
                status="Instalado"
                fase="entregue"
                video="Ver vídeo"
                hasVideo
              />
              <TableRow
                empresa="AMÉRICAS URBANISMO"
                empreendimento="PT BR"
                projeto="SALA SEMICIRCULAR COM CHÃO"
                designer="Beatriz Leão"
                programador="-"
                status="Stand By"
                fase="aguardando materiais"
                video="-"
              />
              <TableRow
                empresa="AMÉRICAS URBANISMO"
                empreendimento="INGLÊS"
                projeto="SALA SEMICIRCULAR COM CHÃO"
                designer="Beatriz Leão"
                programador="-"
                status="Stand By"
                fase="aguardando materiais"
                video="-"
              />
              <TableRow
                empresa="BAMBUI"
                empreendimento="PRAÇA 232"
                projeto="TELA INTERATIVA"
                designer="Beatriz Leão"
                programador="Leonardo"
                status="Instalado"
                fase="entregue"
                video="Ver vídeo"
                hasVideo
              />
              <TableRow
                empresa="BAPTISTA LEAL"
                empreendimento="RES. CURADO"
                projeto="SALA 3 PROJEÇÕES"
                designer="Milena Vieira"
                programador="Kaleb"
                status="Instalado"
                fase="entregue"
                video="-"
              />
              <TableRow
                empresa="BEMORAR"
                empreendimento="SMART BANANEIRAS"
                projeto="SALA 3 PROJEÇÕES"
                designer="Milena Vieira"
                programador="Kaleb"
                status="Instalado"
                fase="entregue"
                video="-"
              />
              <TableRow
                empresa="BEMORAR"
                empreendimento="FAZENDA ALTEZA"
                projeto="SALA 3 PROJEÇÕES"
                designer="Beatriz Leão"
                programador="Kaleb"
                status="Instalado"
                fase="entregue"
                video="-"
              />
              <TableRow
                empresa="BERG ENGENHARIA"
                empreendimento="MONTE MERU"
                projeto="TELA INTERATIVA"
                designer="Thalys"
                programador="Beatriz Fernandes"
                status="Instalado"
                fase="entregue"
                video="Ver vídeo"
                hasVideo
              />
              <TableRow
                empresa="BRI"
                empreendimento="PARADISE"
                projeto="SALA 3 PROJEÇÕES"
                designer="Beatriz Leão"
                programador="Kaleb"
                status="Instalado"
                fase="entregue"
                video="-"
              />
            </tbody>
          </table>

          {/* Pagination */}
          <div className="bg-white py-3 px-4 flex justify-end items-center text-primary text-sm">
            <span>1 - 10 / 164</span>
            <div className="flex ml-4">
              <button className="p-1 rounded-full hover:bg-gray-100">
                <ChevronLeft size={18} />
              </button>
              <button className="p-1 rounded-full hover:bg-gray-100">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Delivered Section */}
        <h2 className="text-xl font-bold mb-6">PROJETOS ENTREGUES</h2>

        <div className="flex gap-6">
          {/* Chart */}
          <div className="bg-white rounded-lg p-6 flex-1">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-blue-500 mr-2"></div>
              <span className="text-primary text-sm">PROJETOS ENTREGUES</span>
            </div>

            <div className="h-64 flex items-end justify-between">
              <MonthBar month="janeiro" value={7} />
              <MonthBar month="fevereiro" value={11} />
              <MonthBar month="março" value={15} />
              <MonthBar month="abril" value={10} />
              <MonthBar month="maio" value={13} />
              <MonthBar month="junho" value={15} />
              <MonthBar month="julho" value={6} />
              <MonthBar month="agosto" value={23} />
              <MonthBar month="setembro" value={12} />
              <MonthBar month="outubro" value={13} />
              <MonthBar month="novembro" value={16} />
              <MonthBar month="dezembro" value={0} />
            </div>
          </div>

          {/* Lunch Goal Card */}
          <div className="bg-white rounded-lg p-6 w-72 flex flex-col items-center justify-center">
            <div className="border-2 border-black p-4 mb-4 w-40 h-40 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Bee illustration"
                width={100}
                height={100}
              />
            </div>
            <div className="text-center text-primary">
              <div className="font-bold">
                FALTAM <span className="text-xl">50</span> PROJETOS
              </div>
              <div className="font-bold">PARA O ALMOÇO!</div>
            </div>
          </div>
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

function TableRow({
  empresa,
  empreendimento,
  projeto,
  designer,
  programador,
  status,
  fase,
  video,
  hasVideo = false,
}) {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-3 px-4">{empresa}</td>
      <td className="py-3 px-4">{empreendimento}</td>
      <td className="py-3 px-4">{projeto}</td>
      <td className="py-3 px-4">{designer}</td>
      <td className="py-3 px-4">{programador}</td>
      <td className="py-3 px-4">{status}</td>
      <td className="py-3 px-4">{fase}</td>
      <td className="py-3 px-4">
        {hasVideo ? (
          <Link href="#" className="text-blue-600 hover:underline">
            {video}
          </Link>
        ) : (
          video
        )}
      </td>
    </tr>
  );
}

function MonthBar({ month, value }) {
  // Calculate height based on value (max height for highest value)
  const maxValue = 23; // Highest value in the chart
  const heightPercentage = value > 0 ? (value / maxValue) * 100 : 0;

  return (
    <div className="flex flex-col items-center">
      <div className="text-primary text-sm font-medium mb-1">{value}</div>
      <div
        className="w-10 bg-blue-500"
        style={{ height: `${heightPercentage}%` }}
      ></div>
      <div className="text-primary text-xs mt-2">{month}</div>
    </div>
  );
}
