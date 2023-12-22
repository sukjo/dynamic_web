import styles from "./pages.module.css";
import cx from "classnames";
import { useEffect, useState } from "react";
import { auth, db } from "../lib/firebase";
import {
  query,
  collection,
  getDocs,
  where,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export default function ProfilePage({ isModalOpen }) {
  const profilePageCX = cx(styles.profilePage, {
    [styles.blurred]: isModalOpen,
  });

  const storage = getStorage();
  const user = auth.currentUser;
  const [userDocuments, setUserDocuments] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const username = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchUserDocuments = async () => {
      if (user) {
        const q = query(
          collection(db, "curios"),
          where("userId", "==", user.uid)
        );

        const querySnapshot = await getDocs(q);

        const downloadURLs = querySnapshot.docs.map(async (doc) => {
          const imageRef = ref(storage, doc.data().imageUrl);
          const imageURL = await getDownloadURL(imageRef);
          return { id: doc.id, ...doc.data(), imageURL };
        });

        const allURLs = await Promise.all(downloadURLs);
        setUserDocuments(allURLs);
      }
    };
    fetchUserDocuments();
  }, [user]);

  const handleDelete = async (documentId, imagePath) => {
    try {
      await deleteDoc(doc(db, "curios", documentId));
      const imageRef = ref(storage, imagePath);
      await deleteObject(imageRef);
      setUserDocuments((prev) => {
        prev.filter((doc) => doc.id !== documentId);
      });
      console.log("Document and image deleted successfully");
    } catch (err) {
      console.error("Error with handleDelete: ", err);
    }
  };

  const handleEditButton = () => {
    setEditMode((prevState) => !prevState); // toggle edit mode

    if (editMode) {
      try {
        console.log("edit mode on");
        // await updateDoc(doc(db, "curios", documentId));
      } catch (err) {
        console.error("Error with handleEditButton: ", err);
      }
    } else {
      console.log("edit mode off");
    }
  };

  const handleTitleEdit = async (documentId) => {
    alert("hello");

    try {
      console.log("sending an edit");
      // await updateDoc(doc(db, "curios", documentId));
    } catch (err) {
      console.error("Error with handleEdit: ", err);
    }
  };

  const handleDescriptionEdit = async (documentId) => {
    alert("hello");

    try {
      console.log("sending an edit");
      // await updateDoc(doc(db, "curios", documentId));
    } catch (err) {
      console.error("Error with handleEdit: ", err);
    }
  };

  return (
    <div className={profilePageCX}>
      <div className={styles.profilePageHeader}>
        <p>
          Welcome ⊹{username && username.email}⊹. These are your curios (all
          yours!).
        </p>
      </div>
      <div className={styles.curiosContainer}>
        {userDocuments && userDocuments.length > 0 ? (
          userDocuments.map((doc) => (
            <div key={doc.id} className={styles.documentContainer}>
              <h3>{doc.title}</h3>
              <div key={doc.id} className={styles.curioUnit}>
                <div key={doc.id} className={styles.curioBG}>
                  <div
                    className={styles.curioImage}
                    style={{
                      backgroundImage: `url("${doc.imageURL})`,
                    }}
                    key={doc.id}
                  />
                </div>
              </div>
              <p className={styles.description}>{doc.description}</p>
              {editMode && (
                <div className={styles.editTitleWrapper}>
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={handleTitleEdit}
                  />
                </div>
              )}
              {editMode && (
                <div className={styles.editDescriptionWrapper}>
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    onChange={handleDescriptionEdit}
                  />
                </div>
              )}
              <div className={styles.editButtonWrapper}>
                <button onClick={() => handleEditButton(doc.id, doc.imageURL)}>
                  edit
                </button>
                <button onClick={() => handleDelete(doc.id, doc.imageURL)}>
                  delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>You haven't uploaded any curios yet!</p>
        )}
      </div>
    </div>
  );
}
