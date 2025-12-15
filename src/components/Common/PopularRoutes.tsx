/* eslint-disable react/no-unescaped-entities */
'use client'

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useStateMachine } from 'little-state-machine';
import { updateSearch, type SearchState } from '../../utils/updateActions';

export type PopularRoute = {
  from: string;
  to: string;
  label?: string;
};

const DEFAULT_ROUTES: PopularRoute[] = [
  { from: 'Yaounde', to: 'Douala' },
  { from: 'Douala', to: 'Yaounde' },
  { from: 'Bafoussam', to: 'Douala' },
  { from: 'Douala', to: 'Bafoussam' },
  { from: 'Buea', to: 'Douala' },
  { from: 'Douala', to: 'Buea' },
  { from: 'Bamenda', to: 'Douala' },
  { from: 'Douala', to: 'Bamenda' },
];

export default function PopularRoutes({
  routes,
  title,
  onSelect,
}: {
  routes?: PopularRoute[];
  title?: string;
  onSelect?: (route: PopularRoute) => void;
}) {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions } = useStateMachine({ updateSearch });

  const items = useMemo(() => routes ?? DEFAULT_ROUTES, [routes]);

  const handleSelect = (route: PopularRoute) => {
    const payload: SearchState = {
      from: route.from,
      to: route.to,
      journeyDate: moment().format('YYYY-MM-DD'),
      // default to next whole hour (gives a better chance of results vs "now")
      departureTime: moment().add(1, 'hour').startOf('hour').format('HH:mm'),
    };
    actions.updateSearch(payload);
    onSelect?.(route);
    router.push('/trip-search');
  };

  return (
    <div className="ta-popular-routes">
      <div className="ta-popular-routes__header">
        <h6 className="ta-popular-routes__title">
          {title || t('popular_routes') || 'Popular routes'}
        </h6>
      </div>
      <div className="ta-popular-routes__chips" role="list">
        {items.map((r) => (
          <button
            key={`${r.from}-${r.to}`}
            type="button"
            className="ta-chip"
            onClick={() => handleSelect(r)}
            role="listitem"
          >
            {r.label || `${r.from} → ${r.to}`}
          </button>
        ))}
      </div>
    </div>
  );
}


