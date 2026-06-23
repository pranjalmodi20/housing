import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items = [] }) => {
  return (
    <nav className="flex items-center space-x-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 py-4 overflow-x-auto no-scrollbar">
      <Link to="/" className="flex items-center space-x-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex-shrink-0">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3 h-3 text-slate-300 dark:text-slate-600 flex-shrink-0" />
          {item.href ? (
            <Link
              to={item.href}
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate flex-shrink-0"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-800 dark:text-white font-semibold truncate flex-shrink-0">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
