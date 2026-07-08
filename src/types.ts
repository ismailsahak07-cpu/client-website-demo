export interface ServiceItem {
  id: string;
  name: string;
  category: 'dry-cleaning' | 'laundry' | 'specialist' | 'tailoring';
  description: string;
  longDescription: string;
  basePrice: string;
  iconName: string; // Used to look up Lucide icons dynamically
  popular?: boolean;
  features: string[];
}

export interface BookingDetails {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  pickupDate: string;
  pickupTimeSlot: string;
  deliveryDate: string;
  deliveryTimeSlot: string;
  servicesSelected: { serviceId: string; quantity: number }[];
  specialInstructions?: string;
  hasStains?: boolean;
  stainDescription?: string;
  status: 'Scheduled' | 'Collected' | 'Cleaning' | 'Delivered';
  createdAt: string;
  estimatedTotal: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  avatarUrl?: string;
  verified: boolean;
  garmentType?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'process' | 'care' | 'pricing';
}
