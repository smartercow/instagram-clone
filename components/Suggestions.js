const faker = [ 
    {
      id: "1",
      username: "pgaiti",
      userImg: "/images/fake/peter.png",
      img: "/images/fake/peter.png",
      caption: "This is dope!",
      work: 'Google'
    },
    {
      id: "2",
      username: "pgaiti",
      userImg: "/images/fake/peter.png",
      img: "/images/fake/peter.png",
      caption: "This is dope!",
      work: 'Facebook'
    },
    {
      id: "3",
      username: "pgaiti",
      userImg: "/images/fake/peter.png",
      img: "/images/fake/peter.png",
      caption: "This is dope!",
      work: 'Youtube'

    },
    {
      id: "4",
      username: "pgaiti",
      userImg: "/images/fake/peter.png",
      img: "/images/fake/peter.png",
      caption: "This is dope!",
      work: 'Instagram'

    },
    {
      id: "5",
      username: "pgaiti",
      userImg: "/images/fake/peter.png",
      img: "/images/fake/peter.png",
      caption: "This is dope!",
      work: 'Reddit'
    },
  ];

const Suggestions = () => {
  return (
    <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
            <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
            <button className="text-gray-600 font-semibold">See all</button>
        </div>

        {
            faker.slice(0,5).map(profile => (
                <div key={profile.id} className='flex items-center justify-between mt-3'>
                    <img className="w-10 h-10 rounded-full border p-[2px]" src={profile.img} alt="" />
                    <div className="flex-1 ">
                        <h2 className="font-semibold text-sm">{profile.username}</h2>
                        <h3 className="text-xs text-gray-400">Works at {profile.work}</h3>
                    </div>
                    <button className="text-blue-400 text-sm font-medium">Follow</button>
                </div>
            ))
        }
    </div>
  )
}

export default Suggestions