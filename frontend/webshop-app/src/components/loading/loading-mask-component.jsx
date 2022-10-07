import './loading-mask-component.css'

export const Loading = () => {
  return (
    <div className='loading-mask'>
      <div className='loading-mask-marker-container'>
        <span className='loading-marker'></span>
        <h1>Loading...</h1>
      </div>
    </div>
  )
}
