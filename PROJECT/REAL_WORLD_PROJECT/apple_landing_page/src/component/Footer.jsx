const cols = {
  Shop: ['Mac', 'iPad', 'iPhone', 'Watch'],
  Support: ['Contact', 'Repairs', 'AppleCare', 'Warranty'],
  Company: ['Newsroom', 'Careers', 'Privacy', 'Legal'],
};

function Footer() {
  return (
    <section className='h-screen flex flex-col justify-between text-white pt-32'>
      <div className='text-center px-6'>
        <h2 className='text-6xl font-bold'>From $1,999</h2>
        <p className='mt-4 text-white/60'>Free delivery. Free returns for 14 days.</p>
        <div className='mt-8 flex justify-center gap-4'>
          <button className='bg-blue-600 hover:bg-blue-500 transition-colors rounded-full px-8 py-3'>Buy now</button>
          <button className='border border-white/30 hover:bg-white/10 transition-colors rounded-full px-8 py-3'>Compare models</button>
        </div>
      </div>

      <footer className='bg-black border-t border-white/10 px-6 py-10'>
        <div className='max-w-5xl mx-auto grid grid-cols-3 gap-8 text-sm'>
          {Object.entries(cols).map(([h, ls]) => (
            <div key={h}>
              <h4 className='font-semibold mb-3'>{h}</h4>
              <ul className='space-y-2 text-white/50'>
                {ls.map((l) => <li key={l}><a href='#' className='hover:text-white transition-colors'>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className='max-w-5xl mx-auto mt-10 text-xs text-white/40'>
          Copyright &copy; 2026. This is a student clone project and is not affiliated with Apple Inc.
        </p>
      </footer>
    </section>
  );
}
export default Footer;