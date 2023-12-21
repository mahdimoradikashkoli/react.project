const WelcomePage1 = () => {
  return (
    <>
      <div className=" pt-7 flex flex-col items-center justify-center relative">
        <h3>insightlancer</h3>
        <img className="mt-8" src="/icons/welcome.png" alt="welcome" />
        <div className=" flex flex-col gap-5 items-center w-60 h-72 bg-white absolute -bottom-40 rounded-md p-1">
          <div className="font-medium text-lg  flex flex-col items-center pt-4">
            <div className="flex gap-1.5 ">
              <h2 className="text-black">Finding the</h2>{" "}
              <h2 className="text-yellow-700">Perfect</h2>
            </div>
            <div className="flex gap-1.5">
              <h2 className="text-yellow-700">Online Course</h2>{" "}
              <h2 className="text-black">for You</h2>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center ">
            App to search and discover the most suitable place for you to stay.
          </p>
          <button className="bg-blue-700 w-full rounded-2xl text-sm px-5 py-2 ">
            Let’s Get Started
          </button>
          <p className="text-slate-900 text-sm flex gap-0.5 ">
            Already have an account?{" "}
            <button className="text-blue-900 underline">Sign in</button>
          </p>
        </div>
      </div>
    </>
  );
};
export default WelcomePage1;
