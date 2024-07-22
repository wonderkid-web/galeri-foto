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
  newsLink: string;
  branch: "bagendang" | "lhokseumawe" | "padang";
  createdAt: string;
  category: string;
  photoUrl: string;
  eventDate: string;
  description: string;
};

export type Cabang = ["bagendang", "lhokseumawe", "padang"];
