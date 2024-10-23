import Link from 'next/link';

const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
         
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Möller’s</span>
          </Link>
        
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
          <div className="flex">
            <p className="mr-1 text-black">Phone:</p>
            <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" className="text-black duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
            +355 69 627 8407            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" className="text-black duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
              info@lorem.mail
            </a>
          </div>

        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
          <div className="flex items-center mt-1 space-x-3">
            
            <a href="https://www.instagram.com/mollers_albania/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10 C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1 c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
              </svg>
            </a>
           
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Follow us on all social platforms           
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">© Copyright 2020 Geri Mato. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
         
        </ul>
      </div>
    </div>
  );
};

export default Footer;
