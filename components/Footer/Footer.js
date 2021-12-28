const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="flex flex-col justify-between py-8 mx-auto xl:max-w-screen md:w-5/6 lg:py-11 lg:flex-row">
        <div className="flex flex-col items-center mx-auto lg:justify-center lg:items-start lg:mx-0">
          <p className="hidden mt-4 mb-2 text-sm font-light lg:text-base lg:block text-gray-gray7 leading-125 lg:my-4">
            Your most meaningful work profile!
          </p>
          <p className="hidden text-xs font-light text-gray-gray5 lg:block">
            © 2021 • onivue
          </p>
        </div>
        <ul className="flex flex-wrap items-center justify-center mt-2 lg:flex-nowrap lg:justify-start lg:mt-0">
          <li className="mt-2 lg:mt-0">
            <a
              className="mx-3 text-sm font-medium capitalize text-primary"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              privacy
            </a>
          </li>
          <li className="mt-2 lg:mt-0">
            <a
              className="mx-3 text-sm font-medium capitalize text-primary"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              terms
            </a>
          </li>
        </ul>
        <p className="block mt-4 text-xs font-light text-center text-gray-gray5 lg:hidden">
          © 2021 • Peerlist
        </p>
      </div>
    </footer>
  )
}

export default Footer
