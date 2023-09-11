import { trpc } from "@/utils/trpc";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import logoutsvg from "../../../public/logout.svg";
import logoutsvgwhite from "../../../public/logoutwhite.svg";
import xmark from "../../../public/xmark.svg";
import xmarkwhite from "../../../public/xmarkwhite.svg";
import { SignOutButton } from "@clerk/nextjs";

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
        <AccountInfo />
        <div className="h-2"></div>
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

function AccountInfo() {
  const size = 32;

  const [active, setActive] = useState(false);

  const user = trpc.getCurrUser.useQuery();
  if (user.isLoading || !user.data) return <></>;
  return (
    <div className="flex">
      <button
        onClick={active ? undefined : (_) => setActive(!active)}
        className={`hover:bg-slate-900 rounded p-1 flex justify-between ${
          active ? "w-full bg-slate-900 cursor-default" : ""
        }`}
      >
        <div className="flex flex-shrink ">
          <Image
            quality={100}
            width={size}
            height={size}
            src={user.data.imageUrl}
            alt="aksjfkaa"
            className="rounded-full"
          />
          <div className="w-2"></div>
          <div className="flex flex-col ">
            <p className="select-none my-auto">{user.data.username}</p>
          </div>
        </div>
        <div></div>
        {active ? (
          <div className="my-auto flex">
            <SignOutButton>
            <IconButton
              size={24}
              onClick={(_) => {}}
              url={logoutsvg}
              hoverUrl={logoutsvgwhite}
            ></IconButton>
            </SignOutButton>
              <IconButton
                size={18}
                onClick={(_) => setActive(false)}
                url={xmark}
                hoverUrl={xmarkwhite}
              ></IconButton>
            {/* <button
              className="hover:bg-pink-900 p-1 rounded"
              onMouseEnter={(_) => setIconHover(true)}
              onMouseLeave={(_) => setIconHover(false)}
              onClick={(e) => {
                e.preventDefault();
                console.log("clicked");
              }}
            >
              <Image
                src={iconHover ? logoutsvgwhite : logoutsvg}
                alt={"Logout SVG"}
                width={svgSize}
                height={svgSize}
              />
            </button> */}
            <div className="pr-1"></div>
          </div>
        ) : (
          <></>
        )}
      </button>
    </div>
  );
}

function IconButton({
  onClick,
  url,
  hoverUrl,
  size,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  url: string;
  hoverUrl?: string;
  size: number;
}) {
  const [iconHover, setIconHover] = useState(false);
  const svgSize = 24;
  return (
    <button
      className="hover:bg-pink-900 p-1 rounded"
      onMouseEnter={(_) => setIconHover(true)}
      onMouseLeave={(_) => setIconHover(false)}
      onClick={onClick}
    >
      <Image
        src={iconHover ? hoverUrl ?? url : url}
        alt={"Logout SVG"}
        width={size}
        height={size}
      />
    </button>
  );
}
