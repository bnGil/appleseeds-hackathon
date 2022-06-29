import './Site.css'

function Site({imgSrc, site}) {
  const siteStyle = {
    backgroundImage: 
`url(${imgSrc})`,
  
};
  return (
    <div className='Site'>
    <div className='image' style={siteStyle}>
     {/* <img src={imgSrc}></img> */}
    </div>
     <p>{site}</p>
    </div>
  )
}

export default Site