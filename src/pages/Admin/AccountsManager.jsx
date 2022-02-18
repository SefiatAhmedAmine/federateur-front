import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Button from '../../components/Button';
import AccountModel from '../../components/AccountModel';

export default function AccountsManager() {

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
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button value={params.row} child={<EditIcon />} model={"updateModel"} />
          <Button value={params.row} child={<DeleteIcon />} model={'deleteModel'} />
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
      if (item.name === 'id') continue;
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

  // -----------------------------------------------------------------------------
  // ------------------------------- delete a row --------------------------------
  const deleteRow = () => {
    var form = document.getElementById('deleteModelForm').elements;
    const rowID = parseInt(form['id'].value);

    axios.delete(process.env.REACT_APP_USERS_URL + rowID + "/delete")
      .then(function (response) {
        setRows((prevRows) => {
          console.log(rowID);
          var newRows = [];
          for (let i = 0; i < rows.length; i++) {
            if (rows[i].id !== rowID) {
              newRows.push(rows[i]);
            }
          }
          return newRows;
        });
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  // ----------------------------------------------------------------------------
  // --------------------------------- update row -------------------------------
  const updateRow = () => {
    var form = document.getElementById('updateModelForm').elements;
    var data = {}
    for (let i = 0; i < form.length; i++) {
      var item = form.item(i);
      // console.log(item.name)
      if (item.name === 'id') data[item.name] = parseInt(item.value);
      else data[item.name] = item.value;
    }
    console.log(data)

    axios.put(process.env.REACT_APP_USERS_URL + "update", data)
      .then(function (response) {
        setRows((prevRows) => {
          var newRows = prevRows.map(row =>
            row.id === parseInt(data.id) ? { ...row, ...data } : row,
          );
          console.log(newRows);
          return newRows;
        });
      })
      .catch(function (error) {
        console.log(error);
      });

  };


  return (

    <div className='d-flex flex-column'>
      <h2>Gestionnaire de comptes </h2>
      <div>
        <button onClick={addRow} type="button" data-bs-toggle="modal" data-bs-target="#addModel" className="btn btn-success float-end">
          Ajouter un compte
        </button>
      </div>
      <div>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          autoHeight {...rows}
        />
      </div>
      <AccountModel id={'addModel'} title={'Ajouter un compte'} rows={rows} action={addRow} />
      <AccountModel id={'updateModel'} title={'M.a.j un compte'} rows={rows} action={updateRow} />
      <AccountModel id={'deleteModel'} title={'Supprimer un compte'} rows={rows} action={deleteRow} />
    </div >
  );

}
