import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const expertiseData = [
  {
    title: "Website Development",
    description: "Expertly coded websites tailored to your business needs.",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive interfaces focused on exceptional user experiences.",
  },
  {
    title: "AI Software Development",
    description: "Cutting-edge AI integrations to drive efficiency and insights.",
  },
  {
    title: "Custom Software",
    description: "Innovative custom software aligning with your unique requirements.",
  },
  {
    title: "Branding & Graphics",
    description: "Visually compelling assets that reinforce your brand identity.",
  },
  {
    title: "Custom Scripts",
    description: "Tailored automation scripts to streamline your workflows.",
  },
]

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <h2 className="text-4xl font-bold text-center mb-2">Our Expertise</h2>
      <p className="text-xl text-center text-gray-400 mb-12">Innovative solutions</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseData.map((item, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors duration-300">
            <CardHeader>
            <Image
              src={"/placeholder.svg"}
              alt={`Project ${index + 1}`}
              width={300}
              height={300}
              className="w-full h-auto"
            />              <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}