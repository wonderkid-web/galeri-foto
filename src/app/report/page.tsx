"use client";

import React from "react";

const DateSorter = () => {
  const dates = [
    "2023-08-10T08:24:33.127Z",
    "2023-12-15T06:50:20.923Z",
    "2024-03-04T14:30:59.114Z",
    "2023-11-22T19:47:48.854Z",
    "2024-05-12T22:18:37.639Z",
  ];

  const branches = [
    {
      kategori: "Kategori 1",
      uploadFoto: "path/to/uploaded/photo1.jpg",
      deskripsi: "Deskripsi acara pertama",
      tanggalAcara: "2024-07-18T00:00:00Z",
      tanggalUpload: "2024-07-17T00:00:00Z",
      linkBerita: "http://linkberita1.com",
    },
    {
      kategori: "Kategori 2",
      uploadFoto: "path/to/uploaded/photo2.jpg",
      deskripsi: "Deskripsi acara kedua",
      tanggalAcara: "2024-07-20T00:00:00Z",
      tanggalUpload: "2024-07-19T00:00:00Z",
      linkBerita: "http://linkberita2.com",
    },
    {
      kategori: "Kategori 3",
      uploadFoto: "path/to/uploaded/photo3.jpg",
      deskripsi: "Deskripsi acara ketiga",
      tanggalAcara: "2024-07-22T00:00:00Z",
      tanggalUpload: "2024-07-21T00:00:00Z",
      linkBerita: "http://linkberita3.com",
    },
  ];

  return (
    <div>
      <div className="mt-4 flex gap-2 justify-end pr-6 w-full">
        <form>
        
          <select
            id="month"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Bulan Galery</option>
            <option value="0">Januari</option>
            <option value="1">Februari</option>
            <option value="2">Maret</option>
            <option value="3">April</option>
            <option value="4">Mei</option>
            <option value="5">Juni</option>
            <option value="6">Juli</option>
            <option value="7">Agustus</option>
            <option value="8">September</option>
            <option value="9">Oktober</option>
            <option value="10">November</option>
            <option value="11">Desember</option>
          </select>
        </form>
        <form>
     
          <select
            id="year"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Tahun Galery</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
          </select>
        </form>
      </div>
      {branches.map((d) => (
        <div key={d.tanggalAcara} className="mt-4">
          {/* <p>{formatDate(d.tanggalAcara)}</p> */}
          <p>Bulan: {new Date(d.tanggalUpload).getMonth()}</p>
          <p>Tahun: b         k4                9  x{new Date(d.tanggalUpload).getFullYear()}</p>
          {/* <p>{formatDate(d.tanggalUpload)}</p> */}
          <hr className="mb-4" />
        </div>
      ))}
      {/* <h2>Urutan Harian:</h2>
      <ul>
        {sortedDaily.map((date) => (
          <li key={date}>{formatDate(date)}</li>
        ))}
      </ul>

      <h2>Urutan Mingguan:</h2>
      <ul>
        {sortedWeekly.map((date) => (
          <li key={date}>{formatDate(date)}</li>
        ))}
      </ul>

      <h2>Urutan Bulanan:</h2>
      <ul>
        {sortedMonthly.map((date) => (
          <li key={date}>{formatDate(date)}</li>
        ))}
      </ul>

      <h2>Urutan Tahunan:</h2>
      <ul>
        {sortedYearly.map((date) => (
          <li key={date}>{formatDate(date)}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default DateSorter;
