export type Brand = 'Klasor' | 'Madame' | 'Easy Wash' | 'Shelaco' | 'Noco';

export type Category = 
  | 'ទឹកអប់បុរស និងនារី' 
  | 'ហ្វូមលាងមុខ' 
  | 'សាប៊ូដុសខ្លួន' 
  | 'សាប៊ូកក់សក់' 
  | 'សាប៊ូលាងដៃ' 
  | 'សាប៊ូបោកខោអាវ' 
  | 'ស្ព្រេយ៍' 
  | 'រ៉ូអនលុញក្លៀក';

export interface BrandInfo {
  name: Brand;
  description: string;
  logoText: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  category: Category;
  image: string;
  description: string;
  price?: string;
}
