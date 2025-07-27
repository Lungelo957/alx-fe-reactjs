import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';
import EditRecipeForm from './AddRecipeForm';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id);
  const navigate = useNavigate();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  if (!recipe) return <h2>Recipe not found</h2>;

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <EditRecipeForm recipe={recipe} />
      <button onClick={handleDelete} style={{ color: 'red' }}>
        Delete Recipe
      </button>
    </div>
  );
};

export default RecipeDetails;
