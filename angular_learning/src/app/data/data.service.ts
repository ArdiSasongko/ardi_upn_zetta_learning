import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  list:any[] = [
    {
      id : 1,
      name : 'Spirited Away',
      year : 2001,
      img : 'https://cdn.myanimelist.net/images/anime/6/79597.jpg',
      actor : [
        'Irino Miyu','Hiragi Rumi','Nakamura Akio'
      ],
      desc:'Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house.'
    },
    {
      id : 2,
      name : 'Spirited Away',
      year : 2001,
      img : 'https://cdn.myanimelist.net/images/anime/6/79597.jpg',
      actor : [
        'Irino Miyu','Hiragi Rumi','Nakamura Akio'
      ],
      desc:'Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house.'
    },
    {
      id : 3,
      name : 'Spirited Away',
      year : 2001,
      img : 'https://cdn.myanimelist.net/images/anime/6/79597.jpg',
      actor : [
        'Irino Miyu','Hiragi Rumi','Nakamura Akio'
      ],
      desc:'Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house.'
    },
    {
      id : 4,
      name : 'Spirited Away',
      year : 2001,
      img : 'https://cdn.myanimelist.net/images/anime/6/79597.jpg',
      actor : [
        'Irino Miyu','Hiragi Rumi','Nakamura Akio'
      ],
      desc:'Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house.'
    },
    {
      id : 5,
      name : 'Spirited Away',
      year : 2001,
      img : 'https://cdn.myanimelist.net/images/anime/6/79597.jpg',
      actor : [
        'Irino Miyu','Hiragi Rumi','Nakamura Akio'
      ],
      desc:'Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house.'
    },
    {
      id : 6,
      name : 'Spirited Away',
      year : 2001,
      img : 'https://cdn.myanimelist.net/images/anime/6/79597.jpg',
      actor : [
        'Irino Miyu','Hiragi Rumi','Nakamura Akio'
      ],
      desc:'Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house.'
    }
  ]

  actor:any[]=[
    {
      name :'Irino Miyu',
      img: 'https://cdn.myanimelist.net/images/voiceactors/2/53508.jpg'
    },
    {
      name :'Irino Miyu',
      img: 'https://cdn.myanimelist.net/images/voiceactors/2/53508.jpg'
    },
    {
      name :'Irino Miyu',
      img: 'https://cdn.myanimelist.net/images/voiceactors/2/53508.jpg'
    }
  ]
  constructor() { }
}
