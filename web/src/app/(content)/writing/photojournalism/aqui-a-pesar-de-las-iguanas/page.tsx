"use client";

import WritingWithPhotos from "@/components/WritingWithPhotos";

export default function AquiAPesarDeLasIguanas() {
  return (
    <WritingWithPhotos
      title="Aquí, a pesar de las iguanas"
      imageCount={8}
      basePath="/aqui"
      imagePrefix="JR-AQUI-"
      imageExtension="jpg"
      captions={[
        '"Emilie", Playa Vacía Talega.',
        '"Raquel, the famous dancer,” From the Ayala Family, Loíza.',
        "“The Coconut Man,” Playa del Condado.",
        "“Toddler ‘drowning’ teen,” Balneario La Monserrate (Luquillo Beach), La Capital del Sol.",
        "“Augusto de Santa Domingo,” Piononos vendor at La Casa del Indio, Loíza.",
        "“Man in Heat,” Santurce.",
        "“Elena and Kini,” younger sister to Raquel, from the Ayala Family (The Family of Artists), Loíza.",
        "“Hanging Shirts,” Santurce.",
      ]}
    >
      <div className="font-[family-name:var(--font-medium-right-grotesk)] mb-4 md:mb-6">
        <p className="text-xs sm:text-sm md:text-base">
          FRIDAY, MARCH 28, 2025 – YALE DAILY NEWS
        </p>
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-bold-caslon)] mb-2 md:mb-2">
        Aquí, a pesar de las iguanas
      </h1>
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-500 font-[family-name:var(--font-bold-caslon)] mb-4 md:mb-3">
        Here, despite the iguanas
      </h1>

      <p className="font-[family-name:var(--font-caslon)] text-base sm:text-lg md:text-xl lg:text-2xl mt-8 sm:mt-6 md:mt-6 mb-4 md:mb-6">
        Going to Puerto Rico for the first time over Spring Break, I was honored
        to meet Emilie, a local from San Juan who “adopted” me and my friend,
        Sanaa, after briefly meeting in passing at a sushi restaurant. Feeling
        her tender spirit, I asked if I could take her portrait the next day,
        and she kindly took us for lunch in the city of Loíza, about an hour
        from San Juan, Puerto Rico. The title of this work is inspired by our
        3-hour collective car conversation, regarding the invasive nature of
        iguanas, who were introduced to the island in the 70s from Central and
        South America; in this, they began to be traded as pets, and released
        into the wild once they got too big, or owners not want them anymore,
        causing the iguana population to now exceed the Puerto Rican population.
        With this, iguanas have become an island pest, with no natural predators
        allowing them to eat away at local agriculture, infrastructure, and
        native biodiversity.
      </p>
      <p className="font-[family-name:var(--font-caslon)] text-base sm:text-lg md:text-xl lg:text-2xl mt-6 md:mt-6">
        Because of this, this work aims to address the metaphorical iguanas
        occupying the territory, slowly corroding the cultural and environmental
        fabric of the land. With the U.S government’s taxation of the Puerto
        Rican people without federal representation; mainland corporations and
        wealthy foreigners attempting to privatize public beaches while
        increasing development projects; and tourists increasing the cost of
        living for local residents, this piece endeavors to highlight the
        resilience and resistance of the Puerto Rican people, while calling
        attention to legacies of colonialism, gentrification, and economic
        exploitation.
      </p>
      <p className="font-[family-name:var(--font-caslon)] text-base sm:text-lg md:text-xl lg:text-2xl mt-6 md:mt-6">
        Note: This is not to say that I am exempt from the problem, as I was a
        tourist during my trip, but to acknowledge my position within this
        dynamic, and think about the nuances of privilege, travel, and
        responsibility, while simultaneously calling the viewer to consider
        their own role in systems of displacement and consumption.
      </p>
    </WritingWithPhotos>
  );
}
