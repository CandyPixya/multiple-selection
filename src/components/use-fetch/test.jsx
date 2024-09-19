import useFetch from "."

export default function UseFetchHooktest() {
  const { data, error, pending } = useFetch(`https://dummyjson.com/products`, {})

  return (
    <div>
      <h1>Use fetch hook</h1>
      {pending ? <h3>Pending ! pls wait</h3> : null}
      {
        error ? <h3> {error} </h3> : null
      }
      {data && data.products && data.products.length ?
          data.products.map(productItem => <p key={productItem.key}>{productItem.title}</p>)
      : null}
    </div>
  )
}