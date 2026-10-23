const specs = [
  ['Chip', 'Apple M4 Max'],
  ['Memory', 'Up to 128GB unified'],
  ['Storage', 'Up to 8TB SSD'],
  ['Display', '16.2-inch Liquid Retina XDR'],
  ['Ports', '3x Thunderbolt 5, HDMI, SDXC, MagSafe 3'],
  ['Weight', 'From 1.6 kg'],
];

function Specs() {
  return (
    <section className='h-screen flex items-center px-6 text-white'>
      <div className='max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center'>
        <div>
          <h2 className='text-5xl font-bold leading-tight'>Tech specs</h2>
          <p className='mt-4 text-white/60 max-w-sm'>Choose the configuration that fits how you work.</p>
        </div>
        <dl className='rounded-3xl bg-black/70 backdrop-blur-md border border-white/10 divide-y divide-white/10'>
          {specs.map(([k, v]) => (
            <div key={k} className='flex justify-between gap-6 px-8 py-4'>
              <dt className='text-white/50'>{k}</dt>
              <dd className='text-right'>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
export default Specs;