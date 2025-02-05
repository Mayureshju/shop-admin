import { Fragment } from "react";
import Card from "@mui/material/Card";
import Person from "@mui/icons-material/Person";

// LOCAL CUSTOM COMPONENT
import ProfileEditForm from "../edit-form";
import ProfilePicUpload from "../profile-pic-upload";
import DashboardHeader from "../../dashboard-header";

// CUSTOM DATA MODEL


// ===========================================================


// ===========================================================

export default function ProfileEditPageView({
  user
}) {
  return <Fragment>
      {/* TITLE HEADER AREA */}
      <DashboardHeader Icon={Person} href="/profile" title="Edit Profile" buttonText="Back to Profile" />

      <Card sx={{
      p: 3
    }}>
        {/* USER PROFILE PIC */}
        <ProfilePicUpload image={user.avatar} />

        {/* PROFILE EDITOR FORM */}
        <ProfileEditForm user={user} />
      </Card>
    </Fragment>;
}