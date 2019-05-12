import React from 'react';
import './OnionHater.css';

class OnionHater extends React.Component {
  render() {

    const onClickListener = event => {
      if(event.target.value.includes('cebolla')){
        alert('odio la cebolla');
      }

    }
    return (

      <textarea onChange={onClickListener} id="comments" name="comments" rows="8" cols="80"></textarea>

    );
  }
}
  
export default OnionHater;
