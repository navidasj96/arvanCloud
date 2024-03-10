export const UploadImage = async (file: any) => {
  const formData = new FormData();
  const fileContent = new Blob([file.name], { type: file.type });

  formData.append("File", fileContent, file.name);
  formData.append("FilePrivacy", "1");
  formData.append("FileTypes", "1");

  const uploadRes = await fetch(
    `http://100.124.5.231/Branch/v1/Upload/haftkhan
  `,
    {
      method: "POST",
      body: formData,
      headers: {
        Accept: "*/*",
      },
    }
  );
  const res = await uploadRes.json();
  return { res };
};

export const GetPrinters = async () => {
  const body = {
    totalCount: 0,
    pageIndex: 0,
    itemsPerPage: 0,
    items: "string",
    sortBy: "id",
    sortOrder: 0,
  };
  const res = await fetch(
    "http://100.124.5.231/Branch/v1/Printer/haftkhan/List",
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  return { data };
};
