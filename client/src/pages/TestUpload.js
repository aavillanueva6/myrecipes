// import React, { useState, useRef } from "react";
// import { useMutation } from "@apollo/client";
// import { FILE_UPLOAD_URL } from "../utils/mutations";

// const TestUpload = ({ s3ImgURL, setS3ImgURL }) => {
//   const inputRef = useRef();
//   const [fileUploadURL, { error }] = useMutation(FILE_UPLOAD_URL);
//   const [uploadedImg, setUploadedImg] = useState([]);

//   const handleChange = async (event) => {
//     const fileUploaded = [];
//     const imageUrl = [];
//     for (let i = 0; i < event.target.files.length; i++) {
//       fileUploaded.push(URL.createObjectURL(event.target.files[i])); // In files[i], there is image's URL of local location
//       try {
//         // Get S3-UploadUrl
//         const { data } = await fileUploadURL();
//         console.log(data);

//         // Upload Img to AWS S3
//         await fetch(data.fileUploadURL.signedUrl, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           body: event.target.files[i],
//         });

//         // Store imageUrl from AWS S3 ( to put imageUrl lists to product model )
//         imageUrl.push(data.fileUploadURL.signedUrl.split("?")[0]);
//         console.log(imageUrl);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     setS3ImgURL([...s3ImgURL, ...imageUrl]);
//     setUploadedImg([...uploadedImg, ...fileUploaded]);
//   };

//   return (
//     <div>
//       <input
//         ref={inputRef}
//         type="file"
//         accept="image/gif, image/jpeg, image/png"
//         multiple
//         onChange={handleChange}
//       />
//     </div>
//   );
// };

// export default TestUpload;

import React, { useState, useRef } from "react";
import ImageUpload from "../components/ImageUpload";
const TestUpload = () => {
  return <ImageUpload />;
};
export default TestUpload;
