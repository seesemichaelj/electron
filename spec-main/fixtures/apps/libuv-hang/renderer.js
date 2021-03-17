const count = localStorage.getItem('count');
const { ipcRenderer, run } = window.api;

run().then(() => {
  if (count === '2') {
    ipcRenderer.send('reload-successful');
  } else {
    const newCount = count === null ? '0' : `${parseInt(count, 10) + 1}`;
    localStorage.setItem('count', newCount);
    location.reload();
  }
})
  .catch(console.log);
