import React from 'react'
import './App.css'

const tg = window.Telegram.WebApp;

const App = () => {

  React.useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close();
  }

  return (
    <div>
      work
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default App