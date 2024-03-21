function MenuText({ text }) {
  return (
    <div className="w-full h-[85vh] font-robotoSlab font-bold italic flex justify-center items-center my-auto text-5xl text-gradient">
      {text.toUpperCase()}
    </div>
  );
}

export default MenuText;
