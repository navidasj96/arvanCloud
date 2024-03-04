const fetchCreateItemDropDowns = async ({ option }: { option: string }) => {
  const headers = new Headers();
  headers.append("accept", "*/*");
  let data;
  try {
    const res = await fetch(
      `http://100.124.5.231/Sale/v1/Item/haftkhan/${option}`,
      {
        method: "GET",
        headers: headers,
      }
    );
    data = await res.json();
  } catch (error) {
    console.log(`error from fetching option ${option}`, error);
  }
  return { data };
};
export { fetchCreateItemDropDowns };
