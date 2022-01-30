const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="flex flex-col my-12">
        <div className="flex flex-col items-center mx-auto ">
          <p className="mt-4 text-sm font-light lg:block text-gray-gray7 leading-125 ">
            created by Albin Hoti
          </p>
        </div>

        <p className="block mt-2 text-xs font-light text-center text-gray-gray5 lg:block">
          © 2022 • <a href="https://www.onivue.ch">onivue</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
