import { GraphQLEnumType } from "graphql";

export const authorNameType = new GraphQLEnumType({
  name: "AuthorName",
  values: {
    Flavio: { value: "Flavio" },
    Roger: { value: "Roger" }
  }
});
