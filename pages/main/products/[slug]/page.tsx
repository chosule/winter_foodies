export  function ProductPage({params}) {
    const slug = params.slug;
    console.log('slug',slug)
     return(
        <div>{slug}</div>
     )
}

export default ProductPage;