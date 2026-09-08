export type WaterType = 'freshwater' | 'saltwater';

import imgGuppy from '@assets/aqua-images/guppy.jpg';
import imgBetta from '@assets/aqua-images/betta.jpg';
import imgNeonTetra from '@assets/aqua-images/neon-tetra.jpg';
import imgGoldfish from '@assets/aqua-images/goldfish.jpg';
import imgAngelfish from '@assets/aqua-images/angelfish.jpg';
import imgDiscus from '@assets/aqua-images/discus.jpg';
import imgClownfish from '@assets/aqua-images/clownfish.jpg';
import imgCleanerShrimp from '@assets/aqua-images/cleaner-shrimp.webp';
import imgSnail from '@assets/aqua-images/snail.jpg';
import imgSeahorse from '@assets/aqua-images/seahorse.jpg';
import imgJellyfish from '@assets/aqua-images/jellyfish.jpg';

import prodTank from '@assets/aqua-images/aquarium-tank.png';
import prodFilter from '@assets/aqua-images/aquarium-filter.webp';
import prodHeater from '@assets/aqua-images/aquarium-heater.jpg';
import prodLight from '@assets/aqua-images/aquarium-light.jpg';
import prodSubstrate from '@assets/aqua-images/aquarium-substrate.jpg';
import prodPlants from '@assets/aqua-images/aquarium-plants.jpg';
import prodRocks from '@assets/aqua-images/aquarium-rocks.png';
import prodWood from '@assets/aqua-images/aquarium-driftwood.jpg';
import prodTestKit from '@assets/aqua-images/water-test-kit.webp';
import prodFood from '@assets/aqua-images/fish-food.jpg';
import prodTools from '@assets/aqua-images/aquarium-tools.jpg';

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
  image: string;
};

