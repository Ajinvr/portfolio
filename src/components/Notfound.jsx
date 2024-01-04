import '../Notfound.css';
function Notfound() {
  return (
    <div className='pagemain'>
      <div>
        <div>
          <h1 className='pagesub'>Oops! <br /> the link <br/> is broken</h1>
        </div>

        <div className='homebtn'>
          <a href="/"><button className='pagesubbtn'>
            GO BACK TO HOME
          </button></a>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
