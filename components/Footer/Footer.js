const Footer = () => {
  return (
    <footer className=" dark:bg-dark-200">
      <div className="flex flex-col my-16">
        <div className="flex flex-col items-center mx-auto ">
          <p className="text-sm font-light lg:block leading-125">
            created by Albin Hoti
          </p>
        </div>

        <p className="block text-xs font-light text-center lg:block">
          © 2022 •{' '}
          <a
            href="https://www.onivue.ch"
            className="hover:underline decoration-primary-400 decoration-2"
          >
            onivue
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
