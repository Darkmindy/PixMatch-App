// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-white border-t mt-8 py-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} PixMatch — Tutti i diritti riservati.
    </footer>
  );
};

export default Footer;
