import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const VISIBLE_FIELDS = ['discord', 'firstName', 'lastName', 'email', 'santa', 'victim', 'backup', 'charity'];

export default function SantaTable(props) {
    const allData = props.data
    const ssData = allData["rows"]
    const ssHeaders = allData["headers"]
    // let hArray = []
    // for (let i in ssHeaders) {
    //     hArray.push({
    //         field: i,
    //         headerName: i,
    //         width: 150
    //     })
    // }
    const data = {columns:ssHeaders, rows:ssData}


    // Otherwise filter will be applied on fields such as the hidden column id
    const columns = React.useMemo(
        () => data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
        [data.columns],
    );

    return (
        <Box sx={{ height: 400, width: 1 }}>
            <DataGrid
                {...data}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },
                }}
            />
        </Box>
    );
}