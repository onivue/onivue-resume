const Footer = () => {
  return (
    <footer className="border-t border-primary-100 bg-white dark:border-primary-800 dark:bg-dark-200">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col items-center justify-center space-y-3">
          <p className="text-sm font-medium text-primary-700 dark:text-primary-300">Created by Albin Hoti</p>
          <p className="text-center text-xs text-primary-600 dark:text-primary-400">
            © 2026 •{' '}
            <a
              href="https://www.onivue.ch"
              className="font-semibold text-primary-700 transition-colors hover:text-primary-900 dark:text-primary-300 dark:hover:text-primary-100"
            >
              onivue
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
