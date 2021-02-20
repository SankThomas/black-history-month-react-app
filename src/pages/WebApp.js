import { useState, useEffect } from "react"

const url = `https://black-history-month-api.herokuapp.com/people`

const WebApp = () => {
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
        <section className="grid grid-cols-1 py-5 px-5 lg:px-20 xl:px-48 2xl:grid-cols-2 2xl:px-4">
          {people.map((person) => {
            const {
              id,
              name,
              description,
              dob,
              died,
              age,
              knownFor,
              image,
            } = person

            return (
              <article
                key={id}
                className="p-10 rounded-lg sm:grid sm:grid-cols-2 sm:gap-5"
              >
                <div>
                  <img src={image} alt={name} className="w-full lg:w-96" />
                </div>
                <div>
                  <h4 className="font-bold text-2xl py-1">{name}</h4>
                  <div className="bg-green-500 w-10 h-1 mb-2"></div>
                  <p className="text-justify mb-3">{description}</p>
                  <ul>
                    <li>
                      <span className="font-bold">Date of birth: </span>
                      {dob}
                    </li>
                    <li>
                      <span className="font-bold">Died/Status: </span>
                      {died}
                    </li>
                    <li>
                      <span className="font-bold">Age: </span>
                      {age} years
                    </li>
                    <li>
                      <span className="font-bold">Known for: </span>
                      {knownFor}
                    </li>
                  </ul>
                </div>
              </article>
            )
          })}
        </section>
      )}
    </>
  )
}

export default WebApp
