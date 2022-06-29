import './Card.css'

function Card({svg, title, desc}) {
  return (
    <div className='card-container'>
      <div className="card-icon">
        {svg}
      </div>
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-description">
        {desc}
      </div>
    </div>
  )
}

export default Card