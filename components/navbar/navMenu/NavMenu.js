import clsx from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";
import { useNavbarContext } from "../context";

const NavMenu = ({ className, links }) => {
  const router = useRouter();
  const { isVisible, setIsVisible } = useNavbarContext();

  const composedMainNavClassName = clsx(
    "text-right w-1/2 bg-white bg-opacity-90 shadow-xl transition-all",
    "flex-grow",
    "md:flex",
    "md:w-auto",
    "md:shadow-none",
    "z-10",
    { hidden: !isVisible, "absolute mt-18 right-8": isVisible },
    className
  );

  const composedLinkClassName = (href) =>
    clsx(
      "block",
      "border-white border-b-2 hover:border-blue-500 transition-colors duration-700",
      "font-semibold",
      "leading-10",
      "mx-3",
      "py-3",
      "text-xl",
      "md:text-sm",
      "md:inline-block",
      { "text-blue-700": router.pathname === href }
    );

  const composedCloseContainerClassName = clsx(
    "absolute",
    "top-0",
    "left-0",
    "w-screen",
    "h-screen",
    "-z-10",
    {
      hidden: !isVisible,
    }
  );

  return (
    <>
      <div id="main-nav" className={composedMainNavClassName}>
        <div className="md:flex-grow text-sm in">
          {links.map((link) => (
            <Link key={link.title} href={link.href}>
              <a
                className={composedLinkClassName(link.href)}
                onClick={() => setIsVisible(false)}
              >
                {link.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div
        className={composedCloseContainerClassName}
        onClick={() => setIsVisible(false)}
      ></div>
    </>
  );
};

export default NavMenu;
