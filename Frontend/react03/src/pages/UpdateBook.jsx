
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';

// const UpdateBook = () => {
//   const [book, setBook] = useState({
//     title: '',
//     author: '',
//     description: '',
//     price: '',
//     image: '',
//   });

//   const [id, setId] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBook({ ...book, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:3002/books/${id}`, book);
//       console.log(response.data);
//       alert('Book updated successfully!');
//     } catch (error) {
//       console.error(error);
//       alert('Error updating book!');
//     }
//   };

//   return (
//     <Container component="main" maxWidth="sm">
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           bgcolor: 'background.paper',
//           p: 4,
//           borderRadius: 2,
//           boxShadow: 3,
//           mt: 8,
//         }}
//       >
//         <Typography component="h1" variant="h5" gutterBottom>
//           Update Book
//         </Typography>
//         <Box
//           component="form"
//           noValidate
//           onSubmit={handleSubmit}
//           sx={{ mt: 3 }}
//         >
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="id"
//                 label="ID"
//                 name="id"
//                 value={id}
//                 onChange={(e) => setId(e.target.value)}
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="title"
//                 label="Title"
//                 name="title"
//                 value={book.title}
//                 onChange={handleChange}
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="author"
//                 label="Author"
//                 name="author"
//                 value={book.author}
//                 onChange={handleChange}
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="description"
//                 label="Description"
//                 name="description"
//                 value={book.description}
//                 onChange={handleChange}
//                 variant="outlined"
//                 multiline
//                 rows={4}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="price"
//                 label="Price"
//                 name="price"
//                 type="number"
//                 value={book.price}
//                 onChange={handleChange}
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="image"
//                 label="Image URL"
//                 name="image"
//                 value={book.image}
//                 onChange={handleChange}
//                 variant="outlined"
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Update Book
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default UpdateBook;
import React, { useState } from 'react';
import axios from 'axios';

const UpdateBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: '',
    price: '',
    image: '',
  });

  const [id, setId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/books/${id}`, book);
      console.log(response.data);
      alert('Book updated successfully!');
    } catch (error) {
      console.error(error);
      alert('Error updating book!');
    }
  };

  return (
    <div>
      <h1>Update Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <br />
        <label>
          Title:
          <input type="text" name="title" value={book.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Author:
          <input type="text" name="author" value={book.author} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={book.description} onChange={handleChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={book.price} onChange={handleChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="text" name="image" value={book.image} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
