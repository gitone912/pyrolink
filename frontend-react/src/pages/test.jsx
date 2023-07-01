import { useListProductCategoriesQuery } from "../services/productServiceApi";

const listProducts= () => {
    const responseInfo = useListProductCategoriesQuery()
    console.log(responseInfo)
    return(
        <h1>hello</h1>
    )
}
export default listProducts