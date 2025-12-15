'use client'

import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { fr } from "date-fns/locale/fr";
import { enGB as en } from "date-fns/locale/en-GB";
import { ptBR } from "date-fns/locale/pt-BR";
import { useStateMachine } from "little-state-machine";
import { updateSearch, SearchState } from "../../utils/updateActions";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import moment from "moment";
import Select, { StylesConfig } from 'react-select';
import { useForm } from "react-hook-form";
import type { Trip } from "../../interfaces/trips.interface";
import { CalendarDays, Clock, MapPin, Search as SearchIcon } from 'lucide-react';

interface SearchProps {
  from?: string;
  initialFrom?: string;
  initialTo?: string;
  initialJourneyDate?: Date;
  initialDepartureTime?: Date;
  text?: string;
  setData?: (data: Trip[]) => void;
}

interface TownOption {
  label: string;
  value: string;
}

interface SearchFormData {
  from?: string;
  to?: string;
  journeyDate?: Date;
}

const towns: TownOption[] = [
  { label: 'Bafoussam', value: 'Bafoussam' },
  { label: 'Bamenda', value: 'Bamenda' },
  { label: 'Buea', value: 'Buea' },
  { label: 'Douala', value: 'Douala' },
  { label: 'Dschang', value: 'Dschang' },
  { label: 'Edea', value: 'Edea' },
  { label: 'Garoua', value: 'Garoua' },
  { label: 'Kribi', value: 'kribi' },
  { label: 'Kumba', value: 'Kumba' },
  { label: 'Limbe', value: 'Limbe' },
  { label: 'Maroua', value: 'Maroua' },
  { label: 'Nkongsamba', value: 'Nkongsamba' },
  { label: 'Yaounde', value: 'Yaounde' },
];

const Search: React.FC<SearchProps> = ({
  from,
  initialFrom,
  initialTo,
  initialJourneyDate,
  initialDepartureTime,
  text,
  setData,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date>(initialJourneyDate ?? new Date());
  // Default to the top of the current hour so it matches our seeded trip times (HH:mm with :00).
  const [depDate, setDepDate] = useState<Date>(initialDepartureTime ?? moment().startOf('hour').toDate());

  const initialFromValue = initialFrom ?? from;
  const [toCity, setToCity] = useState<TownOption | null>(
    towns.find(t => t.value === (initialTo ?? 'Douala')) || null
  );
  const [selectedOption, setSelectedOption] = useState<TownOption | null>(
    towns.find(t => t.value === (initialFromValue ?? 'Yaounde')) || null
  );
  const [language, setLanguage] = useState<string>('eng');

  const {
    getValues,
    handleSubmit,
  } = useForm<SearchFormData>();

  const { actions } = useStateMachine({ updateSearch });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const key = localStorage.getItem('i18nextLng');
      setLanguage(key || 'eng');
    }
  }, []);

  const formData: SearchState = {
    from: selectedOption?.value,
    to: toCity?.value,
    journeyDate: moment(startDate).format('YYYY-MM-DD'),
    departureTime: moment(depDate).format('HH:mm'),
  };

  const searchTrip = async (): Promise<void> => {
    actions.updateSearch(formData);
    if (!formData.from || !formData.to || !formData.journeyDate || !formData.departureTime) {
      toast.error('All fields are required');
      return;
    }
    router.push("/trip-search");
  };

  const searchAnotherTrip = async (): Promise<void> => {
    actions.updateSearch(formData);
    const fromValue = getValues("from");
    const toValue = getValues("to");
    const dateValue = getValues("journeyDate");
    
    try {
      const { data } = await axios.get<{ error: boolean; message: string; data?: Trip[] }>(`api/v1/trips/trip-search`, {
        params: { from: fromValue, to: toValue, journeyDate: dateValue }
      });
      if (data?.error) {
        toast.error(data.message);
      } else if (data.data && setData) {
        setData(data.data);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast.error(err.message || 'Search failed');
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  // Keep react-select styles minimal; the visual design is handled in CSS via classNamePrefix.
  const customStyles: StylesConfig<TownOption, false> = {
    option: (defaultStyles) => ({ ...(defaultStyles as any) }),
    control: (defaultStyles) => ({ ...(defaultStyles as any) }),
    singleValue: (defaultStyles) => ({ ...(defaultStyles as any) }),
  };

  return (
    <form
      className="ta-search-form"
      onSubmit={text === 'book' ? handleSubmit(searchTrip) : handleSubmit(searchAnotherTrip)}
    >
      <div className="ta-search-form__header">
        <div className="ta-search-form__title">{t('search') || 'Search'}</div>
        <div className="ta-search-form__hint">{t('find_trip_hint') || 'Pick your route, date, and time.'}</div>
      </div>

      <div className="ta-search-form__grid">
        <div className="ta-field">
          <label className="ta-field__label">{t('from')}</label>
          <div className="ta-field__control">
            <span className="ta-field__icon" aria-hidden="true"><MapPin size={16} /></span>
            <Select<TownOption, false>
              className="ta-select"
              classNamePrefix="ta-select"
              options={towns}
              onChange={(option) => setSelectedOption(option)}
              placeholder={selectedOption?.label}
              styles={customStyles}
              isSearchable
              defaultValue={initialFromValue ? towns.find(t => t.value === initialFromValue) : selectedOption}
              value={selectedOption}
            />
          </div>
        </div>

        <div className="ta-field">
          <label className="ta-field__label">{t('to')}</label>
          <div className="ta-field__control">
            <span className="ta-field__icon" aria-hidden="true"><MapPin size={16} /></span>
            <Select<TownOption, false>
              className="ta-select"
              classNamePrefix="ta-select"
              options={towns}
              onChange={(option) => setToCity(option)}
              placeholder={toCity?.label}
              styles={customStyles}
              isSearchable
              defaultValue={toCity}
              value={toCity}
            />
          </div>
        </div>

        <div className="ta-field">
          <label className="ta-field__label">{t('journey_date')}</label>
          <div className="ta-field__control">
            <span className="ta-field__icon" aria-hidden="true"><CalendarDays size={16} /></span>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => date && setStartDate(date)}
              minDate={moment().toDate()}
              locale={language === 'fr' ? fr : en}
              placeholderText={moment(startDate).format('MM-DD-YYYY')}
              className="form-control ta-input"
            />
          </div>
        </div>

        <div className="ta-field">
          <label className="ta-field__label">{t('time')}</label>
          <div className="ta-field__control">
            <span className="ta-field__icon" aria-hidden="true"><Clock size={16} /></span>
            <DatePicker
              selected={depDate}
              onChange={(date: Date | null) => date && setDepDate(date)}
              minDate={moment().toDate()}
              placeholderText={moment(depDate).format('HH:mm')}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="Time"
              locale={ptBR}
              dateFormat="p"
              timeFormat="p"
              className="form-control ta-input"
            />
          </div>
        </div>
      </div>

      <div className="ta-search-form__actions">
        <Button type="submit" color="primary" className="w-100 ta-search-btn">
          <SearchIcon size={18} />
          <span>{text === 'book' ? (t('search') || 'Search') : (t('modify_search') || 'Modify search')}</span>
        </Button>
      </div>
    </form>
  );
};

export default Search;
