import List from "../../public/list.json";

export const FreeBook = () => {
  const filterData = List.filter((data) => data.category === "Free");
  console.log(filterData);

  return <div></div>;
};
