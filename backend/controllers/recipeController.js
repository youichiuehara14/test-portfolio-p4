import Recipe from '../models/Recipe.js';

export const createRecipe = async (req, res) => {
  const { title, ingredients, instructions, category, photoUrl } = req.body;

  try {
    if (!title || !ingredients || !instructions || !category || !photoUrl) {
      return res.status(400).json({ message: 'Please fill all fields' });
    }
    const recipe = await Recipe.create({
      title,
      ingredients,
      instructions,
      category,
      photoUrl,
      createdBy: req.user._id,
    });
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getRecipes = async (req, res) => {
  const { category, title } = req.query;
  try {
    const query = {};

    if (category && category !== 'All') {
      query.category = category;
    }

    if (title) {
      query.title = { $regex: title, $options: 'i' };
    }
    const recipes = await Recipe.find(query);
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateRecipe = async (req, res) => {
  const { title, ingredients, instructions, category, photoUrl } = req.body;

  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    if (recipe.createdBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    recipe.title = title || recipe.title;
    recipe.ingredients = ingredients || recipe.ingredients;
    recipe.instructions = instructions || recipe.instructions;
    recipe.category = category || recipe.category;
    recipe.photoUrl = photoUrl || recipe.photoUrl;

    const updatedRecipe = await recipe.save();
    res.json(updatedRecipe);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    if (recipe.createdBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await recipe.deleteOne();
    res.json({ message: 'Recipe deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
