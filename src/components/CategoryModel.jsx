import React from 'react'
import axios from 'axios';

export default function CategoryModel({ id, title, rows, action }) {

  URL = process.env.REACT_APP_CATEGORIES_URL
  
  return (
    <div>{/* <!-- The Modal --> */}
      <div className="modal" id={id}>
        <div className="modal-dialog">
          <div className="modal-content">

            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">{title.toUpperCase()}</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <form action="" method="post" id={id + "Form"}>
                <input type="hidden" name="id" />
                <div className='row'>
                  <div className='col'>
                    <input className="form-control" name='name' type="text" placeholder='Category Name' />
                  </div>
                </div>

                <div className='row'>
                  <div className='col'>
                    <input className="form-control" name='description' type="textplace" placeholder='Description' />
                  </div>
                </div>

              </form>
            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
              <button form='#addRowForm' onClick={action} type="button" className="btn btn-danger" data-bs-dismiss="modal">{title}</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
