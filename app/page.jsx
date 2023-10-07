import Feed from "@components/Feed";

const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center flex flex-col ">
          Discover & Share
          <span className="orange_gradient text-center m-2">AI-Powred Promts</span>
        </h1>
        <p className="desc text-center">
          Promptopia is sn open-source AI prompting tool for modern world to
          discover, create and share creative prompts
        </p>
        <Feed/>
      </section>
    </div>
  );
};

export default Home;
