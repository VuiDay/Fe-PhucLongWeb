import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useStore, {StoreState} from '../../store/Store';
import { useEffect } from 'react';
import '../../assets/DrinkCSS/Water.css'

export default function Water({checkType, checkArrange, saveData}: {checkType: string, checkArrange: string, saveData: string}) {
 const {data, error, fetchDataFirebase, addData} = useStore((state: StoreState) => {
    return { data: state.dataFb, error: state.error, fetchDataFirebase: state.fetchDataFirebase, addData: state.addData};
  });
  const changeSaveData = (a: string)=>{
    return a[0].toUpperCase() + saveData.slice(1)
  }
  useEffect(()=>{
    fetchDataFirebase()
  }, []) 
  const dataDrink = data.filter((item)=> item.type !== "dinning" && item.type !== "cake")
  const arrangeData = ()=> {
    let filterData = dataDrink
    if(saveData) {
      filterData = dataDrink.filter((item)=> item.name.includes(changeSaveData(saveData)))
    } 
    if(checkArrange === 'lowprice') {
      return filterData.sort((a, b)=> a.price - b.price)
    } else if(checkArrange === 'expensive') {
      return filterData.sort((a, b)=> b.price - a.price)
    }else {
      return filterData
    }
  }
  const x = window.innerWidth*0.8
  const CardBody: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0'
  }
  const CardMain: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '68%',
    margin: '0 auto'
  }
  const CardItem: React.CSSProperties = {
    width: `calc((${x}px - (10px*4))/5)`,
    border: 'none', 
    margin: '10px 10px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
  if(error) {
    return (
      <p>{error}</p>
    )
  } else if(!data.length) {
    return (
      <p>Loading...</p>
    ) 
  } else { 
    return (
      <div style={CardMain}>
          {arrangeData().map((item)=> {
            if(!checkType || item.type === checkType) {
              return (
                <Card key={item.id} style={CardItem}>
                    <Card.Img style={{width: '200px'}} variant="top" src={item.img} />
                    <Card.Body style={CardBody}>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        {item.price.toLocaleString('vi-VN')}đ
                      </Card.Text>
                      <Button variant="primary" onClick={()=>addData(item.id)}>ADD TO CART</Button>
                    </Card.Body>
                  </Card> 
              )
            }
              return null
          })}
      </div>  
    )
  }
}
