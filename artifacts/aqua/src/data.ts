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

export type CareSource = { title: string; publisher: string; url: string; reviewedOn: string; scope: string };

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
  sources: CareSource[];
  description: string;
  care: string[];
  compatible: string[];
  avoid: string[];
  image: string;
};


const reviewedOn = '2026-09-08';
const sourceBySlug: Record<string, CareSource[]> = {
  'endler-guppy': [{ title: 'Care Guide for Guppies', publisher: 'Aquarium Co-Op', url: 'https://www.aquariumcoop.com/blogs/aquarium/guppy-care-guide', reviewedOn, scope: 'Aquarium size, temperature, pH, group composition, diet, and tank mates' }],
  betta: [{ title: 'Betta Fish Care Sheet', publisher: 'PetMD', url: 'https://www.petmd.com/fish/betta-fish-care-sheet', reviewedOn, scope: 'Aquarium size, temperature, water quality, diet, social needs, and tank mates' }],
  'neon-tetra': [{ title: 'Tetra Fish Care Guide', publisher: 'PetMD', url: 'https://www.petmd.com/fish/tetra-fish-care-sheet', reviewedOn, scope: 'Aquarium size, temperature, pH, schooling, diet, and tank mates' }],
  goldfish: [{ title: 'Goldfish Care Sheet', publisher: 'PetMD', url: 'https://www.petmd.com/fish/goldfish-care-sheet', reviewedOn, scope: 'Aquarium size, temperature, pH, social needs, diet, and tank mates' }],
  angelfish: [{ title: 'Care Guide for Freshwater Angelfish', publisher: 'Aquarium Co-Op', url: 'https://www.aquariumcoop.com/blogs/aquarium/angelfish-care-guide', reviewedOn, scope: 'Aquarium size, temperature, pH, group behavior, diet, and tank mates' }],
  discus: [{ title: 'Discus Fish Care Sheet', publisher: 'PetMD', url: 'https://www.petmd.com/fish/discus-fish-care-sheet', reviewedOn, scope: 'Aquarium size, temperature, pH, group size, diet, and tank mates' }],
  clownfish: [{ title: 'Ocellaris Clownfish Care Guide', publisher: 'Coralife', url: 'https://www.coralifeproducts.com/care-guides/ocellaris-clownfish', reviewedOn, scope: 'Aquarium size, temperature, pH, diet, behavior, and compatibility' }],
  'cleaner-shrimp': [{ title: 'Cleaner Shrimp Care Guide', publisher: 'Aquarium Store Depot', url: 'https://aquariumstoredepot.com/blogs/news/cleaner-shrimp-care', reviewedOn, scope: 'Aquarium size, temperature, pH, diet, reef compatibility, and copper sensitivity' }],
  'mystery-snail': [{ title: 'Care Guide for Mystery Snails', publisher: 'Aquarium Co-Op', url: 'https://www.aquariumcoop.com/blogs/aquarium/mystery-snail', reviewedOn, scope: 'Aquarium size, temperature, pH, diet, shell health, and tank mates' }],
  seahorse: [{ title: 'Seahorse and Pipefish Care Sheet', publisher: 'PetMD', url: 'https://www.petmd.com/fish/seahorse-and-pipefish-care-sheet', reviewedOn, scope: 'Aquarium shape, temperature, water movement, feeding, social needs, and tank mates' }],
  jellyfish: [{ title: 'Jellyfish Care', publisher: 'Jellyfish Art', url: 'https://www.jellyfishart.com/pages/jellyfish-care', reviewedOn, scope: 'Kreisel aquarium, temperature, water movement, feeding, and species-only housing' }],
};

