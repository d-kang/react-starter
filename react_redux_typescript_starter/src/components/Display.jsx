import React from 'react';
export default function(props) {
  console.log('props', props)
  return (
    <div>
      {`${props.myStr} ${props.count}` }
    </div>
  )
}
