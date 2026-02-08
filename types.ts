
export interface Package {
  tag: string;
  title: string;
  description: string;
  meta: string;
  price: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface FloatingImageProps {
  label: string;
  size: string;
  position: string;
  rotation: string;
  zIndex: number;
}
