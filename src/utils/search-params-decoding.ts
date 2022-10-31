import { String, Union } from "ts-toolbelt";

const query = `/home?name=dang&age=28`;

type Query = typeof query;

type SecondQueryPart = String.Split<Query, "?">[1];

type QueryElements = String.Split<SecondQueryPart, "&">;

type QueryParams = {
  [Q in QueryElements[number]]: {
    [K in String.Split<Q, "=">[0]]: String.Split<Q, "=">[1];
  };
}[QueryElements[number]];
const objQueryResults: Union.Merge<QueryParams> = {
  name: "dang",
  age: "19",
};
