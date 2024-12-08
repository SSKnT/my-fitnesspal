import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const WorkoutTable = () => {
  const rows = [
    { id: 1, workoutName: 'Cardio Blast', status: 'Done' },
    { id: 2, workoutName: 'Strength Training', status: 'Pending' },
    { id: 3, workoutName: 'Yoga Flex', status: 'Done' },
    { id: 4, workoutName: 'Pilates Core', status: 'Pending' },
    { id: 5, workoutName: 'HIIT Extreme', status: 'Done' },
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
    <div style={{ height: 371, width: '100%', marginTop:'2rem' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        isCellEditable={() => false}
        sx={{
          '& .MuiDataGrid-root': {
            backgroundColor: '#121212', // Dark background
            color: '#FFFFFF', // Text color
            border: 'none', // Remove main border
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#121212', // Header background color
            color: '#FFFFFF', // Header text color
            borderBottom: 'none', // Remove header bottom border
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#2A2A2A', // Header background color
            color: '#FFFFFF', // Header text color
            borderBottom: 'none', // Remove header bottom border
          },
          '& .MuiDataGrid-cell': {
            color: '#FFFFFF', // Text color for cells
            borderBottom: 'none', // Remove cell bottom border
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: 'rgba(0,191,174,0.03)', // Lighter background on hover
          },
          '& .MuiDataGrid-row.Mui-selected': {
            backgroundColor: 'rgba(0,191,174,0.07)', // Retain hover color on selection
          },
          '& .MuiDataGrid-row.Mui-selected:hover': {
            backgroundColor: 'rgba(18, 18, 18, 0.7)', // Retain hover color on selection hover
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: '#121212', // Footer background color
            color: '#FFFFFF', // Footer text color
            borderTop: 'none', // Remove footer top border
          },
          '& .MuiDataGrid-columnSeparator': {
            display: '', // Hide column separators
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: '#121212', // Background color for the virtual scroller
          },
          '& .MuiTablePagination-root': {
            color: '#FFFFFF', // Text color for pagination controls
          },
          '& .MuiSvgIcon-root': {
            color: '#FFFFFF', // Color for sorting icons
          },
        }}
      />
    </div>
  );
};

export default WorkoutTable;