import { useNavbarContext } from "../context";

const MobileButton = () => {
  const { isVisible, setIsVisible } = useNavbarContext();

  const onClickHandler = () => {
    console.log("Hit");
    console.log(isVisible);
    setIsVisible(!isVisible);
  };

  return (
    <div className="block md:hidden">
      <button
        className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        onClick={onClickHandler}
      >
        <svg
          className="fill-current h-6 w-6 text-gray-700"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  );
};

export default MobileButton;
