document.addEventListener('DOMContentLoaded', () => {
    if ('AmbientLightSensor' in window) {
      const sensor = new AmbientLightSensor();
  
      // Add event listener to monitor changes in ambient light conditions
      sensor.addEventListener('reading', () => {
        const thresholdValue = 50; // Adjust this value based on your desired threshold
  
        // Adjust the glow intensity based on the illuminance value
        if (sensor.illuminance < thresholdValue) {
          document.querySelector('.glow-element').classList.add('glow-active');
        } else {
          document.querySelector('.glow-element').classList.remove('glow-active');
        }
      });
  
      // Start listening to ambient light sensor readings
      sensor.start();
    } else {
      // Fallback for browsers that don't support the Ambient Light Sensor API
      console.log('Ambient Light Sensor not supported in this browser.');
    }
  });
  