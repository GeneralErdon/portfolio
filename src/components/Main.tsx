
const Main:React.FC<Props> = () => {
  return (
    <main className="container mx-auto p-4">
      <section id="about" className="my-8">
        <h2 className="text-3xl font-bold">Sobre mí</h2>
        <p className="mt-4">Soy un desarrollador backend con experiencia en XYZ...</p>
      </section>
      <section id="projects" className="my-8">
        <h2 className="text-3xl font-bold">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-xl font-bold">Proyecto 1</h3>
            <p className="mt-2">Descripción del proyecto 1...</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-xl font-bold">Proyecto 2</h3>
            <p className="mt-2">Descripción del proyecto 2...</p>
          </div>
          {/* Agrega más proyectos aquí */}
        </div>
      </section>
      <section id="contact" className="my-8">
        <h2 className="text-3xl font-bold">Contacto</h2>
        <p className="mt-4">Puedes contactarme a través de mi correo: example@example.com</p>
      </section>
    </main>
  );
};

export default Main;