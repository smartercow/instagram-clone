import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'
import { useSession } from "next-auth/react";

const Feed = () => {
  const {data: session} = useSession()


  return (
    <main id='' className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
        <section className='col-span-2'>
            {/* Stories */}
            <Stories />
            {/* Posts */}
            <Posts />
        </section>

        {/* Section */}
        {session && (
          <section className='hidden xl:inline md:col-span-1'>
              <div className='fixed'>
                {/* Mini profile */}
                <MiniProfile />
                {/* Suggestions */}
              <Suggestions />
              </div>
          </section>
        )}
    </main>
  )
}

export default Feed