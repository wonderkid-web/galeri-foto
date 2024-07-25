import { UUID } from "crypto";
import { StaticImageData } from "next/image";
import { URL } from "url";

export type KantorType = {
  nama: string;
};

export type FormValues = {
  username: string;
  password: string;
  role: string;
};

export type History = {
  id: UUID;
  newsLink: string;
  branch: "bagendang" | "lhokseumawe" | "padang";
  createdAt: string;
  category: string;
  photoUrl: string;
  eventDate: string;
  description: string;
};

export type Cabang = ["bagendang", "lhokseumawe", "padang"];


export type SocialMediaPelindo = {
  platform: string,
  url: string,
  icon: StaticImageData
}

export type Calendar = {
  startDate: Date,
  endDate: Date,
  key: string,
}

export type SelectionDate = {
  endDate: Date;
  key: string;
  startDate: Date;
}

export type SelectedFilterDateType = [
  { value: 'hari', label: 'Hari' },
  { value: 'minggu', label: 'Mingguan' },
  { value: 'tahun', label: 'Tahunan' },
  { value: 'all', label: 'Seluruh Galery' },
]

export type FilteredType = "hari" | "minggu" | "tahun" | "all"