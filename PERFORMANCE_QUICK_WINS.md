# Performance Quick Wins - Implementation Guide

## 🚀 Quick Wins (Can be done in 1-2 hours)

### 1. Replace moment.js with date-fns (30 minutes)

**Why:** moment.js is 70KB and deprecated. date-fns is tree-shakeable and smaller.

**Steps:**

1. Install date-fns:
```bash
npm install date-fns
```

2. Create a date utility file:
```tsx
// src/utils/dateHelpers.ts
import { format, parseISO } from 'date-fns';

export const formatDate = (date: string | Date, formatStr: string = 'yyyy-MM-dd'): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr);
};

export const formatTime = (time: string | Date, formatStr: string = 'HH:mm'): string => {
  const dateObj = typeof time === 'string' ? parseISO(`2000-01-01T${time}`) : time;
  return format(dateObj, formatStr);
};
```

3. Replace moment imports:
```tsx
// ❌ Before
import moment from "moment";
moment(date).format('YYYY-MM-DD');

// ✅ After
import { formatDate } from '@/utils/dateHelpers';
formatDate(date, 'yyyy-MM-dd');
```

**Files to update:**
- `src/pages/Users/SearchResults.tsx`
- `src/pages/Users/TripSearch.tsx`
- Any other files using moment

**Impact:** ~70KB bundle size reduction

---

### 2. Lazy Load PDF Libraries (20 minutes)

**Why:** html2canvas and jspdf are only needed when downloading tickets (~350KB total).

**Steps:**

1. Update SearchResults.tsx:
```tsx
// ❌ Remove these imports
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// ✅ Update downloadTicket function
const downloadTicket = async (): Promise<void> => {
  const input = document.getElementById('ticket-info');
  if (!input) return;

  try {
    // Dynamically import only when needed
    const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
      import('html2canvas'),
      import('jspdf')
    ]);

    const canvas = await html2canvas(input, { 
      logging: false, 
      useCORS: true 
    });
    
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      format: "a4",
      unit: "mm",
    });
    
    pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
    pdf.save("ticket.pdf");
    
    setModalConfirm({ modal_static: false });
    setWorking(false);
  } catch (error) {
    console.error('Error generating PDF:', error);
    toast.error('Failed to download ticket');
  }
};
```

**Impact:** ~350KB bundle size reduction on initial load

---

### 3. Lazy Load Socket.io (15 minutes)

**Why:** Socket.io is only needed on the search results page.

**Steps:**

1. Update SearchResults.tsx:
```tsx
// ❌ Remove this import
// import { io, Socket } from 'socket.io-client';

// ✅ Update socket initialization
useEffect(() => {
  let socket: Socket | null = null;
  
  const initSocket = async () => {
    const { io } = await import('socket.io-client');
    const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_URL || 
                     process.env.NEXT_PUBLIC_API_URL || 
                     "https://api.bookontransapp.com";
    
    socket = io(ENDPOINT);
    
    socket.on('connect', () => {
      console.log('Socket connected');
    });
    
    // Add your socket event handlers here
    // socket.on('trip-update', handleTripUpdate);
  };
  
  initSocket();
  
  return () => {
    if (socket) {
      socket.disconnect();
    }
  };
}, []);
```

**Impact:** ~50KB bundle size reduction

---

### 4. Lazy Load Modals (20 minutes)

**Why:** Modals are only needed when user interacts, not on initial page load.

**Steps:**

1. Update SearchResults.tsx:
```tsx
// ❌ Remove these imports
// import ConfirmationModal from '../../components/Modals/ConfirmationModal';
// import ReservationModal from '../../components/Modals/ReservationModal';
// import SummaryModal from '../../components/Modals/SummaryModal';

// ✅ Add dynamic imports at top of component
import dynamic from 'next/dynamic';

const ConfirmationModal = dynamic(
  () => import('../../components/Modals/ConfirmationModal'),
  { 
    ssr: false,
    loading: () => null // Or a loading spinner
  }
);

const ReservationModal = dynamic(
  () => import('../../components/Modals/ReservationModal'),
  { 
    ssr: false,
    loading: () => null
  }
);

const SummaryModal = dynamic(
  () => import('../../components/Modals/SummaryModal'),
  { 
    ssr: false,
    loading: () => null
  }
);
```

**Impact:** Faster initial page load, better code splitting

---

### 5. Optimize Image Loading (15 minutes)

**Why:** Some images might not be using Next.js Image optimization.

**Steps:**

1. Check all image usage:
```bash
# Find all img tags
grep -r "<img" src/ --include="*.tsx" --include="*.ts"
```

2. Replace with Next.js Image:
```tsx
// ❌ Before
<img src={heroImg} alt="Hero" />

// ✅ After
import Image from 'next/image';
<Image 
  src={heroImg} 
  alt="Hero" 
  width={800} 
  height={600}
  priority // For above-the-fold images
/>
```

3. Add priority to critical images:
- Logo in header: `priority={true}`
- Hero image: `priority={true}`
- Above-the-fold images: `priority={true}`

**Impact:** Better image optimization, faster LCP

---

## 📊 Total Expected Impact

After implementing all quick wins:
- **Bundle Size Reduction:** ~470KB (uncompressed)
- **Initial Load Time:** 30-40% faster
- **Time to Interactive:** 20-30% faster

---

## ✅ Verification

After implementing, verify improvements:

1. **Check bundle size:**
```bash
npm run build
# Check .next/analyze/ or use bundle analyzer
```

2. **Run Lighthouse:**
- Open Chrome DevTools
- Go to Lighthouse tab
- Run performance audit
- Compare before/after scores

3. **Check Network tab:**
- Open DevTools → Network
- Reload page
- Check total bundle size
- Should see reduction in initial JS bundle

---

## 🎯 Next Steps

After quick wins, move to:
1. CSS optimization (combine files, critical CSS)
2. Server Component migration
3. Request deduplication
4. Font optimization

See `PERFORMANCE_REVIEW.md` for full details.

