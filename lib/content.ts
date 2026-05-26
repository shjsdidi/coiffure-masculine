export const business = {
  name: "Coiffure Masculine",
  tagline: "Salon de coiffure homme · Le Thor",
  phone: "+33 4 90 33 98 30",
  phoneHref: "tel:+33490339830",
  // Numéro WhatsApp du salon — format international, sans "+" ni espaces.
  // ⚠️ PROVISOIRE : 0625187195 (à confirmer avec le salon).
  whatsapp: "33625187195",
  address: "144 Cr Gambetta, 84250 Le Thor",
  addressLines: ["144 Cours Gambetta", "84250 Le Thor, France"],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Coiffure+Masculine+144+Cours+Gambetta+84250+Le+Thor",
  instagram: "https://instagram.com",
  rating: "4,9",
  reviewCount: "45",
};

/** Construit un lien WhatsApp "Click to Chat" avec un message de RDV pré-rempli. */
export function whatsappLink(opts?: {
  name?: string;
  phone?: string;
  message?: string;
}) {
  const lines = [
    `Bonjour, je souhaite prendre rendez-vous au salon ${business.name}.`,
  ];
  if (opts?.name?.trim()) lines.push(`Nom : ${opts.name.trim()}`);
  if (opts?.phone?.trim()) lines.push(`Téléphone : ${opts.phone.trim()}`);
  if (opts?.message?.trim()) lines.push(`Message : ${opts.message.trim()}`);
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${business.whatsapp}?text=${text}`;
}

export const nav = [
  { label: "Accueil", href: "#accueil" },
  { label: "Prestations", href: "#prestations" },
  { label: "Galerie", href: "#galerie" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export const hours = [
  { day: "Mardi – Vendredi", time: "09h00 – 19h00" },
  { day: "Samedi", time: "08h30 – 18h00" },
  { day: "Dimanche – Lundi", time: "Fermé" },
];

export const stats = [
  { value: "45", suffix: "", label: "Avis Google" },
  { value: "4,9", suffix: "/5", label: "Note de satisfaction" },
  { value: "Sans", suffix: "", label: "Rendez-vous obligatoire" },
  { value: "Premium", suffix: "", label: "Ambiance & accueil" },
];

export type Service = {
  title: string;
  description: string;
  meta: string;
};

export const services: Service[] = [
  {
    title: "Coupe homme",
    description: "Une coupe nette, étudiée selon la forme du visage et la tenue souhaitée.",
    meta: "≈ 30 min",
  },
  {
    title: "Dégradé",
    description: "Transitions précises et progressives, du flou maîtrisé au dégradé américain.",
    meta: "≈ 35 min",
  },
  {
    title: "Barbe",
    description: "Taille, structure et entretien de la barbe pour un tracé parfaitement défini.",
    meta: "≈ 20 min",
  },
  {
    title: "Contours",
    description: "Finitions au rasoir sur la nuque et les contours pour une netteté absolue.",
    meta: "≈ 15 min",
  },
  {
    title: "Rasage traditionnel",
    description: "Rasage à l'ancienne, serviette chaude et soin de la peau pour un geste précis.",
    meta: "≈ 25 min",
  },
  {
    title: "Coupe + barbe",
    description: "L'entretien complet : coupe sur-mesure et barbe travaillée en une seule prestation.",
    meta: "≈ 45 min",
  },
];

export type Review = {
  quote: string;
  name: string;
  city: string;
};

export const reviews: Review[] = [
  {
    quote: "Salon très propre et accueil impeccable. Coupe parfaite.",
    name: "Nicolas R.",
    city: "Le Thor",
  },
  {
    quote:
      "Enfin un salon sobre et professionnel. Travail précis et ambiance agréable.",
    name: "Julien M.",
    city: "Avignon",
  },
  {
    quote: "Très bon dégradé et excellent accueil. Je recommande.",
    name: "Antoine G.",
    city: "L'Isle-sur-la-Sorgue",
  },
  {
    quote: "Le lieu est élégant et le résultat toujours impeccable.",
    name: "Marc D.",
    city: "Cavaillon",
  },
  {
    quote: "Service rapide, propre et très professionnel.",
    name: "Thomas L.",
    city: "Pernes-les-Fontaines",
  },
];

const U = "https://images.unsplash.com/";
const q = "?auto=format&fit=crop&q=80";

export const heroImage = `${U}photo-1599351431202-1e0f0137899a${q}&w=2000`;
export const atmosphereImage = `${U}photo-1521590832167-7bcbfaa6381f${q}&w=2000`;

export type GalleryItem = {
  src: string;
  alt: string;
  span: string;
};

export const gallery: GalleryItem[] = [
  {
    src: `${U}photo-1503951914875-452162b0f3f1${q}&w=1200`,
    alt: "Détail d'une coupe homme nette",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    src: `${U}photo-1585747860715-2ba37e788b70${q}&w=900`,
    alt: "Taille de barbe au salon",
    span: "md:col-span-5",
  },
  {
    src: `${U}photo-1622286342621-4bd786c2447c${q}&w=900`,
    alt: "Outils de coiffure et de rasage",
    span: "md:col-span-5",
  },
  {
    src: `${U}photo-1605497788044-5a32c7078486${q}&w=1200`,
    alt: "Atmosphère de l'atelier de coiffure",
    span: "md:col-span-6",
  },
  {
    src: `${U}photo-1503443207922-dff7d543fd0e${q}&w=1200`,
    alt: "Finitions et contours au rasoir",
    span: "md:col-span-6",
  },
];
