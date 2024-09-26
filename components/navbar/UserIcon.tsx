import { LuUser2 } from "react-icons/lu";
import { fetchProfileImage } from "@/utils/actions";

export default async function UserIcon() {
  const prpofileImage = await fetchProfileImage();
  if (prpofileImage) {
    return (
      <img
        src={prpofileImage}
        className="w-6 h-6 bg-primary rounded-full object-cover"
      />
    );
  }
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
