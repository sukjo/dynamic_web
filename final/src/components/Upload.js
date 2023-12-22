import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./components.module.css";
import Thumbnail from "./Thumbnail";
import Modal from "./Modal";
import { storage, db, auth } from "../lib/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { v4 } from "uuid";

export default function Upload({ onModalClick }) {
  const user = auth.currentUser;

  const formik = useFormik({
    initialValues: {
      file: "",
      title: "",
      author: "",
      description: "",
    },
    validationSchema: Yup.object({
      file: Yup.mixed()
        .required("Required")
        .test(
          "FILE_SIZE",
          "Must be <5MB",
          (value) => value && value.size < 1024 /* kb */ * 1024 /* mb */ * 5 // 5 mb
        )
        .test(
          "FILE_TYPE",
          "Must be PNG file",
          (value) => value && ["image/png"].includes(value.type)
        ),
      title: Yup.string()
        .required("Required")
        .max(100, "Must be 100 characters or less"),
      description: Yup.string()
        .required("Required")
        .max(10000, "Must be 10,000 characters or less"),
    }),
    onSubmit: async () => {
      // console.log("formik values: ", formik.values);

      if (user) {
        try {
          const imageRef = ref(
            storage,
            `images/${user.uid}/${formik.values.file.name + v4()}`
          );

          await uploadBytes(imageRef, formik.values.file);
          await addDoc(collection(db, "curios"), {
            title: formik.values.title,
            description: formik.values.description,
            imageUrl: imageRef.fullPath,
            userId: user.uid,
            created: Timestamp.now(),
          });
          alert("image uploaded and document created");
        } catch (err) {
          console.error(err);
        }
      }
    },
  });

  return (
    <Modal onModalClick={onModalClick}>
      <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
        <p>
          The curio must be in a PNG file with a transparent background, like
          this:
        </p>
        <img
          src="https://www.pngmart.com/files/5/Acorn-Squash-PNG-Transparent-Image.png"
          className={styles.exampleImg}
          alt="PNG file of a fruit with a transparent background"
        ></img>

        <div className={styles.formHeader}>
          <label htmlFor="File">File</label>
          {formik.touched.file && formik.errors.file && (
            <p className={styles.errorMessage}>{formik.errors.file}</p>
          )}
        </div>
        <div className={styles.fileUpload}>
          <input
            type="file"
            name="file"
            onChange={(ev) => formik.setFieldValue("file", ev.target.files[0])}
            onBlur={formik.handleBlur}
          />
          {formik.values.file && <Thumbnail file={formik.values.file} />}
        </div>

        <div className={styles.formHeader}>
          <label htmlFor="title">Title</label>
          {formik.touched.title && formik.errors.title && (
            <p className={styles.errorMessage}>{formik.errors.title}</p>
          )}
        </div>
        <input
          type="text"
          id="title"
          name="title"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <div className={styles.formHeader}>
          <label htmlFor="description">Description</label>
          {formik.touched.description && formik.errors.description && (
            <p className={styles.errorMessage}>{formik.errors.description}</p>
          )}
        </div>
        <input
          type="text"
          id="description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <button type="Submit">Upload</button>
      </form>
    </Modal>
  );
}
