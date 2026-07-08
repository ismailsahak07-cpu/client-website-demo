import { ServiceItem, Testimonial, FAQItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'suits',
    name: 'Bespoke Suit & Tailoring Care',
    category: 'dry-cleaning',
    description: 'Delicate structural pressing and deep biological purification for high-end suits.',
    longDescription: 'Each suit is individually inspected under high-intensity task lighting, pre-treated for microscopic soils, sanitized using our eco-friendly non-toxic fluids, and hand-finished with our bespoke tensioning equipment to preserve its original drape and roll.',
    basePrice: '£18.50',
    iconName: 'Suitcase',
    popular: true,
    features: ['Hand-rolled lapels', 'Premium cedar hanger', 'Sartorial alignment check', 'Breathable custom garment shield']
  },
  {
    id: 'shirts',
    name: 'Executive Shirt Service',
    category: 'laundry',
    description: 'Crisply pressed, meticulously hand-finished shirts, delivered hung or folded.',
    longDescription: 'The ultimate business standard. Collar and cuff pre-spotting, low-temperature organic washing to maintain fabric integrity, precise computerized tension pressing, and an individual hand touch inspection ensuring every button is secure and collars are perfectly formed.',
    basePrice: '£3.80',
    iconName: 'Shirt',
    popular: false,
    features: ['Premium button protection', 'Collar stays inserted', 'Your choice of starched or soft', 'Hanger or custom travel-fold']
  },
  {
    id: 'wedding-dresses',
    name: 'Couture & Wedding Gowns',
    category: 'specialist',
    description: 'Museum-grade preservation and gentle chemical cleansing for precious gowns.',
    longDescription: 'Your gown undergoes a detailed textile analysis to identify silk weights, beadwork, lace delicate trims, and hidden sugar-based spills. Cleaned with absolute hand-crafted isolation, fully dried, meticulously hand-pressed, and packed with acid-free tissue in a museum-grade archival box.',
    basePrice: '£145.00',
    iconName: 'Sparkles',
    popular: false,
    features: ['Archival preservation packaging', 'Textile expert analysis', 'Post-clean hand-detailing', 'Insured transport storage']
  },
  {
    id: 'everyday-dry',
    name: 'Standard Dry Cleaning',
    category: 'dry-cleaning',
    description: 'Professional cleaning for daywear, trousers, skirts, and soft knitwear.',
    longDescription: 'Ideal for your regular designer wardrobe. We utilize hypoallergenic, scent-free solvent technologies that cleanse deeply without degrading fibers, ensuring your everyday trousers, blouses, and knitwear retain their vibrant colors and soft hand-feel.',
    basePrice: '£8.50',
    iconName: 'Sparkles',
    popular: false,
    features: ['Hypoallergenic solvents', 'Gentle fiber revitalizer', 'Premium de-linting', 'Delivered pristine on luxury wire hangers']
  },
  {
    id: 'bedding-linens',
    name: 'Luxury Bedding & Linens',
    category: 'laundry',
    description: 'Thermal disinfection and hot-rolled pressing for boutique-hotel quality sheets.',
    longDescription: 'Experience the tactile sensation of pristine bedding. Your duvet covers, fitted sheets, and pillowcases are washed with premium biological soaps, sanitizing thermal cycles, and finished through our high-speed iron roller for a completely smooth, crisp drape.',
    basePrice: '£19.00',
    iconName: 'Bed',
    popular: false,
    features: ['Anti-allergen formulation', 'Boutique-hotel crisp finish', 'Crisp fold packaging', 'Scented or fragrance-free option']
  },
  {
    id: 'curtains-drapes',
    name: 'Curtains & Fine Drapery',
    category: 'specialist',
    description: 'Thermal deep clean and weight balancing to remove dust, soot, and allergens.',
    longDescription: 'Drapery acts as a natural air filter, trapping household allergens and dust. Our specialists clean curtains without shrinking linings, remove ambient soot, and finish with steam-setting to ensure they hang perfectly in your home.',
    basePrice: '£35.00',
    iconName: 'Layers',
    popular: false,
    features: ['Guaranteed zero shrinkage', 'Dust & allergen extraction', 'Pleat alignment setting', 'Weight and hem checks']
  },
  {
    id: 'duvets-pillows',
    name: 'Premium Duvet & Down Care',
    category: 'laundry',
    description: 'High-volume deep cleansing, full sanitization, and loft-restoration drying.',
    longDescription: 'Duvets and feather pillows absorb moisture and dead skin over time. We wash feathers and synthetic down under strict medical-grade sanitizing standards, followed by a multi-stage tumbling dryer to fully restore the airy loft and down fill distribution.',
    basePrice: '£22.00',
    iconName: 'Cloud',
    popular: false,
    features: ['Loft-restoration lofting', 'Deep sanitizing heat cycles', 'Hypoallergenic fill deodorizer', 'Vacuum-sealed storage option']
  },
  {
    id: 'luxury-fabrics',
    name: 'Fine Silks & Cashmere',
    category: 'specialist',
    description: 'Ultra-low agitation treatment and lanolin-restoring baths for premium knitwear.',
    longDescription: 'Silks and cashmeres require elite treatment. We bypass automatic tumblers entirely, utilizing pH-neutral premium baths, protective mesh encapsulation, hand-cleaning on collars/cuffs, and flat air drying to prevent warping, matting, or shrinking.',
    basePrice: '£15.00',
    iconName: 'Flower2',
    popular: true,
    features: ['pH-neutral bath technology', 'Felt-free drying guarantee', 'Lanolin restoration coat', 'Specialist hand-shaping']
  },
  {
    id: 'stain-removal',
    name: 'Specialist Stain Removal',
    category: 'specialist',
    description: 'Targeted spot-cleansing utilizing specialized chemical reagents by master technicians.',
    longDescription: 'Do not throw away stained favorites. Our master spotters analyze stain chemistry (tannins, proteins, lipids) and match them with surgical precision to reactive spotter agents, preserving the dye and structure of the surrounding garment.',
    basePrice: '£12.00',
    iconName: 'Pipette',
    popular: false,
    features: ['Colorfastness safety check', 'Enzymatic spot treatments', 'Odor-neutralizing soak', 'No-cure-no-charge evaluation']
  },
  {
    id: 'alterations',
    name: 'Tailoring, Repairs & Hems',
    category: 'tailoring',
    description: 'Meticulous invisible repairs, original-hem trousers, and sleeve adjustments.',
    longDescription: 'Our resident master tailor in Barnet handles adjustments and repairs to give your wardrobe a perfect, custom-tailored silhouette. From simple button replacements to complex structural alterations, we handle your garments with absolute respect.',
    basePrice: '£10.00',
    iconName: 'Scissors',
    popular: false,
    features: ['Invisible stitch repairs', 'Original zipper replacements', 'Original hem retention', 'Sartorial fitting available']
  },
  {
    id: 'express-service',
    name: '24-Hour Same-Day Express',
    category: 'specialist',
    description: 'Priority queue processing for urgent garments collected and delivered within hours.',
    longDescription: 'Got an unexpected business trip, wedding, or high-profile dinner? Our premium express track ensures your suits, shirts, or dresses bypass the regular calendar and are cleaned, finished, and hand-delivered directly to your door in Barnet within 24 hours.',
    basePrice: '+ £15.00',
    iconName: 'Zap',
    popular: false,
    features: ['Guaranteed 24h turnaround', 'Real-time SMS dispatch alerts', 'Priority queue cleaning', 'Direct chauffeur delivery']
  },
  {
    id: 'collection-delivery',
    name: 'Contactless Collection & Delivery',
    category: 'specialist',
    description: 'Free valet pickup and delivery across Barnet and surrounding London boroughs.',
    longDescription: 'Save hours of driving and parking stress. Our custom eco-friendly Mercedes valets collect directly from your home, concierge, or office. Fully tracked, fully insured, and booked via simple 1-minute schedules.',
    basePrice: 'FREE',
    iconName: 'Truck',
    popular: true,
    features: ['Complimentary over £25', '100% insured transit', 'Predictive 1-hour slots', 'Flexible unattended dropoff']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Alexander Sterling',
    location: 'Hadley Wood, Barnet',
    rating: 5,
    date: '3 days ago',
    comment: 'I entrusted Take 7 with my bespoke Savile Row three-piece suit. It came back looking and feeling better than the day I bought it. The structural pressing of the chest and lapel roll was absolutely flawless. Truly the gold standard of garment care.',
    avatarUrl: '',
    verified: true,
    garmentType: 'Bespoke Tailoring'
  },
  {
    id: '2',
    name: 'Lady Victoria Montgomery',
    location: 'High Barnet',
    rating: 5,
    date: '2 weeks ago',
    comment: 'My couture wedding dress had wine and grease stains on the silk train. I was devastated. Take 7 spent 4 days treating it with incredible patience and precision. The stains are completely gone, and the lace detailing remains perfect. Exceptional customer service.',
    avatarUrl: '',
    verified: true,
    garmentType: 'Silk Wedding Gown'
  },
  {
    id: '3',
    name: 'Dr. Michael Vance',
    location: 'Totteridge & Whetstone',
    rating: 5,
    date: '1 week ago',
    comment: 'The collection and delivery service is incredibly convenient. They arrive exactly within the scheduled slot, the driver is incredibly courteous, and the garments are delivered back meticulously hung in breathable bags. My business shirts are perfectly crisp.',
    avatarUrl: '',
    verified: true,
    garmentType: 'Executive Shirts'
  },
  {
    id: '4',
    name: 'Helena Rostov',
    location: 'Arkley, London',
    rating: 5,
    date: '1 month ago',
    comment: 'I sent my delicate cashmere sweaters and silk blouses. I am extremely particular about who handles my woollens as they shrink easily, but Take 7 restored their soft texture and original shape beautifully. Their attention to detail is remarkable.',
    avatarUrl: '',
    verified: true,
    garmentType: 'Cashmere & Silks'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'process',
    question: 'How does the free collection & delivery service work in Barnet?',
    answer: 'It is designed to be completely frictionless. Select "Book a Collection" on our website, choose your preferred 1-hour pickup and delivery slots, and input your address. Our professional uniformed valet will arrive at your home or office in Barnet to collect your items. Once cleaned and hand-inspected, we return them in pristine condition. There is no charge for delivery on orders over £25.'
  },
  {
    id: 'faq-2',
    category: 'care',
    question: 'What cleaning agents do you use? Are they safe for my clothing and skin?',
    answer: 'Absolutely. We do not use harsh, toxic chemicals like perchloroethylene (perc), which can weaken fabric fibers and irritate sensitive skin. Instead, we use premium biodegradable organic solvents and advanced wet-cleaning technologies. This is gentle on fabrics, retains bright colors, leaves no chemical odor, and is completely safe for both adults and babies.'
  },
  {
    id: 'faq-3',
    category: 'care',
    question: 'How do you handle delicate or high-value couture garments?',
    answer: 'High-value and couture garments undergo our Master Artisan tier protocol. They are individually logged, photographed, and structurally analyzed before any treatment begins. They are cleaned separately in isolated low-agitation baths, hand-finished with specialized structural pressers, and verified by our Head Quality Inspector before being packed in museum-grade, breathable covers.'
  },
  {
    id: 'faq-4',
    category: 'pricing',
    question: 'Is there a minimum order value for home delivery?',
    answer: 'Yes, our free collection and delivery service has a modest minimum order value of £25. For orders below this threshold, a small £4.95 fuel supplement is applied. Booking and scheduling is completely free, and there are no hidden booking fees.'
  },
  {
    id: 'faq-5',
    category: 'care',
    question: 'What happens if a stain cannot be removed?',
    answer: 'While we boast a 98% success rate on tough stains like red wine, oil, makeup, and rust, some old or pre-treated stains can permanently bind to fabric fibers. If our Master Spotter determines that further chemical treatment risks degrading the fabric dye or weave, we will stop and consult with you. We prioritize garment integrity above all else.'
  },
  {
    id: 'faq-6',
    category: 'booking',
    question: 'Can I set up a regular weekly collection?',
    answer: 'Yes! Many of our executive clients in Barnet, Totteridge, and Hadley Wood prefer a weekly recurring collection for their business shirts and dry cleaning. You can schedule this through our form or call us directly. We will assign a dedicated valet who will arrive at the exact same day and time each week.'
  }
];

export const STATISTICS = [
  { value: '25,000+', label: 'Garments Handled' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '100%', label: 'Workmanship Guarantee' },
  { value: '12+', label: 'Years of Craftsmanship' }
];
