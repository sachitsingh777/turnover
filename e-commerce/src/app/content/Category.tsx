"use client"
import React, { useEffect, useState } from 'react';
import { api } from '~/trpc/react';
interface Category {
    id: number;
    name: string;
    description?: string;
  }
const Category: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  useEffect(() => {
    // Fetch categories from the backend when the component mounts
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await api.category.findMany();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryChange = (categoryId: number) => {
    // Toggle the selected state of the category
    setSelectedCategories(prevSelected => {
      if (prevSelected.includes(categoryId)) {
        return prevSelected.filter(id => id !== categoryId);
      } else {
        return [...prevSelected, categoryId];
      }
    });
  };

  const saveSelectedCategories = async () => {
    // Send the updated list of selected categories to the backend
    try {
      await api.user.update({
        where: { id: userId }, // Replace userId with the actual user ID
        data: { categories: { set: selectedCategories } },
      });
      console.log('Selected categories saved successfully');
    } catch (error) {
      console.error('Error saving selected categories:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-10 bg-white rounded-[20px] shadow-lg border border-black">
        <h1 className="text-3xl font-bold mb-6 text-center">Select Categories</h1>
        <div>
          {categories.map(category => (
            <div key={category.id} className="flex items-center mb-4">
              <input
                type="checkbox"
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
              />
              <label htmlFor={`category-${category.id}`} className="ml-2">{category.name}</label>
            </div>
          ))}
        </div>
        <button
          onClick={saveSelectedCategories}
          className="w-full py-3 bg-black text-white rounded hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-500"
        >
          Save Categories
        </button>
      </div>
    </div>
  );
};

export default Category;
