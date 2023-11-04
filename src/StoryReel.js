import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
  return (
    <div className="storyReel">
        <Story image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/1200px-Elon_Musk_Royal_Society.jpg" profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTam7dK4a6nCf6yhn8M0RPFBa1yIbNrD_9EUJ3NNEk7-o0KGCIZ" title="Elon Musk" />
        <Story image="https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg" profileSrc="https://upload.wikimedia.org/wikipedia/commons/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg" title="Jeff Bezos" />
        <Story image="https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-09/shah_rukh_khan_1.jpg?VersionId=T8fdKeKqwZtLFU2kfp8tSVPZc1KFC6Nq&h=0d5d90e8&size=750:*" profileSrc="https://m.media-amazon.com/images/M/MV5BZDk1ZmU0NGYtMzQ2Yi00N2NjLTkyNWEtZWE2NTU4NTJiZGUzXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg" title="Shaharukh Khan" />
        <Story image="https://images.news18.com/ibnlive/uploads/2023/02/salman-khan-black-tiger.jpg" profileSrc="https://m.media-amazon.com/images/M/MV5BMjMwNTIxODg0OF5BMl5BanBnXkFtZTgwODg2NzM0OTE@._V1_.jpg" title="Salman Khan" />
        <Story image="https://upload.wikimedia.org/wikipedia/commons/d/d2/Salman_Khan_TED_2011.jpg" profileSrc="https://aspenideasfestival.imgix.net/c56d4b2f-b78f-4242-8c99-e8dd452c7429/AIF23_Khan_Sal.jpeg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=567%2C273%2C2276%2C2276" title="Sal Khan" />
    </div>
  )
}

export default StoryReel