const EnterGroupInput = () => {
  return (
    <div className="flex w-[20rem] flex-col gap-2 rounded-2xl bg-primary3 p-4">
      <div className="flex items-center justify-between">
        <label htmlFor="user-id-input" className="text-text1">
          Enter a Group
        </label>
        <button className="rounded bg-primary4 px-4 hover:bg-primary6">
          Confirm
        </button>
      </div>
      <input
        type="text"
        placeholder="Enter Group ID..."
        className="flex h-12 w-full flex-shrink-0 items-center rounded bg-primary5 px-2 outline-none"
      />
    </div>
  );
};

export default EnterGroupInput;
