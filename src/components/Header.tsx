const Header = () => {
  return (
    <section className=" p-3 mx-10 mt-3 bg-white rounded-full flex flex-row justify-between items-center md:w-[70%]">
      <div className=" ml-2">
        <img src="./logo.svg" alt="Gotok" className="isolate mt-2" />
      </div>

      <div className="flex-1 font-medium font-text tracking-widest">
        {/* <ul className="flex justify-end space-x-8 items-center sm:space-x-2"> */}
        <ul className="flex justify-end sm:space-x-4 md:space-x-8 lg:space-x-10 items-center">
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

          <button className="bg-primary-purple text-white  px-8 py-3 rounded-full border border-primary-purple">
            Launch App
          </button>
        </ul>
      </div>
    </section>
  );
};

export default Header;
