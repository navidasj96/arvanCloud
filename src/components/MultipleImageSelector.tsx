import React, { ChangeEventHandler, useState, useTransition } from "react";
import ImageSelector from "./ImageSelector";

const MultipleImageSelector = () => {
  const [isPending, startTransition] = useTransition();

  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const [productImagesSource, setProductImagesSource] = useState<string[]>();

  const onImagesChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const files = target.files;
    if (files) {
      const newImages = Array.from(files).map((item) => item);
      const oldImages = productImagesSource || [];
      setImageFiles([...imageFiles, ...newImages]);
      setProductImagesSource([
        ...oldImages,
        ...newImages.map((file) => URL.createObjectURL(file)),
      ]);
    }
  };
  const removeImage = async (index: number) => {
    if (!productImagesSource) return;

    //if images is from local we want to update  local state
    const fileIndexDifference = productImagesSource.length - imageFiles.length;
    const indexToRemove = index - fileIndexDifference;
    const newImageFiles = imageFiles.filter((_, i) => {
      if (i !== indexToRemove) return true;
    });
    setImageFiles([...newImageFiles]);

    //and update ui
    const newImagesSource = productImagesSource.filter((_, i) => {
      if (i !== index) return true;
    });
    setProductImagesSource([...newImagesSource]);
  };
  console.log("imageFiles", imageFiles);
  console.log("productImagesSource", productImagesSource);

  return (
    <div>
      <form className="space-y-6">
        <div className="space-y-4">
          <h3>Images</h3>
          <ImageSelector
            multiple
            id="images"
            images={productImagesSource}
            onChange={onImagesChange}
            onRemove={removeImage}
          />
        </div>
      </form>
    </div>
  );
};

export default MultipleImageSelector;
