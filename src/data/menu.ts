export type MenuFormat = {
  name: string;
  price: number | null;
};

export type MenuItem = {
  name: string;
  englishName?: string;
  category: "Carnes" | "Tradicionales" | "Tamales" | "Platillos" | "Acompañamientos" | "Para Fiestas";
  description?: string;
  formats: MenuFormat[];
  price: number | null;
  image?: string;
  featured: boolean;
  available: boolean;
};

const meatFormats = {
  birria: [
    { name: "Taco", price: 11.0 },
    { name: "Burrito", price: 13.99 },
    { name: "Quesadilla", price: 12.99 },
    { name: "Platillo", price: 21.99 },
    { name: "Por libra", price: 19.99 },
  ],
  barbacoa: [
    { name: "Taco", price: 10.0 },
    { name: "Burrito", price: 13.99 },
    { name: "Quesadilla", price: 12.99 },
    { name: "Platillo", price: 21.99 },
    { name: "Por libra", price: 19.99 },
  ],
  carnitas: [
    { name: "Taco", price: 7.0 },
    { name: "Burrito", price: 12.99 },
    { name: "Quesadilla", price: 9.99 },
    { name: "Platillo", price: 17.99 },
    { name: "Por libra", price: 16.99 },
  ],
  carnitasMixtas: [
    { name: "Taco", price: 6.99 },
    { name: "Burrito", price: 11.99 },
    { name: "Quesadilla", price: 9.99 },
    { name: "Platillo", price: 17.99 },
    { name: "Por libra", price: 16.99 },
  ],
  chicharrones: [
    { name: "Taco", price: 6.99 },
    { name: "Burrito", price: 11.99 },
    { name: "Quesadilla", price: 9.99 },
    { name: "Platillo", price: 17.99 },
    { name: "Por libra", price: 16.99 },
  ],
  cabeza: [
    { name: "Taco", price: 6.99 },
    { name: "Burrito", price: 11.99 },
    { name: "Quesadilla", price: 9.99 },
    { name: "Platillo", price: 16.99 },
    { name: "Por libra", price: 15.99 },
  ],
} satisfies Record<string, MenuFormat[]>;

const tamaleFormats: MenuFormat[] = [
  { name: "Individual", price: 2.99 },
  { name: "½ dozen", price: 18.0 },
  { name: "Dozen", price: 30.0 },
];

export const menuItems: MenuItem[] = [
  { name: "Birria de Chivo", englishName: "Goat Birria", category: "Carnes", formats: meatFormats.birria, price: null, featured: true, available: true },
  { name: "Barbacoa de Res", englishName: "Beef Barbacoa", category: "Carnes", formats: meatFormats.barbacoa, price: null, featured: true, available: true },
  { name: "Carnitas", category: "Carnes", formats: meatFormats.carnitas, price: null, featured: true, available: true },
  { name: "Carnitas Mixtas", englishName: "Mixed Carnitas", category: "Carnes", formats: meatFormats.carnitasMixtas, price: null, featured: false, available: true },
  { name: "Chicharrones", category: "Carnes", formats: meatFormats.chicharrones, price: null, image: "/images/chicharrones.jpg", featured: false, available: true },
  { name: "Cabeza", category: "Carnes", formats: meatFormats.cabeza, price: null, featured: false, available: true },
  { name: "Menudo", category: "Tradicionales", formats: [], price: 19.99, image: "/images/menudo.jpg", featured: true, available: true },
  { name: "Pozole", category: "Tradicionales", formats: [], price: 18.99, featured: false, available: true },
  { name: "Caldo de Res y Pollo", englishName: "Beef and Chicken Soup", category: "Tradicionales", formats: [], price: 19.99, featured: false, available: true },
  { name: "Costillas de Puerco en Salsa Verde", englishName: "Pork Ribs in Green Sauce", category: "Platillos", formats: [{ name: "Platillo", price: 16.99 }, { name: "Por libra", price: 15.99 }], price: null, featured: false, available: true },
  { name: "Carne Asada", englishName: "Carne Asada Plate", category: "Platillos", formats: [], price: 17.99, featured: false, available: true },
  { name: "Pollo Guisado", englishName: "Stewed Chicken", category: "Platillos", formats: [], price: 16.99, featured: false, available: true },
  { name: "Bistec con Papas", englishName: "Steak with Potatoes", category: "Platillos", formats: [], price: 17.99, featured: false, available: true },
  { name: "Chile Relleno", category: "Platillos", formats: [], price: 16.99, featured: false, available: true },
  { name: "Chorizo", category: "Platillos", formats: [{ name: "Taco", price: 6.99 }, { name: "Platillo", price: 16.99 }, { name: "Por libra", price: 15.99 }], price: null, featured: false, available: true },
  { name: "Moronga", category: "Platillos", formats: [{ name: "Taco", price: 10.99 }, { name: "Platillo", price: 17.99 }, { name: "Por libra", price: 15.99 }], price: null, featured: false, available: true },
  { name: "Tamal de Elote", englishName: "Corn Tamal", category: "Tamales", formats: tamaleFormats, price: null, featured: true, available: true },
  { name: "Tamal de Pollo", englishName: "Chicken Tamal", category: "Tamales", formats: tamaleFormats, price: null, featured: false, available: true },
  { name: "Tamal de Puerco", englishName: "Pork Tamal", category: "Tamales", formats: tamaleFormats, price: null, featured: false, available: true },
  { name: "Frijoles", englishName: "Beans", category: "Acompañamientos", formats: [], price: null, featured: false, available: true },
  { name: "Arroz", englishName: "Rice", category: "Acompañamientos", formats: [], price: null, featured: false, available: true },
  { name: "Guacamole", category: "Acompañamientos", formats: [], price: null, featured: false, available: true },
  { name: "Salsa", category: "Acompañamientos", formats: [], price: null, featured: false, available: true },
  { name: "Menudo para Fiestas", englishName: "Menudo for Parties", category: "Para Fiestas", formats: [], price: null, featured: false, available: true },
  { name: "Charolas de Carnitas", englishName: "Carnitas Trays", category: "Para Fiestas", formats: [], price: null, featured: false, available: true },
  { name: "Barbacoa para Fiestas", englishName: "Barbacoa for Parties", category: "Para Fiestas", formats: [], price: null, featured: false, available: true },
  { name: "Charolas de Ceviche de Pescado", englishName: "Fish Ceviche Trays", category: "Para Fiestas", formats: [], price: null, featured: false, available: true },
];

export const menuCategories = ["Carnes", "Tradicionales", "Tamales", "Platillos", "Acompañamientos"] as const;
