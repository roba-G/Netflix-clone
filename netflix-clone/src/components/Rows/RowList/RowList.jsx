import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

function RowList() {
  return (
    <div>
      <Row title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}/>
      <Row title='Trending'
      fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated'
      fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title='Action'
      fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy'
      fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror'
      fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance'
      fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries'
      fetchUrl={requests.fetchDocumentaries}/>
      <Row title='Tv Show'
      fetchUrl={requests.fetchTvShow}/>
    </div>
  )
}

export default RowList
