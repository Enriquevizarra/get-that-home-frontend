import { Fragment, useEffect } from "react";
import PropertyImageSlice from "../components/PropertyImageSlice/index";
import PropertyLocation from "../components/PropertyLocation/index";
import PropertyMutableComponent from "../components/PropertyMutableComponent/index";
import ShowPropertyData from "../components/ShowPropertyData/index";
import { useIndividualProperty } from "../contexts/individual-property-context";
import {
  FriendlyImage,
  LostImageContainer,
  LostImageHelperText,
  ShowPropertyContainer,
  ShowPropertyWrapper,
} from "./pages-styles";

export default function ShowProperty() {
  const { selected } = useIndividualProperty();
  const location = selected.address.split` `;
  const country = location[location.length - 1];

  return (
    <Fragment>
      {selected ? (
        <ShowPropertyWrapper>
          <ShowPropertyContainer>
            <PropertyImageSlice imgs={selected.images_url} />
            <ShowPropertyData
              address={selected.address}
              rentAmount={selected.rentAmount}
              maintenance={selected.maintenance}
              bedrooms={selected.bedrooms}
              bathrooms={selected.bathrooms}
              area={selected.area}
              petsAllowed={selected.area}
              about={selected.about}
            />
            <PropertyLocation
              zoom={10}
              location={selected.adress}
              country={country}
            />
          </ShowPropertyContainer>
          <PropertyMutableComponent propertyId={selected.id}/>
        </ShowPropertyWrapper>
      ) : (
        <LostImageContainer height={700}>
          <FriendlyImage src="/lost-bro.svg" />
          <LostImageHelperText>
            Well... something was supossed to appear here{" "}
          </LostImageHelperText>
        </LostImageContainer>
      )}
    </Fragment>
  );
}
