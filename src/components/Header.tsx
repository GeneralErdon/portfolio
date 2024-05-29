const Header: React.FC<Props> = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mi Portafolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">Sobre mí</a></li>
            <li><a href="#projects" className="hover:underline">Proyectos</a></li>
            <li><a href="#contact" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;