export const animals: Animal[] = [
  { slug: 'endler-guppy', name: 'Endler guppy', scientific: 'Poecilia wingei', type: 'freshwater', palette: ['#b7ebe1', '#68bcca'], color: '#f49d78', size: '2.5 cm', minLitres: 38, temperature: [22, 28], ph: [6.8, 8], temperament: 'Peaceful', social: 'Keep 6+', diet: 'Omnivore', demoPrice: 1.75, description: 'A small, quick flash of colour that thrives in a planted community aquarium.', care: ['38 L minimum for a small group', 'Keep 6 or more to support natural social behaviour', 'Gentle flow and plenty of fine-leaved cover', 'Feed tiny portions twice daily'], compatible: ['Corydoras', 'Nerite snail', 'Harlequin rasbora'], avoid: ['Fin-nipping species', 'Large predatory fish', 'A solitary setup'], image: imgGuppy },
  { slug: 'betta', name: 'Betta', scientific: 'Betta splendens', type: 'freshwater', palette: ['#d7c4ea', '#7d90d3'], color: '#8b75bf', size: '6 cm', minLitres: 20, temperature: [24, 28], ph: [6.5, 7.8], temperament: 'Curious, territorial', social: 'Usually solo', diet: 'Carnivore', demoPrice: 3.5, description: 'A thoughtful surface-dweller with a labyrinth organ and a huge personality.', care: ['20 L minimum, with a lid and gentle current', 'Warm stable water is essential', 'Use broad-leaved plants for resting', 'Never house two males together'], compatible: ['Nerite snail', 'Amano shrimp with care'], avoid: ['Another male betta', 'Fin nippers', 'Fast, crowded communities'], image: imgBetta },
  { slug: 'neon-tetra', name: 'Neon tetra', scientific: 'Paracheirodon innesi', type: 'freshwater', palette: ['#a1e3ee', '#5a9bc6'], color: '#68cde0', size: '3.5 cm', minLitres: 55, temperature: [21, 26], ph: [6, 7.5], temperament: 'Peaceful shoaler', social: 'Keep 8+', diet: 'Omnivore', demoPrice: 1.5, description: 'A blue-green line of movement that makes a planted tank feel like a forest stream.', care: ['55 L minimum for 8 or more', 'Dimmer light and dense planting help them settle', 'Keep water clean and mature', 'Small foods suited to small mouths'], compatible: ['Panda corydoras', 'Nerite snail', 'Honey gourami'], avoid: ['Large mouths', 'Hard, alkaline water', 'Uncycled aquariums'], image: imgNeonTetra },
  { slug: 'goldfish', name: 'Goldfish', scientific: 'Carassius auratus', type: 'freshwater', palette: ['#f6dfc4', '#e8a972'], color: '#e8a972', size: '20 cm', minLitres: 120, temperature: [18, 22], ph: [7.0, 7.4], temperament: 'Peaceful, active', social: 'Keep 2+', diet: 'Omnivore', demoPrice: 4.5, description: 'A classic, expressive coldwater fish with flowing fins and a hearty appetite.', care: ['120 L minimum for a pair', 'High oxygen and strong filtration', 'Feed varied sinking diets', 'Avoid small tankmates they might eat'], compatible: ['Other goldfish', 'Large snails'], avoid: ['Tropical fish', 'Fin nippers', 'Small shrimp'], image: imgGoldfish },
  { slug: 'angelfish', name: 'Angelfish', scientific: 'Pterophyllum scalare', type: 'freshwater', palette: ['#d7ded7', '#939c9b'], color: '#aab5b3', size: '15 cm', minLitres: 150, temperature: [25, 29], ph: [6.5, 7.0], temperament: 'Semi-aggressive', social: 'Pairs or small groups', diet: 'Omnivore', demoPrice: 6.0, description: 'A tall, majestic cichlid that glides through plants with quiet grace.', care: ['150 L tall aquarium', 'Provide vertical structures and broad leaves', 'Keep warm and clean', 'Prone to eating tiny fish'], compatible: ['Corydoras', 'Larger tetras', 'Plecos'], avoid: ['Neon tetras', 'Aggressive cichlids', 'Fast fin-nippers'], image: imgAngelfish },
  { slug: 'discus', name: 'Discus', scientific: 'Symphysodon', type: 'freshwater', palette: ['#fad2d4', '#e27f8a'], color: '#df6675', size: '15 cm', minLitres: 200, temperature: [28, 31], ph: [6.0, 7.0], temperament: 'Peaceful but sensitive', social: 'Keep 5+', diet: 'Carnivore', demoPrice: 45.0, description: 'The striking king of the aquarium, requiring warm, pristine water to truly shine.', care: ['200 L minimum for a group of 5', 'Pristine water quality and regular changes', 'High temperature (28-31°C)', 'Feed high quality varied meaty foods'], compatible: ['Cardinal tetras', 'Corydoras', 'Rummy-nose tetras'], avoid: ['Aggressive fish', 'Coldwater species', 'Fast, chaotic swimmers'], image: imgDiscus },
  { slug: 'clownfish', name: 'Ocellaris clownfish', scientific: 'Amphiprion ocellaris', type: 'saltwater', palette: ['#ffd5b7', '#df796e'], color: '#ee876b', size: '8 cm', minLitres: 75, temperature: [24, 27], ph: [8.1, 8.4], temperament: 'Semi-peaceful', social: 'Pairs well', diet: 'Omnivore', demoPrice: 14.0, description: 'A bold orange reef resident that learns the rhythm of its keeper.', care: ['75 L minimum for a pair', 'Saltwater cycle and stable salinity', 'Secure rockwork and covered openings', 'Offer varied marine foods'], compatible: ['Cleaner shrimp', 'Soft corals', 'Gobies'], avoid: ['Freshwater companions', 'Uncycled tanks', 'Unstable salinity'], image: imgClownfish },
  { slug: 'cleaner-shrimp', name: 'Cleaner shrimp', scientific: 'Lysmata amboinensis', type: 'saltwater', palette: ['#f8d0c4', '#bca6dc'], color: '#efb7b0', size: '5 cm', minLitres: 75, temperature: [23, 27], ph: [8.1, 8.4], temperament: 'Peaceful', social: 'Pairs or solo', diet: 'Omnivore', demoPrice: 9.5, description: 'A delicate reef helper with long white antennae and a precise routine.', care: ['75 L established saltwater tank', 'Offer many crevices and shaded ledges', 'Iodine and minerals must be stable', 'Acclimate slowly to salinity'], compatible: ['Ocellaris clownfish', 'Peaceful reef fish'], avoid: ['Large wrasses', 'Copper medications', 'Sudden salinity changes'], image: imgCleanerShrimp },
  { slug: 'mystery-snail', name: 'Mystery snail', scientific: 'Pomacea bridgesii', type: 'freshwater', palette: ['#e4d9c4', '#b7936a'], color: '#a27f58', size: '5 cm', minLitres: 20, temperature: [20, 26], ph: [7.0, 8.0], temperament: 'Peaceful', social: 'Any', diet: 'Scavenger', demoPrice: 3.0, description: 'A quiet, slow-moving cleaner that adds charm to the glass and gravel.', care: ['20 L minimum, needs a lid', 'Calcium-rich water for shell health', 'Supplement with vegetables or wafers', 'Check for copper in water treatments'], compatible: ['Bettas', 'Tetras', 'Guppies'], avoid: ['Loaches', 'Pufferfish', 'Large cichlids'], image: imgSnail },
  { slug: 'seahorse', name: 'Seahorse', scientific: 'Hippocampus', type: 'saltwater', palette: ['#d7e5d2', '#97b89f'], color: '#a3c3aa', size: '12 cm', minLitres: 120, temperature: [22, 25], ph: [8.1, 8.4], temperament: 'Docile, slow', social: 'Pairs or groups', diet: 'Carnivore', demoPrice: 75.0, description: 'A mesmerizing, delicate upright swimmer that needs very gentle flow and constant care.', care: ['120 L tall tank', 'Low flow and plenty of hitching posts', 'Feed frozen mysis/brine shrimp daily', 'Do not house with fast eaters'], compatible: ['Pipefish', 'Mandarinfish', 'Snails'], avoid: ['Clownfish', 'Crabs', 'Stinging corals'], image: imgSeahorse },
  { slug: 'jellyfish', name: 'Moon jellyfish', scientific: 'Aurelia aurita', type: 'saltwater', palette: ['#cddbe5', '#8aaed0'], color: '#a4c0db', size: '15 cm', minLitres: 100, temperature: [13, 18], ph: [8.1, 8.3], temperament: 'Drifter', social: 'Groups', diet: 'Plankton', demoPrice: 35.0, description: 'A translucent, pulsing bell that relies on specialized circular water flow.', care: ['Requires a specialized kreisel (circular flow) tank', 'Coldwater environment (13-18°C)', 'Feed baby brine shrimp or specialized blends', 'No sharp edges or bubblers'], compatible: ['Only other moon jellyfish'], avoid: ['Fish', 'Corals', 'Standard aquariums'], image: imgJellyfish },
];

