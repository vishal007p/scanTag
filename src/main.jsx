import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import AnimatedCursor from "react-animated-cursor"
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedCursor
        innerSize={8}
        outerSize={40}
        color="255, 255, 255"
        innerScale={2}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{


          backgroundColor: 'white',
          zIndex:'99999',
          mixBlendMode: 'exclusion'

        }}
        innerStyle={{

        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
