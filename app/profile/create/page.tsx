import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProfileAction } from "@/utils/actions";

export default function CreateProfile() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput name="firstName" type="text" label="First Name" />
            <FormInput name="lastName" type="text" label="Last Name" />
            <FormInput name="username" type="text" label="Username" />
          </div>
          <SubmitButton text="Create Profile" className="mt-6" />
        </FormContainer>
      </div>
    </section>
  );
}
