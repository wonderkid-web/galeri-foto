import { UUID } from "crypto";
import { StaticImageData } from "next/image";

export type KantorType = {
  nama: string;
};

export type TotalCabang = ["Badas", "Bagendang", "Balikpapan", "Belawan", "Bumiharjo", "Dumai", "Garongkong", "Gresik", "Jamrud Nilam Mirah", "Lembar", "Lhokseumawe", "Makassar", "Malayahati", "Pare-Pare", "Tanjung Emas", "Tanjung Intan", "Tanjung Wangi", "Trisakti"];
export type Cabang = "Badas"| "Bagendang"| "Balikpapan"| "Belawan"| "Bumiharjo"| "Dumai"| "Garongkong"| "Gresik"| "Jamrud Nilam Mirah"| "Lembar"| "Lhokseumawe"| "Makassar"| "Malayahati"| "Pare-Pare"| "Tanjung Emas"| "Tanjung Intan"| "Tanjung Wangi"| "Trisakti";

export type FormValues = {
  email: string;
  password: string;
  role?: string;
  branch?: Cabang;
};

export type History = {
  id: UUID;
  newsLink: string;
  branch: Cabang;
  createdAt: { seconds: number; nanoseconds: number };
  category: string;
  photoUrl: string;
  eventDate: string;
  description: string;
};

export type SocialMediaPelindo = {
  platform: string;
  url: string;
  icon: StaticImageData;
};

export type Calendar = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export type SelectionDate = {
  endDate: Date;
  key: string;
  startDate: Date;
};

export type SelectedFilterDateType = [
  { value: "hari"; label: "Hari" },
  { value: "minggu"; label: "Mingguan" },
  { value: "tahun"; label: "Tahunan" },
  { value: "all"; label: "Seluruh Galery" }
];

export type FilteredType = "hari" | "minggu" | "tahun" | "all";
