/**
 * Search Form Skeleton
 * Matches the structure of the search form
 */

import Skeleton from './Skeleton';

export default function SearchFormSkeleton() {
  return (
    <div className="ta-search-form">
      {/* Header */}
      <div className="ta-search-form__header">
        <Skeleton width={120} height={28} className="mb-2" />
        <Skeleton width={200} height={16} />
      </div>

      {/* Form fields grid */}
      <div className="ta-search-form__grid">
        {/* From field */}
        <div className="ta-field">
          <Skeleton width={60} height={16} className="mb-2" />
          <div className="ta-field__control">
            <Skeleton width={16} height={16} borderRadius="50%" />
            <Skeleton width="100%" height={40} borderRadius="0.375rem" />
          </div>
        </div>

        {/* To field */}
        <div className="ta-field">
          <Skeleton width={40} height={16} className="mb-2" />
          <div className="ta-field__control">
            <Skeleton width={16} height={16} borderRadius="50%" />
            <Skeleton width="100%" height={40} borderRadius="0.375rem" />
          </div>
        </div>

        {/* Date field */}
        <div className="ta-field">
          <Skeleton width={100} height={16} className="mb-2" />
          <div className="ta-field__control">
            <Skeleton width={16} height={16} borderRadius="50%" />
            <Skeleton width="100%" height={40} borderRadius="0.375rem" />
          </div>
        </div>

        {/* Time field */}
        <div className="ta-field">
          <Skeleton width={50} height={16} className="mb-2" />
          <div className="ta-field__control">
            <Skeleton width={16} height={16} borderRadius="50%" />
            <Skeleton width="100%" height={40} borderRadius="0.375rem" />
          </div>
        </div>
      </div>

      {/* Submit button */}
      <div className="ta-search-form__actions">
        <Skeleton width="100%" height={48} borderRadius="0.375rem" />
      </div>
    </div>
  );
}

