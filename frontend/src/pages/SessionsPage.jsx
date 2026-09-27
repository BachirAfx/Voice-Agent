import './SessionsPage.css';
import NeoButton from '../components/NeoButton';

const MOCK_SESSIONS = [
  { id: 1, title: 'Project Voxa Planning', date: '2026-09-21', duration: '12:45' },
  { id: 2, title: 'Frontend Hackathon Sync', date: '2026-09-20', duration: '45:12' },
  { id: 3, title: 'AssemblyAI API Integration', date: '2026-09-18', duration: '08:30' },
];

export default function SessionsPage() {
  return (
    <div className="voxa-sessions">
      <div className="voxa-sessions__header">
        <h2 className="voxa-sessions__title">All Sessions</h2>
        <div className="voxa-sessions__filters">
           <NeoButton variant="secondary" size="small">All</NeoButton>
           <NeoButton variant="secondary" size="small">Recent</NeoButton>
           <NeoButton variant="secondary" size="small">Favorited</NeoButton>
        </div>
      </div>
      <div className="voxa-sessions__list">
        {MOCK_SESSIONS.map(session => (
          <div key={session.id} className="voxa-session-card">
            <div className="voxa-session-card__info">
              <h4>{session.title}</h4>
              <p>{session.date} • {session.duration}</p>
            </div>
            <NeoButton variant="tertiary" size="small">Open</NeoButton>
            <NeoButton variant="secondary" size="small">Share</NeoButton>
            <NeoButton variant="secondary" size="small">Delete</NeoButton>
          </div>
        ))}
      </div>
    </div>
  );
}
