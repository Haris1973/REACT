const items = [
  { title: 'M4 Max chip', text: 'Up to 16 CPU cores and 40 GPU cores for compiling, rendering and machine learning.' },
  { title: 'Liquid Retina XDR', text: 'A 1600-nit peak display with deep blacks and 120Hz ProMotion.' },
  { title: 'All-day battery', text: 'Up to 24 hours of video playback, with the same speed on battery as plugged in.' },
];

function Features() {
  return (
    <section className='h-screen flex flex-col justify-center px-6 text-white'>
      <div className='max-w-5xl mx-auto w-full'>
        <h2 className='text-5xl font-bold max-w-xl leading-tight'>Built for work that never slows down.</h2>
        <div className='mt-14 grid md:grid-cols-3 gap-6'>
          {items.map((i) => (
            <div key={i.title} className='rounded-3xl bg-black/70 backdrop-blur-md border border-white/10 p-8'>
              <h3 className='text-2xl font-semibold'>{i.title}</h3>
              <p className='mt-3 text-white/60 leading-relaxed'>{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;