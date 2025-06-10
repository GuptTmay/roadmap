import './App.css'
import ChangelogBar from './components/ChangelogBar'

function App() {
  const changelogEntries = [
    {
      date: "September 3, 2024",
      title: "Announcing Projects on Frontend Roadmap",
    },
    {
      date: "August 28, 2024",
      title: "Build your learning habits with learning streaks",
    },
    {
      date: "August 25, 2024",
      title: "Git and GitHub Roadmap",
    },
    {
      date: "August 22, 2024",
      title: "Submit your project solution and get feedback",
    },
    {
      date: "August 15, 2024",
      title: "Backend Project Ideas",
    },
    {
      date: "August 10, 2024",
      title: "Redis roadmap",
    },
    {
      date: "August 1, 2024",
      title: "Changelog page to help you stay in the loop",
    },
  ]

  return (
    <>
      <div className='min-h-screen flex flex-col items-center py-5 px-4'>
        <section className="container max-w-4xl flex flex-col items-center">
          <header>
            <h1 className="text-center text-6xl">Changelog</h1>       
            <p className='mt-5 text-zinc-400'>Here's everything we have shipped in past few days</p>
          </header>

          <main className='flex flex-col items-center mt-10 w-full'>
            <ul className='flex flex-col items-center w-full'>
              {changelogEntries.map((entry, index) => (
                <ChangelogBar key={index} date={entry.date} info={entry.title} /> 
              ))}
            </ul> 
          </main>
          <div role='button' className='px-6 py-2 bg-gray-950 hover:bg-black hover:border-1 hover:border-white hover:outline-2 cursor-pointer hover:outline-black text-white rounded-2xl font-sans mt-10 '>
            Visit Complete Changelog
          </div>
        </section> 
      </div>
    </>
  )
}

export default App
