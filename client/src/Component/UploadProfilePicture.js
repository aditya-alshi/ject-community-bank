import { useLoaderData, Form } from "react-router-dom";
import { localStorageResult } from "../theLocalStorage";
import { MdEdit } from "react-icons/md";
import React from "react";

export const action = async({ request })=>{
  try{
    const formData = await request.formData();
    
    console.log("hello");
    console.log(formData);
    const url = "https://jectcommunitybank.onrender.com/uploadImage";
    // const url = 'http://localhost:8000/uploadImage';
    const uploadPictureResponse = await fetch(url,{
      method: 'POST',
      body: formData,
    });
    const message = await uploadPictureResponse.json();
    localStorage.setItem('userInfo',JSON.stringify(message.user))
    console.log(message);
    return ''
  }catch(err){
    return 'err';
  }
}

export const loader = async () => {
    const userInfo = localStorageResult();
    return userInfo;
  };

export default function UploadProfilePicture(){
    const userProfilePayload = useLoaderData();
    const { id, profilePicture} = userProfilePayload;
    const [editProfilePicture, setEditProfilePicture] = React.useState(false);

    function handleProfilePictureEdit() {
        setEditProfilePicture(true);
    }

    return(
        <div>
            <div className="user--profile--image--wrapper">
                <img
                  className="user--profile--image"
                  src={profilePicture? profilePicture: "/default-profile-image.png"}
                  alt="profile"
                />
                <MdEdit
                  className="edit--icon"
                  onClick={handleProfilePictureEdit}
                ></MdEdit>
                <img src="" alt="" />
              </div>
              {editProfilePicture && (
                <Form  
                id='uploadForm'  
                method='post'
                encType="multipart/form-data"
                // action="http://localhost:8000/uploadImage"
                >
                  <input
                    readOnly
                    type="text"
                    name="_id"
                    value={id}
                    style={{ display: "none" }}
                  />
                  <input type="text" name="inputCity"/>
                  <input
                    type="file"
                    className="profile--picture--file"
                    name="sampleFile"
                  />
                  <button
                    type="submit"
                    
                  >Save</button>
                  {/* onClick={hadleProfilePictureEditSave} */}
                </Form>
              
              )}
              
        </div>
    )
}