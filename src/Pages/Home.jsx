export const Home = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col gap-6 md:flex-row my-20">
        <div className="w-full order-2 md:order-1 sm:mt-1 md:w-1/2 md:mt-32 ">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!</span>{" "}
            </h1>
            <p className="text-xl">
              This is a place where you can learn, practice, and grow. Whether
              you are a beginner, an intermediate, or a seasoned developer, this
              is the perfect place for you to discover new skills, improve your
              coding skills, and expand your horizons.
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <div>
            <button className="btn btn-active mt-6 text-white btn-secondary">
              Secondary
            </button>
          </div>
        </div>
        <div className="w-full md:order-2 mb-36 mt-5 md:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?ga=GA1.1.303845865.1726838326&semt=ais_hybrid"
            alt="book"
            className="h-82 w-82 order-1 rounded-lg"
          />
        </div>
      </div>
    </>
  );
};
