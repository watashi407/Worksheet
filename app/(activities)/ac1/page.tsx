const ShowHelloWorldText = () => {
  return (
    <div className="flex justify-center items-center h-full  font-bold text-4xl">
      Hello World
    </div>
  );
};

const Page = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <ShowHelloWorldText />
    </section>
  );
};

export default Page;
