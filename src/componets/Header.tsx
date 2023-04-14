import Image from 'next/image'
import menu from '../../public/icon/menu.svg'

function Header() {
  return (
    <header className="flex justify-between p-6 w-full items-center md:p-8">
      <h1 className="font-Montserrat w-3 text-cinza font-bold text-lg sm:text-[32px]">
        Food<span className="text-red">JP</span>
      </h1>

      <ul className="space-x-16 text-xl font-Inter text-cinza font-medium hidden sm:flex md:space-x-32">
        <li className=" hover:text-red">
          <a href="id">inicio</a>
        </li>
        <li className=" hover:text-red">
          <a href="id">Cardápio</a>
        </li>
        <li className="text-cinza hover:text-red">
          <a href="id">Sobre</a>
        </li>
      </ul>

      <button className="hidden text-xl font-Inter text-cinza font-medium px-9 py-2 rounded-md border-black border sm:flex ">
        Entrar
      </button>

      <Image
        className="sm:hidden"
        priority
        src={menu}
        alt="title"
        width={24}
        height={24}
      />
    </header>
  )
}

export default Header
