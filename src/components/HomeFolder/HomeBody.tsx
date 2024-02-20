import BackGHome from '../../assets/Picture/BackGround/BackGround_Home.png'
import ImgHome from '../../assets/Picture/PicHome/024b7d5e73bbb2-8ed98f521583690431954887e772tuyendung1.jpg'
import ImgHome1 from '../../assets/Picture/PicHome/20649d183ca5f1-bannertrangchu.jpg'

export default function HomeBody() {
  const HomeBody: React.CSSProperties = {
    backgroundImage: `url(${BackGHome})`,
    backgroundColor: 'white',
    backgroundSize: '50% 50%',
    backgroundPosition: 'center bottom',
    height: 'auto',
    backgroundRepeat: 'no-repeat',
    padding: '50px 0'
  }
  const ImgTop: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const FontSize14: React.CSSProperties = {
    fontSize: '14px'
  }
  const ImgBottom: React.CSSProperties = {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const HomeContainer: React.CSSProperties = {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '100px'
  }
  const HomeMain: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column'
  }
  return (
    <div style={HomeContainer}>
      <section style={HomeBody}>
          <div style={HomeMain}>
            <div style={ImgTop}>
              <div>
                <img style={{width: '530px'}} src={ImgHome1} alt="" />
              </div>
              <div style={{padding: '0 15px', maxWidth: '480px', marginLeft: '100px'}}>
                <h3 style={{fontSize: '24px'}}>FROM THE TEA SPROUTS, WE CREATE PASSION</h3>
                <p style={FontSize14}>After 50 years of experience growing and developing the highest quality of tea leaves and coffee beans coupled with our devotion to providing memorable customer experience, Phuc Long has earned the reputation as a pioneer brand having many creative ideas for the coffee and tea industry.</p>
                <p style={FontSize14}>We constantly strive to create the highest quality of tea and coffee products through ceaseless effort and passion. We are truly connected to and contribute deeply to the Vietnam's longstanding culture of drinking coffee and tea.</p>
                <div>
                  <a href="#">Follow</a>
                </div>
              </div>
            </div>
            <div style={ImgBottom}>
              <div>
                <img src={ImgHome} style={{maxWidth: '320px'}} alt="" />
              </div>
              <div style={{padding: '0 15px', maxWidth: '480px', marginRight: '150px'}}> 
                <h3 style={{fontSize: '24px'}}>THE STAFF TEAM IS FULL OF ENTHUSIASM</h3>
                <p style={FontSize14}>During the process of operation and development, Phuc Long Coffee & Tea's management team and staff, for generations, have built and nurtured the passion for tea and coffee with the desire to challenge themselves in the dynamic and creative service F&B.</p>
                <div>
                  <a href="#">JOIN WITH PHUC LONG TEAM</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
