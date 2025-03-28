import Navbar from "@/components/navbar"
import { Home, BarChart2, Target, Users, PieChart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EquipePage() {
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
      
              <Navbar active="EQUIPE" />
            </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto">
          {/* Design Team Section */}
          <div className="mb-16 relative">
            <div className="absolute -left-16 top-1/2 -translate-y-1/2">
              <TriangleLabel label="DESIGN" />
            </div>

            <div className="flex justify-center gap-16 mt-8">
              <TeamMember name="MICA" imagePath="/placeholder.svg?height=180&width=180" />
              <TeamMember name="THALYS" imagePath="/placeholder.svg?height=180&width=180" />
              <TeamMember name="MILLENA" imagePath="/placeholder.svg?height=180&width=180" />
              <TeamMember name="BIA L." imagePath="/placeholder.svg?height=180&width=180" />
            </div>
          </div>

          {/* Programming Team Section */}
          <div className="relative">
            <div className="absolute -left-16 top-1/2 -translate-y-1/2">
              <TriangleLabel label="PROGRAMAÇÃO" multiline />
            </div>

            <div className="flex justify-center gap-16 mt-8">
              <TeamMember name="LÉO" imagePath="/placeholder.svg?height=180&width=180" score="100" />
              <TeamMember name="BIA F." imagePath="/placeholder.svg?height=180&width=180" score="100" />
              <TeamMember name="KALEB" imagePath="/placeholder.svg?height=180&width=180" score="100" />
              <TeamMember name="FERNANDO" imagePath="/placeholder.svg?height=180&width=180" score="100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({ icon, label, active = false }) {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-full ${active ? "bg-primary-700" : ""} w-full justify-center`}
    >
      <div className="w-6 h-6 rounded-full bg-primary-700 flex items-center justify-center">{icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  )
}

function TeamMember({ name, imagePath, score }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white text-primary rounded-full px-6 py-1 mb-4">
        <span className="text-sm font-medium">{name}</span>
      </div>

      <div className="w-36 h-36 relative mb-4">
        <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white">
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={`${name} avatar`}
            width={180}
            height={180}
            className="object-cover"
          />
        </div>
      </div>

      {score && (
        <div className="bg-primary-800 rounded-lg px-4 py-2 min-w-[80px] text-center">
          <span className="text-2xl font-bold">{score}</span>
        </div>
      )}
    </div>
  )
}

function TriangleLabel({ label, multiline = false }) {
  return (
    <div className="relative">
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10L150 80L10 150L10 10Z" stroke="white" strokeWidth="2" fill="none" />
      </svg>

      <div
        className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl"
        style={{ left: "15px" }}
      >
        {multiline ? (
          <div className="text-center">
            <div>PROGRA</div>
            <div>MAÇÃO</div>
          </div>
        ) : (
          label
        )}
      </div>
    </div>
  )
}

