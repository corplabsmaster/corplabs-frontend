import { Dialog } from "@headlessui/react";
// import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import {
  // ArrowPathIcon,
  Bars3Icon,
  // ChartPieIcon,
  // CursorArrowRaysIcon,
  // FingerPrintIcon,
  // SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "@images/corplabs-logo.svg";
import React, { useState } from "react";

// const products = [
//   {
//     name: "Analytics",
//     description: "Get a better understanding of your traffic",
//     href: "#",
//     icon: ChartPieIcon,
//   },
//   {
//     name: "Engagement",
//     description: "Speak directly to your customers",
//     href: "#",
//     icon: CursorArrowRaysIcon,
//   },
//   {
//     name: "Security",
//     description: "Your customers’ data will be safe and secure",
//     href: "#",
//     icon: FingerPrintIcon,
//   },
//   {
//     name: "Integrations",
//     description: "Connect with third-party tools",
//     href: "#",
//     icon: SquaresPlusIcon,
//   },
//   {
//     name: "Automations",
//     description: "Build strategic funnels that will convert",
//     href: "#",
//     icon: ArrowPathIcon,
//   },
// ];
// const callsToAction = [
//   { name: "Watch demo", href: "#", icon: PlayCircleIcon },
//   { name: "Contact sales", href: "#", icon: PhoneIcon },
// ];

// function classNames(...classes: (string | undefined | null | false)[]): string {
//   return classes.filter(Boolean).join(" ");
// }

const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full body-font bg-black-950 font-interlight">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center lg:flex-1">
          {/* Added items-center class */}
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="w-10 h-10" src={logo} alt="corplabs-logo" />
          </a>
        </div>
        <div className="items-center hidden lg:flex lg:flex-1 lg:justify-center ">
          {/* Center align the desktop navigation */}
          <div className="border-[1.5px] w-[30vw] h-[6vh] rounded-full border-primary-600 bg-black-900 flex flex-wrap items-center text-base justify-center">
            <a
              href="#"
              className="mr-[3vw] text-white-100 hover:text-primary-600"
            >
              Home
            </a>
            <a
              href="#about"
              className="mr-[3vw] text-white-100 hover:text-primary-600"
            >
              About
            </a>
            <a
              href="#services"
              className="mr-[3vw] text-white-100 hover:text-primary-600"
            >
              Solution
            </a>
            <a
              href="#careers"
              className="mr-[0vw] text-white-100 hover:text-primary-600"
            >
              Career
            </a>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://www.facebook.com/corplabs.co"
            className="inline-flex items-center text-base leading-6 text-white-100 font-interlight hover:text-primary-600"
          >
            Contact
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-black-950 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="w-10 h-10" src={logo} alt="corplabs-logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-white divide-opacity-20">
              <div className="py-6 space-y-2">
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base leading-7 text-white rounded-lg font-interlight"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base leading-7 text-white rounded-lg font-interlight"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base leading-7 text-white rounded-lg font-interlight"
                >
                  Solution
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 -mx-3 text-base leading-7 text-white rounded-lg font-interlight"
                >
                  Careers
                </a>
              </div>
              <div className="py-6">
                <a
                  href="https://www.facebook.com/corplabs.co"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-interlight leading-7 text-white hover:text-primary-600"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
