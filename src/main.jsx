import React, { useState, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { Bell, CalendarDays, Heart, Home, Image, Mail, MessageCircle, MoreHorizontal, Repeat2, Search, Share, User, Users } from 'lucide-react';
import darrenFamilyKitchen from './images/darren-family-kitchen.svg';
import darrenProfile from './images/darren-profile.JPEG';
import darren1 from './images/darren-1.JPG';
import darren2 from './images/darren-2.JPEG';
import darren3 from './images/darren-3.JPG';
import './styles.css';

const posts = [
  {
    id: 34,
    author: 'Sofia Reyes',
    handle: 'sofia_reyes',
    avatar: 'SR',
    time: '4m',
    content: 'Woke up early on purpose and now I do not know who I am, but the sunrise was genuinely worth it.',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sunrise over rolling hills',
    replies: 5,
    reposts: 4,
    likes: 61,
    accent: '#f59e0b'
  },
  {
    id: 35,
    author: 'Amara Okafor',
    handle: 'amara_okafor',
    avatar: 'AO',
    time: '8m',
    content: 'Reorganized my entire bookshelf by color. Can I find anything now? No. Does it look incredible? Absolutely.',
    replies: 3,
    reposts: 1,
    likes: 38,
    accent: '#ec4899'
  },
  {
    id: 36,
    author: 'Jonas Berg',
    handle: 'jonas_berg',
    avatar: 'JB',
    time: '15m',
    content: 'Attempted a five-ingredient recipe and somehow used every dish in the apartment. Cooking is a scam.',
    replies: 7,
    reposts: 2,
    likes: 54,
    accent: '#0ea5e9'
  },
  {
    id: 37,
    author: 'Mei Lin',
    handle: 'mei_lin',
    avatar: 'ML',
    time: '22m',
    content: 'Took the scenic route to work and arrived twenty minutes late but emotionally restored. Fair trade.',
    replies: 4,
    reposts: 6,
    likes: 79,
    accent: '#14b8a6'
  },
  {
    id: 7,
    author: 'Maya Singh',
    handle: 'maya_singh',
    avatar: 'MS',
    time: '2h',
    content: 'Bought a plant because the apartment needed life. Now I have a leafy roommate with very unclear expectations.',
    replies: 3,
    reposts: 5,
    likes: 42,
    accent: '#14b8a6'
  },
  {
    id: 33,
    author: 'Ravi Desai',
    handle: 'ravi_desai',
    avatar: 'RD',
    time: '1d',
    content: 'Went hiking for the first time in years and remembered how small my inbox actually is.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'A starry night sky over mountains',
    replies: 8,
    reposts: 12,
    likes: 194,
    accent: '#6366f1'
  },
  {
    id: 4,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '28m',
    content: 'Finally caught up on laundry, groceries, and every tiny errand I ignored until they formed a coalition.',
    replies: 0,
    reposts: 0,
    likes: 3,
    accent: '#6366f1'
  },
  {
    id: 8,
    author: 'Elena Brooks',
    handle: 'elena_brooks',
    avatar: 'EB',
    time: '3h',
    content: 'Found twenty dollars in an old jacket pocket. I will now be accepting interviews about my financial comeback.',
    replies: 6,
    reposts: 2,
    likes: 67,
    accent: '#f97316'
  },
  {
    id: 5,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '44m',
    content: 'Went for a quiet walk after dinner, because apparently being outside briefly counts as having my life together.',
    replies: 0,
    reposts: 1,
    likes: 5,
    accent: '#6366f1'
  },
  {
    id: 30,
    author: 'Yuki Tanaka',
    handle: 'yuki_tanaka',
    avatar: 'YT',
    time: '21h',
    content: 'Made ramen from scratch tonight. Four hours of work, gone in six minutes. Worth every second.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'A steaming bowl of ramen',
    replies: 11,
    reposts: 9,
    likes: 168,
    accent: '#f43f5e'
  },
  {
    id: 6,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '2h',
    content: 'Made pasta from scratch tonight. The kitchen looks personally offended, but dinner was good.',
    replies: 0,
    reposts: 0,
    likes: 2,
    accent: '#6366f1'
  },
  {
    id: 10,
    author: 'Nora Patel',
    handle: 'nora_patel',
    avatar: 'NP',
    time: '5h',
    content: 'Cleaned one drawer and immediately considered myself a minimalist. Growth looks different for everyone.',
    replies: 2,
    reposts: 1,
    likes: 29,
    accent: '#ec4899'
  },
  {
    id: 13,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '3h',
    content: 'Watered the plants today, so I will be accepting praise for keeping civilization intact.',
    replies: 0,
    reposts: 0,
    likes: 4,
    accent: '#6366f1'
  },
  {
    id: 22,
    author: 'Grace Kim',
    handle: 'grace_kim',
    avatar: 'GK',
    time: '11h',
    content: 'The sunset tonight looked photoshopped. I took forty pictures and none of them do it justice.',
    image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'A vivid orange sunset over the horizon',
    replies: 9,
    reposts: 18,
    likes: 201,
    accent: '#f43f5e',
    thread: [
      {
        id: 'g1',
        author: 'Priya Nair',
        handle: 'priya_nair',
        avatar: 'PN',
        time: '10h',
        content: 'Okay this is unreal. The colors look painted on.',
        accent: '#d946ef'
      },
      {
        id: 'g2',
        author: 'Owen Bennett',
        handle: 'owen_bennett',
        avatar: 'OB',
        time: '10h',
        content: 'Post the other thirty-nine, I need them all.',
        accent: '#f59e0b'
      },
      {
        id: 'g3',
        author: 'DO NOT INTERACT',
        handle: 'd_johnson',
        profileKey: 'blocked',
        avatar: '',
        time: '9h',
        content: 'Nights like this are why I always keep my camera on me.',
        accent: '#9ca3af'
      },
      {
        id: 'g4',
        author: 'Hana Suzuki',
        handle: 'hana_suzuki',
        avatar: 'HS',
        time: '9h',
        content: 'I was watching the same sunset from across the street. You are in a few of my pictures too.',
        accent: '#a855f7'
      }
    ]
  },
  {
    id: 11,
    author: 'Sam Rivera',
    handle: 'sam_rivera',
    avatar: 'SR',
    time: '6h',
    content: 'The dog made three new friends at the park. I stood nearby holding a leash and contributing very little socially.',
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'A happy dog sitting in a park',
    replies: 11,
    reposts: 14,
    likes: 156,
    accent: '#06b6d4'
  },
  {
    id: 14,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '4h',
    content: 'Bought one candle and suddenly my apartment has a whole personality. Interior design is apparently just scented wax.',
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'A lit scented candle on a table',
    replies: 0,
    reposts: 1,
    likes: 5,
    accent: '#6366f1'
  },
  {
    id: 12,
    author: 'Lena Morris',
    handle: 'lena_morris',
    avatar: 'LM',
    time: '8h',
    content: 'Set a reminder to relax, ignored it, then felt productive about having scheduled relaxation. Perfect system.',
    replies: 1,
    reposts: 3,
    likes: 35,
    accent: '#8b5cf6'
  },
  {
    id: 1,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '12m',
    content: 'Tried a new coffee shop this morning. Paid seven dollars to learn I still prefer the coffee I make half-asleep at home.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'A cup of coffee on a cafe table',
    replies: 4,
    reposts: 0,
    likes: 6,
    accent: '#6366f1',
    thread: [
      {
        id: 'r1',
        author: 'Maya Singh',
        handle: 'maya_singh',
        avatar: 'MS',
        time: '9m',
        content: 'Which one? I have been meaning to find a new morning spot.',
        accent: '#14b8a6'
      },
      {
        id: 'r2',
        author: 'Marcus Lee',
        handle: 'marcus_lee',
        avatar: 'ML',
        time: '7m',
        content: 'Seven dollars is highway robbery. Home coffee supremacy, always.',
        accent: '#eab308'
      },
      {
        id: 'r3',
        author: 'DO NOT INTERACT',
        handle: 'd_johnson',
        profileKey: 'blocked',
        avatar: '',
        time: '5m',
        content: 'I was two tables behind you the whole time.',
        accent: '#9ca3af'
      },
      {
        id: 'r4',
        author: 'Elena Brooks',
        handle: 'elena_brooks',
        avatar: 'EB',
        time: '3m',
        content: 'Nothing beats the coffee you make at home in your pajamas.',
        accent: '#f97316'
      }
    ]
  },
  {
    id: 20,
    author: 'Priya Nair',
    handle: 'priya_nair',
    avatar: 'PN',
    time: '9h',
    content: 'Started a book club with myself. Attendance is perfect and the snacks are unbelievable.',
    replies: 3,
    reposts: 2,
    likes: 47,
    accent: '#d946ef'
  },
  {
    id: 15,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '6h',
    content: 'Meal prepped for the week, which means I have created five identical future disappointments.',
    replies: 1,
    reposts: 0,
    likes: 6,
    accent: '#6366f1'
  },
  {
    id: 21,
    author: 'Theo Walsh',
    handle: 'theo_walsh',
    avatar: 'TW',
    time: '10h',
    content: 'Tried to fix a squeaky door for five minutes and accidentally reorganized the entire garage.',
    replies: 6,
    reposts: 4,
    likes: 73,
    accent: '#0ea5e9'
  },
  {
    id: 16,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '7h',
    content: 'Folded a blanket and called it resetting the living room. Standards are important, especially low ones.',
    replies: 0,
    reposts: 0,
    likes: 3,
    accent: '#6366f1'
  },
  {
    id: 23,
    author: 'Owen Bennett',
    handle: 'owen_bennett',
    avatar: 'OB',
    time: '12h',
    content: 'Learned to make cold brew at home. I am now insufferable about coffee and have never been happier.',
    replies: 5,
    reposts: 7,
    likes: 91,
    accent: '#f59e0b'
  },
  {
    id: 18,
    author: 'Darren Johnson',
    handle: 'd_johnson',
    avatar: 'DJ',
    time: '3h',
    content: 'Caught up with an old friend today. Two coffees turned into three hours of catching up and I regret absolutely none of it.',
    image: darren3,
    imageAlt: 'Photo of Darren Johnson hanging out with a friend',
    avatarImage: darrenProfile,
    replies: 4,
    reposts: 6,
    likes: 84,
    accent: '#22c55e'
  },
  {
    id: 24,
    author: 'Isabella Rossi',
    handle: 'bella_rossi',
    avatar: 'IR',
    time: '13h',
    content: 'Repotted all my herbs today. The basil looks thrilled, the mint is plotting world domination as usual.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Fresh herbs growing in small pots',
    replies: 4,
    reposts: 3,
    likes: 62,
    accent: '#10b981'
  },
  {
    id: 25,
    author: 'Jamal Carter',
    handle: 'jamal_carter',
    avatar: 'JC',
    time: '14h',
    content: 'Went for a morning run and my playlist carried me the entire way. Zero athletic ability, one incredible soundtrack.',
    replies: 8,
    reposts: 5,
    likes: 118,
    accent: '#3b82f6'
  },
  {
    id: 26,
    author: 'Hana Suzuki',
    handle: 'hana_suzuki',
    avatar: 'HS',
    time: '16h',
    content: 'Rainy day, big cup of coffee, and a stack of unread books. This is the entire personality I am committing to today.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'A warm cup of coffee on a rainy day',
    replies: 7,
    reposts: 10,
    likes: 143,
    accent: '#a855f7'
  },
  {
    id: 27,
    author: 'Diego Alvarez',
    handle: 'diego_alvarez',
    avatar: 'DA',
    time: '18h',
    content: 'Finally beat my brother at chess after two years. I have decided to retire immediately and preserve the legacy.',
    replies: 12,
    reposts: 6,
    likes: 175,
    accent: '#ef4444'
  },
  {
    id: 28,
    author: 'Aisha Rahman',
    handle: 'aisha_rahman',
    avatar: 'AR',
    time: '19h',
    content: 'Tried yoga for the first time and discovered muscles I did not consent to having. Namaste, I guess.',
    replies: 5,
    reposts: 3,
    likes: 84,
    accent: '#8b5cf6'
  },
  {
    id: 29,
    author: 'Leo Fontaine',
    handle: 'leo_fontaine',
    avatar: 'LF',
    time: '20h',
    content: 'Spent an hour picking a paint color and it turns out all seven whites look identical on the wall. Progress.',
    replies: 7,
    reposts: 4,
    likes: 102,
    accent: '#0ea5e9'
  },
  {
    id: 17,
    author: 'Darren Johnson',
    handle: 'd_johnson',
    avatar: 'DJ',
    time: '90m',
    content: 'Took the trail after all the rain and it fought back. Ankle-deep mud, one very lost shoe, and zero regrets. Best hike in ages.',
    image: darren1,
    imageAlt: 'Photo of Darren Johnson covered in mud after a hike',
    avatarImage: darrenProfile,
    replies: 5,
    reposts: 7,
    likes: 96,
    accent: '#22c55e'
  },
  {
    id: 31,
    author: 'Carlos Mendez',
    handle: 'carlos_mendez',
    avatar: 'CM',
    time: '22h',
    content: 'Adopted a cat this weekend. She has already claimed my chair, my keyboard, and roughly 90 percent of my attention.',
    replies: 9,
    reposts: 6,
    likes: 147,
    accent: '#22c55e'
  },
  {
    id: 9,
    author: 'Marcus Lee',
    handle: 'marcus_lee',
    avatar: 'ML',
    time: '4h',
    content: 'Took the long way home and accidentally discovered a bakery I absolutely did not need to know about.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Fresh bread and pastries in a bakery',
    replies: 4,
    reposts: 9,
    likes: 88,
    accent: '#eab308'
  },
  {
    id: 32,
    author: 'Fiona Doyle',
    handle: 'fiona_doyle',
    avatar: 'FD',
    time: '23h',
    content: 'Started learning the guitar. My neighbors have not filed a complaint yet, so I am calling it a hit.',
    replies: 6,
    reposts: 2,
    likes: 73,
    accent: '#eab308'
  },
  {
    id: 3,
    author: 'Darren Johnson',
    handle: 'd_johnson',
    avatar: 'DJ',
    time: '1h',
    content: 'Movie night at my place later. Snacks are covered, but someone please bring extra blankets.',
    image: darren2,
    imageAlt: 'Photo of Darren Johnson',
    avatarImage: darrenProfile,
    replies: 8,
    reposts: 31,
    likes: 204,
    accent: '#22c55e'
  },
  {
    id: 38,
    author: 'Noah Kim',
    handle: 'noah_kim',
    avatar: 'NK',
    time: '1d',
    content: 'Finally cleaned out my inbox. Zero unread emails. I feel like a completely different, slightly smug person.',
    replies: 6,
    reposts: 3,
    likes: 88,
    accent: '#3b82f6'
  },
  {
    id: 39,
    author: 'Zara Ahmed',
    handle: 'zara_ahmed',
    avatar: 'ZA',
    time: '1d',
    content: 'Baked bread for the first time and it actually rose. I am now legally required to tell everyone I meet.',
    replies: 9,
    reposts: 7,
    likes: 132,
    accent: '#f97316'
  },
  {
    id: 40,
    author: 'Marco Bianchi',
    handle: 'marco_bianchi',
    avatar: 'MB',
    time: '1d',
    content: 'Went for a bike ride with no destination and somehow ended up forty kilometers from home. Great ride, terrible planning.',
    replies: 5,
    reposts: 4,
    likes: 97,
    accent: '#06b6d4'
  },
  {
    id: 41,
    author: 'Chloe Dubois',
    handle: 'chloe_dubois',
    avatar: 'CD',
    time: '2d',
    content: 'Picked fresh flowers just for myself and the whole apartment feels like it got a personality upgrade.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'A field of flowers',
    replies: 4,
    reposts: 2,
    likes: 76,
    accent: '#ec4899'
  },
  {
    id: 42,
    author: 'Ibrahim Hassan',
    handle: 'ibrahim_hassan',
    avatar: 'IH',
    time: '2d',
    content: 'Tried to meditate for ten minutes and spent nine of them planning dinner. Progress is not linear.',
    replies: 7,
    reposts: 3,
    likes: 84,
    accent: '#8b5cf6'
  },
  {
    id: 43,
    author: 'Freya Larsen',
    handle: 'freya_larsen',
    avatar: 'FL',
    time: '2d',
    content: 'Swam in the ocean before breakfast. Freezing, salty, and somehow the best decision I have made all month.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'A calm turquoise ocean beach',
    replies: 8,
    reposts: 9,
    likes: 158,
    accent: '#0ea5e9'
  },
  {
    id: 44,
    author: 'Tom Becker',
    handle: 'tom_becker',
    avatar: 'TB',
    time: '3d',
    content: 'Assembled furniture with only one leftover screw. I am choosing to believe it was a spare and not structural.',
    replies: 11,
    reposts: 5,
    likes: 121,
    accent: '#eab308'
  },
  {
    id: 45,
    author: 'Aria Nakamura',
    handle: 'aria_nakamura',
    avatar: 'AN',
    time: '3d',
    content: 'Repainted an old chair instead of buying a new one. Nine hours of work to save forty dollars, and I regret nothing.',
    replies: 6,
    reposts: 4,
    likes: 103,
    accent: '#d946ef'
  },
  {
    id: 46,
    author: 'Samuel Osei',
    handle: 'samuel_osei',
    avatar: 'SO',
    time: '4d',
    content: 'Started a garden on my tiny balcony. Two tomatoes so far, both fiercely defended from a very determined pigeon.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'A small balcony garden with plants',
    replies: 10,
    reposts: 6,
    likes: 139,
    accent: '#22c55e'
  },
  {
    id: 47,
    author: 'Lucia Romano',
    handle: 'lucia_romano',
    avatar: 'LR',
    time: '4d',
    content: 'Learned three chords on the ukulele and now every gathering is at risk. You have all been warned.',
    replies: 5,
    reposts: 3,
    likes: 92,
    accent: '#f43f5e'
  },
  {
    id: 48,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '9h',
    content: 'Reorganized my spice rack alphabetically. I now feel powerful and slightly unhinged.',
    replies: 0,
    reposts: 0,
    likes: 7,
    accent: '#6366f1'
  },
  {
    id: 49,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '10h',
    content: 'Went to bed early like a responsible adult and then scrolled my phone for two hours. Balance.',
    replies: 1,
    reposts: 0,
    likes: 8,
    accent: '#6366f1'
  },
  {
    id: 50,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '12h',
    content: 'Made a to-do list so satisfying I almost do not want to ruin it by actually doing the tasks.',
    replies: 0,
    reposts: 1,
    likes: 5,
    accent: '#6366f1'
  },
  {
    id: 51,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '14h',
    content: 'Repotted my one surviving succulent. We are both just hanging in there, honestly.',
    replies: 0,
    reposts: 0,
    likes: 6,
    accent: '#6366f1'
  },
  {
    id: 52,
    author: 'Hannah Reed',
    handle: 'hannah_reed',
    avatar: 'HR',
    time: '15h',
    content: 'Tried journaling every morning. So far it is just three pages of me negotiating with the snooze button.',
    replies: 4,
    reposts: 2,
    likes: 61,
    accent: '#a855f7'
  },
  {
    id: 53,
    author: 'Omar Farouk',
    handle: 'omar_farouk',
    avatar: 'OF',
    time: '16h',
    content: 'Finally visited the rooftop cafe everyone raves about. The view was worth it, the prices were a personal attack.',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'A cozy cafe interior',
    replies: 6,
    reposts: 5,
    likes: 118,
    accent: '#0ea5e9'
  },
  {
    id: 54,
    author: 'Elise Moreau',
    handle: 'elise_moreau',
    avatar: 'EM',
    time: '18h',
    content: 'Spent the afternoon at a secondhand bookstore and left with six books and zero self-control.',
    replies: 5,
    reposts: 3,
    likes: 94,
    accent: '#ec4899'
  },
  {
    id: 55,
    author: 'Kai Andersen',
    handle: 'kai_andersen',
    avatar: 'KA',
    time: '20h',
    content: 'Went camping and remembered that I love nature in theory and my mattress in practice.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'A tent under a starry sky',
    replies: 8,
    reposts: 6,
    likes: 141,
    accent: '#22c55e'
  },
  {
    id: 56,
    author: 'Nadia Petrova',
    handle: 'nadia_petrova',
    avatar: 'NP',
    time: '22h',
    content: 'Learned to make dumplings from a friend today. Mine looked abstract, but they tasted like victory.',
    replies: 7,
    reposts: 4,
    likes: 126,
    accent: '#f59e0b'
  },
  {
    id: 57,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '16h',
    content: 'Attempted to fold a fitted sheet. Filed the resulting shape under abstract art and moved on with my life.',
    replies: 1,
    reposts: 0,
    likes: 9,
    accent: '#6366f1'
  },
  {
    id: 58,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '18h',
    content: 'Bought fancy tea to feel sophisticated. It has been sitting in the cupboard while I drink the same mug of instant coffee.',
    replies: 0,
    reposts: 1,
    likes: 6,
    accent: '#6366f1'
  },
  {
    id: 59,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '20h',
    content: 'Started a puzzle three weeks ago. It now lives permanently on my table and I have accepted it as furniture.',
    replies: 0,
    reposts: 0,
    likes: 4,
    accent: '#6366f1'
  },
  {
    id: 60,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '1d',
    content: 'Went grocery shopping hungry, which is how I ended up owning four kinds of cheese and no actual meals.',
    replies: 2,
    reposts: 0,
    likes: 11,
    accent: '#6366f1'
  }
];

function shuffleFeed(list) {
  const shuffled = [...list];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // prevent consecutive posts from the same author (swap posts)
  for (let i = 1; i < shuffled.length; i++) {
    if (shuffled[i].author !== shuffled[i - 1].author) continue;
    const swapIndex = shuffled.findIndex((post, idx) =>
      idx > i &&
      post.author !== shuffled[i - 1].author &&
      (idx + 1 >= shuffled.length || shuffled[idx + 1].author !== shuffled[i].author)
    );
    if (swapIndex !== -1) {
      [shuffled[i], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[i]];
    }
  }
  return shuffled;
}

const notifications = [
  { id: 1, title: 'New response', detail: 'Someone responded to your post about dinner walks.' },
  { id: 2, title: 'New follower', detail: 'MY PUSSY IN BIO ⬇⬇ ...' }
];

function Sidebar({ page, setPage, onPostClick }) {
  const nav = [
    { id: 'feed', label: 'Home', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'search', label: 'Explore', icon: Search },
    { id: 'messages', label: 'Messages', icon: Mail },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];

  return (
    <aside className="sidebar">
      <div className="brand">CS</div>
      <nav>
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <button key={item.id} className={`navItem ${page === item.id ? 'active' : ''}`} onClick={() => setPage(item.id)}>
              <Icon size={24} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      <button className="postButton" onClick={onPostClick}>Post</button>
    </aside>
  );
}

function Composer({ onPostClick }) {
  return (
    <section className="composer">
      <div className="avatar primary">RC</div>
      <div className="composerBody">
        <textarea placeholder="Share something with your community..." />
        <div className="composerActions">
          <button><Image size={20} /> Media</button>
          <button><Users size={20} /> Everyone</button>
          <button className="smallPost" onClick={onPostClick}>Post</button>
        </div>
      </div>
    </section>
  );
}

function PostCard({ post, onProfileClick }) {
  const profileKey = post.profileKey || post.handle;

  return (
    <article className="postCard">
      <button className="avatar profileLinkAvatar" style={{ background: post.accent }} onClick={() => onProfileClick(profileKey)}>
        {post.avatarImage ? <img className="avatarImg" src={post.avatarImage} alt="" /> : post.avatar}
      </button>
      <div className="postContent">
        <header>
          <button className="profileLink" onClick={() => onProfileClick(profileKey)}><strong>{post.author}</strong></button>
          {post.handle && <span>@{post.handle}</span>}
          {post.handle && <span>·</span>}
          <span>{post.time}</span>
          <button><MoreHorizontal size={20} /></button>
        </header>
        <p>{post.content}</p>
        {post.image && <img className="postPhoto" src={post.image} alt={post.imageAlt} />}
        <footer>
          <span><MessageCircle size={18} /> {post.replies}</span>
          <span><Repeat2 size={18} /> {post.reposts}</span>
          <span><Heart size={18} /> {post.likes}</span>
          <span><Share size={18} /></span>
        </footer>
      </div>
    </article>
  );
}

function ReplyCard({ reply, onProfileClick }) {
  const profileKey = reply.profileKey || reply.handle;

  return (
    <article className="postCard replyCard">
      <button className="avatar profileLinkAvatar" style={{ background: reply.accent }} onClick={() => onProfileClick(profileKey)}>{reply.avatar}</button>
      <div className="postContent">
        <header>
          <button className="profileLink" onClick={() => onProfileClick(profileKey)}><strong>{reply.author}</strong></button>
          {reply.handle && <span>@{reply.handle}</span>}
          {reply.handle && <span>·</span>}
          <span>{reply.time}</span>
        </header>
        <p>{reply.content}</p>
      </div>
    </article>
  );
}

function FeedPage({ onProfileClick, onPostClick }) {
  const feedPosts = useMemo(
    () => shuffleFeed(posts).filter((post) => post.handle !== 'd_johnson' && post.profileKey !== 'blocked' && !post.thread),
    []
  );

  return (
    <main className="contentFeed">
      <div className="topbar"><h1>Home</h1></div>
      <div className="tabs"><button className="selected">Featured</button><button>Latest</button></div>
      <Composer onPostClick={onPostClick} />
      {feedPosts.map((post) => <PostCard key={post.id} post={post} onProfileClick={onProfileClick} />)}
    </main>
  );
}

function ExplorePage({ onProfileClick }) {
  const explorePosts = useMemo(() => shuffleFeed(posts), []);

  return (
    <main className="contentFeed">
      <div className="topbar"><h1>Explore</h1></div>
      <div className="tabs"><button className="selected">For you</button><button>Trending</button></div>
      {explorePosts.map((post) => (
        <React.Fragment key={post.id}>
          <PostCard post={post} onProfileClick={onProfileClick} />
          {post.thread && (
            <div className="replyThread">
              {post.thread.map((reply) => (
                <ReplyCard key={reply.id} reply={reply} onProfileClick={onProfileClick} />
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
    </main>
  );
}

function ProfileTabs({ selectedTab, setSelectedTab }) {
  const tabs = [
    { id: 'updates', label: 'Updates' },
    { id: 'responses', label: 'Responses' },
    { id: 'media', label: 'Media' },
    { id: 'saved', label: 'Saved' }
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button key={tab.id} className={selectedTab === tab.id ? 'selected' : ''} onClick={() => setSelectedTab(tab.id)}>
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function MediaGallery({ mediaPosts }) {
  if (mediaPosts.length === 0) {
    return <div className="emptyState">No photos posted yet.</div>;
  }

  return (
    <section className="mediaGallery">
      {mediaPosts.map((post) => (
        <article className="mediaTile" key={post.id}>
          <img src={post.image} alt={post.imageAlt} />
          <p>{post.content}</p>
        </article>
      ))}
    </section>
  );
}

function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState('updates');
  const userPosts = posts.filter((post) => post.handle === 'renee_carter');
  const mediaPosts = userPosts.filter((post) => post.image);

  return (
    <main className="contentFeed">
      <div className="topbar"><h1>Profile</h1><span>1K+ posts</span></div>
      <section className="profileHero">
        <div className="cover"></div>
        <div className="profileDetails">
          <div className="avatar profileAvatar">RC</div>
          <button>Edit profile</button>
          <h2>Renee Carter</h2>
          <p className="muted">@renee_carter</p>
          <p>Documenting minor errands, questionable meals, and the daily miracle of pretending this is a plan.</p>
          <div className="profileMeta"><span><CalendarDays size={18} /> Joined June 2026</span></div>
          <div className="stats"><strong>824</strong> Connections <strong>0</strong> Subscribers</div>
        </div>
      </section>
      <ProfileTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === 'media'
        ? <MediaGallery mediaPosts={mediaPosts} />
        : userPosts.map((post) => <PostCard key={post.id} post={post} onProfileClick={() => {}} />)}
    </main>
  );
}

function DarrenProfilePage() {
  const [selectedTab, setSelectedTab] = useState('updates');
  const userPosts = posts.filter((post) => post.handle === 'd_johnson' && post.profileKey !== 'blocked');
  const mediaPosts = userPosts.filter((post) => post.image);

  return (
    <main className="contentFeed">
      <div className="topbar"><h1>Darren Johnson</h1><span>384 posts</span></div>
      <section className="profileHero">
        <div className="cover"></div>
        <div className="profileDetails">
          <img className="avatar profileAvatar profilePhoto" src={darrenProfile} alt="Darren Johnson profile photo" />
          <button>Connect</button>
          <h2>Darren Johnson</h2>
          <p className="muted">@d_johnson</p>
          <p>Always looking for good food, good music, and a reason to get friends together.</p>
          <div className="profileMeta"><span><CalendarDays size={18} /> Joined March 2025</span></div>
          <div className="stats"><strong>312</strong> Connections <strong>2,104</strong> Subscribers</div>
        </div>
      </section>
      <ProfileTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === 'media'
        ? <MediaGallery mediaPosts={mediaPosts} />
        : userPosts.map((post) => <PostCard key={post.id} post={post} onProfileClick={() => {}} />)}
    </main>
  );
}

function BlockedProfilePage() {
  return (
    <main className="contentFeed">
      <div className="topbar"><h1>Profile</h1></div>
      <section className="profileHero">
        <div className="cover"></div>
        <div className="profileDetails">
          <div className="avatar profileAvatar" style={{ background: '#9ca3af' }}>DN</div>
          <h2>DO NOT INTERACT</h2>
          <p className="muted">@d_johnson</p>
          <div className="blockedCard">
            <h3>You are blocked</h3>
            <p>You cannot connect with or view this account's updates.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function NotificationsPage() {
  return (
    <main className="contentFeed">
      <div className="topbar"><h1>Notifications</h1></div>
      <section className="notificationStack">
        {notifications.map((notification) => (
          <article className="notificationToast" key={notification.id}>
            <Bell size={22} />
            <div>
              <h2>{notification.title}</h2>
              <p>{notification.detail}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

function RightPanel() {
  return (
    <aside className="rightPanel">
      <div className="searchBox"><Search size={20} /><span>Search</span></div>
      <section className="card">
        <h2>Community topics</h2>
        <div><span>Food · Active</span><strong>Weekend brunch</strong><small>42.1K posts</small></div>
        <div><span>Local events</span><strong>Movie night</strong><small>8,204 posts</small></div>
        <div><span>Wellness</span><strong>Evening walks</strong><small>15.7K posts</small></div>
      </section>
      <section className="card">
        <h2>Suggested connections</h2>
        <div className="follow"><div className="avatar mini">FD</div><p><strong>Food Finds</strong><span>@foodfinds</span></p><button>Connect</button></div>
        <div className="follow"><div className="avatar mini green">GH</div><p><strong>Good Habits</strong><span>@goodhabits</span></p><button>Connect</button></div>
      </section>
    </aside>
  );
}

function App() {
  const [page, setPage] = useState('feed');
  const [postToast, setPostToast] = useState(false);
  const lastNotification = notifications.reduce((latest, notification) => (
    notification.id > latest.id ? notification : latest
  ), notifications[0]);
  const showPostNotification = () => {
    setPostToast(true);
    window.setTimeout(() => setPostToast(false), 2600);
  };

  const openProfile = (handle) => {
    if (handle === 'd_johnson') {
      setPage('darren');
      return;
    }

    if (handle === 'blocked') {
      setPage('blocked');
      return;
    }

    if (handle === 'renee_carter') {
      setPage('profile');
    }
  };
  const renderPage = () => {
    if (page === 'profile') {
      return <ProfilePage />;
    }

    if (page === 'darren') {
      return <DarrenProfilePage />;
    }

    if (page === 'blocked') {
      return <BlockedProfilePage />;
    }

    if (page === 'notifications') {
      return <NotificationsPage />;
    }

    if (page === 'search') {
      return <ExplorePage onProfileClick={openProfile} />;
    }

    return <FeedPage onProfileClick={openProfile} onPostClick={showPostNotification} />;
  };

  return (
    <>
      {postToast && (
        <div className="topNotification">
          <article className="notificationToast">
            <Bell size={22} />
            <div>
              <h2>{lastNotification.title}</h2>
              <p>{lastNotification.detail}</p>
            </div>
          </article>
        </div>
      )}
      <div className="appShell">
        <Sidebar page={page} setPage={setPage} onPostClick={showPostNotification} />
        {renderPage()}
        <RightPanel />
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
