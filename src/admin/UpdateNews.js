import React, { useState } from "react";
import { Form, Formik } from "formik";
import { firebase } from "../firebaseConfig"

import TextField from "./TextField"

const UpdateNews = () => {

    const [url, seturl] = useState(null)

    const uploadFileHandler = (title, categories, imgUrl, Description) => {
        const storageRef = firebase.storage().ref(imgUrl.name)
        storageRef.put(imgUrl).on("state_changed", (snap) => {
            console.log()
        }, (error) => { console.log(error) }, async () => {
            const url = await storageRef.getDownloadURL();
            var uploadDate = new Date();
            uploadDate = uploadDate.getDate() + "-" + uploadDate.getMonth() + "-" + uploadDate.getFullYear()
            uploadDate = uploadDate.toString()
            firebase.database().ref("UPC").child(categories).child(uploadDate).child(title).set({
                title: title,
                description: Description,
                imgUrl: url,
                category: categories,
                uploadDate: uploadDate
            }).then(() => { console.log("success") }).catch((error) => { console.log(error) })
            seturl(url)
        })

    }
    return (
        <div>
            <div>
                <h3>Post a News</h3>
            </div>
            <div>
                <Formik
                    initialValues={{
                        title: "",
                        description: "",
                        img: '',
                        category: "",
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                        uploadFileHandler(values.title, values.category, values.img, values.description)
                    }}
                >
                    {(formik) => (
                        <>
                            <Form>
                                <TextField type="text" placeholder="Title" name="title" />
                                <TextField type="text" placeholder="Category" name="category" />
                                <TextField type="file" name="img" accept="images/*" value={undefined} onChange={(event) => formik.setFieldValue("img", event.target.files[0])} />

                                <TextField type="text" placeholder="Description" name="description" />

                                <button className="btn btn-info btn-block mt-4">Submit</button>
                            </Form>
                        </>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default UpdateNews;
