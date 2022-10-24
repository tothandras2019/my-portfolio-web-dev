export const Card = ({ imgId, name, price }) => {
  return (
    <div>
      <img src={`http://127.0.0.1:9000/img/${imgId}`} alt='no pics available' width={400} />
      <h1>{name}</h1>
      <p>price: {price} USD</p>
    </div>
  )
}
