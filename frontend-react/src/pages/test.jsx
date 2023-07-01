import React, { useEffect } from 'react';
import {
  useListProductCategoriesMutation,
  useSingleProductCategoryMutation,
  useCreateProductCategoryMutation,
  useUpdateProductCategoryMutation,
  useDeleteProductCategoryMutation,
} from './productServiceApi';

function ProductCategories() {
  const [listCategories, listCategoriesResult] = useListProductCategoriesMutation();
  const [getCategory, getCategoryResult] = useSingleProductCategoryMutation();
  const [createCategory, createCategoryResult] = useCreateProductCategoryMutation();
  const [updateCategory, updateCategoryResult] = useUpdateProductCategoryMutation();
  const [deleteCategory, deleteCategoryResult] = useDeleteProductCategoryMutation();

  useEffect(() => {
    // Fetch the list of categories on component mount
    listCategories();
  }, []);

  const handleGetCategory = (categoryId) => {
    // Fetch a single category
    getCategory(categoryId);
  };

  const handleCreateCategory = (newCategory) => {
    // Create a new category
    createCategory(newCategory);
  };

  const handleUpdateCategory = (categoryId, updatedCategory) => {
    // Update an existing category
    updateCategory({ categoryId, ...updatedCategory });
  };

  const handleDeleteCategory = (categoryId) => {
    // Delete a category
    deleteCategory(categoryId);
  };

  return (
    <div>
      <h2>Product Categories</h2>

      {/* Display list of categories */}
      {listCategoriesResult.isLoading ? (
        <p>Loading...</p>
      ) : listCategoriesResult.isError ? (
        <p>Error: {listCategoriesResult.error.message}</p>
      ) : (
        <ul>
          {listCategoriesResult.data.map((category) => (
            <li key={category.id}>
              {category.name}{' '}
              <button onClick={() => handleGetCategory(category.id)}>View</button>{' '}
              <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      {/* Display single category */}
      {getCategoryResult.isLoading ? (
        <p>Loading...</p>
      ) : getCategoryResult.isError ? (
        <p>Error: {getCategoryResult.error.message}</p>
      ) : getCategoryResult.data ? (
        <div>
          <h3>Category Details</h3>
          <p>ID: {getCategoryResult.data.id}</p>
          <p>Name: {getCategoryResult.data.name}</p>
          <p>Description: {getCategoryResult.data.description}</p>
          <button onClick={() => handleUpdateCategory(getCategoryResult.data.id, { name: 'Updated Category' })}>
            Update
          </button>
        </div>
      ) : null}

      {/* Create category */}
      <h3>Create Category</h3>
      {createCategoryResult.isLoading ? (
        <p>Creating...</p>
      ) : createCategoryResult.isError ? (
        <p>Error: {createCategoryResult.error.message}</p>
      ) : createCategoryResult.data ? (
        <p>Category created successfully with ID: {createCategoryResult.data.id}</p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const { name, description } = e.target.elements;
            handleCreateCategory({ name: name.value, description: description.value });
          }}
        >
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Description:
            <input type="text" name="description" />
          </label>
          <button type="submit">Create</button>
        </form>
      )}
    </div>
  );
}

export default ProductCategories;
