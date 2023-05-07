const Header = () => {
  return (
    <section className=" mx-10 mt-3 flex flex-row items-center justify-between rounded-full bg-white p-3 md:w-[70%]">
      <div className=" ml-2">
        <img src="./logo.svg" alt="Gotok" className="isolate mt-2" />
      </div>

      <div className="flex-1 font-text font-medium tracking-widest">
        <ul className="flex items-center justify-end sm:space-x-4 md:space-x-8 lg:space-x-10">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Privacy</a>
          </li>

          <li>
            <a href="#">Terms</a>
          </li>

          <li>
            <a href="#">AML Policy</a>
          </li>

          <button className="rounded-full border  border-primary-purple bg-primary-purple px-8 py-3 text-white">
            Launch App
          </button>
        </ul>
      </div>
    </section>
  );
};

export default Header;
