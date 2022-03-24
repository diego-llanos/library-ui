/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-alert */
import PxpTable, { ConfigTableInterface } from 'pxp-table';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
// import { Typography } from '@mui/material';
import Typography from '@material-ui/core/Typography';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useState } from 'react';
const tableConfig: ConfigTableInterface = {
  name: 'table',
  title: 'Table-PXP',
  columns: {
    name: {
      label: 'Name',
      search: true,
      filterParameterToSearch: 'name',
      renderColumn: ({ row, column }) => {
        return (
          <>
            <div>
              <Typography
                color="primary"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  alert('edit this table');
                }}
              >
                {row.name}
              </Typography>
              Type: {row.type} Code: {row.code}
            </div>
          </>
        );
      },
      formAttribute: {
        type: 'TextField',
        name: 'name',
        label: 'name',
        size: 'small',
        variant: 'outlined',
        helperText: '',
        gridForm: { xs: 6, sm: 6 },
        edit: true,
        add: true,
      },
    },

    phone: {
      label: 'Phone',
      formAttribute: {
        type: 'TextField',
        name: 'phone',
        label: 'Type',
        size: 'small',
        variant: 'outlined',
        helperText: '',
        gridForm: { xs: 6, sm: 6 },
        options: [
          { value: '', label: '' },
          { value: 'customers', label: 'phone' },
        ],
        edit: true,
        add: true,
      },
    },
    direction: {
      label: 'Direction',
      formAttribute: {
        type: 'Dropdown',
        name: 'lastName',
        label: 'Type',
        size: 'small',
        variant: 'outlined',
        helperText: '',
        gridForm: { xs: 6, sm: 6 },
        options: [
          { value: '', label: '' },
          { value: 'customers', label: 'customers' },
        ],
        edit: true,
        add: true,
      },
    },
  },
  store: {
    type: 'remote',
    getDataConfig: {
      doRequest: {
        method: 'get',
        url: 'http://localhost:3200/api/test/customers/list',
        typeData: 'QUERY_STRING',
        data: {
          start: 0,
          limit: 10,
          sort: 'name',
          dir: 'ASC',
        },
        headers: {
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY0NTE5MjIxNDExMiwiZXhwIjoxNjQ1NTA3NTc0MTEyfQ.5qEEQzvXcy5MPevqFZfG9JKvCx1PiBjzYBnOGU-DmY8",
          'Content-Type': 'application/json',
        }
      },
      load: true,
    },
    dataReader: {
      dataRows: 'data',
    },
    storeId: 'customer_id',
  },
  filterConfig: {
    filterName: 'genericFilterFields',
    filterValue: 'genericFilterValue',
  },
  actionsInToolBar: {
    createFlow: {
      label: 'Create Flow',
      onClick: (row) => {
        alert('asdas');
      },
      icon: <AddIcon color="primary" />,
      disabled: false,
    },
  },
  actionsInCell: {
    edit: {
      label: 'Edit',
      onClick: (row) => {
        console.log('row', row.name);
      },
      icon: <EditIcon />,
      disabled: false,
    },
    duplicate: {
      label: 'Duplicate',
      onClick: (row) => {
        console.log('row', row.name);
        alert('go to flow');
      },
      icon: <FileCopyIcon />,
      disabled: false,
    },
    goToFlow: {
      label: 'Go to flow',
      onClick: (row) => {
        console.log('row', row.name);
        alert('go to flow');
      },
      icon: <NavigateNextIcon />,
      disabled: false,
    },
  },
  form: {
    add: {
      name: 'add',
      submit: {
        onSubmit: {
          url: 'http://localhost:3200/api/test/customers/add',
          method: 'post',
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY0NTE5MjIxNDExMiwiZXhwIjoxNjQ1NTA3NTc0MTEyfQ.5qEEQzvXcy5MPevqFZfG9JKvCx1PiBjzYBnOGU-DmY8",
          },
          extraParams: {
            vendorId: 1,
            enabled: 'Y',
          },
        },
      },
    },
    edit: {
      name: 'edit',
      submit: {
        onSubmit: (states: any) => {
          console.log('edit', states);
        },
      },
    },

  //   (delete) urlDelete: {
  //     name: delete;
  //     submit: {
  //         onSubmit: {
  //             url: string;
  //             method: string;
  //             headers: {
  //                 Authorization: string;
  //             };
  //         };
  //     };
  // }
    extraAttributes: {
      enabled: {
        type: 'Dropdown',
        name: 'enabled',
        label: 'enabled?',
        size: 'small',
        variant: 'outlined',
        helperText: '',
        gridForm: { xs: 6, sm: 6 },
        options: [
          { value: 'Y', label: 'Yes' },
          { value: 'N', label: 'No' },
        ],
        add: false,
        edit: true,
      },
    },
  },
};

const table = () => {
  return (
    <div>
      <PxpTable config={tableConfig} />
    </div>
  );
};

export default table;