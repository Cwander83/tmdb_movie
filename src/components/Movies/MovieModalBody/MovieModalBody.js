import React from 'react'

import './MovieModalBody.css'

const movieModalBody = React.memo(props => {

 
return <div><h1>{props.movie.title}</h1></div>
})

export default movieModalBody;