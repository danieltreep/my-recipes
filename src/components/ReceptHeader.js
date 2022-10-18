import React from 'react'

export default function ReceptHeader({duur, handleReturn}) {
  return (
    <header className='receptHeader'>
        <div className='duurHeader'>
        <div className='terug' onClick={handleReturn}>
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.6355 7.28333L7.96924 10.5801M16.4888 7.28333H4.6355H16.4888ZM4.6355 7.28333L7.96924 4.29102L4.6355 7.28333Z" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p>Terug</p>
        </div>
        
          <div className='duur'>
            <i>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12Z" stroke="#1B1B1B" strokeWidth="1.5"/>
                <path d="M12 7.5V12L15 15" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </i>
            
            <p>{duur.aantal} {duur.eenheid}</p>
            <i>
              <svg width="20" height="20" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.164 6C10.164 6.55228 10.5777 7 11.088 7C11.5983 7 12.012 6.55228 12.012 6C12.012 5.44772 11.5983 5 11.088 5C10.5777 5 10.164 5.44772 10.164 6Z" fill="#1B1B1B"/>
                <path d="M10.164 12C10.164 12.5523 10.5777 13 11.088 13C11.5983 13 12.012 12.5523 12.012 12C12.012 11.4477 11.5983 11 11.088 11C10.5777 11 10.164 11.4477 10.164 12Z" fill="#1B1B1B"/>
                <path d="M10.164 18C10.164 18.5523 10.5777 19 11.088 19C11.5983 19 12.012 18.5523 12.012 18C12.012 17.4477 11.5983 17 11.088 17C10.5777 17 10.164 17.4477 10.164 18Z" fill="#1B1B1B"/>
              </svg>

            </i>
          </div>
          
        </div>   
        
      </header>
  )
}
