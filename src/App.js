import './App.css';
import React from 'react';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

const globalState = {
  movies: [
    {

      id: 0,
      image: 'https://m.media-amazon.com/images/M/MV5BYzFmMjAwMDYtNzM0Zi00NjY2LWFjMjYtMGQ1OTRiZjk5YjJkXkEyXkFqcGdeQXVyMTMwODY5NDc2._V1_.jpg',
      Title: 'Jujutsu Kaisen 0',
      Date: 'March 18, 2022 (United States)',
      Genre: 'Animation, Action, Fantasy',
      Synopsis: 'It follows Yuta Okkotsu, a young student who becomes a sorcerer and seeks to control the cursed spirit of his childhood friend Rika Orimoto in Jujutsu High alongside other skilled mates.',
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,

    },

    {
      id: 1,
      image: 'https://www.sonypictures.my/sites/malaysia/files/2022-07/BT_SonyWebsite_1SHT.jpg',
      Title: 'Bullet Train',
      Date: 'August 05, 2022 (United States)',
      Genre: 'Action, Comedy, Thriller',
      Synopsis: 'Five assassins aboard a fast moving bullet train find out their missions have something in common.', 
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,

    },

    {
      id: 2,
      image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F04%2F20%2FThor-Love-and-Thunder-4.jpg',
      Title: 'Thor: Love and Thunder',
      Date: 'July 08, 2022 (United States)',
      Genre: 'Action, Adventure, Comedy, Fantasy, Romance, Sci-fi',
      Synopsis: 'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.',
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,

    },

      {      
        id: 3,
        image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg',
        Title: 'Spider-Man: No Way Home',
        Date: 'December 17, 2021 (United States)',
        Genre: 'Action, Adventure, Fantasy, Comedy',
        Synopsis: 'For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero\'s identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk. When he enlists Doctor Strange\'s help to restore his secret, the spell tears a hole in their world, releasing the most powerful villains who\'ve ever fought a Spider-Man in any universe. Now, Peter will have to overcome his greatest challenge yet, which will not only forever alter his own future but the future of the Multiverse.',
        totalVotes: 0,
        sumVotes: 0,
        averageRating: 0,
  
    },

    {
      id: 4,
      image: 'https://i.ebayimg.com/images/g/xAMAAOSw10Nii635/s-l500.jpg',
      Title: 'Top gun Maverick',
      Date: 'May 27, 2022 (United States)',
      Genre: 'Animation, Action, Fantasy',
      Synopsis: 'After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN\'s elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.',
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,

    },

      {      
        id: 5,
        image: 'https://i.pinimg.com/originals/0a/51/19/0a511949a465f11047eb9b37e0354c36.jpg',
        Title: 'Ocean Waves',
        Date: 'May 05, 1993',
        Genre: 'Romantic Drama',
        Synopsis: 'Taku and his best friend Yutaka are headed back to school for what looks like another uneventful year. But they soon find their friendship tested by the arrival of Rikako, a beautiful new transfer student from Tokyo whose attitude shifts wildly from flirty and flippant to melancholic. When Taku joins Rikako on a trip to Tokyo, the school erupts with rumors, and the three friends are forced to come to terms with their changing relationships.',
        totalVotes: 0,
        sumVotes: 0,
        averageRating: 0,
  
    },

    {      
      id: 6,
      image: 'https://m.media-amazon.com/images/M/MV5BYmQ1Y2Y4NmItY2E4Mi00ZmM2LWFiOTEtMGVmMDRhN2ZiODU0XkEyXkFqcGdeQXVyNTkxMzEwMzU@._V1_.jpg',
      Title: 'Dragon Ball Super: Super Hero',
      Date: 'August 19, 2022 (United States)',
      Genre: 'Anime, Adventure, Fantasy, Animation, Material Arts, Action, Science Fiction',
      Synopsis: 'The Red Ribbon Army was once destroyed by Son Goku. Individuals who carry on its spirit have created the ultimate androids -- Gamma 1 and Gamma 2. However, these two androids call themselves superheroes and start attacking Piccolo and Gohan.',
      totalVotes: 0,
      sumVotes: 0,
      averageRating: 0,

  },
  ],
};

function App() {
  return (
    <div className="App">
      <body id='color'>
        <Navbar />
        <span>
        <MovieList globalState={globalState}/>
        </span>
      </body>
    </div>
  );
}

export default App;
