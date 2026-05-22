import { useState } from 'react'

function ProductGallery({ images, name }) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`w-12 h-12 rounded-md overflow-hidden bg-surface-alt border ${
              selected === index ? 'border-text-primary' : 'border-transparent'
            }`}
          >
            <img src={img} alt={`${name} ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      <div className="flex-1 bg-surface-alt rounded-lg overflow-hidden">
        <img
          src={images[selected]}
          alt={name}
          className="w-full h-full object-cover aspect-[3/4]"
        />
      </div>
    </div>
  )
}

export default ProductGallery