export const animals: Animal[] = [
  { slug: 'endler-guppy', name: 'Endler guppy', scientific: 'Poecilia wingei', type: 'freshwater', palette: ['#b7ebe1', '#68bcca'], color: '#f49d78', size: '2.5 cm', minLitres: 38, temperature: [22, 28], ph: [6.8, 8], temperament: 'Peaceful', social: 'Keep 6+', diet: 'Omnivore', description: 'A small, quick flash of colour that thrives in a planted community aquarium.', care: ['38 L minimum for a small group', 'Keep 6 or more to support natural social behaviour', 'Gentle flow and plenty of fine-leaved cover', 'Feed tiny portions twice daily'], compatible: ['Corydoras', 'Nerite snail', 'Harlequin rasbora'], avoid: ['Fin-nipping species', 'Large predatory fish', 'A solitary setup'], image: imgGuppy, sources: sourceBySlug['endler-guppy'] },
  { slug: 'betta', name: 'Betta', scientific: 'Betta splendens', type: 'freshwater', palette: ['#d7c4ea', '#7d90d3'], color: '#8b75bf', size: '6 cm', minLitres: 20, temperature: [24, 28], ph: [6.5, 7.8], temperament: 'Curious, territorial', social: 'Usually solo', diet: 'Carnivore', description: 'A thoughtful surface-dweller with a labyrinth organ and a huge personality.', care: ['20 L minimum, with a lid and gentle current', 'Warm stable water is essential', 'Use broad-leaved plants for resting', 'Never house two males together'], compatible: ['Nerite snail', 'Amano shrimp with care'], avoid: ['Another male betta', 'Fin nippers', 'Fast, crowded communities'], image: imgBetta, sources: sourceBySlug['betta'] },
  { slug: 'neon-tetra', name: 'Neon tetra', scientific: 'Paracheirodon innesi', type: 'freshwater', palette: ['#a1e3ee', '#5a9bc6'], color: '#68cde0', size: '3.5 cm', minLitres: 55, temperature: [21, 26], ph: [6, 7.5], temperament: 'Peaceful shoaler', social: 'Keep 8+', diet: 'Omnivore', description: 'A blue-green line of movement that makes a planted tank feel like a forest stream.', care: ['55 L minimum for 8 or more', 'Dimmer light and dense planting help them settle', 'Keep water clean and mature', 'Small foods suited to small mouths'], compatible: ['Panda corydoras', 'Nerite snail', 'Honey gourami'], avoid: ['Large mouths', 'Hard, alkaline water', 'Uncycled aquariums'], image: imgNeonTetra, sources: sourceBySlug['neon-tetra'] },
  { slug: 'goldfish', name: 'Goldfish', scientific: 'Carassius auratus', type: 'freshwater', palette: ['#f6dfc4', '#e8a972'], color: '#e8a972', size: '20 cm', minLitres: 120, temperature: [18, 22], ph: [7.0, 7.4], temperament: 'Peaceful, active', social: 'Keep 2+', diet: 'Omnivore', description: 'A classic, expressive coldwater fish with flowing fins and a hearty appetite.', care: ['120 L minimum for a pair', 'High oxygen and strong filtration', 'Feed varied sinking diets', 'Avoid small tankmates they might eat'], compatible: ['Other goldfish', 'Large snails'], avoid: ['Tropical fish', 'Fin nippers', 'Small shrimp'], image: imgGoldfish, sources: sourceBySlug['goldfish'] },
  { slug: 'angelfish', name: 'Angelfish', scientific: 'Pterophyllum scalare', type: 'freshwater', palette: ['#d7ded7', '#939c9b'], color: '#aab5b3', size: '15 cm', minLitres: 150, temperature: [25, 29], ph: [6.5, 7.0], temperament: 'Semi-aggressive', social: 'Pairs or small groups', diet: 'Omnivore', description: 'A tall, majestic cichlid that glides through plants with quiet grace.', care: ['150 L tall aquarium', 'Provide vertical structures and broad leaves', 'Keep warm and clean', 'Prone to eating tiny fish'], compatible: ['Corydoras', 'Larger tetras', 'Plecos'], avoid: ['Neon tetras', 'Aggressive cichlids', 'Fast fin-nippers'], image: imgAngelfish, sources: sourceBySlug['angelfish'] },
  { slug: 'discus', name: 'Discus', scientific: 'Symphysodon', type: 'freshwater', palette: ['#fad2d4', '#e27f8a'], color: '#df6675', size: '15 cm', minLitres: 200, temperature: [28, 31], ph: [6.0, 7.0], temperament: 'Peaceful but sensitive', social: 'Keep 5+', diet: 'Carnivore', description: 'The striking king of the aquarium, requiring warm, pristine water to truly shine.', care: ['200 L minimum for a group of 5', 'Pristine water quality and regular changes', 'High temperature (28-31°C)', 'Feed high quality varied meaty foods'], compatible: ['Cardinal tetras', 'Corydoras', 'Rummy-nose tetras'], avoid: ['Aggressive fish', 'Coldwater species', 'Fast, chaotic swimmers'], image: imgDiscus, sources: sourceBySlug['discus'] },
  { slug: 'clownfish', name: 'Ocellaris clownfish', scientific: 'Amphiprion ocellaris', type: 'saltwater', palette: ['#ffd5b7', '#df796e'], color: '#ee876b', size: '8 cm', minLitres: 75, temperature: [24, 27], ph: [8.1, 8.4], temperament: 'Semi-peaceful', social: 'Pairs well', diet: 'Omnivore', description: 'A bold orange reef resident that learns the rhythm of its keeper.', care: ['75 L minimum for a pair', 'Saltwater cycle and stable salinity', 'Secure rockwork and covered openings', 'Offer varied marine foods'], compatible: ['Cleaner shrimp', 'Soft corals', 'Gobies'], avoid: ['Freshwater companions', 'Uncycled tanks', 'Unstable salinity'], image: imgClownfish, sources: sourceBySlug['clownfish'] },
  { slug: 'cleaner-shrimp', name: 'Cleaner shrimp', scientific: 'Lysmata amboinensis', type: 'saltwater', palette: ['#f8d0c4', '#bca6dc'], color: '#efb7b0', size: '5 cm', minLitres: 75, temperature: [23, 27], ph: [8.1, 8.4], temperament: 'Peaceful', social: 'Pairs or solo', diet: 'Omnivore', description: 'A delicate reef helper with long white antennae and a precise routine.', care: ['75 L established saltwater tank', 'Offer many crevices and shaded ledges', 'Iodine and minerals must be stable', 'Acclimate slowly to salinity'], compatible: ['Ocellaris clownfish', 'Peaceful reef fish'], avoid: ['Large wrasses', 'Copper medications', 'Sudden salinity changes'], image: imgCleanerShrimp, sources: sourceBySlug['cleaner-shrimp'] },
  { slug: 'mystery-snail', name: 'Mystery snail', scientific: 'Pomacea bridgesii', type: 'freshwater', palette: ['#e4d9c4', '#b7936a'], color: '#a27f58', size: '5 cm', minLitres: 20, temperature: [20, 26], ph: [7.0, 8.0], temperament: 'Peaceful', social: 'Any', diet: 'Scavenger', description: 'A quiet, slow-moving cleaner that adds charm to the glass and gravel.', care: ['20 L minimum, needs a lid', 'Calcium-rich water for shell health', 'Supplement with vegetables or wafers', 'Check for copper in water treatments'], compatible: ['Bettas', 'Tetras', 'Guppies'], avoid: ['Loaches', 'Pufferfish', 'Large cichlids'], image: imgSnail, sources: sourceBySlug['mystery-snail'] },
  { slug: 'seahorse', name: 'Seahorse', scientific: 'Hippocampus', type: 'saltwater', palette: ['#d7e5d2', '#97b89f'], color: '#a3c3aa', size: '12 cm', minLitres: 120, temperature: [22, 25], ph: [8.1, 8.4], temperament: 'Docile, slow', social: 'Pairs or groups', diet: 'Carnivore', description: 'A mesmerizing, delicate upright swimmer that needs very gentle flow and constant care.', care: ['120 L tall tank', 'Low flow and plenty of hitching posts', 'Feed frozen mysis/brine shrimp daily', 'Do not house with fast eaters'], compatible: ['Pipefish', 'Mandarinfish', 'Snails'], avoid: ['Clownfish', 'Crabs', 'Stinging corals'], image: imgSeahorse, sources: sourceBySlug['seahorse'] },
  { slug: 'jellyfish', name: 'Moon jellyfish', scientific: 'Aurelia aurita', type: 'saltwater', palette: ['#cddbe5', '#8aaed0'], color: '#a4c0db', size: '15 cm', minLitres: 100, temperature: [13, 18], ph: [8.1, 8.3], temperament: 'Drifter', social: 'Groups', diet: 'Plankton', description: 'A translucent, pulsing bell that relies on specialized circular water flow.', care: ['Requires a specialized kreisel (circular flow) tank', 'Coldwater environment (13-18°C)', 'Feed baby brine shrimp or specialized blends', 'No sharp edges or bubblers'], compatible: ['Only other moon jellyfish'], avoid: ['Fish', 'Corals', 'Standard aquariums'], image: imgJellyfish, sources: sourceBySlug['jellyfish'] },
];

export type Product = { id: string; name: string; category: string; store: string; price: number; availability: 'in_stock' | 'out_of_stock' | 'unknown'; listingUrl: string; image: string };
export const categories = ['All', 'Food'];
export const productImage = prodFood;

export const findAnimal = (slug?: string) => animals.find((animal) => animal.slug === slug) ?? animals[0];