import React from 'react';

// one of the props passed through the route match, location, history
const DisplayItem = ({match}) => {
  return(
    <div>
      The item will be displayed here {match.params.id}
    </div>
  )
}

export default DisplayItem;