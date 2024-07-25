import Link from 'next/link';

function Footer() {
  return (
    <footer className="row-end-13  col-start-3 col-end-13 bg-gray-800 text-white py-4 pb-4">
      <div className="container mx-auto text-center">
        <p>Jl. Lingkar Pelabuhan No. 1, Belawan, Medan 20411</p>
        <Link href="https://maps.app.goo.gl/EerWkbbUAS159gH96" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Lihat di Peta
        </Link>
        <p>
          <Link href="tel:(061)41000055" className="text-blue-500 hover:underline">(061) 41000055</Link>
        </p>
        <p>
          <Link href="mailto:plmt@pelindomultiterminal.co.id" className="text-blue-500 hover:underline">plmt@pelindomultiterminal.co.id</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
