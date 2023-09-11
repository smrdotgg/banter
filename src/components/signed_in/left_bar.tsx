export default function LeftBar() {
  return (
    <div className="flex bg-slate-800">
      <div className="w-2"></div>

      <div className="flex flex-col">
      <div className="h-2"></div>
        <SearchBar />
      <div className="h-2"></div>
        <hr />

        <p className="flex-grow">Chats</p>
        <p>Account</p>
      </div>
      <div className="w-2"></div>
    </div>
  );
}

function SearchBar() {
  return (
    <button className="bg-slate-900 text-slate-500 font-semibold  text-left rounded p-1 text-sm h-[28px] w-[220px] font-discord ">
      Find or start a conversation
    </button>
  );
}
