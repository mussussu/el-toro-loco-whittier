export const business = {
  name: "El Toro Loco",
  tagline: "Authentic Mexican Food in Whittier",
  description:
    "El Toro Loco is a Mexican restaurant in Whittier serving traditional Mexican favorites including carnitas, menudo, barbacoa, birria de chivo, carne asada, chicharrón, tamales, and handmade tortillas. The restaurant also offers food for parties and special gatherings.",
  domain: "https://eltorolocowhittier.com",
  email: "eltoroloco.restaurant1@gmail.com",
  address: {
    street: "13345 Telegraph Rd #D",
    city: "Whittier",
    state: "CA",
    zip: "90605",
    country: "USA",
    singleLine: "13345 Telegraph Rd #D, Whittier, CA 90605",
  },
  phones: [
    { label: "Primary", display: "(562) 416-8390", href: "tel:+15624168390" },
    { label: "Secondary", display: "(562) 941-0588", href: "tel:+15629410588" },
  ],
  hoursStatus: "Confirmed",
  hours: [
    {
      label: "Monday–Saturday",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
      display: "7:00 AM – 7:00 PM",
    },
    {
      label: "Sunday",
      days: ["Sunday"],
      opens: "07:00",
      closes: "18:00",
      display: "7:00 AM – 6:00 PM",
    },
  ],
  hoursPublic: "Monday–Saturday: 7:00 AM – 7:00 PM; Sunday: 7:00 AM – 6:00 PM",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=13345%20Telegraph%20Rd%20%23D%2C%20Whittier%2C%20CA%2090605",
  mapEmbedUrl:
    "https://www.google.com/maps?q=13345%20Telegraph%20Rd%20%23D%2C%20Whittier%2C%20CA%2090605&output=embed",
  social: {
    instagram: null,
    facebook: null,
    tiktok: null,
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Para Fiestas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
