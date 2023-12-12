import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { db } from "../lib/firebase";
// import cx from "classnames";
import styles from "./components.module.css";
import { storage } from "../lib/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

// export default function Upload({ onFileUpload, onFormSubmit }) {
export default function Upload({}) {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFormSubmit = (values) => {
    //   alert(JSON.stringify(values, null, 2));
    //   onFileUpload(values);

    if (selectedFile == null) return;
    const imageRef = ref(storage, `images/${selectedFile.name + v4()}`);
    uploadBytes(imageRef, selectedFile).then(() => {
      alert("Image uploaded!");
    });
  };

  const validate = (values) => {
    const errors = {};
    // these should not be necessary given firebase storage rules
    /*
    if (!values.file) {
      errors.file = "Required";
    } else {
      if (values.type !== "image/png") {
        errors.file = "We only accept PNG files";
      }

      const maxSize = 100 * 1024 * 1024; // 100 MB in bytes
      if (values.size > maxSize) {
        errors.file = "File size exceeds 100MB";
      }
    }
    */

    if (!values.file) {
      errors.file = "Required";
    }

    if (!values.title) {
      errors.title = "Required";
    } else if (values.title.length > 100) {
      errors.title = "Must be 100 characters or less";
    }

    if (!values.author) {
      errors.author = "Required";
    } else if (values.author.length > 100) {
      errors.author = "Must be 100 characters or less";
    }

    if (!values.description) {
      errors.description = "Required";
    } else if (values.author.description > 10000) {
      errors.description = "Must be 10,000 characters or less";
    }

    return errors;
  };

  return (
    <div>
      <Formik
        initialValues={{
          file: "",
          title: "",
          author: "",
          description: "",
        }}
        validate={validate}
        onSubmit={(values) => {
          onFormSubmit(values);
        }}
      >
        <Form>
          <label htmlFor="file">File</label>

          <Field
            id="file"
            name="file"
            type="file"
            onChange={(ev) => {
              //   setFieldValue("file", ev.currentTarget.files[0].name);
              setSelectedFile(ev.currentTarget.files[0]);
              console.log("file selected: ", selectedFile);
            }}
            // onChange={(ev) => {
            // }}
            // onSubmit={(values) => {
            //   console.log({
            //     fileName: values.file.name,
            //     type: values.file.type,
            //     size: `${values.file.size} bytes`,
            //   });
            // }}
          ></Field>

          <ErrorMessage name="file" component="div" />
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" type="text" />
          <ErrorMessage name="title" component="div" />
          <label htmlFor="author">Author</label>
          <Field id="author" name="author" type="text" />
          <ErrorMessage name="author" component="div" />
          <label htmlFor="description">Description</label>
          <Field id="description" name="description" type="text" />
          <ErrorMessage name="description" component="div" />
          {/* <button onClick={handleFileUpload}>upload</button> */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
