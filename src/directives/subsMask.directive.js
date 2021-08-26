export default {
  mounted(el) {
    let value = el.innerHTML;

    if (value.length === 4) {
      el.innerHTML = `
        +${value[0]} ${value[1] + value[2] + value[3]} 
      `;
    } else if (value.length === 5) {
      el.innerHTML = `
        +${value[0] + value[1]} ${value[2] + value[3] + value[4]}
      `;
    } else if (value.length === 6) {
      el.innerHTML = `
        +${value[0] + value[1] + value[2]} ${value[3] + value[4] + value[5]} 
      `;
    } else if (value.length === 7) {
      el.innerHTML = `
        +${value[0]} ${value[1] + value[2] + value[3]} ${value[4] +
        value[5] +
        value[6]} 
      `;
    } else {
      el.innerHTML = "+" + value;
    }
  },
};
