import { type FC } from "react";

const Page: FC = () => {
  return (
    <div className="">
      <div className="text-lg font-bold">Home</div>
      <div>
        <span className="text-blue-500">Hello</span>
        <span className="text-red-500">World</span>
        <br />
        <a href="/user/test">test</a>
      </div>
    </div>
  );
};

export default Page;
