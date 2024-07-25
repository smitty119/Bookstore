
// // import React, { useState } from "react";
// // import axios from "axios";
// // import { TextField, Button, Box, Typography, Container, Alert } from "@mui/material";

// // const AddBook = () => {
// //   const [data, setData] = useState({
// //     url: "",
// //     title: "",
// //     author: "",
// //     price: "",
// //     desc: "",
// //     language: "",
// //   });
// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState("");

// //   const headers = {
// //     id: localStorage.getItem("id"),
// //     authorization: `Bearer ${localStorage.getItem("token")}`,
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setData({ ...data, [name]: value });
// //   };

// //   const handleSubmit = async () => {
// //     try {
// //       if (
// //         !data.url ||
// //         !data.title ||
// //         !data.author ||
// //         !data.price ||
// //         !data.desc ||
// //         !data.language
// //       ) {
// //         setError("All fields are required");
// //         return;
// //       }
// //       const response = await axios.post(
// //         "http://localhost:3002/books/addbook",
// //         data,
// //         { headers }
// //       );
// //       setSuccess(response.data.message);
// //       setError("");
// //       setData({
// //         url: "",
// //         title: "",
// //         author: "",
// //         price: "",
// //         desc: "",
// //         language: "",
// //       });
// //     } catch (error) {
// //       setError(error.response?.data?.message || "An error occurred");
// //       setSuccess("");
// //     }
// //   };

// //   return (
// //     <Container component="main" maxWidth="xs" sx={{ mt: 8, mb: 4 }}>
// //       <Typography variant="h4" align="center" gutterBottom>
// //         Add Book
// //       </Typography>
// //       <Box
// //         sx={{
// //           display: 'flex',
// //           flexDirection: 'column',
// //           alignItems: 'center',
// //           p: 3,
// //           bgcolor: 'background.paper',
// //           borderRadius: 1,
// //           boxShadow: 3,
// //         }}
// //       >
// //         {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
// //         {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
        
// //         <TextField
// //           label="Image URL"
// //           name="url"
// //           value={data.url}
// //           onChange={handleChange}
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           placeholder="URL of the book cover image"
// //         />
// //         <TextField
// //           label="Title"
// //           name="title"
// //           value={data.title}
// //           onChange={handleChange}
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           placeholder="Title of the book"
// //         />
// //         <TextField
// //           label="Author"
// //           name="author"
// //           value={data.author}
// //           onChange={handleChange}
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           placeholder="Author of the book"
// //         />
// //         <TextField
// //           label="Price"
// //           name="price"
// //           value={data.price}
// //           onChange={handleChange}
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           placeholder="Price of the book"
// //         />
// //         <TextField
// //           label="Description"
// //           name="desc"
// //           value={data.desc}
// //           onChange={handleChange}
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           placeholder="Description of the book"
// //           multiline
// //           rows={4}
// //         />
// //         <TextField
// //           label="Language"
// //           name="language"
// //           value={data.language}
// //           onChange={handleChange}
// //           variant="outlined"
// //           fullWidth
// //           margin="normal"
// //           placeholder="Language of the book"
// //         />
// //         <Button
// //           variant="contained"
// //           color="primary"
// //           fullWidth
// //           sx={{ mt: 3, mb: 2 }}
// //           onClick={handleSubmit}
// //         >
// //           Add Book
// //         </Button>
// //       </Box>
// //     </Container>
// //   );
// // };

// // export default AddBook;
// import React, { useState } from "react";
// import axios from "axios";
// import { TextField, Button, Box, Typography, Container, Alert } from "@mui/material";

