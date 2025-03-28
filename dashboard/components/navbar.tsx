import Link from "next/link";
import Image from "next/image";

function NavItem({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) {
    return (
      <div
        className="flex items-center gap-2 px-4 py-2 rounded-full w-full justify-center"
      >
        <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center relative ">
            <Image src={active ? `/icons-menu/${icon}-pressed.svg` : `/icons-menu/${icon}.svg`} alt="Logo" fill className="rounded-full" />
        </div>
        <span className={`text-[20px] border border-white px-2 rounded-full grow text-center tracking-wide ${active ? "bg-white text-primary-800 font-bold": "font-thin"}`}>{label}</span>
      </div>
    );
  }
  
export default function Navbar({ active }: { active?: string } = {}) {
    return (
        <nav className="flex flex-col items-center gap-4 h-full justify-between my-10">
        <Link href="/" className="w-full flex justify-center">
          <NavItem icon="home" label="GERAL" active={active == 'GERAL' ? true : false}/>
        </Link>
        <Link href="/projetos" className="w-full flex justify-center">
          <NavItem icon="projetos" label="PROJETOS" active={active == 'PROJETOS' ? true : false}/>
        </Link>
        <Link href="/atuacao" className="w-full flex justify-center">
          <NavItem icon="atuacao" label="ATUAÇÃO" active={active == 'ATUACAO' ? true : false}/>
        </Link>
        <Link href="/equipe" className="w-full flex justify-center">
          <NavItem icon="equipe" label="EQUIPE" active={active == 'EQUIPE' ? true : false} />
        </Link>
        <Link href="/nps" className="w-full flex justify-center">
          <NavItem icon="nps" label="NPS" active={active == 'NPS' ? true : false}/>
        </Link>
      </nav>
    );
  }