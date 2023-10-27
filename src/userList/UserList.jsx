import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
 


const UserList = () => {

 





    return <>


        <Box sx={{ width: '80%', margin: '60px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h1 style={{ color: 'white' }}>User List</h1>


            <Box sx={{ backgroundColor: 'white', width: '100%', borderRadius: '16px', marginTop: '40px', msOverflowY: 'scroll' }}>

                <TableContainer sx={{ width: '100%' }} >
                    <Table aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">Number</TableCell>
                                <TableCell align="left">Service</TableCell>
                                <TableCell align="left">Message</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                          
                                    {/* <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={i}>
                                        <TableCell align="left">{user.id}</TableCell>
                                        <TableCell align="left">{user.name}</TableCell>
                                        <TableCell align="left">{user.email}</TableCell>
                                        <TableCell align="left">{user.number}</TableCell>
                                        <TableCell align="left">{user.service}</TableCell>
                                        <TableCell align="left">{user.message}</TableCell>
                                    </TableRow>
 */}

                           
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>




        </Box>

    </>;
}


export default UserList;