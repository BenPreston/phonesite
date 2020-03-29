import React from 'react';
import Phone from './Phone';

function Phones({phones, openPopup}) {

  return (
    <section className="results">
      <h2>Phones</h2>
        <div className="phones">
          {phones.map((phone, i ) => 
                  <Phone key={phone.id} phone={phone} openPopup={openPopup}/> 
            )}
      </div>
    </section> 
  )
}

export default Phones
