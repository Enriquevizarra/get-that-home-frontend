import { useIndividualProperty } from "../../contexts/individual-property-context";
import { useProperties } from "../../contexts/properties-context";
import { colors } from "../../style";
import PropertyCard from "../PropertyCard/cards";
import { Heading, Text } from "../typography";
import { BestPropertiesContainer, BestPropertiesWrapper } from "./style";

const BestPropertiesSection = () => {
  const { currentProperties } = useProperties();
  const {showProperty} = useIndividualProperty();

  const bestProperties = () => {
    const filteredProperties = currentProperties
      .filter((property) => property.rentAmount <= 1000)
      .slice(0, 3);
    return filteredProperties;
  };

  return (
    <>
      <BestPropertiesWrapper>
        <Text size={"xs"} weight={500} color={colors.grays.dark}>
          Find an apartament that suits you
        </Text>
        <Heading color={colors.blues.light} weight={400}>
          Homes for rent at the best prices
        </Heading>
        <BestPropertiesContainer>
          {bestProperties().map((property, index) => (
            <PropertyCard
              key={property.id}
              price={property.rentAmount}
              propertyType={property.propertyType}
              address={property.address}
              beds={property.bedrooms}
              baths={property.bathrooms}
              sqmeters={property.area}
              pets={property.pets}
              cover={property.base_image_url}
              index={index}
              onShow={() => { showProperty(property.id)} }
            />
          ))}
        </BestPropertiesContainer>
      </BestPropertiesWrapper>
    </>
  );
};

export default BestPropertiesSection;
