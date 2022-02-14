import React from 'react'

export default function Button({ value, child, model}) {

  let btn = React.createRef();
  let handleClick = e => {

    var form = document.getElementById(model + 'Form').elements;
    // console.log(form)
    // console.log(value)
    for (let i = 0; i < form.length; i++) {
      var item = form.item(i);
      // console.log(item);
      item.setAttribute('value', value[item.name])
      if (model === 'deleteModel'){
        item.setAttribute('disabled', true)
      }
    }
  }
  

  return (
    <div>
      <button ref={btn} type='button' value={value} onClick={handleClick} data-bs-toggle="modal" data-bs-target={"#"+model} >
        {child}
      </button>
    </div>
  )
}
