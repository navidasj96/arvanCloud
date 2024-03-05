interface Props {
  src?: string;
}

const SelectedImageThumb = ({ src }: Props) => {
  if (!src) return null;

  return (
    <div className="w-20 h-20 relative">
      <img
        src={src}
        alt="product"
        className="object-fill rounded bg-blue-gray-200"
      />
    </div>
  );
};

export default SelectedImageThumb;
