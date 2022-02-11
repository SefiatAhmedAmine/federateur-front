import React, { useEffect, useState } from 'react'
import { dummyCategories } from '../../dummyData/DummyData';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 3 },
  { field: 'description', headerName: 'Description', flex: 5 },
];



export default function CategoriesManager() {
  const [categories, setCategories] = useState(dummyCategories);

  console.log(categories);

  // -------------------------------------------------------------------------------
  // ---------------------------- using an api -------------------------------------

  const apiProvider = 'https://www.randomuser.me/api';


  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     fetch(apiProvider)
  //   .then(response => {
  //     if (response.ok) {
  //       return response.json();
  //     }
  //     throw response;
  //   })
  //   .then(categories => {
  //     setCategories(categories);
  //     console.log(categories);
  //   })
  //   .catch(error => {
  //     console.error("failed to catch data " , error);
  //     setError(error);
  //   })
  //   .finally(() => {
  //     setLoading(false);
  //   })
  //  }, [])

  //  if (loading) return 'Loading ...';
  //  if (error) return 'Error fetching data'; 


  return (
    <div>
      <h2>Gestionnaire de categories</h2>
      <DataGrid
        rows={categories}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        autoHeight {...categories}
      />
    </div>
  );

}
