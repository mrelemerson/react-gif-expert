import { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export function GifExpertApp() {
  const [categories, setCategories] = useState([]);

  function onAddCategory(newCategory) {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <div className="container">
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      />

      { categories.map((category) => <GifGrid key={category} category={category} />) }
    </div>
  );
}
