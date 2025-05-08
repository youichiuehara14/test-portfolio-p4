import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useAddRecipeForm = () => {
  const navigate = useNavigate();
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
    const updated = [...formData.ingredients];
    updated[index] = value;
    handleInputChange('ingredients', updated);
    if (error && value.trim() !== '') setError('');
  };

  const addIngredient = () => {
    const last = formData.ingredients.at(-1);
    if (last.trim()) {
      setError('');
      handleInputChange('ingredients', [...formData.ingredients, '']);
    } else {
      setError('Please fill in the last ingredient before adding another.');
    }
  };

  const removeIngredient = (index) => {
    if (formData.ingredients.length > 1) {
      const updated = formData.ingredients.filter((_, i) => i !== index);
      handleInputChange('ingredients', updated);
      if (error && updated.at(-1).trim()) setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post('/api/recipes', {
        ...formData,
        ingredients: formData.ingredients.filter((i) => i.trim()),
      });
      navigate('/app');
    } catch (err) {
      console.error(err);
      setError('Something went wrong while adding your recipe.');
    } finally {
      setLoading(false);
    }
  };

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

export default useAddRecipeForm;
