import Image from "next/image";
import logo from "/public/pelindo.png";
import baca from "/public/mengajar.jpg";
import pengembangan from "/public/pengembangan.png";
import lingkungan from "/public/lingkungan.jpg";

export default function page() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-sky-700 font-semibold text-center mb-24 underline text-4xl">
        Selamat Datang Pada Halaman Admin
      </h1>

      <div className="grid grid-cols-3 justify-between w-full items-center gap-8">
        <div className="col-span-1 text-center mb-8 relative w-2/3 h-2/3 shadow-lg justify-self-end border rounded-md">
          <Image src={logo} alt="Pelindo Peduli" objectFit="cover" />
        </div>

        <div className="col-span-2 flex flex-col justify-end items-end pr-24">
          <h1 className="text-sky-700 text-4xl font-bold mb-8 text-right">
            Program TJSL
          </h1>
          <p className="text-gray-500 text-lg mb-8 w-2/3 text-justify">
            Program Tanggung Jawab Sosial dan Lingkungan (TJSL) BUMN adalah
            kegiatan yang merupakan komitmen perusahaan terhadap pembangunan
            berkelanjutan dengan memberikan manfaat pada ekonomi, sosial,
            lingkungan, hukum dan tata kelola dengan prinsip yang lebih
            terintegrasi, terarah, terukur dampaknya bagi masyarakat luas. Kerap
            juga disebut CSR (<em>Corporate Social Responsibility</em>). Program
            TJSL Pelindo yang merupakan 3 program Prioritas, meliputi:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 justify-between w-full items-center gap-8 ">
        <div className="col-span-2 flex flex-col ml-24">
          <h1 className="text-sky-700 text-4xl font-bold mb-8">Program TJSL</h1>
          <p className="text-gray-500 text-lg mb-8 w-2/3 text-justify">
            Program TJSL bidang pendidikan adalah upaya perusahaan dalam
            pemerataan pendidikan berkualitas agar anak-anak Indonesia mendapat
            kemudahan dan akses ilmu pengetahuan serta teknologi. Selain itu,
            program ini juga bertujuan untuk meningkatkan kompetensi guru,
            menyediakan fasilitas belajar yang memadai, dan mendorong inovasi
            dalam metode pengajaran. Dengan demikian, diharapkan generasi muda
            Indonesia dapat bersaing secara global dan berkontribusi positif
            bagi kemajuan bangsa.{" "}
          </p>
        </div>

        <div className="col-span-1 text-center mb-8 relative w-2/3 h-2/3 shadow-lg border rounded-md">
          <Image src={baca} alt="Pelindo Peduli" objectFit="cover" />
        </div>
      </div>

      <div className="grid grid-cols-3 justify-between w-full items-center gap-8">
        <div className="col-span-1 text-center mb-8 relative w-2/3 h-2/3 shadow-lg justify-self-end border rounded-md">
          <Image src={lingkungan} alt="Pelindo Peduli" objectFit="cover" />
        </div>

        <div className="col-span-2 flex flex-col justify-end items-end pr-24">
          <h1 className="text-sky-700 text-4xl font-bold mb-8 text-right">
            Program Peduli Lingkungan
          </h1>
          <p className="text-gray-500 text-lg mb-8 w-2/3 text-justify">
            Pelindo mendukung sepenuhnya komitmen pemerintah Indonesia dalam
            menangani pemanasan global dan perubahan iklim. Apalagi, sebagai
            korporasi yang bergerak di bidang jasa kepelabuhan dan logistik,
            Perseroan berpotensi besar terdampak negatif akibat pemanasan global
            dan perubahan iklim.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 justify-between w-full items-center gap-8 ">
        <div className="col-span-2 flex flex-col ml-24">
          <h1 className="text-sky-700 text-4xl font-bold mb-8">
            Program Pengembangan UMK (Usaha Menengah Kecil){" "}
          </h1>
          <p className="text-gray-500 text-lg mb-8 w-2/3 text-justify">
            Kontribusi BUMN dalam pemberdayaan terhadap UMKM, koperasi dan
            masyarakat dikuatkan dengan terbitnya Peraturan Menteri Badan Usaha
            Milik Negara Republik Indonesia No. PER-05/ MBU/04/2021 tentang
            Program Tanggung Jawab Sosial dan Lingkungan Badan Usaha Milik
            Negara (TJSL BUMN). Berdasarkan peraturan terbaru tersebut, BUMN
            bisa menerapkan TJSL melalui Program Pendanaan Usaha Mikro dan Usaha
            Kecil atau Program Pendanaan UMK, serta Bantuan dan/atau Kegiatan
            Lainnya.
          </p>
        </div>

        <div className="col-span-1 text-center mb-8 relative w-2/3 h-2/3 shadow-lg border rounded-md">
          <Image
            src={pengembangan}
            alt="Pelindo Peduli"
            objectFit="cover"
            className="mt-16"
          />
        </div>
      </div>

      <div>
        <h1 className="text-sky-700 font-semibold text-center my-8 text-4xl">
          Temukan Kami Disini
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.1095177011694!2d98.6874494793457!3d3.7863375000000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3036cf179e7178fd%3A0xb23a81809be5bac1!2sPT%20PELINDO%20MULTI%20TERMINAL%20BRANCH%20BELAWAN!5e0!3m2!1sid!2sid!4v1721981617459!5m2!1sid!2sid"
          style={{ width: "90%" }}
          className="mx-auto"
          height="600"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
