export type ContentType = 'bw' | 'color' | 'writing';

export type Collection = {
  id: string;
  title: string;
  path: string;
  type: ContentType;
  subcategory?: string; // For writing collections
  featured?: boolean;
};

export type Subcategory = {
  id: string;
  title: string;
  disabled?: boolean;
};

export type ContentCategory = {
  id: string;
  title: string;
  type: ContentType;
  collections?: Collection[];
  subcategories?: Subcategory[];
};

export const contentStructure: ContentCategory[] = [
  // B&W Film - just has collections, no subcategories
  {
    id: 'bw',
    title: 'B&W FILM',
    type: 'bw',
    collections: [
      { id: 'diotima-ss25', title: 'Diotima SS25', path: '/bw/diotima-ss25', type: 'bw' },
      { id: '35mm', title: '35mm', path: '/bw/35mm', type: 'bw' },
      { id: '4x5', title: '4x5', path: '/bw/4x5', type: 'bw' }
    ]
  },
  
  // Color - just has collections, no subcategories
  {
    id: 'color',
    title: 'COLOR',
    type: 'color',
    collections: [
      { id: 'beauty-plus', title: 'Beauty Plus', path: '/color/beauty-plus', type: 'color' },
      { id: 'other-works', title: 'Other Works', path: '/color/other-works', type: 'color' }
    ]
  },
  
  // Writing - has subcategories and collections under those subcategories
  {
    id: 'writing',
    title: 'WRITING',
    type: 'writing',
    subcategories: [
      { id: 'photojournalism', title: 'PHOTOJOURNALISM' },
      { id: 'journalism', title: 'JOURNALISM', disabled: true },
      { id: 'op-eds', title: 'OP-EDS', disabled: true }
    ],
    collections: [
      {
        id: 'aqui-a-pesar-de-las-iguanas',
        title: 'Aquí, a pesar de las iguanas (2025)',
        path: '/writing/photojournalism/aqui-a-pesar-de-las-iguanas',
        type: 'writing',
        subcategory: 'photojournalism',
        featured: true
      }
      // More collections can be added here, with appropriate subcategory
    ]
  }
];

// Helper function to get all collections across categories
export const getAllCollections = (): Collection[] => {
  const collections: Collection[] = [];
  
  contentStructure.forEach(category => {
    if (category.collections) {
      collections.push(...category.collections);
    }
  });
  
  return collections;
};

// Helper function to get collections for a specific content type
export const getCollectionsByType = (type: ContentType): Collection[] => {
  return getAllCollections().filter(collection => collection.type === type);
};

// Helper function to get collections for a specific subcategory
export const getCollectionsBySubcategory = (type: ContentType, subcategoryId: string): Collection[] => {
  const category = contentStructure.find(cat => cat.type === type);
  if (!category || !category.collections) return [];
  
  return category.collections.filter(collection => collection.subcategory === subcategoryId);
};