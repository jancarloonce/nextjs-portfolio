const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Jan Carlo Once. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