// const AddBook = () => {
//   const [data, setData] = useState({
//     url: "",
//     title: "",
//     author: "",
//     price: "",
//     desc: "",
//     language: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Headers for authorization, fetched from localStorage
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     try {
//       // Validate required fields
//       if (
//         !data.url ||
//         !data.title ||
//         !data.author ||
//         !data.price ||
//         !data.desc ||
//         !data.language
//       ) {
//         setError("All fields are required");
//         return;
//       }
      
//       // Send POST request to add book
//       const response = await axios.post(
//         "http://localhost:3002/books/addbook",
//         data,
//         { headers }
//       );
    
//       setSuccess(response.data.message);
//       setError("");
//       setData({
//         url: "",
//         title: "",
//         author: "",
//         price: "",
//         desc: "",
//         language: "",
//       });
//     } catch (error) {
//       // Handle error
//       setError(error.response?.data?.message || "An error occurred");
//       setSuccess("");
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" sx={{ mt: 8, mb: 4 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Add Book
//       </Typography>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           p: 3,
//           bgcolor: 'background.paper',
//           borderRadius: 1,
//           boxShadow: 3,
//         }}
//       >
//         {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
//         {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
        
//         <TextField
//           label="Image URL"
//           name="url"
//           value={data.url}
//           onChange={handleChange}
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           placeholder="URL of the book cover image"
//         />
//         <TextField
//           label="Title"
//           name="title"
//           value={data.title}
//           onChange={handleChange}
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           placeholder="Title of the book"
//         />
//         <TextField
//           label="Author"
//           name="author"
//           value={data.author}
//           onChange={handleChange}
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           placeholder="Author of the book"
//         />
//         <TextField
//           label="Price"
//           name="price"
//           value={data.price}
//           onChange={handleChange}
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           placeholder="Price of the book"
//         />
//         <TextField
//           label="Description"
//           name="desc"
//           value={data.desc}
//           onChange={handleChange}
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           placeholder="Description of the book"
//           multiline
//           rows={4}
//         />
//         <TextField
//           label="Language"
//           name="language"
//           value={data.language}
//           onChange={handleChange}
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           placeholder="Language of the book"
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           fullWidth
//           sx={{ mt: 3, mb: 2 }}
//           onClick={handleSubmit}
//         >
//           Add Book
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default AddBook;
// import React, {estate) from "react";

//     import axios from "axios";
    
//     nst AddBook= () => {
    
//     const [Data, setData] useState({
    
//     url:"",
    
//     title:
    
//     author:
    
//     price:
    
//     desc:
    
//     language: "", });
    
//     const headers = {
    
//     id: localStorage.getItem("id"),
    
//     authorization: Bearer ${localStorage.getItem("token")}", };
    
//     const change = (e) => {
    
//     const { name, value} e.target;
    
//     setData({...Data, [name]: value });
    
//     };
    
//     const submit async () => {
    
//     try {
    
//     if (
    
//     Data.url. 11
    
//     Data.title --- 11
    
//     Data.author -----||
    
//     Data.price..
    
//     Data.desc
// } catch (error) (

//     alert(error.response.data.message)s
    
//     return (
    
//     className="h-(100%] p-e ndsp-4
    
//     4h1 className" text-3x1 mdstext-5x1 font-semibold text-zinc-500mb-8">
    
//     Add Book
    
//     4/h1>
    
//     <div className="p-4 bg-zinc-800 rounded">
    
//     <div>
    
//     4label htmlFor"" className="text-zinc-400">
    
//     Image
    
//     4/label>
    
//     input
    
//     type="text"
    
//     className "w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
    
//     placeholder "url of image"
    
//     name="ur1"
    
//     required
    
//     value(Data.url)
    
//     onChange (change)
    
//     />
    
//     </div>
    
//     <div className="mt-4">
    
//     <label htmlFor"" className="text-zinc-400"
// } catch (error) (

//     alert(error.response.data.message)s
    
//     return (
    
//     className="h-(100%] p-e ndsp-4
    
//     4h1 className" text-3x1 mdstext-5x1 font-semibold text-zinc-500mb-8">
    
//     Add Book
    
//     4/h1>
    
//     <div className="p-4 bg-zinc-800 rounded">
    
//     <div>
    
//     4label htmlFor"" className="text-zinc-400">
    
//     Image
    
//     4/label>
    
//     input
    
//     type="text"
    
//     className "w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
    
//     placeholder "url of image"
    
//     name="ur1"
    
//     required
    
//     value(Data.url)
    
//     onChange (change)
    
//     />
    
//     </div>
    
//     <div className="mt-4">
    
//     <label htmlFor"" className="text-zinc-400"
//     <label htmlFor="" className="text-zinc-400">

// Description of book

// </label>

// <textarea

// className "w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none

// rows="5"

// placeholder="description of book"

// name="desc"

// required

// value-(Data.desc}

// onChange-(change)

// />

// </div>

// <button

// className" mt-4 px-3bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-

// onClick-(submit}

// Add Book

// </button>

// </div>

// </div>

// export default AddBook;

import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [Data, setData] = useState({
    url: "",
    title: "",
    author: "",
    price: "",
    desc: "",
    language: "",
  });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async () => {
    try {
      if (
        Data.url === "" ||
        Data.title === "" ||
        Data.author === "" ||
        Data.price === "" ||
        Data.desc === ""
      ) {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "http://localhost:1000/api/v1/add-book",
          Data,
          { headers }
        );
        alert(response.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="h-full p-8">
      <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
        Add Book
      </h1>
      <div className="p-4 bg-zinc-800 rounded">
        <div>
          <label htmlFor="url" className="text-zinc-400">
            Image
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="URL of image"
            name="url"
            required
            value={Data.url}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="title" className="text-zinc-400">
            Title
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Title of the book"
            name="title"
            required
            value={Data.title}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="author" className="text-zinc-400">
            Author
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Author of the book"
            name="author"
            required
            value={Data.author}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="price" className="text-zinc-400">
            Price
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Price of the book"
            name="price"
            required
            value={Data.price}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="desc" className="text-zinc-400">
            Description of the book
          </label>
          <textarea
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            rows="5"
            placeholder="Description of the book"
            name="desc"
            required
            value={Data.desc}
            onChange={change}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="language" className="text-zinc-400">
            Language
          </label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Language of the book"
            name="language"
            required
            value={Data.language}
            onChange={change}
          />
        </div>
        <button
          className="mt-4 px-3 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all"
          onClick={submit}
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default AddBook;
