export const business = {
  name: "Coiffure Masculine",
  shortPitch: "Coiffeur homme · Le Thor",
  city: "Le Thor",
  phone: "04 90 33 98 30",
  phoneHref: "tel:+33490339830",
  // Numéro WhatsApp du salon — format international, sans "+" ni espaces.
  // ⚠️ PROVISOIRE : 0625187195 (à confirmer avec le salon).
  whatsapp: "33625187195",
  addressShort: "144 Cours Gambetta, Le Thor",
  address: "144 Cours Gambetta, 84250 Le Thor",
  addressLines: ["144 Cours Gambetta", "84250 Le Thor"],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Coiffure+Masculine+144+Cours+Gambetta+84250+Le+Thor",
  reviewsHref:
    "https://www.google.com/maps/search/?api=1&query=Coiffure+Masculine+Le+Thor",
  instagram: "https://instagram.com",
  rating: "4,9",
  reviewCount: "45",
  hoursSummary: "Mardi – Samedi",
};

export const nav = [
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

/** Petits repères de confiance affichés sous le hero. */
export const trust = [
  { value: "4,9", suffix: "★", label: "sur Google" },
  { value: "45", suffix: "", label: "avis clients" },
  { value: "Sans RDV", suffix: "", label: "ou sur réservation" },
  { value: "Le Thor", suffix: "", label: "Cours Gambetta" },
];

export type Service = {
  title: string;
  description: string;
  price: string;
  duration: string;
};

export const services: Service[] = [
  {
    title: "Coupe classique",
    description: "Coupe ciseaux ou tondeuse, nette et adaptée à votre visage.",
    price: "18 €",
    duration: "30 min",
  },
  {
    title: "Dégradé",
    description: "Dégradé précis, du flou léger au taper net.",
    price: "20 €",
    duration: "35 min",
  },
  {
    title: "Barbe",
    description: "Taille, contours et entretien à la tondeuse et au rasoir.",
    price: "12 €",
    duration: "20 min",
  },
  {
    title: "Contours",
    description: "Reprise des contours et de la nuque entre deux coupes.",
    price: "10 €",
    duration: "15 min",
  },
  {
    title: "Coupe + barbe",
    description: "La prestation complète : cheveux travaillés et barbe taillée.",
    price: "28 €",
    duration: "45 min",
  },
];

export type Review = {
  quote: string;
  name: string;
  city: string;
};

// ⚠️ Avis placeholder — à REMPLACER par les vrais avis Google du salon avant la mise en ligne définitive.
export const reviews: Review[] = [
  {
    quote: "Super accueil, salon propre, et la coupe est nickel à chaque fois.",
    name: "Nicolas R.",
    city: "Le Thor",
  },
  {
    quote: "Très bon dégradé, il prend le temps de bien faire. Je recommande.",
    name: "Antoine G.",
    city: "L'Isle-sur-la-Sorgue",
  },
  {
    quote: "Pro et rapide, et le rendu est toujours propre.",
    name: "Thomas L.",
    city: "Pernes-les-Fontaines",
  },
  {
    quote: "Enfin un barbier sérieux dans le coin. Bon conseil pour la barbe.",
    name: "Julien M.",
    city: "Avignon",
  },
  {
    quote: "Rien à dire, accueil au top et coupe au top.",
    name: "Marc D.",
    city: "Cavaillon",
  },
];

const U = "https://images.unsplash.com/";
const q = "?auto=format&fit=crop&q=80";

export const heroImage = `${U}photo-1599351431202-1e0f0137899a${q}&w=2000`;

export type GalleryItem = {
  src: string;
  alt: string;
  span: string;
};

export const gallery: GalleryItem[] = [
  {
    src: `${U}photo-1503951914875-452162b0f3f1${q}&w=1200`,
    alt: "Coupe homme nette réalisée au salon",
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
    alt: "Ambiance du salon de coiffure",
    span: "md:col-span-6",
  },
  {
    src: `${U}photo-1503443207922-dff7d543fd0e${q}&w=1200`,
    alt: "Finitions et contours au rasoir",
    span: "md:col-span-6",
  },
];

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
