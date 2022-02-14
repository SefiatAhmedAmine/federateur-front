import React from 'react'

export default function AccountModel({id, title, rows, action }) {

  
  return (
    <div>
      {/* <!-- The Modal --> */}
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
              <form action="" method="post" id={id+"Form"}>
                <div className='row'>
                  <input type="hidden" name="id" />
                  <div className='col'>
                    <input className="form-control" name='firstname' type="text" placeholder='First Name' />
                  </div>
                  <div className='col'>
                    <input className="form-control" name='lastname' type="text" placeholder='Last Name' />
                  </div>
                </div>
                <div className='row'>

                  <div className='col'>
                    <input className="form-control" name='email' type="text" placeholder='Email' />
                  </div>

                  <div className='col'>
                    <input className="form-control" name='password' type="text" placeholder='Password' />
                  </div>

                </div>

                <div className='row'>

                  <div className='col'>
                    <input className="form-control" name='phoneNumber' type="text" placeholder='Phone Number' />
                  </div>

                  {/* <div className='col'>
                    <label htmlFor="role" className="form-label">Role :</label>
                    <select className="form-control" name="roles" id="role">
                      <option value="ADMIN">Admin</option>
                      <option value="USER">User</option>
                    </select>
                  </div> */}

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
