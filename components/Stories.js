import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

const faker = [ 
  {
    id: "1",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "2",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "3",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "4",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "5",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "6",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "7",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "8",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "9",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "10",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "11",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "12",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "13",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "14",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "15",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "16",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "17",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "18",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "19",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
  {
    id: "20",
    username: "pgaiti",
    userImg: "/images/fake/peter.png",
    img: "/images/fake/peter.png",
    caption: "This is dope!",
  },
];
function Stories () {
  const [suggestions, setSuggestions] = useState([]);

  const { data: session } = useSession()

/*   useEffect(() => {
    const suggestions = [...Array(10)].map((_, i) => ({
      ...faker,
      id: i,
    }));

    setSuggestions(suggestions);
    console.log(suggestions);
  }, []); */

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username}/>
      )}
      {faker.map((profile) => (
        <Story key={profile.id} img={profile.img} username={profile.username} />
      ))}
      {/*       {suggestions && suggestions.map((profile) => (
        <div key={profile.id}>
          <p>{profile.username}</p>
          <img src={profile.img} alt="" />
        </div>
      ))} */}
    </div>
  );
};

export default Stories;
