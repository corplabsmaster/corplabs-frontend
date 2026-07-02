import { Dialog, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
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
import React, { Fragment, useState } from "react";

const products = [
  {
    name: "Corpi",
    href: "/corpi",
    description: "AI WhatsApp sales agents.",
    badge: "New",
  },
  {
    name: "Corpcode",
    href: "/corpcode",
    description: "Custom software builds.",
  },
  {
    name: "Corprise",
    href: "/corprise",
    description: "Subscription-priced ERP for SMEs.",
  },
  {
    name: "Corpsite",
    href: "/corpsite",
    description: "Websites — design, build, ongoing care.",
  },
];

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
          <a href="/#" className="-m-1.5 p-1.5">
            <img className="w-10 h-10" src={logo} alt="corplabs-logo" />
          </a>
        </div>
        <div className="items-center hidden lg:flex lg:flex-1 lg:justify-center ">
          {/* Center align the desktop navigation */}
          <div className="border-[1.5px] w-auto px-6 h-[6vh] rounded-full border-primary-600 bg-black-900 flex flex-nowrap items-center text-sm xl:text-base justify-center gap-x-4 xl:gap-x-5 whitespace-nowrap">
            <a
              href="/#"
              className="text-white-100 hover:text-primary-600"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white-100 hover:text-primary-600"
            >
              About
            </a>
            <a
              href="/solutions"
              className="text-white-100 hover:text-primary-600"
            >
              Solutions
            </a>
            <Popover className="relative">
              <Popover.Button className="inline-flex items-center gap-1 text-white-100 hover:text-primary-600 outline-none focus-visible:text-primary-600">
                Products
                <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 top-full z-30 mt-3 w-72 -translate-x-1/2 rounded-xl border border-white-100/10 bg-black-900 p-2 shadow-xl">
                  {products.map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      className="block rounded-lg px-3 py-2 hover:bg-white-100/5"
                    >
                      <span className="inline-flex items-center gap-2 text-sm font-intersemibold text-white-100">
                        {p.name}
                        {p.badge && (
                          <span className="px-1.5 py-0.5 text-[10px] font-intersemibold bg-[#424DE2] text-white rounded-full leading-none">
                            {p.badge}
                          </span>
                        )}
                      </span>
                      <span className="block mt-0.5 text-xs font-worksanslight text-gray-200/80 leading-snug">
                        {p.description}
                      </span>
                    </a>
                  ))}
                </Popover.Panel>
              </Transition>
            </Popover>
            <a
              href="/#careers"
              className="text-white-100 hover:text-primary-600"
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
            href="/contact"
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
                  href="/about"
                  className="block px-3 py-2 -mx-3 text-base leading-7 text-white rounded-lg font-interlight"
                >
                  About
                </a>
                <a
                  href="/solutions"
                  className="block px-3 py-2 -mx-3 text-base leading-7 text-white rounded-lg font-interlight"
                >
                  Solutions
                </a>
                <p className="px-3 pt-4 -mx-3 text-[10px] font-intersemibold tracking-widest uppercase text-gray-200/60">
                  Products
                </p>
                <a
                  href="/corpi"
                  className="block px-3 py-2 -mx-3 text-base leading-7 text-white rounded-lg font-interlight inline-flex items-center gap-2"
                >
                  Corpi
                  <span className="px-1.5 py-0.5 text-xs font-intersemibold bg-[#424DE2] text-white rounded-full leading-none">
                    New
                  </span>
                </a>
                <a
                  href="/corpcode"
                  className="block px-3 py-2 -mx-3 text-base leading-7 text-white rounded-lg font-interlight"
                >
                  Corpcode
                </a>
                <a
                  href="/corprise"
                  className="block px-3 py-2 -mx-3 text-base leading-7 text-white rounded-lg font-interlight"
                >
                  Corprise
                </a>
                <a
                  href="/corpsite"
                  className="block px-3 py-2 -mx-3 text-base leading-7 text-white rounded-lg font-interlight"
                >
                  Corpsite
                </a>
                <a
                  href="/#careers"
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
