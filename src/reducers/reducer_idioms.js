import { data } from "../data/data";

export default function(state = [], action) {
switch (action.type) {
case "FETCH_IDIOMS":
  const searchKeyword = action.keyword.toLowerCase();
  const list = data.filter(idiom => {
    const idiomKeywords = idiom["keyword"];
    return idiomKeywords.includes(searchKeyword)
  });
  console.log(list)
  return list;
default:
  return state;
}
}
