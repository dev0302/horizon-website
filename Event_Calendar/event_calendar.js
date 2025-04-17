// Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCMKsgsvp6gNyLOaOdbWcGltuFIcP_EAtw",
//     authDomain: "eventcalendar-eeaa6.firebaseapp.com",
//     projectId: "eventcalendar-eeaa6",
//     storageBucket: "eventcalendar-eeaa6.appspot.com",
//     messagingSenderId: "913543020019",
//     appId: "1:913543020019:web:925fe28632f4abfe5f6686",
//     measurementId: "G-JKK3CG8PW6"
//   };
  
  // Initialize Firebase
//   const app = firebase.initializeApp(firebaseConfig);
//   const analytics = firebase.analytics();
//   const db = firebase.firestore();
  
  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const monthYearSelector = document.getElementById('monthYearSelector');
    const currentMonthElement = document.getElementById('currentMonth');
    const currentYearElement = document.getElementById('currentYear');
    const monthDropdown = document.getElementById('monthDropdown');
    const calendarDates = document.getElementById('calendarDates');
    const eventDetails = document.getElementById('eventDetails');
    const eventPlaceholder = document.getElementById('eventPlaceholder');
    const eventContent = document.getElementById('eventContent');
    const eventTitle = document.getElementById('eventTitle');
    const eventDate = document.getElementById('eventDate');
    const eventContentText = document.getElementById('eventContentText');
    const eventModal = document.getElementById('eventModal');
    const closeModal = document.getElementById('closeModal');
    const modalOkButton = document.getElementById('modalOkButton');
    const addEventBtn = document.getElementById('addEventBtn');
    const eventFormModal = document.getElementById('eventFormModal');
    const closeFormBtn = document.getElementById('closeFormBtn');
    const eventForm = document.getElementById('eventForm');
    
    // Month names array
    const months = [
      "January", "February", "March", "April", 
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
    
    // Current month and year
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    let events = {}; // Store events data
  
    // Initialize the calendar
    initCalendar();
    
    // Event Listeners
    monthYearSelector.addEventListener('click', function(e) {
      e.stopPropagation();
      monthDropdown.style.display = monthDropdown.style.display === 'grid' ? 'none' : 'grid';
    });
    
    // Close month dropdown when clicking outside
    document.addEventListener('click', function() {
      monthDropdown.style.display = 'none';
    });
    
    // Month selection in dropdown
    const monthOptions = document.querySelectorAll('.month-option');
    monthOptions.forEach(option => {
      option.addEventListener('click', function(e) {
        e.stopPropagation();
        currentMonth = parseInt(this.dataset.month);
        currentMonthElement.textContent = months[currentMonth];
        
        // Update active month in dropdown
        monthOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        
        // Reload events and update calendar
        loadEvents().then(updateCalendar).catch(handleError);
        monthDropdown.style.display = 'none';
      });
    });
    
    // Add Event button click handler
    addEventBtn.addEventListener('click', function() {
      eventFormModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      // Set default date to today
      const today = new Date().toISOString().split('T')[0];
      document.getElementById('newEventDate').value = today;
    });
    
    // Close form button
    closeFormBtn.addEventListener('click', function() {
      eventFormModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
    
    // Close form when clicking outside
    eventFormModal.addEventListener('click', function(e) {
      if (e.target === eventFormModal) {
        eventFormModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
    
    // Form submission handler
    eventForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      try {
        // Get form values
        const date = document.getElementById('newEventDate').value;
        const time = document.getElementById('newEventTime').value;
        const title = document.getElementById('newEventTitle').value;
        const description = document.getElementById('newEventDescription').value;
        const location = document.getElementById('newEventLocation').value;
        
        // Validate required fields
        if (!date || !time || !title) {
          throw new Error("Please fill all required fields");
        }
        
        // Parse date
        const dateObj = new Date(date);
        const month = dateObj.getMonth();
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        
        // Format time (convert to 12-hour format)
        const timeParts = time.split(':');
        let hours = parseInt(timeParts[0]);
        const minutes = timeParts[1];
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const formattedTime = `${hours}:${minutes} ${ampm}`;
        const formattedDate = `${months[month]} ${day}, ${year} • ${formattedTime}`;
        
        // Prepare event data for Firestore
        const eventData = {
          title: title,
          date: formattedDate,
          description: description,
          location: location,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          dateKey: `${month}-${day}`,
          yearMonth: `${year}-${month}`,
          rawDate: date,
          rawTime: time
        };
        
        // Add document to Firestore
        await db.collection('events').add(eventData);
        
        // Close form and reset
        eventFormModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.reset();
      } catch (error) {
        console.error("Error adding event:", error);
        alert(`Error: ${error.message}`);
      }
    });
    
    // Modal close handlers
    eventModal.addEventListener('click', function(e) {
      if (e.target === eventModal) {
        closeEventModal();
      }
    });
    // Core Functions
    
    /**
     * Initialize the calendar with current month/year and set up Firestore listener
     */
    async function initCalendar() {
      try {
        // Set current month and year in UI
        currentMonthElement.textContent = months[currentMonth];
        currentYearElement.textContent = currentYear;
        
        // Set up Firestore query for current month's events
        const q = db.collection('events')
          .where('yearMonth', '==', `${currentYear}-${currentMonth}`)
          .orderBy('timestamp');
        
        // Set up real-time listener for events
        q.onSnapshot(
          (snapshot) => {
            // When data changes, reload events and update calendar
            loadEvents().then(updateCalendar).catch(handleError);
          },
          (error) => {
            handleError(error, true);
          }
        );
        
        // Initial load of events
        await loadEvents();
        updateCalendar();
      } catch (error) {
        handleError(error);
      }
    }
    
    /**
     * Load events from Firestore for the current month
     */
    async function loadEvents() {
      try {
        // Reset events object
        events = {};
        
        // Create query for current month's events
        const q = db.collection('events')
          .where('yearMonth', '==', `${currentYear}-${currentMonth}`)
          .orderBy('timestamp');
        
        // Execute query
        const querySnapshot = await q.get();
        
        // Process each document
        querySnapshot.forEach(doc => {
          const data = doc.data();
          // Store event data with dateKey as the key
          events[data.dateKey] = {
            id: doc.id,
            title: data.title,
            date: data.date,
            description: data.description ? `<p>${data.description}</p>` : '',
            location: data.location
          };
          
          // Add location to description if available
          if (data.location) {
            events[data.dateKey].description += 
              `<p><strong>📍 Location:</strong> ${data.location}</p>`;
          }
        });
      } catch (error) {
        throw error;
      }
    }
    
    /**
     * Update the calendar UI with dates and events
     */
    function updateCalendar() {
      // Calculate calendar grid parameters
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
      const daysFromPrevMonth = (firstDay === 0 ? 6 : firstDay - 1);
      
      // Clear existing dates
      calendarDates.innerHTML = '';
      
      // Add days from previous month (greyed out)
      for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
        calendarDates.appendChild(createDateElement(prevMonthDays - i, true));
      }
      
      // Add days for current month
      for (let i = 1; i <= daysInMonth; i++) {
        const dateElement = createDateElement(i, false);
        const eventKey = `${currentMonth}-${i}`;
        
        // If event exists for this date, add appropriate classes and click handler
        if (events[eventKey]) {
          dateElement.classList.add('calendar__date--has-event');
          dateElement.addEventListener('click', () => showEventDetails(events[eventKey]));
        } else {
          // For dates without events
          dateElement.addEventListener('click', function() {
            // On desktop, show placeholder if no event
            if (window.innerWidth > 768) {
              eventPlaceholder.style.display = 'flex';
              eventContent.style.display = 'none';
            }
          });
        }
        
        calendarDates.appendChild(dateElement);
      }
      
      // Calculate days needed from next month to complete grid
      const totalCells = Math.ceil((daysFromPrevMonth + daysInMonth) / 7) * 7;
      const daysFromNextMonth = totalCells - (daysFromPrevMonth + daysInMonth);
      
      // Add days from next month (greyed out)
      for (let i = 1; i <= daysFromNextMonth; i++) {
        calendarDates.appendChild(createDateElement(i, true));
      }
    }
    
    /**
     * Create a date element for the calendar grid
     * @param {number} day - The day number to display
     * @param {boolean} isGrey - Whether to grey out the date (not in current month)
     * @returns {HTMLElement} The created date element
     */
    function createDateElement(day, isGrey) {
      const dateElement = document.createElement('div');
      dateElement.className = 'calendar__date' + (isGrey ? ' calendar__date--grey' : '');
      dateElement.innerHTML = `<span>${day}</span>`;
      return dateElement;
    }
    
    /**
     * Display event details in the appropriate panel/modal
     * @param {object} event - The event data to display
     */
    function showEventDetails(event) {
      // Desktop view - show in side panel
      if (window.innerWidth > 768) {
        eventPlaceholder.style.display = 'none';
        eventContent.style.display = 'block';
        eventTitle.textContent = event.title;
        eventDate.textContent = event.date;
        eventContentText.innerHTML = event.description;
      } 
      // Mobile view - show in modal
      else {
        // Mobile view - create modal content
        const modalContent = `
        <div class="event-details__header">
          <h3 class="event-details__title">${event.title}</h3>
          <button class="event-modal__close">&times;</button>
        </div>
        <div class="event-details__date">${event.date}</div>
        <div class="event-details__content">${event.description}</div>
        <div class="event-details__footer">
          <button class="event-modal__button event-modal__button--primary">Got it!</button>
        </div>
      `;
      document.getElementById('mobileEventDetails').innerHTML = modalContent;
      eventModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';

      // Add event listeners to new elements
      document.querySelector('.event-modal__close').addEventListener('click', closeEventModal);
      document.querySelector('.event-modal__button').addEventListener('click', closeEventModal);
      }
    }
    
    /**
     * Close the mobile event modal
     */
    function closeEventModal() {
      document.getElementById('eventModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    /**
     * Handle errors with appropriate user feedback
     * @param {Error} error - The error object
     * @param {boolean} isFirestoreError - Whether it's a Firestore-specific error
     */
    function handleError(error, isFirestoreError = false) {
      console.error("Error:", error);
      let message = error.message;
      
      // Special handling for Firestore errors
      if (isFirestoreError && error.code === 'failed-precondition') {
        message += "\n\nThis error usually means you need to create a Firestore index." +
                   "\nCheck your browser console for a link to create it automatically." +
                   "\nThe index may take a few minutes to build after creation.";
      }
      
      alert(message);
    }
  });