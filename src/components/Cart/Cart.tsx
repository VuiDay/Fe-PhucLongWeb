import  useStore, { StoreState } from "../../store/Store"


export default function Cart() {
  const {dataChild} = useStore((state: StoreState)=> {
    return {dataChild: state.dataChild}
  })
  const CartMain: React.CSSProperties = {
    position: 'absolute',
    overflow: 'auto',
    width: '250px',
    height: 'auto',
    maxHeight: '300px',
    display: 'flex',
    backgroundColor: 'white',
    top: '70px',
    flexWrap: 'wrap'
  }
  const CardBody: React.CSSProperties = {
    display: 'flex'
  }
  const CardText: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
  return (
    <div style={CartMain}>
        {dataChild.map((item)=> 
        <div key={item.id}>
          <b style={{width: '100%', height: '2px', backgroundColor: '#ccc'}}></b>
          <div style={CardBody}>
            <div>
              <img style={{width: '50px'}} src={item.img} alt="" />
            </div>
            <div style={CardText}>
              <h6>{item.name}</h6>
              <span>{item.price}</span>
              <p>{item.quantity}</p>
            </div>
          </div>
        </div>
        )}
    </div>
  )
}
