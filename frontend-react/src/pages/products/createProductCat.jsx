import { useCreateProductCategoryMutation } from "../../services/productServiceApi";

const CreateProductCategory = () => {
  const [createProduct, responseInfo] = useCreateProductCategoryMutation();
  if (responseInfo.isLoading) return <div>is loading......</div>;
  if (responseInfo.isError)
    return <div>error occured {responseInfo.error.error} </div>;
  return (
    <div>
      <button
        onClick={() => {
          createProduct({
            title: "Smartwa new one",
            parent_category_id: 4,
          });
        }}
      >
        crete post
      </button>
    </div>
  );
};
export default CreateProductCategory;
