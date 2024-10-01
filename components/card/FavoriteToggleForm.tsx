"use client";

import { usePathname } from "next/navigation";
import { toggleFavoriteAction } from "@/utils/actions";
import { CardSubmitButton } from "../form/Buttons";
import FormContainer from "../form/FormContainer";

type FavoriteToggleFormProps = {
  propertyId: string;
  favoriteId: string | null;
};

export default function FavoriteToggleForm({
  propertyId,
  favoriteId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton
        action={toggleAction}
        isFavorite={favoriteId ? true : false}
      />
    </FormContainer>
  );
}
