import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

// Dummy data for demonstration
const dummyRecords = [
  { id: 1, title: 'Song 1', mode: 'western' },
  { id: 2, title: 'Song 2', mode: 'classical' },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => navigate('/create')}>Create New Record</button>
      <ul>
        {dummyRecords.map(record => (
          <li key={record.id}>
            <span>{record.title} ({record.mode})</span>
            <button onClick={() => navigate(`/song/${record.id}`)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
