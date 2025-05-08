import { Routes, Route } from 'react-router-dom';
import AppPage from './pages/AppPage';
import Login from './pages/Login';
import Register from './pages/Register';
import AddRecipe from './pages/AddRecipe';
import RecipeDetail from './pages/RecipeDetail';
import EditRecipe from './pages/EditRecipe';
import HomePage from './pages/HomePage';
import NavigationBar from './components/NavigationBar';
import ContactForm from './pages/ContactForm';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <NavigationBar />
      </div>

      <Routes>
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <AppPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-recipe"
          element={
            <ProtectedRoute>
              <AddRecipe />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-recipe/:id"
          element={
            <ProtectedRoute>
              <EditRecipe />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipe/:id"
          element={
            <ProtectedRoute>
              <RecipeDetail />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <div className="py-3 border-t-1 mt-auto border-[#5c5c5c] shadow-2xl shadow-[#ffcab5]">
        <div className="max-w-[90%] mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
