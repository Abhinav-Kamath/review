import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Filters from "../Components/Filters";
import { Songs } from "../Data/MusicData";
import Musics from "../Components/Musics";
import { CgSpinner } from "react-icons/cg";
import { useEffect } from 'react'
import axios from 'axios'
import {useRecoilValue} from 'recoil';
import { tokenAtom } from "./Login.state";
import { GenreAtom, YearAtom, LanguageAtom, StarsAtom } from "../Components/Filters.state";
import { SearchTextAtom } from "../Layout/navbar/NavBar.state";
function SongsPage() {
  const maxpage = 10;
  const [page, setPage] = useState(maxpage);

  const genre = useRecoilValue(GenreAtom);
  const year = useRecoilValue(YearAtom);
  const language = useRecoilValue(LanguageAtom);
  const stars = useRecoilValue(StarsAtom);
  const [SongsData, setSongsData] = useState([]);
  const SearchText = useRecoilValue(SearchTextAtom);
  const [SearchSongsData, setSearchSongsData] = useState([]);
  function fetchSearchData() {
    axios.get('/api/music',
    {
      params: {
        search: SearchText,
      }
    })
    .then((response) => {
      console.log(response.data);
      setSearchSongsData(response.data);
    })
  }
  useEffect(() => {
    fetchSearchData();
  }, [SearchText]);

  function fetchData() {
    axios.get('/api/music',
    {
      params: {
        genre: genre.title!=="Category" ? genre.title : "",
        language: language.title!=="Sort by Language" ? language.title : "",
        year: year.title!=="Sort by Year" ? year.title : "",
        rating: stars.title!=="Sort by Rating" ? stars.title : ""
      }
    })
    .then((response) => {
      console.log(response.data);
      setSongsData(response.data);
    })
  }

  useEffect(() => {
    fetchData();
  }, [genre, language, year, stars]);

  const HandleLoadMore = () => {
    setPage(page + maxpage);
  };

  if(SearchText!=""){
    return (
      <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
      <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
      {SearchSongsData.music?.map((song, index) => (
        <Musics key={index} song={song}/>
      ))}
      </div>
      </div>
      </Layout>
    )
  }
  else{
    return (
      <Layout>
        <div className="min-height-screen container mx-auto px-2 my-6">
          <Filters/>
          <p className="text-lg font-medium my-6">
            Total <span>{SongsData.music?.length}</span>{" "}
            items found
          </p>
          <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {SongsData.music?.map((song, index) => (
              <Musics key={index} song={song}/>
            ))}
          </div>
          {/* Loading More */}

          {/* <div className="w-full flex-colo md:my-20 my-10">
            <button
              onClick={HandleLoadMore}
              className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain"
            >
              Loading <CgSpinner className="animate-spin" />
            </button>
          </div> */}
        </div>
      </Layout>
    );
  }
}

export default SongsPage;
