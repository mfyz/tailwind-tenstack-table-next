const navItemClasses = 'text-gray-800 border-b-2 mx-1.5 sm:mx-6 hover:text-gray-800 hover:border-blue-500'

const Navigation = () => (
	<nav className="shadow">
		<div className="container flex items-center justify-center px-6 py-8 mx-auto text-gray-600 capitalize">
			<a href="/" className={navItemClasses}>Home</a>
			<a href="/table" className={navItemClasses}>Table</a>
		</div>
	</nav>
)

export default Navigation