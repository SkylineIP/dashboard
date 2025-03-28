import {
  Home,
  BarChart2,
  Target,
  Users,
  PieChart,
  ChevronDown,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function NpsPage() {
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

        <Navbar active="NPS" />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Period Filter */}
        <div className="mb-6">
          <div className="w-44">
            <FilterDropdown label="SELECIONAR PERÍODO" />
          </div>
        </div>

        {/* Top Section */}
        <div className="flex gap-6 mb-6">
          {/* NPS Score Card */}
          <div className="bg-primary-800 rounded-lg p-6 w-[450px] h-[300px] relative">
            <div className="absolute left-10 top-1/2 -translate-y-1/2">
              <TriangleLabel label="NPS DO SETOR:" />
            </div>

            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-6xl font-bold mb-4">100</div>
              <div className="bg-white p-4 rounded-lg w-24 h-24 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="NPS mascot"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>

          {/* Client NPS Table */}
          <div className="bg-white rounded-lg overflow-hidden flex-1">
            <table className="w-full text-sm">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left font-medium">
                    CONTATO DO CLIENTE
                  </th>
                  <th className="py-3 px-4 text-center font-medium">NPS</th>
                  <th className="py-3 px-4 text-right font-medium">
                    <div className="flex items-center justify-end">
                      ENTREGA D PROJETO{" "}
                      <ChevronDown size={16} className="ml-1" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-primary">
                <ClientRow
                  name="Monique"
                  phone="62 3267-1321"
                  nps={10}
                  date="jun. 2024"
                />
                <ClientRow
                  name="Geovanna"
                  phone="62 8102-0792"
                  nps={9}
                  date="mai. 2024"
                />
                <ClientRow
                  name="André"
                  phone="61 8166-9966"
                  nps={9}
                  date="abr. 2024"
                />
                <ClientRow
                  name="Monique"
                  phone="62 3267-1321"
                  nps={10}
                  date="mar. 2024"
                />
                <ClientRow
                  name="Larissa"
                  phone="81 9808-6956"
                  nps={10}
                  date="mar. 2024"
                />
                <ClientRow
                  name="Adriano"
                  phone="11 98974-2675"
                  nps={10}
                  date="mar. 2024"
                />
                <ClientRow
                  name="Monique"
                  phone="62 3267-1321"
                  nps={10}
                  date="mar. 2024"
                />
                <ClientRow
                  name="Adriano"
                  phone="11 98974-2675"
                  nps={10}
                  date="mar. 2024"
                />
                <ClientRow
                  name="Karyne"
                  phone="62 9669-8200"
                  nps={10}
                  date="mar. 2024"
                />
                <ClientRow
                  name="Pedro Vono"
                  phone="62 8445-5050"
                  nps={10}
                  date="mar. 2024"
                />
              </tbody>
            </table>

            {/* Pagination */}
            <div className="bg-white py-3 px-4 flex justify-end items-center text-primary text-sm">
              <span>1 - 10 / 20</span>
              <div className="flex ml-4">
                <button className="p-1 rounded-full hover:bg-gray-100">
                  <ChevronLeft size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex flex-col gap-4">
            <div className="border-2 border-white rounded-lg p-4 w-32 h-32 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Swimming mascot"
                width={80}
                height={80}
              />
            </div>
            <div className="border-2 border-white rounded-lg p-4 w-32 h-32 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Thumbs up mascot"
                width={80}
                height={80}
              />
            </div>
            <div className="border-2 border-white rounded-lg p-4 w-32 h-32 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="NPS mascot"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>

        {/* Monthly NPS Chart */}
        <div className="bg-white rounded-lg p-6">
          <div className="h-64 flex flex-col">
            <div className="flex-1 flex items-end">
              <div className="flex h-full">
                {/* Y-axis */}
                <div className="flex flex-col justify-between pr-4 text-primary text-sm">
                  <div>100</div>
                  <div>99</div>
                </div>

                {/* Bars */}
                <div className="flex-1 flex items-end justify-between">
                  <MonthBar month="janeiro" value={100} />
                  <MonthBar month="fevereiro" value={100} />
                  <MonthBar month="março" value={100} />
                  <MonthBar month="abril" value={100} />
                  <MonthBar month="maio" value={100} />
                  <MonthBar month="junho" value={100} />
                  <MonthBar month="julho" value={0} />
                  <MonthBar month="agosto" value={0} />
                  <MonthBar month="setembro" value={0} />
                  <MonthBar month="outubro" value={0} />
                  <MonthBar month="novembro" value={0} />
                  <MonthBar month="dezembro" value={0} />
                </div>
              </div>
            </div>

            {/* X-axis */}
            <div className="flex justify-between mt-4 text-primary text-xs">
              <div>janeiro</div>
              <div>fevereiro</div>
              <div>março</div>
              <div>abril</div>
              <div>maio</div>
              <div>junho</div>
              <div>julho</div>
              <div>agosto</div>
              <div>setembro</div>
              <div>outubro</div>
              <div>novembro</div>
              <div>dezembro</div>
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

function ClientRow({ name, phone, nps, date }) {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-3 px-4">
        {name}: {phone}
      </td>
      <td className="py-3 px-4 text-center">{nps}</td>
      <td className="py-3 px-4 text-right">{date}</td>
    </tr>
  );
}

function MonthBar({ month, value }) {
  // For this specific chart, we want to show bars at full height for 100 and no height for 0
  const height = value === 100 ? "100%" : "0%";

  return (
    <div className="flex flex-col items-center w-16">
      {value > 0 && (
        <div className="text-white text-sm font-medium mb-1 bg-blue-500 px-2 rounded">
          {value}
        </div>
      )}
      <div className="w-full bg-blue-500" style={{ height }}></div>
    </div>
  );
}

function TriangleLabel({ label }) {
  return (
    <div className="relative">
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 10L150 80L10 150L10 10Z"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div
        className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl"
        style={{ left: "15px" }}
      >
        <div className="text-center">{label}</div>
      </div>
    </div>
  );
}
