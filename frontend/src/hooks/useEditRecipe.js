import { useState, useEffect } from 'react';
import axios from 'axios';

const useEditRecipe = (id) => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: [''],
    instructions: '',
    category: '',
    photoUrl: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = value;
    handleInputChange('ingredients', newIngredients);
    const lastIngredient = formData.ingredients[formData.ingredients.length - 1];
    if (error && lastIngredient.trim() !== '') {
      setError('');
    }
  };

  const addIngredient = () => {
    const lastIngredient = formData.ingredients[formData.ingredients.length - 1];
    if (lastIngredient.trim() !== '') {
      setError('');
      handleInputChange('ingredients', [...formData.ingredients, '']);
    } else {
      setError('Please fill in the last ingredient before adding a new one');
    }
  };

  const removeIngredient = (index) => {
    if (formData.ingredients.length > 1) {
      const newIngredients = formData.ingredients.filter((_, i) => i !== index);
      handleInputChange('ingredients', newIngredients);
      const lastIngredient = formData.ingredients[formData.ingredients.length - 1];
      if (error && lastIngredient.trim() !== '') {
        setError('');
      }
    } else {
      handleInputChange('ingredients', ['']);
    }
  };

  const handleSubmit = async () => {
    setError('');
    setLoading(true);

    try {
      await axios.put(`/api/recipes/${id}`, {
        title: formData.title,
        ingredients: formData.ingredients.filter((i) => i.trim() !== ''),
        instructions: formData.instructions,
        category: formData.category,
        photoUrl: formData.photoUrl,
      });
    } catch (error) {
      setError('Failed to add recipe', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`/api/recipes/${id}`);
        setFormData({
          title: res.data.title,
          ingredients: res.data.ingredients.length > 0 ? res.data.ingredients : [''],
          instructions: res.data.instructions,
          category: res.data.category,
          photoUrl: res.data.photoUrl,
        });
      } catch (error) {
        setError('Failed to load recipe: ' + error.message);
      }
    };
    fetchRecipe();
  }, [id]);

  return {
    formData,
    error,
    loading,
    handleInputChange,
    handleIngredientChange,
    addIngredient,
    removeIngredient,
    handleSubmit,
  };
};

export default useEditRecipe;
