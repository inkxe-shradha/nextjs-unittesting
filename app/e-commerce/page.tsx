const productList = async () => {
    const res = await fetch(
        process.env.NEXT_PUBLIC_SERVER?.concat('/products') || '',
        {
            next: { revalidate: 10 },
        }
    )
    const result = await res.json()

    return result
}

const categoryList = async () => {
    const res = await fetch(
        process.env.NEXT_PUBLIC_SERVER?.concat('/categories') || ''
    )
    const result = await res.json()

    return result
}
const Page = async () => {
    const products = await productList()
    const categories = await categoryList()

    return (
        <div role="main" className="">
            <ul aria-label="categoryList" className="p-2 flex list-none gap-2">
                {categories &&
                    categories.map((ele: any) => (
                        <li key={ele.id}>{ele.name}</li>
                    ))}
            </ul>

            <h2 id="all-products-list">Products List</h2>
            <ul aria-labelledby="all-products-list" className="p-3">
                {products &&
                    products.map((product: any) => (
                        <li key={product.id}>{product.name}</li>
                    ))}
            </ul>
        </div>
    )
}

export default Page
