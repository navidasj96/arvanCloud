import React, {
  ChangeEventHandler,
  useEffect,
  useState,
  useTransition,
} from "react";
import ImageSelector from "./ImageSelector";
import { useDispatch } from "react-redux";
import { UploadImage } from "../utils/upload-images";
import { setAddItemState } from "../UistateManagment/UiSlice";

const SingleImageSelector = () => {
  const [isPending, startTransition] = useTransition();
  const [thumbnail, setThumbnail] = useState<File>();
  const dispatch = useDispatch();

  const [thumbnailSource, setThumbnailSource] = useState<string[]>();

  const onThumbnailChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const files = target.files;
    if (files) {
      const file = files[0];
      setThumbnail(file);
      setThumbnailSource([URL.createObjectURL(file)]);
    }
  };

  useEffect(() => {
    const uploadImages = async () => {
      // const itemFiles: any = imageFiles.map(async (item) => {
      //   const { res } = await UploadImage(item);
      //   if (res.result === 0) return { filedId: res.conent, fileType: 0 };
      //   console.log("respose of uploaded image", res);
      //   return itemFiles;
      //   // setUploadRes;
      // });
      if (!thumbnail) return;
      const { res } = await UploadImage(thumbnail);
      // console.log("res of uploading main image", res);
      if (res.result === 0) {
        const obj = { fileId: res.content, fileType: 1 };
        dispatch(setAddItemState({ MainImage: obj }));
        return true;
      }
    };

    uploadImages();

    // if (res) {
    //   // dispatch(setAddItemState({ MainImg: res }));
    //   console.log("res is", res);
    // }
    // const uploadRes = uploadImages();
    // dispatch(setAddItemState({ itemFiles: uploadRes }));
  }, [thumbnail]);
  // console.log("thumbnail", thumbnail);
  //   console.log("productImagesSource", thumbnailSource);

  return (
    <div>
      <form className="space-y-6">
        <div className="space-y-4 py-5">
          <ImageSelector
            id="imagesSingle"
            images={thumbnailSource}
            onChange={onThumbnailChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SingleImageSelector;
