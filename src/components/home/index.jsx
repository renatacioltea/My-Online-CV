import React from "react";

function Home() {
  return (
  <React.Fragment>
    <section className="introduction">

      <div className="aside-text">
        <p>Hey there, I`m</p>
        <br />
        <p>Renata</p>
        <br />
        <p>Accountant & Aspiring Web developer</p>
      </div>

      <a className="find-more-about-me" href="#aboutme">About Me</a>

    </section>

    <section className="about-me" id="aboutme">

      <h3>ABOUT ME</h3>

      <div className="short-description">
        <p>
          My name is Renata. I would describe myself as an outgoing,
          hard-working, conscentious person, who is always open to new
          challenges. This year I decided that I want to make a change in my
          career, so I enroled the front-end development course at Scoala
          informala de It. My purpose is to work in a field that has a future 
          perspective, that always brings something new and creative.
          This website sums up all the interesting things I have learned so far
          taking this course.
        </p>
        <p>In my free-time, </p>
        <p>I like :</p>

      </div>

      <div className="cards grid">

        <div className="card one-third">
          <i className="fas fa-music"></i>
          <div>
            <h4>Listening to music</h4>
            <br />
            <p>
              I like music because it keeps me calm and cool. It makes me happy.
              I listen to music to manage my moods, to enhance a workout, to
              bond with other people and as a distraction from daily life.
            </p>
          </div>
        </div>

        <div className="card one-third">
          <i className="fas fa-map-marked-alt"></i>
          <div>
            <h4>Travelling</h4> <br />
            <p>
              It gives me a good opportunity to learn a lot about the history of
              the country I visit, to see cultural and historical places, to
              meet people of different nationalities, to learn a lot about their
              traditions, customs and culture.
            </p>
          </div>
        </div>

        <div className="card one-third">
          <i className="fas fa-book-reader"></i>
          <div>
            <h4>Reading</h4>
            <br />
            <p>
              I love reading, because it expands my horizons. It gives me
              something new and different to enjoy every time I pick up a book.
              Reading gives me a chance to step away from the real world and
              enter into someone else's.
            </p>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>);
}

export default Home;