export type Product = { id: string; name: string; category: string; store: string; price: number; value: string; palette: [string, string]; image: string; };
export const categories = ['All', 'Aquariums', 'Filters', 'Lighting', 'Heaters', 'Substrate', 'Plants', 'Decor', 'Testing', 'Food', 'Tools'];
export const products: Product[] = [
  { id: 'tank-50', name: 'Clearline 50L aquarium', category: 'Aquariums', store: 'Blue Current', price: 42.0, value: 'Best for a first planted tank', palette: ['#c9eeeb', '#75bfbd'], image: prodTank },
  { id: 'tank-90', name: 'Tideglass 90L aquarium', category: 'Aquariums', store: 'Aqua House', price: 68.0, value: 'Extra swimming room', palette: ['#d7ecf0', '#8ea9ce'], image: prodTank },
  { id: 'filter-quiet', name: 'Quietflow 500 filter', category: 'Filters', store: 'Blue Current', price: 12.5, value: 'Soft, adjustable flow', palette: ['#d7e4e1', '#7da5a0'], image: prodFilter },
  { id: 'filter-canister', name: 'Canister 800 filter', category: 'Filters', store: 'Gulf Aquatics', price: 31.0, value: 'For larger planted tanks', palette: ['#d1d6e1', '#788caa'], image: prodFilter },
  { id: 'light-led', name: 'Sunline planted LED', category: 'Lighting', store: 'Aqua House', price: 18.25, value: 'Gentle plant spectrum', palette: ['#faecc7', '#e2b66e'], image: prodLight },
  { id: 'heater-75', name: '75W steady heater', category: 'Heaters', store: 'Blue Current', price: 9.75, value: 'For 40–75L tanks', palette: ['#eadfcf', '#bf8e67'], image: prodHeater },
  { id: 'sand-natural', name: 'River sand 5 kg', category: 'Substrate', store: 'Gulf Aquatics', price: 4.5, value: 'Soft for bottom dwellers', palette: ['#eed9b4', '#c79c70'], image: prodSubstrate },
  { id: 'soil-planted', name: 'Plant soil 3L', category: 'Substrate', store: 'Aqua House', price: 8.25, value: 'Nutrient-rich base', palette: ['#c9b7a6', '#877065'], image: prodSubstrate },
  { id: 'anubias', name: 'Anubias on stone', category: 'Plants', store: 'Blue Current', price: 5.5, value: 'Hardy low-light plant', palette: ['#b7d8ac', '#598c72'], image: prodPlants },
  { id: 'java-fern', name: 'Java fern bundle', category: 'Plants', store: 'Aqua House', price: 4.75, value: 'Great beginner cover', palette: ['#c0dfa8', '#6c9d6d'], image: prodPlants },
  { id: 'wood', name: 'Mopani wood piece', category: 'Decor', store: 'Gulf Aquatics', price: 7.0, value: 'Natural shelter', palette: ['#d2b79d', '#84634e'], image: prodWood },
  { id: 'rock', name: 'Smooth river rock set', category: 'Decor', store: 'Blue Current', price: 6.25, value: 'Rounded, fish-safe texture', palette: ['#c9c9ba', '#8f988a'], image: prodRocks },
  { id: 'test-kit', name: 'Freshwater test kit', category: 'Testing', store: 'Aqua House', price: 16.5, value: 'Track the invisible', palette: ['#ebc8bc', '#b97972'], image: prodTestKit },
  { id: 'flakes', name: 'Micro granule food', category: 'Food', store: 'Gulf Aquatics', price: 2.75, value: 'Tiny portions, less waste', palette: ['#f0d4af', '#d98d62'], image: prodFood },
  { id: 'net', name: 'Soft mesh net', category: 'Tools', store: 'Blue Current', price: 1.5, value: 'Calm handling', palette: ['#d0e6ec', '#739ead'], image: prodTools },
];

export const findAnimal = (slug?: string) => animals.find((animal) => animal.slug === slug) ?? animals[0];