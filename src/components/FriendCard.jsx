import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {
  const statusStyles = {
    'overdue': 'bg-red-100 text-red-600',
    'almost due': 'bg-yellow-100 text-yellow-600',
    'on-track': 'bg-green-100 text-green-600',
  };

  return (
    <Link to={`/friend/${friend.id}`} className="block group">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition h-full">
        <img src={friend.picture} alt={friend.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg group-hover:text-indigo-600 transition">{friend.name}</h3>
            <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-full ${statusStyles[friend.status]}`}>
              {friend.status}
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-3">Days since contact: <span className="font-semibold">{friend.days_since_contact}</span></p>
          <div className="flex flex-wrap gap-2">
            {friend.tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md italic">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;