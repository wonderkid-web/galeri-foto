import { SocialMediaPelindo } from "@/types";
import facebook from "/public/facebook.png"
import twitter from "/public/twitter.png"
import youtube from "/public/youtube.png"
import instagram from "/public/instagram.png"

export const cabang =   ["Badas", "Bagendang", "Balikpapan", "Belawan", "Bumiharjo", "Dumai", "Garongkong", "Gresik", "Jamrud Nilam Mirah", "Lembar", "Lhokseumawe", "Makassar", "Malayahati", "Pare-Pare", "Tanjung Emas", "Tanjung Intan", "Tanjung Wangi", "Trisakti"]

export const formatter = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  fractionalSecondDigits: 3,
  hour12: true,
  timeZone: 'UTC'
});


export const mediaSosialPelindo : SocialMediaPelindo[] = [
  {
      platform: "Twitter",
      url: "https://x.com/Pelindo_SPMT?mx=2",
      icon: twitter
  },
  {
      platform: "Facebook",
      url: "https://m.facebook.com/PTPelindoMultiTerminal?wtsid=rdr_0WIsEXKLkUFFL2Nzi",
      icon: facebook
  },
  {
      platform: "Instagram",
      url: "https://www.instagram.com/pelindomultiterminal?igsh=MTh5bmE2dms0dG85Ng==",
      icon: instagram
  },
//   {
//       platform: "LinkedIn",
//       url: "https://www.linkedin.com/feed/update/activity:7215556119518199808",
//       icon: facebook
//   },
  {
      platform: "YouTube",
      url: "https://youtube.com/@pelindomultiterminal?si=-Kx2znwVK-P2bgqM",
      icon: youtube
  }
];

export const optionDate = [
  { value: 'hari', label: 'Hari' },
  { value: 'minggu', label: 'Mingguan' },
  { value: 'tahun', label: 'Tahunan' },
  { value: 'all', label: 'Seluruh Galery' },
]
