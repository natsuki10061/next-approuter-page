import { FC } from "react";

type Props = {
  params: {
    slug: string;
  };
};

const Page: FC<Props> = (props) => {
  return (
    <>
      <div className="p-5">
        <div className="p-5 bg-blue-100">
          <header className="p-5 bg-red-100 flex flex-col space-y-2">
            <h1 className="text-lg font-bold">タイトル</h1>
          </header>
          <main className="p-5 bg-green-100 flex flex-col space-y-5">
            <section className="flex flex-col space-y-3 bg-yellow-100 p-5">
              <div className="flex flex-row">
                <h2 className="text-sm text-blue-800 py-2 px-3 bg-blue-100 rounded-md">
                  props
                </h2>
              </div>
              <div className="flex flex-row">
                <pre className="w-full text-sm text-white py-2 px-3 bg-slate-800 rounded-md">
                  {JSON.stringify(props)}
                </pre>
              </div>
            </section>
            <section className="flex flex-col space-y-3 bg-yellow-100 p-5">
              <div className="flex flex-row">
                <h2 className="text-sm text-blue-800 py-2 px-3 bg-blue-100 rounded-md">
                  props.params
                </h2>
              </div>
              <div className="flex flex-row">
                <pre className="w-full text-sm text-white py-2 px-3 bg-slate-800 rounded-md">
                  {JSON.stringify(props.params)}
                </pre>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Page;
