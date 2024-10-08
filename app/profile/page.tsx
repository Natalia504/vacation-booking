import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import {
  fetchProfile,
  updateProfileAction,
  updateProfileImageAction,
} from "@/utils/actions";
import ImageInputContainer from "../../components/form/ImageInputContainer";

export default async function Profile() {
  const profile = await fetchProfile();
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">user profile</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <ImageInputContainer
          image={profile.profileImage}
          text="Update Profile Image"
          name={profile.username}
          action={updateProfileImageAction}
        />
        <FormContainer action={updateProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="firstName"
              type="text"
              label="First Name"
              defaultValue={profile.firstName}
            />
            <FormInput
              name="lastName"
              type="text"
              label="Last Name"
              defaultValue={profile.lastName}
            />
            <FormInput
              name="username"
              type="text"
              label="Username"
              defaultValue={profile.username}
            />
          </div>
          <SubmitButton text="Update Profile" className="mt-6" />
        </FormContainer>
      </div>
    </section>
  );
}
