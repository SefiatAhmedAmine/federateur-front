import React, { useEffect, useState } from 'react'
import { dummyUsers } from '../../dummyData/DummyData';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

let action = null;

export default function AccountsManager() {
  // const [action, setAction] = useState(null);
  const [actionText, setActionText] = useState('');

  const handleUpdateRow = e => {
    const rowToUpdateIndex = e.target.value
    console.log(rowToUpdateIndex)
    action = () => {
      // setRows((prevRows) => {
      //   const rowToUpdateIndex = e.target.value
      //   var form = document.getElementById('addRowForm').elements;

      //   var data = {}
      //   for (let i = 0; i < form.length; i++) {
      //     var item = form.item(i);
      //     if (item.value != '')
      //     data[item.name] = item.value;
      //   }
      //   console.log(data + ' // ind = ' + rowToUpdateIndex)
      //   prevRows.map((row, index) => {
      //     if (row.id === rowToUpdateIndex) {alert('hello ' + row.id)}
      //   }
      //   );
      //   return rows;
      // });
    }
    setActionText('Update row')
  }

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'firstname', headerName: 'First Name', flex: 1 },
    { field: 'lastname', headerName: 'Last Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 3 },
    { field: 'password', headerName: 'Password', flex: 5 },
    { field: 'phoneNumber', headerName: 'Phone Number', flex: 1 },
    { field: 'roles', headerName: 'Role', flex: 1 },
    {
      field: 'actions', headerName: 'Actions', width: 100,
      renderCell: (params) => (
        <div>
          <button type="button" data-bs-toggle="modal" data-bs-target="#myModal">
            <EditIcon />
          </button>
          <button value={params.row.id} onClick={handleUpdateRow} >
            <DeleteIcon />
          </button>
        </div>
      ),
    },
  ];


  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_USERS_URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        setRows(data);
        // console.log(users);
      })
      .catch(error => {
        console.error("failed to catch data ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  if (loading) return 'Loading ...';
  if (error) return 'Error fetching data';

  // -----------------------------------------------------------------------------
  // ------------------------- Adding data to db and table ----------------------

  const addRow = () => {
    var form = document.getElementById('addRowForm').elements;

    var data = {}
    for (let i = 0; i < form.length; i++) {
      var item = form.item(i);
      data[item.name] = item.value;
    }

    axios.post(process.env.REACT_APP_USERS_URL + "save", data)
      .then(function (response) {
        console.log(response.data);
        setRows((prevRows) => [...prevRows, response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // ------------------------------------------------------------------------------


  const handleAddRow = () => {
    action = addRow;
    setActionText('Add row')
  }

  return (

    <div>
      <h2>Gestionnaire de comptes </h2>

      <button onClick={handleAddRow} type="button" data-bs-toggle="modal" data-bs-target="#myModal">
        Add a row
      </button>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        autoHeight {...rows}
      />
      {/* <!-- The Modal --> */}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">

            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">{actionText}</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <form action="" method="post" id='addRowForm'>
                <div className='row'>
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
              <button form='#addRowForm' onClick={action} type="button" className="btn btn-danger" data-bs-dismiss="modal">{actionText}</button>
            </div>

          </div>
        </div>
      </div>
    </div >
  );

}
