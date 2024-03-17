function getPrayerTimes() {
    const location = "Yogyakarta"; // Ganti dengan lokasi yang diinginkan
    
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `http://api.aladhan.com/v1/timingsByCity?city=${location}&country=YOUR_COUNTRY_CODE&method=1&school=1&apiKey=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const timings = data.data.timings;
        Swal.fire({
          title: "Prayer Times",
          html: `
            <p>Imsak: ${timings.Imsak}</p>
            <p>Fajr: ${timings.Fajr}</p>
            <p>Dhuhr: ${timings.Dhuhr}</p>
            <p>Asr: ${timings.Asr}</p>
            <p>Maghrib: ${timings.Maghrib}</p>
            <p>Isha: ${timings.Isha}</p>
          `
        });
      })
      .catch(error => {
        console.error('There was an error!', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to fetch prayer times. Please try again later.'
        });
      });
  }