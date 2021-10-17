import Axios from "axios";
import React, {useState, useEffect } from "react";
// import {Image} from "cloudinary-react";

function UploadImage({parentCallBack, loadingStatus}) {
    const [imageSelected, setImageSelected] = useState("");


    const uploadImage = () => {
        debugger;
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "n2x7z2cf")

        loadingStatus({loading: true});

        Axios.post(
            "https://api.cloudinary.com/v1_1/dhbezgzcv/image/upload",
            formData)
            .then((response) => {
                debugger;
                // setResponseImage(response.data.secure_url);
                parentCallBack(response.data.secure_url);
            });
    };

    return (
        <div>
            <input type="file" onChange={(event) => {
                setImageSelected(event.target.files[0])
            }}
            />
            <button type="button" onClick={uploadImage}>Upload Image</button>
        </div>
    )
}

export default UploadImage;
