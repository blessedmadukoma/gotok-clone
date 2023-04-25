const Header = () => {
  return (
    <section className="p-5 mx-3 mt-3 bg-white rounded-full flex justify-between items-center">
      <img src="./logo.svg" alt="Gotok" />

      <div className="flex-1 font-medium font-text tracking-widest">
        <ul className="flex justify-end space-x-10 items-center">
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
