import React from 'react'

function Aboutus() {
  return <div className='manage-content' >
    <div className='.about-wraper'>
      <div class="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div class="row-about">
        <div class="column">
          <div class="card-about">
            <img src="https://avatars.githubusercontent.com/u/313317?v=4" alt="Jane" style={{ width: "100px",height:"90px"}}/>
            <div class="container-about">
              <h2>Jane Doe</h2>
              <p class="title-about">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button class="button-about">Contact</button></p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card-about">
            <img src="https://static.toiimg.com/photo/msid-73204368/73204368.jpg" alt="Mike" style={{ width: "100px",height:"90px"}} />
            <div class="container-about">
              <h2>Mike Ross</h2>
              <p class="title-about">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p><button class="button-about">Contact</button></p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card-about">
            <img src="https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg" alt="John" style={{ width: "100px",height:"90px"}}/>
            <div class="container-about">
              <h2>John Doe</h2>
              <p class="title-about">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p><button class="button-about">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Aboutus