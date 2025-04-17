document.getElementById('startPicker').addEventListener('click', async () => {
    if (!window.EyeDropper) {
      alert("Your browser doesn't support the EyeDropper API.");
      return;
    }
  
    const eyeDropper = new EyeDropper();
    try {
      const result = await eyeDropper.open();
      const hex = result.sRGBHex;
      const rgba = hexToRgba(hex);
  
      document.getElementById('colorBox').style.backgroundColor = hex;
      document.getElementById('hex').textContent = `HEX: ${hex}`;
      document.getElementById('rgba').textContent = `RGBA: ${rgba}`;
    } catch (err) {
      console.error(err);
    }
  });
  
  function hexToRgba(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, 1)`;
  }
  
