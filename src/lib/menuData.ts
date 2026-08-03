// src/lib/menuData.ts

export type MenuCategory =
  | 'Momos'
  | 'Noodles'
  | 'Pani Puri'
  | 'Corn'
  | 'Sandwich'
  | 'Omelette'
  | 'Bread Pizza'
  | 'Fried Items'
  | 'Combos';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  price: number;
  image: string;
  available: boolean;
}

const IMG_MOMOS =
  'https://images.pexels.com/photos/18803177/pexels-photo-18803177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const IMG_MOMOS_2 =
  'https://images.pexels.com/photos/28445593/pexels-photo-28445593.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const IMG_NOODLES =
  'https://images.pexels.com/photos/4635596/pexels-photo-4635596.png?auto=compress&cs=tinysrgb&h=650&w=940';
const IMG_PANI_PURI =
  'https://images.pexels.com/photos/33896100/pexels-photo-33896100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const IMG_CORN =
  'https://images.pexels.com/photos/33661250/pexels-photo-33661250.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const IMG_SANDWICH =
  'https://images.pexels.com/photos/13995302/pexels-photo-13995302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const IMG_OMELETTE =
  'https://images.pexels.com/photos/12944792/pexels-photo-12944792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const IMG_BREAD_PIZZA =
  'https://images.pexels.com/photos/4203044/pexels-photo-4203044.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const IMG_FRIES =
  'https://images.pexels.com/photos/8848610/pexels-photo-8848610.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const IMG_NUGGETS =
  'https://images.pexels.com/photos/11710530/pexels-photo-11710530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const IMG_COMBO =
  'https://images.pexels.com/photos/12362926/pexels-photo-12362926.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const menuItems: MenuItem[] = [
  // MOMOS — Veg
  {
    id: 'm1',
    name: 'Steamed Momos (Veg)',
    description: 'Classic soft steamed dumplings with a spiced vegetable filling, served with red chutney.',
    category: 'Momos',
    price: 80,
    image: IMG_MOMOS,
    available: true,
  },
  {
    id: 'm2',
    name: 'Fried Momos (Veg)',
    description: 'Crispy golden-fried dumplings with a savoury veg filling and tangy dipping sauce.',
    category: 'Momos',
    price: 90,
    image: IMG_MOMOS,
    available: true,
  },
  {
    id: 'm3',
    name: 'Creamy Malai Momos (Veg)',
    description: 'Soft momos tossed in a rich, creamy malai sauce with mild spices.',
    category: 'Momos',
    price: 150,
    image: IMG_MOMOS_2,
    available: true,
  },
  {
    id: 'm4',
    name: 'Tandoori Momos (Veg)',
    description: 'Char-grilled momos marinated in tandoori masala, served sizzling with mint chutney.',
    category: 'Momos',
    price: 160,
    image: IMG_MOMOS_2,
    available: true,
  },
  {
    id: 'm5',
    name: 'Korean Momos (Veg)',
    description: 'Momos tossed in a fiery Korean-style sauce, topped with sesame seeds and spring onion.',
    category: 'Momos',
    price: 180,
    image: IMG_MOMOS_2,
    available: true,
  },
  // MOMOS — Chicken
  {
    id: 'm6',
    name: 'Steamed Momos (Chicken)',
    description: 'Juicy steamed dumplings packed with spiced minced chicken, served with red chutney.',
    category: 'Momos',
    price: 100,
    image: IMG_MOMOS,
    available: true,
  },
  {
    id: 'm7',
    name: 'Fried Momos (Chicken)',
    description: 'Crispy fried chicken dumplings with a punchy spice blend and tangy sauce.',
    category: 'Momos',
    price: 110,
    image: IMG_MOMOS,
    available: true,
  },
  {
    id: 'm8',
    name: 'Creamy Malai Momos (Chicken)',
    description: 'Tender chicken momos bathed in a velvety malai cream sauce.',
    category: 'Momos',
    price: 170,
    image: IMG_MOMOS_2,
    available: true,
  },
  {
    id: 'm9',
    name: 'Tandoori Momos (Chicken)',
    description: 'Smoky tandoori-marinated chicken momos grilled to perfection.',
    category: 'Momos',
    price: 180,
    image: IMG_MOMOS_2,
    available: true,
  },
  {
    id: 'm10',
    name: 'Korean Momos (Chicken)',
    description: 'Chicken momos in bold Korean chilli glaze with sesame and spring onion.',
    category: 'Momos',
    price: 200,
    image: IMG_MOMOS_2,
    available: true,
  },
  // NOODLES
  {
    id: 'n1',
    name: 'Plain Maggi',
    description: 'Classic Maggi noodles cooked the traditional way — quick, comforting, and delicious.',
    category: 'Noodles',
    price: 50,
    image: IMG_NOODLES,
    available: true,
  },
  {
    id: 'n2',
    name: 'Veg Maggi',
    description: 'Maggi noodles stir-fried with fresh seasonal vegetables and mild spices.',
    category: 'Noodles',
    price: 70,
    image: IMG_NOODLES,
    available: true,
  },
  {
    id: 'n3',
    name: 'Cheese Maggi',
    description: 'Creamy Maggi noodles topped with generous melted cheese.',
    category: 'Noodles',
    price: 80,
    image: IMG_NOODLES,
    available: true,
  },
  {
    id: 'n4',
    name: 'Schezwan Maggi',
    description: 'Spicy Maggi tossed in house-made Schezwan sauce with veggies.',
    category: 'Noodles',
    price: 80,
    image: IMG_NOODLES,
    available: true,
  },
  {
    id: 'n5',
    name: 'Chicken Maggi',
    description: 'Maggi noodles cooked with tender chicken pieces and bold spices.',
    category: 'Noodles',
    price: 90,
    image: IMG_NOODLES,
    available: true,
  },
  {
    id: 'n6',
    name: 'Cheesy Chicken Maggi',
    description: 'Chicken Maggi loaded with extra cheese for the ultimate indulgence.',
    category: 'Noodles',
    price: 120,
    image: IMG_NOODLES,
    available: true,
  },
  {
    id: 'n7',
    name: 'Veg Ramen',
    description: 'Rich vegetable broth ramen with noodles, seasonal toppings, and a soft egg.',
    category: 'Noodles',
    price: 230,
    image: IMG_NOODLES,
    available: true,
  },
  {
    id: 'n8',
    name: 'Chicken Ramen',
    description: 'Deep chicken broth ramen loaded with tender meat, noodles, and toppings.',
    category: 'Noodles',
    price: 300,
    image: IMG_NOODLES,
    available: true,
  },
  // PANI PURI
  {
    id: 'p1',
    name: 'Panipuri',
    description: 'Classic crispy puris filled with spiced chickpeas and tangy tamarind-mint water.',
    category: 'Pani Puri',
    price: 50,
    image: IMG_PANI_PURI,
    available: true,
  },
  {
    id: 'p2',
    name: 'Cheese Puri',
    description: 'Crispy puris topped with a creamy cheese filling and zesty chutneys.',
    category: 'Pani Puri',
    price: 80,
    image: IMG_PANI_PURI,
    available: true,
  },
  {
    id: 'p3',
    name: 'Mayonnaise Puri',
    description: 'Crunchy puris filled with a tangy mayonnaise mixture and fresh toppings.',
    category: 'Pani Puri',
    price: 80,
    image: IMG_PANI_PURI,
    available: true,
  },
  {
    id: 'p4',
    name: 'Dahi Puri',
    description: 'Puris filled with chickpeas, sweet yoghurt, chutneys, and sev.',
    category: 'Pani Puri',
    price: 90,
    image: IMG_PANI_PURI,
    available: true,
  },
  // CORN
  {
    id: 'c1',
    name: 'Butter Corn',
    description: 'Sweet golden corn kernels tossed in creamy butter and a pinch of salt.',
    category: 'Corn',
    price: 40,
    image: IMG_CORN,
    available: true,
  },
  {
    id: 'c2',
    name: 'Masala Corn',
    description: 'Buttered corn tossed with chaat masala, lemon, and fresh herbs.',
    category: 'Corn',
    price: 50,
    image: IMG_CORN,
    available: true,
  },
  {
    id: 'c3',
    name: 'Peri Peri Corn',
    description: 'Corn kernels coated in fiery peri peri seasoning for a spicy kick.',
    category: 'Corn',
    price: 60,
    image: IMG_CORN,
    available: true,
  },
  {
    id: 'c4',
    name: 'Crispy Corn',
    description: 'Deep-fried crunchy corn kernels seasoned with spices — perfectly addictive.',
    category: 'Corn',
    price: 70,
    image: IMG_CORN,
    available: true,
  },
  {
    id: 'c5',
    name: 'Crispy Cheese Corn',
    description: 'Crispy fried corn tossed with melted cheese and seasoning.',
    category: 'Corn',
    price: 90,
    image: IMG_CORN,
    available: true,
  },
  // SANDWICH
  {
    id: 's1',
    name: 'Veg Sandwich',
    description: 'Layered with fresh vegetables, chutney, and cheese on soft bread.',
    category: 'Sandwich',
    price: 60,
    image: IMG_SANDWICH,
    available: true,
  },
  {
    id: 's2',
    name: 'Egg Sandwich',
    description: 'Fluffy egg filling with veggies and house sauce in toasted bread.',
    category: 'Sandwich',
    price: 70,
    image: IMG_SANDWICH,
    available: true,
  },
  {
    id: 's3',
    name: 'Chicken Sandwich',
    description: 'Grilled spiced chicken with fresh toppings and sauce in toasted bread.',
    category: 'Sandwich',
    price: 90,
    image: IMG_SANDWICH,
    available: true,
  },
  {
    id: 's4',
    name: 'Muruku Sandwich',
    description: 'Unique crunchy muruku layered with savoury filling — a street food twist.',
    category: 'Sandwich',
    price: 80,
    image: IMG_SANDWICH,
    available: true,
  },
  // OMELETTE
  {
    id: 'o1',
    name: 'Plain Omelette',
    description: 'Simple, fluffy two-egg omelette cooked to golden perfection.',
    category: 'Omelette',
    price: 25,
    image: IMG_OMELETTE,
    available: true,
  },
  {
    id: 'o2',
    name: 'Double Egg Omelette',
    description: 'Thick and hearty double-egg omelette with a light seasoning.',
    category: 'Omelette',
    price: 40,
    image: IMG_OMELETTE,
    available: true,
  },
  {
    id: 'o3',
    name: 'Cheese Omelette',
    description: 'Fluffy omelette stuffed with gooey melted cheese.',
    category: 'Omelette',
    price: 60,
    image: IMG_OMELETTE,
    available: true,
  },
  {
    id: 'o4',
    name: 'Bread Omelette',
    description: 'Egg omelette sandwiched between soft buttered bread slices.',
    category: 'Omelette',
    price: 70,
    image: IMG_OMELETTE,
    available: true,
  },
  {
    id: 'o5',
    name: 'Cheese Bread Omelette',
    description: 'Cheesy omelette pressed between butter-toasted bread.',
    category: 'Omelette',
    price: 90,
    image: IMG_OMELETTE,
    available: true,
  },
  {
    id: 'o6',
    name: 'Chicken Bread Omelette',
    description: 'Savoury chicken-filled omelette served between toasted bread slices.',
    category: 'Omelette',
    price: 100,
    image: IMG_OMELETTE,
    available: true,
  },
  {
    id: 'o7',
    name: 'Cheesy Chicken Bread Omelette',
    description: 'The ultimate — chicken omelette loaded with cheese in butter-toasted bread.',
    category: 'Omelette',
    price: 120,
    image: IMG_OMELETTE,
    available: true,
  },
  // BREAD PIZZA
  {
    id: 'bp1',
    name: 'Corn Cheese Pizza',
    description: 'Toasted bread topped with sweet corn, cheese, and herby pizza sauce.',
    category: 'Bread Pizza',
    price: 60,
    image: IMG_BREAD_PIZZA,
    available: true,
  },
  {
    id: 'bp2',
    name: 'Chicken Pizza',
    description: 'Bread pizza loaded with spiced chicken, cheese, and vibrant toppings.',
    category: 'Bread Pizza',
    price: 80,
    image: IMG_BREAD_PIZZA,
    available: true,
  },
  // FRIED ITEMS
  {
    id: 'f1',
    name: 'Spring Potato',
    description: 'Crispy fried spring potato rolls — light, crunchy, and full of flavour.',
    category: 'Fried Items',
    price: 70,
    image: IMG_FRIES,
    available: true,
  },
  {
    id: 'f2',
    name: 'Peri Peri Spring Potato',
    description: 'Spring potato rolls coated in zesty peri peri seasoning.',
    category: 'Fried Items',
    price: 80,
    image: IMG_FRIES,
    available: true,
  },
  {
    id: 'f3',
    name: 'French Fries',
    description: 'Golden crispy fries seasoned with salt — the classic done right.',
    category: 'Fried Items',
    price: 60,
    image: IMG_FRIES,
    available: true,
  },
  {
    id: 'f4',
    name: 'Peri Peri French Fries',
    description: 'Classic fries tossed in bold peri peri seasoning for extra heat.',
    category: 'Fried Items',
    price: 70,
    image: IMG_FRIES,
    available: true,
  },
  {
    id: 'f5',
    name: 'Cheese Ball',
    description: 'Crispy fried balls with a gooey melted cheese centre.',
    category: 'Fried Items',
    price: 80,
    image: IMG_NUGGETS,
    available: true,
  },
  {
    id: 'f6',
    name: 'Smiley',
    description: 'Fun smiley-face potato snacks — crispy outside, soft inside.',
    category: 'Fried Items',
    price: 80,
    image: IMG_FRIES,
    available: true,
  },
  {
    id: 'f7',
    name: 'Nuggets',
    description: 'Crunchy breaded chicken nuggets, golden fried and irresistible.',
    category: 'Fried Items',
    price: 90,
    image: IMG_NUGGETS,
    available: true,
  },
  {
    id: 'f8',
    name: 'KFC Chicken Popcorn',
    description: 'Bite-sized crispy chicken popcorn with a seasoned crunch coating.',
    category: 'Fried Items',
    price: 100,
    image: IMG_NUGGETS,
    available: true,
  },
  {
    id: 'f9',
    name: 'Loaded French Fries',
    description: 'Fries piled high with cheese sauce, jalapeños, and savoury toppings.',
    category: 'Fried Items',
    price: 130,
    image: IMG_FRIES,
    available: true,
  },
  // COMBOS
  {
    id: 'cb1',
    name: 'Veg Platter',
    description: 'Veg Momos, Cheeseball, Smiley, and French Fries — great value combo.',
    category: 'Combos',
    price: 120,
    image: IMG_COMBO,
    available: true,
  },
  {
    id: 'cb2',
    name: 'Non Veg Platter',
    description: 'Chicken Momos, Cheeseball, Chicken Nuggets, Smiley, and French Fries.',
    category: 'Combos',
    price: 180,
    image: IMG_COMBO,
    available: true,
  },
  {
    id: 'cb3',
    name: 'Jumbo Platter',
    description: 'Veg & Non Veg Momos, Cheeseball, Smiley, Nuggets, KFC Popcorn, French Fries.',
    category: 'Combos',
    price: 250,
    image: IMG_COMBO,
    available: true,
  },
  {
    id: 'cb4',
    name: 'Maggi + Bread Omelette',
    description: 'A satisfying combo of hot Maggi noodles paired with a butter-toasted bread omelette.',
    category: 'Combos',
    price: 100,
    image: IMG_COMBO,
    available: true,
  },
  {
    id: 'cb5',
    name: 'Maggi + Momos',
    description: 'Comfort duo — a bowl of Maggi noodles served with steamed momos.',
    category: 'Combos',
    price: 100,
    image: IMG_COMBO,
    available: true,
  },
  {
    id: 'cb6',
    name: 'Pani Puri + Bread Omelette',
    description: 'Tangy pani puri paired with a hearty bread omelette — the perfect street snack combo.',
    category: 'Combos',
    price: 100,
    image: IMG_COMBO,
    available: true,
  },
  {
    id: 'cb7',
    name: 'Pani Puri + Momos',
    description: 'Classic pani puri served alongside soft steamed momos — two favourites in one.',
    category: 'Combos',
    price: 100,
    image: IMG_COMBO,
    available: true,
  },
];