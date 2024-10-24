import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Projects() {
  const placeholderImages = Array(8).fill('/placeholder.svg')

  return (
    <div className="text-white min-h-[60rem] flex flex-col items-center justify-center py-16 px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h2>
      <p className="text-gray-400 text-center max-w-2xl mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit semper dalar elementum tempus hac tellus libero accumsan.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full max-w-screen-lg">
        {placeholderImages.map((src, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={`Project ${index + 1}`}
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      <Button variant="secondary" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2 rounded-full">
        Follow us
      </Button>
    </div>
  )
}