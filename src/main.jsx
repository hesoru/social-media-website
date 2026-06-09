import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Bell, CalendarDays, Heart, Home, Image, Mail, MessageCircle, MoreHorizontal, Repeat2, Search, Share, User, Users } from 'lucide-react';
import darrenFamily from './images/darren-family.svg';
import darrenFamilyKitchen from './images/darren-family-kitchen.svg';
import darrenFamilyPicnic from './images/darren-family-picnic.svg';
import darrenSelfie from './images/darren-johnson.svg';
import reneeSelfie from './images/renee-carter.svg';
import './styles.css';

const posts = [
  {
    id: 1,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '12m',
    content: 'Tried a new coffee shop this morning. Paid seven dollars to learn I still prefer the coffee I make half-asleep at home.',
    image: reneeSelfie,
    imageAlt: 'Illustrated selfie of Renee Carter',
    replies: 1,
    reposts: 0,
    likes: 6,
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
    id: 14,
    author: 'Renee Carter',
    handle: 'renee_carter',
    avatar: 'RC',
    time: '4h',
    content: 'Bought one candle and suddenly my apartment has a whole personality. Interior design is apparently just scented wax.',
    image: reneeSelfie,
    imageAlt: 'Illustrated selfie of Renee Carter',
    replies: 0,
    reposts: 1,
    likes: 5,
    accent: '#6366f1'
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
    id: 2,
    author: 'DO NOT INTERACT',
    handle: '',
    profileKey: 'blocked',
    avatar: '',
    time: '35m',
    content: 'The farmers market had the best strawberries today. Bought one basket and already wish I got two.',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Fresh strawberries at a market',
    replies: 12,
    reposts: 48,
    likes: 319,
    accent: '#9ca3af'
  },
  {
    id: 3,
    author: 'Darren Johnson',
    handle: 'darren_johnson',
    avatar: 'DJ',
    time: '1h',
    content: 'Movie night at my place later. Snacks are covered, but someone please bring extra blankets.',
    image: darrenSelfie,
    imageAlt: 'Illustrated selfie of Darren Johnson',
    replies: 8,
    reposts: 31,
    likes: 204,
    accent: '#22c55e'
  },
  {
    id: 17,
    author: 'Darren Johnson',
    handle: 'darren_johnson',
    avatar: 'DJ',
    time: '90m',
    content: 'Spent the afternoon at the park with the family. Somehow the kids had endless energy and I needed a nap by minute twelve.',
    image: darrenFamily,
    imageAlt: 'Illustrated family photo of Darren Johnson with his family',
    replies: 5,
    reposts: 7,
    likes: 96,
    accent: '#22c55e'
  },
  {
    id: 18,
    author: 'Darren Johnson',
    handle: 'darren_johnson',
    avatar: 'DJ',
    time: '3h',
    content: 'Family picnic today. I packed snacks for four people and somehow everyone still wanted the exact same sandwich.',
    image: darrenFamilyPicnic,
    imageAlt: 'Illustrated family picnic photo of Darren Johnson with his family',
    replies: 4,
    reposts: 6,
    likes: 84,
    accent: '#22c55e'
  },
  {
    id: 19,
    author: 'Darren Johnson',
    handle: 'darren_johnson',
    avatar: 'DJ',
    time: '5h',
    content: 'Cooking with the family means one person stirs, two people taste-test, and I pretend that counts as teamwork.',
    image: darrenFamilyKitchen,
    imageAlt: 'Illustrated kitchen photo of Darren Johnson cooking with his family',
    replies: 7,
    reposts: 8,
    likes: 112,
    accent: '#22c55e'
  },
  {
    id: 7,
    author: 'Maya Singh',
    handle: 'maya_singh',
    avatar: 'MS',
    time: '2h',
    content: 'Bought a plant because the apartment needed life. Now I have a leafy roommate with very unclear expectations.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Small houseplants on a bright windowsill',
    replies: 3,
    reposts: 5,
    likes: 42,
    accent: '#14b8a6'
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
  }
];

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
          <button><Users size={20} /> Everyone can respond</button>
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
      <button className="avatar profileLinkAvatar" style={{ background: post.accent }} onClick={() => onProfileClick(profileKey)}>{post.avatar}</button>
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

function FeedPage({ onProfileClick, onPostClick }) {
  return (
    <main className="contentFeed">
      <div className="topbar"><h1>Home</h1></div>
      <div className="tabs"><button className="selected">Featured</button><button>Latest</button></div>
      <Composer onPostClick={onPostClick} />
      {posts.map((post) => <PostCard key={post.id} post={post} onProfileClick={onProfileClick} />)}
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
  const userPosts = posts.filter((post) => post.handle === 'darren_johnson');
  const mediaPosts = userPosts.filter((post) => post.image);

  return (
    <main className="contentFeed">
      <div className="topbar"><h1>Darren Johnson</h1><span>384 posts</span></div>
      <section className="profileHero">
        <div className="cover"></div>
        <div className="profileDetails">
          <div className="avatar profileAvatar" style={{ background: '#22c55e' }}>DJ</div>
          <button>Connect</button>
          <h2>Darren Johnson</h2>
          <p className="muted">@darren_johnson</p>
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
    if (handle === 'darren_johnson') {
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
