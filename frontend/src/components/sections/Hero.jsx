function Hero() {
  return (
    <section className="px-11 pt-2 pb-8">
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src="/images/hero.png"
          alt="Leve uma vida com estilo"
          className="w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-8 flex justify-center">
          <button className="bg-white/20 backdrop-blur-sm border border-white text-white text-sm px-10 py-2 rounded-full hover:bg-white hover:text-text-primary transition-colors">
            Comprar
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
