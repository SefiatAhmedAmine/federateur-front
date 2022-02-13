import React, { useEffect, useState } from 'react'
import { dummyCategories } from '../../dummyData/DummyData';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', flex: 0.1 },
  { field: 'name', headerName: 'Name', flex: 0.2 },
  { field: 'description', headerName: 'Description', flex: 2 },
  {
    field: 'actions', headerName: 'Actions', width: 100,
    renderCell: (params) => (
      <div>
        <button>
          <EditIcon />
        </button>
        <button>
          <DeleteIcon />
        </button>
      </div>
    ),
  },
];



export default function CategoriesManager() {

  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_CATEGORIES_URL)
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

  const handleAddRow = () => {
    var form = document.getElementById('addRowForm').elements;

    var data = {}
    for (let i = 0; i < form.length; i++) {
      var item = form.item(i);
      data[item.name] = item.value;
    }

    axios.post(process.env.REACT_APP_CATEGORIES_URL + "save", data)
      .then(function (response) {
        console.log(response.data);
        setRows((prevRows) => [...prevRows, response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Gestionnaire de categories</h2>
      <button size="small" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
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
              <h4 className="modal-title">ADD A ROW</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <form action="" method="post" id='addRowForm'>
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
              <button form='#addRowForm' onClick={handleAddRow} type="button" className="btn btn-danger" data-bs-dismiss="modal">Add row</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );

}
