import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
export default function DataTable({ dataURL, columns }) {

  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --------------------------------------------------------------------
  // -------------------------- fetching data ---------------------------
  useEffect(() => {
    fetch(dataURL)
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
  // ------------------------- Adding data to db and table -----------------------
  const handleAddRow = () => {
    var form = document.getElementById('addRowForm').elements;

    var data = {}
    for (let i = 0; i < form.length; i++) {
      var item = form.item(i);
      data[item.name] = item.value;
    }

    axios.post(dataURL + "save", data)
      .then(function (response) {
        console.log(response.data);
        setRows((prevRows) => [...prevRows, response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
    }


    return (
      <div>
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
      
      </div>
    )
  }
