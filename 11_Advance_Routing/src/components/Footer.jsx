

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 absolute bottom-0 w-full">
      <div className="flex justify-center gap-5 mb-3">
        <a href="/" className="hover:text-white">Home</a>
        <a href="/about" className="hover:text-white">About</a>
        <a href="/contact" className="hover:text-white">Contact</a>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} MyLogo. All rights reserved.</p>
    </footer>
  );
};

export default Footer;