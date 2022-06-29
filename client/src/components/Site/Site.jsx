import './Site.css'

function Site({imgSrc, site}) {
  const siteStyle = {
    backgroundImage: 
`url(${imgSrc})`,
  
};
  return (
    <div className='Site'>
    <div className='image' style={siteStyle}>
    </div>
     <p>{site}</p>
    </div>
  )
}

export default Site