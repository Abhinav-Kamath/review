import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { tokenAtom , isLoginAtom} from '../Screens/Login.state'
import axios from 'axios'
import { FavDataAtom } from '../Screens/Dashboard/Favorites.state'
function Musics({song}) {
  const token = useRecoilValue(tokenAtom);
  const config = {
    headers: { 'Authorization' : `Bearer ${token}` }
  };
  const [FavData, setFavData] = useRecoilState(FavDataAtom);
  const isLogin = useRecoilValue(isLoginAtom);
  async function fetchData(id) {
    if(!isLogin) return;
    const data = {musicId : id};
    await axios.post('/api/users/favorites', data,  config)
    .then((response) => {
      console.log(response.data);
      setFavData(response.data);
    })
  }

  return (
    <div className='border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden'>
      <Link to={`/song/${song._id}`}  className='w-full'>
        <img src={`/images/Album.jpg`} alt={song.title} className='w-full h-96 object-cover'/>
      </Link>
      <div className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3'>
        <h3 className='font-semibold truncate'>{song.title}</h3>
        <button onClick={() => fetchData(song._id)} className='h-9 w-9 text-sm text-white flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain'>
          <FaHeart/>
        </button>
      </div>
      
    </div>
  )
}

export default Musics
