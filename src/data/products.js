/** @type {Array<{ id: string; category: string; name: string; description: string; image: string }>} */
export const products = [
  // Beds
  {
    id: "bed-1",
    category: "Beds",
    name: "Classic Wooden Double Bed",
    description:
      "Traditional teak finish, king size with storage drawers and a sturdy PVC wood frame.",
    image: new URL("../assets/images/product-bed-1.jpg", import.meta.url).href,
  },
  {
    id: "bed-2",
    category: "Beds",
    name: "Queen Bed with Upholstered Headboard",
    description:
      "Warm cream and teak tones, cushioned headboard, ideal for modern bedrooms.",
    image: new URL("../assets/images/product-bed-2.jpg", import.meta.url).href,
  },
  {
    id: "bed-3",
    category: "Beds",
    name: "Hydraulic Storage King Bed",
    description:
      "Lift-up storage, gold-accent hardware, and a premium matte wood wrap.",
    image: new URL("../assets/images/product-bed-1.jpg", import.meta.url).href,
  },
  // Sofas
  {
    id: "sofa-1",
    category: "Sofas",
    name: "L-Shaped Corner Sofa",
    description:
      "Spacious seating for the family, reinforced frame, and durable upholstery.",
    image: new URL("../assets/images/product-sofa-1.jpg", import.meta.url).href,
  },
  {
    id: "sofa-2",
    category: "Sofas",
    name: "3-Seater Teak Finish Sofa",
    description:
      "Classic silhouette with teak-look arms and deep, comfortable cushions.",
    image: new URL("../assets/images/product-sofa-2.jpg", import.meta.url).href,
  },
  {
    id: "sofa-3",
    category: "Sofas",
    name: "Modular Sectional Sofa",
    description:
      "Reconfigure sections to fit your living room; built for daily use.",
    image: new URL("../assets/images/product-sofa-1.jpg", import.meta.url).href,
  },
  // Chairs
  {
    id: "chair-1",
    category: "Chairs",
    name: "Dining Chair Set (6)",
    description:
      "Matching PVC wood dining chairs with ergonomic back support.",
    image: new URL("../assets/images/product-chair-1.jpg", import.meta.url).href,
  },
  {
    id: "chair-2",
    category: "Chairs",
    name: "Executive Office Chair",
    description:
      "PVC wood finish backrest, adjustable height, smooth-rolling casters.",
    image: new URL("../assets/images/product-chair-2.jpg", import.meta.url).href,
  },
  {
    id: "chair-3",
    category: "Chairs",
    name: "Accent Lounge Armchair",
    description:
      "Statement piece for corners and reading nooks; compact footprint.",
    image: new URL("../assets/images/product-chair-1.jpg", import.meta.url).href,
  },
  // Tables
  {
    id: "table-1",
    category: "Tables",
    name: "6-Seater Dining Table",
    description:
      "Solid construction, seats six comfortably; pairs with our chair sets.",
    image: new URL("../assets/images/product-table-1.jpg", import.meta.url).href,
  },
  {
    id: "table-2",
    category: "Tables",
    name: "Coffee Table with Storage",
    description:
      "Lift-top or shelf options available; warm wood tones for your hall.",
    image: new URL("../assets/images/product-table-2.jpg", import.meta.url).href,
  },
  {
    id: "table-3",
    category: "Tables",
    name: "Study & Computer Table",
    description:
      "Compact workspace desk with cable management and smooth finish.",
    image: new URL("../assets/images/product-table-1.jpg", import.meta.url).href,
  },
  // Doors
  {
    id: "door-1",
    category: "Doors",
    name: "Solid Teak Main Door",
    description:
      "Grand entrance appeal with robust security and rich natural grain.",
    image: new URL("../assets/images/product-door-1.jpg", import.meta.url).href,
  },
  {
    id: "door-2",
    category: "Doors",
    name: "PVC Panel Interior Door",
    description:
      "Moisture-resistant panels; ideal for bathrooms and utility areas.",
    image: new URL("../assets/images/product-door-2.jpg", import.meta.url).href,
  },
  {
    id: "door-3",
    category: "Doors",
    name: "French Double Doors",
    description:
      "Maximize light flow between rooms with classic multi-pane styling.",
    image: new URL("../assets/images/product-door-1.jpg", import.meta.url).href,
  },
  // Door Frames
  {
    id: "frame-1",
    category: "Door Frames",
    name: "Teak Door Frame Set",
    description:
      "Precision-cut standard sizes; ready for hinge and lock fitting.",
    image: new URL("../assets/images/product-frame-1.jpg", import.meta.url).href,
  },
  {
    id: "frame-2",
    category: "Door Frames",
    name: "Laminated Door Frame",
    description:
      "Low-maintenance laminate wrap matching interior door collections.",
    image: new URL("../assets/images/product-frame-2.jpg", import.meta.url).href,
  },
  {
    id: "frame-3",
    category: "Door Frames",
    name: "Custom Arch Door Frame",
    description:
      "Made-to-measure arches and specials; consult us for site measurements.",
    image: new URL("../assets/images/product-frame-1.jpg", import.meta.url).href,
  },
  // Counters
  {
    id: "counter-1",
    category: "Counters",
    name: "Modular Kitchen Counter",
    description:
      "PVC wood base units with optional granite-look top; modular layout.",
    image: new URL("../assets/images/product-counter-1.jpg", import.meta.url).href,
  },
  {
    id: "counter-2",
    category: "Counters",
    name: "Shop Display Counter",
    description:
      "Retail-ready front with storage; customizable length and finish.",
    image: new URL("../assets/images/product-counter-2.jpg", import.meta.url).href,
  },
  {
    id: "counter-3",
    category: "Counters",
    name: "Reception Lobby Counter",
    description:
      "Professional first impression for offices; integrated cable routing.",
    image: new URL("../assets/images/product-counter-1.jpg", import.meta.url).href,
  },
];

export const categories = [
  "Beds",
  "Sofas",
  "Chairs",
  "Tables",
  "Doors",
  "Door Frames",
  "Counters",
];
