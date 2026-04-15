// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { Phone, MessageSquare, Video, Clock, Target, Calendar } from 'lucide-react';
// import toast, { Toaster } from 'react-hot-toast';

// const FriendDetails = () => {
//   const { id } = useParams();
//   const [friend, setFriend] = useState(null);

//   useEffect(() => {
//     // JSON থেকে ডাটা লোড করা
//     fetch('/friends.json')
//       .then(res => res.json())
//       .then(data => {
//         const found = data.find(f => f.id === parseInt(id));
//         setFriend(found);
//       });
//   }, [id]);

//   // বাটন ক্লিক করলে অ্যাকশন হ্যান্ডেল করার ফাংশন
//   const handleAction = (type) => {
//     const newEntry = {
//       id: Date.now(),
//       friendName: friend.name,
//       type: type, // 'Call', 'Text', বা 'Video'
//       date: new Date().toLocaleString(),
//     };

//     // LocalStorage এ ডাটা সেভ করা (যাতে Timeline পেজে দেখা যায়)
//     const existingTimeline = JSON.parse(localStorage.getItem('timeline')) || [];
//     localStorage.setItem('timeline', JSON.stringify([newEntry, ...existingTimeline]));

//     // সাকসেস টোস্ট মেসেজ (Requirement 10.3)
//     toast.success(`${type} logged with ${friend.name}!`);
//   };

//   if (!friend) return <div className="text-center py-20 text-xl font-medium">Loading details...</div>;

//   return (
//     <div className="max-w-6xl mx-auto p-4 lg:p-10">
//       <Toaster position="top-center" reverseOrder={false} />
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* বাম পাশ: প্রোফাইল কার্ড */}
//         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit text-center">
//           <img 
//             src={friend.picture} 
//             alt={friend.name} 
//             className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-indigo-50 mb-4" 
//           />
//           <h2 className="text-2xl font-bold">{friend.name}</h2>
//           <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mt-2 mb-4 ${
//             friend.status === 'overdue' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
//           }`}>
//             {friend.status}
//           </span>
//           <p className="text-gray-600 text-sm mb-6 px-4">{friend.bio}</p>
          
//           <div className="space-y-3">
//             <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium transition">⏰ Snooze 2 Weeks</button>
//             <button className="w-full py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium transition">📦 Archive</button>
//             <button className="w-full py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-sm font-medium transition">🗑️ Delete</button>
//           </div>
//         </div>

//         {/* ডান পাশ: স্ট্যাটস এবং কুইক অ্যাকশন */}
//         <div className="md:col-span-2 space-y-6">
//           {/* স্ট্যাটস গ্রিড */}
//           <div className="grid grid-cols-3 gap-4">
//             <StatCard icon={<Clock size={20}/>} label="Last Contact" value={`${friend.days_since_contact} days`} color="text-blue-500" />
//             <StatCard icon={<Target size={20}/>} label="Goal" value={`${friend.goal} days`} color="text-indigo-500" />
//             <StatCard icon={<Calendar size={20}/>} label="Next Due" value={friend.next_due_date} color="text-orange-500" />
//           </div>

//           {/* Quick Check-In (Requirement 6) */}
//           <div className="bg-white p-10 rounded-2xl shadow-sm border border-indigo-50 text-center">
//             <h3 className="text-xl font-bold mb-8">Quick Check-In</h3>
//             <div className="flex justify-center gap-10">
//               <ActionButton onClick={() => handleAction('Call')} icon={<Phone />} label="Call" color="bg-green-500" />
//               <ActionButton onClick={() => handleAction('Text')} icon={<MessageSquare />} label="Text" color="bg-blue-500" />
//               <ActionButton onClick={() => handleAction('Video')} icon={<Video />} label="Video" color="bg-purple-500" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ছোট হেল্পার কম্পোনেন্টস
// const StatCard = ({ icon, label, value, color }) => (
//   <div className="bg-white p-5 rounded-xl border border-gray-100 text-center shadow-sm">
//     <div className={`flex justify-center mb-2 ${color}`}>{icon}</div>
//     <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">{label}</p>
//     <p className="font-bold text-gray-800">{value}</p>
//   </div>
// );

// const ActionButton = ({ icon, label, color, onClick }) => (
//   <button onClick={onClick} className="flex flex-col items-center gap-3 group">
//     <div className={`${color} p-5 rounded-full text-white shadow-lg group-hover:scale-110 transition duration-300`}>
//       {icon}
//     </div>
//     <span className="text-sm font-semibold text-gray-700">{label}</span>
//   </button>
// );

// export default FriendDetails;