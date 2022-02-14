import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Button from '../../components/Button';
import CategoryModel from '../../components/CategoryModel';



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

  const addRow = () => {
    var form = document.getElementById('addModelForm').elements;

    var data = {}
    for (let i = 0; i < form.length; i++) {
      var item = form.item(i);
      if (item.name === 'id') continue;
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

  // -----------------------------------------------------------------------------
  // ------------------------------- delete a row --------------------------------
  const deleteRow = () => {
    var form = document.getElementById('deleteModelForm').elements;
    const rowID = parseInt(form['id'].value);

    axios.delete(process.env.REACT_APP_CATEGORIES_URL + rowID + "/delete")
      .then(function (response) {
        setRows((prevRows) => {
          console.log(rowID);
          var newRows = [];
          for (let i = 0; i < rows.length; i++) {
            if (rows[i].id != rowID) {
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

    axios.put(process.env.REACT_APP_CATEGORIES_URL + "update", data)
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




  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.1 },
    { field: 'name', headerName: 'Name', flex: 0.2 },
    { field: 'description', headerName: 'Description', flex: 2 },
    {
      field: 'actions', headerName: 'Actions', width: 100,
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'space-around', }}>
          <Button value={params.row} child={<EditIcon />} model={"updateModel"} />
          <Button value={params.row} child={<DeleteIcon />} model={'deleteModel'} />
        </div>
      ),
    },
  ];

  return (
    <div>
      <h2>Gestionnaire de categories</h2>
      <button size="small" type="button" data-bs-toggle="modal" data-bs-target="#addModel">
        Add a row
      </button>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        autoHeight {...rows}
      />

      <CategoryModel id={'addModel'} title={'Add a row'} rows={rows} action={addRow} />
      <CategoryModel id={'updateModel'} title={'Update a row'} rows={rows} action={updateRow} />
      <CategoryModel id={'deleteModel'} title={'Delete a row'} rows={rows} action={deleteRow} />

    </div>
  );

}
