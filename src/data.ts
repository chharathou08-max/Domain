import { Product, Brand, Category, BrandInfo } from './types';

export const BRANDS: Brand[] = ['Klasor', 'Madame', 'Easy Wash', 'Shelaco', 'Noco'];

export const BRAND_INFO: BrandInfo[] = [
  {
    name: 'Klasor',
    logoText: 'KLASOR',
    description: 'ផលិតផលទឹកអប់ប្រណិតសម្រាប់បុរស និងនារី ផ្តល់នូវក្លិនក្រអូបជាប់បានយូរ និងទំនុកចិត្តពេញមួយថ្ងៃ។',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Madame',
    logoText: 'Madame',
    description: 'ផលិតផលថែរក្សាសម្រស់នារី ផ្តោតលើភាពទន់ភ្លន់ និងការចិញ្ចឹមបីបាច់ស្បែកឲ្យភ្លឺថ្លា។',
    image: 'https://images.unsplash.com/photo-1615397323753-1e171eb25641?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Easy Wash',
    logoText: 'EASY WASH',
    description: 'ដំណោះស្រាយអនាម័យគ្រួសារ ជាមួយនឹងផលិតផលសម្អាតដែលមានប្រសិទ្ធភាពខ្ពស់ និងសុវត្ថិភាព។',
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Shelaco',
    logoText: 'Shelaco',
    description: 'ឯកទេសថែរក្សាសក់ និងដងខ្លួន ផ្សំពីវត្ថុធាតុដើមធម្មជាតិ ដើម្បីសុខភាពស្បែកនិងសក់។',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Noco',
    logoText: 'NOCO',
    description: 'ផលិតផលការពារក្លិនខ្លួន និងផ្តល់ភាពស្រស់ស្រាយ ជួយឲ្យអ្នកមានអារម្មណ៍ល្អគ្រប់ពេលវេលា។',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800'
  }
];

export const CATEGORIES: Category[] = [
  'ទឹកអប់បុរស និងនារី',
  'ហ្វូមលាងមុខ',
  'សាប៊ូដុសខ្លួន',
  'សាប៊ូកក់សក់',
  'សាប៊ូលាងដៃ',
  'សាប៊ូបោកខោអាវ',
  'ស្ព្រេយ៍',
  'រ៉ូអនលុញក្លៀក'
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Klasor Signature Men',
    brand: 'Klasor',
    category: 'ទឹកអប់បុរស និងនារី',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
    description: 'ទឹកអប់បុរសក្លិនក្រអូបប្រណិត ជាប់បានយូរពេញមួយថ្ងៃ។',
    price: '$45.00'
  },
  {
    id: 'p2',
    name: 'Madame Elegance',
    brand: 'Madame',
    category: 'ទឹកអប់បុរស និងនារី',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
    description: 'ទឹកអប់នារីក្លិនផ្កាស្រទន់ ផ្តល់ភាពជឿជាក់និងទាក់ទាញ។',
    price: '$48.00'
  },
  {
    id: 'p3',
    name: 'Madame Pure Cleanser',
    brand: 'Madame',
    category: 'ហ្វូមលាងមុខ',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    description: 'ហ្វូមលាងមុខសម្អាតស្បែកបានជ្រៅ ជួយឲ្យស្បែកមុខទន់រលោង។',
    price: '$12.00'
  },
  {
    id: 'p4',
    name: 'Shelaco Silk Body Wash',
    brand: 'Shelaco',
    category: 'សាប៊ូដុសខ្លួន',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800',
    description: 'សាប៊ូដុសខ្លួនផ្តល់សំណើមដល់ស្បែក ក្លិនក្រអូបស្រស់ស្រាយ។',
    price: '$8.50'
  },
  {
    id: 'p5',
    name: 'Shelaco Pro Hair',
    brand: 'Shelaco',
    category: 'សាប៊ូកក់សក់',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800',
    description: 'សាប៊ូកក់សក់បំប៉នសរសៃសក់ឲ្យរឹងមាំ និងកាត់បន្ថយការជ្រុះសក់។',
    price: '$9.00'
  },
  {
    id: 'p6',
    name: 'Easy Wash Antibacterial',
    brand: 'Easy Wash',
    category: 'សាប៊ូលាងដៃ',
    image: 'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&q=80&w=800',
    description: 'សាប៊ូលាងដៃសម្លាប់មេរោគ ៩៩.៩% ការពារសុខភាពគ្រួសារអ្នក។',
    price: '$4.00'
  },
  {
    id: 'p7',
    name: 'Easy Wash Power Liquid',
    brand: 'Easy Wash',
    category: 'សាប៊ូបោកខោអាវ',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800',
    description: 'សាប៊ូបោកខោអាវកម្ចាត់ស្នាមប្រឡាក់បានយ៉ាងមានប្រសិទ្ធភាព។',
    price: '$15.00'
  },
  {
    id: 'p8',
    name: 'Noco Fresh Body Spray',
    brand: 'Noco',
    category: 'ស្ព្រេយ៍',
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=800',
    description: 'ស្ព្រេយ៍បាញ់ខ្លួនផ្តល់ភាពស្រស់ស្រាយពេញមួយថ្ងៃ។',
    price: '$6.50'
  },
  {
    id: 'p9',
    name: 'Noco Invisible Roll-on',
    brand: 'Noco',
    category: 'រ៉ូអនលុញក្លៀក',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    description: 'រ៉ូអនការពារក្លិនក្លៀក មិនបន្សល់ស្នាមលើសម្លៀកបំពាក់។',
    price: '$5.00'
  },
  {
    id: 'p10',
    name: 'Klasor Ocean Breeze',
    brand: 'Klasor',
    category: 'ទឹកអប់បុរស និងនារី',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=800',
    description: 'ទឹកអប់ក្លិនបែបធម្មជាតិសមុទ្រ ស្រស់ស្រាយនិងទាក់ទាញ។',
    price: '$42.00'
  }
];
