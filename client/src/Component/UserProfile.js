import {
  Outlet
} from 'react-router-dom';
import { useLoaderData, Form} from "react-router-dom";
import { localStorageResult } from "../theLocalStorage";
import { MdEdit } from "react-icons/md";
import React from "react";

export const action = async ({ request }) => {
    try {
      const formData = await request.formData();
      const body = Object.fromEntries(formData)
      
        const url = "https://jectcommunitybank.onrender.com/home/userProfile/editProfile";
        // const url = "http://localhost:8000/home/userProfile/editProfile";
        const editedResponse = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        const editedUser = await editedResponse.json();
        console.log(editedUser);
        // localStorage.setItem("userInfo", JSON.stringify(editedUser.user));
        // return redirect("/home/userProfile");
        return ''
  
    } catch (err) {
      return { message: "Error" };
    }
  };
  
  export const loader = async () => {
    const userInfo = localStorageResult();
    return userInfo;
  };

export default function UserProfile() {
  const userProfilePayload = useLoaderData();

    const [edit, setEdit] = React.useState(false);
    function handleEdit() {
    setEdit(true);
  }

  function handleProfileEditSave() {
    setEdit(false);
  }

    // console.log(userProfilePayload);
  const { id, firstName, lastName, email, phoneNumber} = userProfilePayload;
  return (
    <div className="personal--profile">
      <Outlet />
      <div>
            {edit ? (
                <Form
                  onSubmit={handleProfileEditSave}
                  className="user--profile--edit"
                  method="post"
                >
                  <input
                    readOnly
                    type="text"
                    name="_id"
                    value={id}
                    style={{ display: "none" }}
                  />
                  <p>First Name</p>
                  <input type="text" name="firstName" id="" placeholder={firstName} />
                  <p>Last Name</p>
                  <input type="text" name="lastName" id="" placeholder={lastName} />
                  <p>Phone Number</p>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id=""
                    placeholder={phoneNumber}
                  />
                  <button type="submit" >Save Changes</button>
                </Form>
              ) : (
                <div>
        
                  <fieldset className="user--profile--information">
                    <legend
                      onClick={handleEdit}
                      style={{ marginLeft: "auto", marginRight: "1rem" }}
                    >
                      <span title="edit">
                        <MdEdit className=" edit--icon" />
                      </span>
                    </legend>
                    <p className="user-profile-elements">
                      Name: {firstName} {lastName}
                    </p>
                    <p className="user-profile-elements">Email: {email}</p>
                    <p className="user-profile-elements">Phone: {phoneNumber}</p>
                  </fieldset>
                </div>
              )}
        </div>
    </div>
  );
}
