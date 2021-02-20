import { useState, useEffect } from "react"

const url = `https://black-history-month-api.herokuapp.com/people`

const Titles = () => {
  const [people, setPeople] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const res = await fetch(url)
        const people = await res.json()
        setPeople(people)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setIsLoading(true)
      }
    }

    fetchPeople()
  }, [])

  return (
    <>
      <h3 className="text-center font-bold text-4xl mb-2">People</h3>
      <div className="header-underline"></div>
      {isLoading ? (
        <h2 className="text-center text-3xl mt-10">Loading...</h2>
      ) : (
        <section className="py-5 px-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:px-20">
          {people.map((person) => {
            const { id, name, image } = person

            return (
              <article key={id} className="relative hover:opacity-50">
                <img src={image} alt={name} className="w-full sm:h-96" />
                <h4 className="absolute bottom-0 right-0 bg-black font-bold text-xl uppercase py-1 px-2">
                  {name}
                </h4>
              </article>
            )
          })}
        </section>
      )}
    </>
  )
}

export default Titles
