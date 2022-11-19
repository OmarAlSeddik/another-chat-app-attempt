const ButtonContainer = () => {
  return (
    <div className="flex h-12 shrink-0 gap-2 rounded bg-primary3 p-2">
      <button
        className="flex w-1/2 items-center justify-center rounded bg-button2 px-2 pt-2 pb-3 text-primary1
        shadow-buttonShadow2 transition-all hover:bg-button3 active:mt-1 active:pb-2 active:shadow-noShadow"
      >
        Search
      </button>
      <button
        className="flex w-1/2 items-center justify-center rounded bg-button2 px-2 pt-2 pb-3 text-primary1
      shadow-buttonShadow2 transition-all hover:bg-button3 active:mt-1 active:pb-2 active:shadow-noShadow"
      >
        Filter
      </button>
    </div>
  );
};

export default ButtonContainer;
