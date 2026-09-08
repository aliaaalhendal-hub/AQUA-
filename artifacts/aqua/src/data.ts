export type WaterType = 'freshwater' | 'saltwater';
export type Animal = {
  slug: string;
  name: string;
  scientific: string;
  type: WaterType;
  palette: [string, string];
  color: string;
  size: string;
  minLitres: number;
  temperature: [number, number];
  ph: [number, number];
  temperament: string;
  social: string;
  diet: string;
  demoPrice: number;
  description: string;
  care: string[];
  compatible: string[];
  avoid: string[];
};

export const animals: Animal[] = [
  { slug: 'endler-guppy', name: 'Endler guppy', scientific: 'Poecilia wingei', type: 'freshwater', palette: ['#b7ebe1', '#68bcca'], color: '#f49d78', size: '2.5 cm', minLitres: 38, temperature: [22, 28], ph: [6.8, 8], temperament: 'Peaceful', social: 'Keep 6+', diet: 'Omnivore', demoPrice: 1.75, description: 'A small, quick flash of colour that thrives in a planted community aquarium.', care: ['38 L minimum for a small group', 'Keep 6 or more to support natural social behaviour', 'Gentle flow and plenty of fine-leaved cover', 'Feed tiny portions twice daily'], compatible: ['Corydoras', 'Nerite snail', 'Harlequin rasbora'], avoid: ['Fin-nipping species', 'Large predatory fish', 'A solitary setup'] },
  { slug: 'betta', name: 'Betta', scientific: 'Betta splendens', type: 'freshwater', palette: ['#d7c4ea', '#7d90d3'], color: '#8b75bf', size: '6 cm', minLitres: 20, temperature: [24, 28], ph: [6.5, 7.8], temperament: 'Curious, territorial', social: 'Usually solo', diet: 'Carnivore', demoPrice: 3.5, description: 'A thoughtful surface-dweller with a labyrinth organ and a huge personality.', care: ['20 L minimum, with a lid and gentle current', 'Warm stable water is essential', 'Use broad-leaved plants for resting', 'Never house two males together'], compatible: ['Nerite snail', 'Amano shrimp with care'], avoid: ['Another male betta', 'Fin nippers', 'Fast, crowded communities'] },
  { slug: 'panda-corydoras', name: 'Panda corydoras', scientific: 'Corydoras panda', type: 'freshwater', palette: ['#d9eee7', '#89b9b5'], color: '#e2e0ce', size: '5 cm', minLitres: 60, temperature: [20, 26], ph: [6, 7.6], temperament: 'Peaceful', social: 'Keep 6+', diet: 'Omnivore', demoPrice: 2.25, description: 'A gentle bottom explorer that turns the substrate into a living landscape.', care: ['60 L minimum for a group of 6', 'Soft sand protects delicate barbels', 'Offer sinking food after lights dim', 'Open floor area plus shaded cover'], compatible: ['Endler guppy', 'Neon tetra', 'Cherry shrimp'], avoid: ['Sharp gravel', 'Aggressive bottom dwellers', 'Very warm tropical setups'] },
  { slug: 'neon-tetra', name: 'Neon tetra', scientific: 'Paracheirodon innesi', type: 'freshwater', palette: ['#a1e3ee', '#5a9bc6'], color: '#68cde0', size: '3.5 cm', minLitres: 55, temperature: [21, 26], ph: [6, 7.5], temperament: 'Peaceful shoaler', social: 'Keep 8+', diet: 'Omnivore', demoPrice: 1.5, description: 'A blue-green line of movement that makes a planted tank feel like a forest stream.', care: ['55 L minimum for 8 or more', 'Dimmer light and dense planting help them settle', 'Keep water clean and mature', 'Small foods suited to small mouths'], compatible: ['Panda corydoras', 'Nerite snail', 'Honey gourami'], avoid: ['Large mouths', 'Hard, alkaline water', 'Uncycled aquariums'] },
  { slug: 'clownfish', name: 'Ocellaris clownfish', scientific: 'Amphiprion ocellaris', type: 'saltwater', palette: ['#ffd5b7', '#df796e'], color: '#ee876b', size: '8 cm', minLitres: 75, temperature: [24, 27], ph: [8.1, 8.4], temperament: 'Semi-peaceful', social: 'Pairs well', diet: 'Omnivore', demoPrice: 14.0, description: 'A bold orange reef resident that learns the rhythm of its keeper.', care: ['75 L minimum for a pair', 'Saltwater cycle and stable salinity', 'Secure rockwork and covered openings', 'Offer varied marine foods'], compatible: ['Cleaner shrimp', 'Soft corals', 'Gobies'], avoid: ['Freshwater companions', 'Uncycled tanks', 'Unstable salinity'] },
  { slug: 'cleaner-shrimp', name: 'Cleaner shrimp', scientific: 'Lysmata amboinensis', type: 'saltwater', palette: ['#f8d0c4', '#bca6dc'], color: '#efb7b0', size: '5 cm', minLitres: 75, temperature: [23, 27], ph: [8.1, 8.4], temperament: 'Peaceful', social: 'Pairs or solo', diet: 'Omnivore', demoPrice: 9.5, description: 'A delicate reef helper with long white antennae and a precise routine.', care: ['75 L established saltwater tank', 'Offer many crevices and shaded ledges', 'Iodine and minerals must be stable', 'Acclimate slowly to salinity'], compatible: ['Ocellaris clownfish', 'Peaceful reef fish'], avoid: ['Large wrasses', 'Copper medications', 'Sudden salinity changes'] },
];

