import './style.scss';

function AboutUs() {
  return (
    <main className="AboutUs">
      <div className='MainContent'>
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eos dolorum voluptatibus, similique perspiciatis ipsa molestias. Quaerat voluptatibus sapiente dicta id eveniet quos nemo iure numquam. Ipsa possimus quae exercitationem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eos dolorum voluptatibus, similique perspiciatis ipsa molestias. Quaerat voluptatibus sapiente dicta id eveniet quos nemo iure numquam. Ipsa possimus quae exercitationem.</p>
      </div>
      <div className="quote">
        <div className="quote-inner">
          <img src={"/Avatar.jpg"} />
          <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nulla libero provident omnis delectus ratione, reprehenderit nisi corrupti. Eligendi molestias, minima id suscipit tempora consequuntur at aliquid rerum. Dolorum, facilis.</q>
        </div>
      </div>
      <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,128L40,154.7C80,181,160,235,240,261.3C320,288,400,288,480,288C560,288,640,288,720,256C800,224,880,160,960,144C1040,128,1120,160,1200,144C1280,128,1360,64,1400,32L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </main>
  );
}

export default AboutUs;
