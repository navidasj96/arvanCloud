import { useUiRedux } from "./getUiState";

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

/*-------------------------------------------------------------------*/
export const fetchServiceType = async () => {
  const headers = new Headers();
  headers.append("accept", "*/*"); // Set the 'accept' header
  headers.append("Content-Type", "application/json"); // Set the

  const reqBody = {
    totalCount: 0,
    pageIndex: 0,
    itemsPerPage: 0,
    items: "string",
    sortBy: "id",
    sortOrder: 0,
  };
  let data;
  try {
    const res = await fetch(
      "http://100.124.5.231/Branch/v1/ServiceType/haftkhan/List",

      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(reqBody),
      }
    );
    data = await res.json();
  } catch (error) {
    console.log("errror from fetching service type", error);
  }
  return { data };
};

/*-------------------------------------------------------------------*/

export const addNewItem = async (reqBody: any) => {
  const headers = new Headers();
  headers.append("accept", "*/*"); // Set the 'accept' header
  headers.append("Content-Type", "application/json"); // Set the
  let data: any;
  try {
    const res = await fetch(
      "http://100.124.5.231/Sale/v1/Item/haftkhan/Create",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(reqBody),
      }
    );
    data = await res.json();
    console.log("data from submitting new item", data);
  } catch (error) {
    console.log("error submitting new item : ", error);
  }
  return data;
};

/*-------------------------------------------------------------------*/

export const useSubmitAddItem = () => {
  const { addItemState } = useUiRedux();
  const bodyReq: any = {};

  //destructure keys
  if (
    !addItemState.name ||
    !addItemState.description ||
    !addItemState.itemCode
  ) {
    return null;
  }
  bodyReq["name"] = addItemState.name;
  bodyReq["description"] = addItemState.description;
  bodyReq["itemCode"] = addItemState.itemCode;
  bodyReq["mealType"] = addItemState.MealType;
  bodyReq["weekdays"] = addItemState.Weekdays;
  bodyReq["displayStatus"] = addItemState.DisplayStatus;
  bodyReq["priority"] = 0;
  bodyReq["parentId"] = 0;
  bodyReq["lable"] = addItemState.ShowLable;
  bodyReq["status"] = addItemState.ItemStatus;
  bodyReq["preparationTime"] = addItemState.preparationTime
    ? +addItemState.preparationTime
    : 0;
  bodyReq["dailyInventory"] = addItemState.dailyInventory
    ? +addItemState.dailyInventory
    : 0;
  bodyReq["fixDailyInventory"] = addItemState.fixDailyInventory
    ? +addItemState.fixDailyInventory
    : 0;

  //destructure images
  let itemFiles: any = [];
  let itemPrices: any = [];
  let itemPrinters: any = [];
  let tag: any = ["tags"];
  Object.entries(addItemState).forEach(([key, value]) => {
    if (key === "MainImage") {
      itemFiles.push(value);
    }
    if (key !== "MainImage" && key.includes("image")) {
      itemFiles.push({ filedId: value, fileType: 0 });
    }
    if (key.includes("serviceType")) {
      itemPrices.push(value);
    }
    if (key.includes("printer")) {
      itemPrinters.push(value);
    }
    // if (key === "tag") {
    //   tag.push(value);
    // }
  });
  bodyReq["itemFiles"] = itemFiles;
  bodyReq["itemPrices"] = itemPrices;
  bodyReq["itemPrinters"] = itemPrinters;
  bodyReq["tags"] = tag;
  bodyReq["categories"] = [1];
  bodyReq["foodNote"] = [0];

  return { bodyReq };
};