export type Product = { id: string; name: string; category: string; store: string; price: number; value: string; palette: [string, string]; };
export const categories = ['All', 'Aquariums', 'Filters', 'Lighting', 'Heaters', 'Substrate', 'Plants', 'Decor', 'Water care', 'Testing', 'Food', 'Tools'];
export const products: Product[] = [
  { id: 'tank-50', name: 'Clearline 50L aquarium', category: 'Aquariums', store: 'Blue Current', price: 42.0, value: 'Best for a first planted tank', palette: ['#c9eeeb', '#75bfbd'] },
  { id: 'tank-90', name: 'Tideglass 90L aquarium', category: 'Aquariums', store: 'Aqua House', price: 68.0, value: 'Extra swimming room', palette: ['#d7ecf0', '#8ea9ce'] },
  { id: 'filter-quiet', name: 'Quietflow 500 filter', category: 'Filters', store: 'Blue Current', price: 12.5, value: 'Soft, adjustable flow', palette: ['#d7e4e1', '#7da5a0'] },
  { id: 'filter-canister', name: 'Canister 800 filter', category: 'Filters', store: 'Gulf Aquatics', price: 31.0, value: 'For larger planted tanks', palette: ['#d1d6e1', '#788caa'] },
  { id: 'light-led', name: 'Sunline planted LED', category: 'Lighting', store: 'Aqua House', price: 18.25, value: 'Gentle plant spectrum', palette: ['#faecc7', '#e2b66e'] },
  { id: 'heater-75', name: '75W steady heater', category: 'Heaters', store: 'Blue Current', price: 9.75, value: 'For 40–75L tanks', palette: ['#eadfcf', '#bf8e67'] },
  { id: 'sand-natural', name: 'River sand 5 kg', category: 'Substrate', store: 'Gulf Aquatics', price: 4.5, value: 'Soft for bottom dwellers', palette: ['#eed9b4', '#c79c70'] },
  { id: 'soil-planted', name: 'Plant soil 3L', category: 'Substrate', store: 'Aqua House', price: 8.25, value: 'Nutrient-rich base', palette: ['#c9b7a6', '#877065'] },
  { id: 'anubias', name: 'Anubias on stone', category: 'Plants', store: 'Blue Current', price: 5.5, value: 'Hardy low-light plant', palette: ['#b7d8ac', '#598c72'] },
  { id: 'java-fern', name: 'Java fern bundle', category: 'Plants', store: 'Aqua House', price: 4.75, value: 'Great beginner cover', palette: ['#c0dfa8', '#6c9d6d'] },
  { id: 'wood', name: 'Mopani wood piece', category: 'Decor', store: 'Gulf Aquatics', price: 7.0, value: 'Natural shelter', palette: ['#d2b79d', '#84634e'] },
  { id: 'rock', name: 'Smooth river rock set', category: 'Decor', store: 'Blue Current', price: 6.25, value: 'Rounded, fish-safe texture', palette: ['#c9c9ba', '#8f988a'] },
  { id: 'conditioner', name: 'Water conditioner 250ml', category: 'Water care', store: 'Blue Current', price: 3.75, value: 'For every water change', palette: ['#c5e9e2', '#6db7b1'] },
  { id: 'test-kit', name: 'Freshwater test kit', category: 'Testing', store: 'Aqua House', price: 16.5, value: 'Track the invisible', palette: ['#ebc8bc', '#b97972'] },
  { id: 'flakes', name: 'Micro granule food', category: 'Food', store: 'Gulf Aquatics', price: 2.75, value: 'Tiny portions, less waste', palette: ['#f0d4af', '#d98d62'] },
  { id: 'net', name: 'Soft mesh net', category: 'Tools', store: 'Blue Current', price: 1.5, value: 'Calm handling', palette: ['#d0e6ec', '#739ead'] },
];

export const findAnimal = (slug?: string) => animals.find((animal) => animal.slug === slug) ?? animals[0];