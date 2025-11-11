export const Footer = () => {
  return (
    <>
      <footer className="bg-black  text-gray-300 py-2">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <p>© 2025 - Hecho con React | Autor: Franco Simón Olmedo</p>
          <p>
            Repo:
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-700 transition-transform duration-300 transform hover:scale-110 inline-block m-1"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
