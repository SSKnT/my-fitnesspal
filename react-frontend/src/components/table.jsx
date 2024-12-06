import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const WorkoutTable = () => {
    const rows = [
        { id: 1, workoutName: 'Cardio Blast', status: 'Done' },
        { id: 2, workoutName: 'Strength Training', status: 'Pending' },
        { id: 3, workoutName: 'Yoga Flex', status: 'Done' },
    ];

    const columns = [
        { field: 'id', headerName: '#', width: 50 },
        { field: 'workoutName', headerName: 'Workout Name', flex: 1 },
        { field: 'status', headerName: 'Status', width: 120 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => (
                <IconButton
                    color="error"
                    onClick={() => handleDelete(params.row.id)}
                >
                    <DeleteIcon />
                </IconButton>
            ),
        },
    ];

    const handleDelete = (id) => {
        console.log(`Deleting workout with id: ${id}`);
        // Add your delete logic here
    };

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
                sx={{
                    '& .MuiDataGrid-root': {
                        backgroundColor: 'rgba(18, 18, 18, 0.5)', // Dark background
                        color: '#fff',
                        border: '1px solid rgba(107, 114, 128, 0.5)', // Gray border
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: 'rgba(18, 18, 18, 0.5)', // Same background as rows
                        borderBottom: '1px solid rgba(107, 114, 128, 0.5)',
                        color: '#9CA3AF', // Muted gray for header text
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        color: '#9CA3AF',
                    },
                    '& .MuiDataGrid-cell': {
                        borderBottom: '1px solid rgba(107, 114, 128, 0.5)',
                    },
                    '& .MuiDataGrid-row:hover': {
                        backgroundColor: 'rgba(18, 18, 18, 0.8)', // Slightly darker on hover
                    },
                    '& .MuiDataGrid-menu': {
                        backgroundColor: 'rgba(18, 18, 18, 0.5)', // Popup menu background
                        border: '1px solid rgba(107, 114, 128, 0.5)', // Gray border
                        color: '#fff',
                    },
                    '& .MuiDataGrid-paper': {
                        backgroundColor: 'rgba(18, 18, 18, 0.5)', // Popup menu paper
                        border: '1px solid rgba(107, 114, 128, 0.5)',
                    },
                }}
            />
        </div>
    );
};

export default WorkoutTable;
