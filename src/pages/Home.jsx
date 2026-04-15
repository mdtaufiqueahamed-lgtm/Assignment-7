// import { useEffect, useState } from 'react';
// import { UserPlus, Users, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
// import FriendCard from '../components/FriendCard';

// const Home = () => {
//   const [friends, setFriends] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('/friends.json')
//       .then(res => res.json())
//       .then(data => {
//         setFriends(data);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div className="text-center py-20 animate-pulse">Loading Friends...</div>;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <section className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">Keep Your Friendships Alive</h1>
//         <p className="text-gray-600 mb-6 text-lg">Track your last contact and never lose touch.</p>
//         <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-indigo-700 transition">
//           <UserPlus size={20} /> Add a Friend
//         </button>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
//           <SummaryCard icon={<Users className="text-blue-500" />} label="Total" value={friends.length} />
//           <SummaryCard icon={<CheckCircle className="text-green-500" />} label="On Track" value="5" />
//           <SummaryCard icon={<Clock className="text-yellow-500" />} label="Almost" value="2" />
//           <SummaryCard icon={<AlertTriangle className="text-red-500" />} label="Overdue" value="3" />
//         </div>
//       </section>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {friends.map(friend => <FriendCard key={friend.id} friend={friend} />)}
//       </div>
//     </div>
//   );
// };

// const SummaryCard = ({ icon, label, value }) => (
//   <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 text-left">
//     <div className="p-3 bg-gray-50 rounded-lg">{icon}</div>
//     <div>
//       <p className="text-sm text-gray-500">{label}</p>
//       <p className="text-xl font-bold">{value}</p>
//     </div>
//   </div>
// );

// export default Home;