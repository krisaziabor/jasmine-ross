import Link from 'next/link';
import { contentStructure } from '@/types/content';

interface MainMenuProps {
  className?: string;
}

export default function MainMenu({ className = '' }: MainMenuProps) {
  return (
    <nav className={`flex flex-col h-full ${className}`}>
      <div className="space-y-3">
        {contentStructure.map((category, index) => (
          <div key={index} className="menu-category mb-3">
            <h2 className="font-[family-name:var(--font-medium-right-grotesk)] text-lg mb-1">
              {category.title}
            </h2>
            
            {/* If category has subcategories, display them first */}
            {category.subcategories && (
              <div className="mt-2 mb-2">
                {category.subcategories.map((subcategory, subIndex) => {
                  // Get collections for this subcategory
                  const subcategoryCollections = category.collections?.filter(
                    c => c.subcategory === subcategory.id
                  ) || [];
                  
                  return (
                    <div key={subIndex} className="mb-2">
                      <h3 
                        className={`font-[family-name:var(--font-medium-right-grotesk)] text-xs mb-0.5 ${
                          subcategory.disabled ? 'opacity-50' : ''
                        }`}
                      >
                        {subcategory.title}
                      </h3>
                      
                      {/* Show collections under this subcategory */}
                      {subcategoryCollections.length > 0 && (
                        <ul className="space-y-0 ml-2">
                          {subcategoryCollections.map((collection, colIndex) => (
                            <li key={colIndex} className="py-0.5">
                              <Link 
                                href={collection.path} 
                                className="font-[family-name:var(--font-caslon)] text-sm hover:underline"
                              >
                                {collection.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            
            {/* If category has direct collections (no subcategory), display them */}
            {category.collections && !category.subcategories && (
              <ul className="space-y-0">
                {category.collections.map((collection, colIndex) => (
                  <li key={colIndex} className="py-0.5">
                    <Link 
                      href={collection.path} 
                      className="font-[family-name:var(--font-caslon)] text-sm hover:underline"
                    >
                      {collection.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}