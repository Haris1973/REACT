const links = ['Overview', 'Mac', 'iPad', 'iPhone', 'Watch', 'Support'];

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10'>
      <ul className='max-w-5xl mx-auto h-12 px-6 flex items-center justify-between text-xs text-white/80'>
        <li className='text-base text-white'>&#63743;</li>
        {links.map((l) => (
          <li key={l}>
            <a href='#' className='hover:text-white transition-colors'>{l}</a>
          </li>
        ))}
        <li>
          <button className='bg-blue-600 hover:bg-blue-500 transition-colors text-white rounded-full px-4 py-1'>
            Buy
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;