import React, { useEffect, useState } from 'react'
import { dummyUsers } from '../../dummyData/DummyData';

import { DataGrid } from '@mui/x-data-grid';
import { maxHeight } from '@mui/system';

const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'email', headerName: 'Name', flex: 3 },
  { field: 'password', headerName: 'Password', flex: 5 },
];


export default function AccountsManager() {

  const [users, setUsers] = useState(dummyUsers);

  console.log(users);

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
  //   .then(users => {
  //     setUsers(users);
  //     console.log(users);
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
      <h2>Gestionnaire de comptes </h2>

      <DataGrid
        rows={users}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        autoHeight {...users}
      />

    </div>
  );

}
