import useStore, {StoreState} from "../../store/Store";
import Water from "../../components/DrinkFolder/Water";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

export default function Drink() {
  const [checlType, setCheckType] = useState<string>("")
  const [checkArrange, setCheckArrange] = useState<string>("")
  const [findData, setFindData] = useState<string>("")
  const [saveData, setSaveData] = useState<string>("")
  const {data} = useStore((state :StoreState)=>{
    return {data: state.dataFb}
  })
  const dataDrink = data.filter((data)=> data.type !== 'dinning' && data.type !== 'cake')
  const uniqueTypeList = dataDrink.reduce((items: string[], item: any)=> {
    if(!items.includes(item.type)) {
      items.push(item.type)
    }
    return items
  }, [])
  const onSaveData = ()=> {
    setSaveData(findData)
  }
  const mainDrink: React.CSSProperties = {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const categoryDrink: React.CSSProperties = {
    backgroundImage: 'url("https://phuclong.com.vn/images/background/bg_tealeaf.svg"), url("https://phuclong.com.vn/images/background/bg_team.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left top, center bottom',
    backgroundSize: '25% auto, 75% auto',
    width: '100%'
  }
  const formDrink: React.CSSProperties = {
    padding: '20px 50px',
    border: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
return (
    <div style={{display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <div style={mainDrink}>
        <div style={formDrink}>
          <h6 style={{margin: 0, marginRight: '10px'}}>Product Group</h6>
          <select name="" id="" style={{padding: '5px', textTransform: 'capitalize'}} onChange={(e)=>setCheckType(e.target.value)}>
            <option value="" >Lựa chọn loại đồ uống</option>
            {uniqueTypeList.map((itemType)=>  
              <option key={itemType} value={itemType}>{itemType}</option>
            )}
          </select>
        </div>
        <div style={formDrink}>
          <h6 style={{margin: 0, marginRight: '10px'}}>By Price</h6>
          <select name="" id="" style={{padding: '5px', textTransform: 'capitalize'}} onChange={(e)=>setCheckArrange(e.target.value)}>
            <option value="" >Lựa chọn mệnh giá</option>
            <option value="lowprice" >Từ thấp đến cao</option>
            <option value="expensive" >Từ cao đến thấp</option>
          </select>
        </div>
        <div style={formDrink}>
          <form action="" style={{display: 'flex', alignItems: 'center'}}>
            <label htmlFor="form-input" style={{marginRight: '10px'}}>Tìm kiếm nước</label>
            <input id="form-input" type="text" onChange={(e)=> setFindData(e.target.value)}/>
            <p style={{margin: 0, marginLeft: '10px', cursor: 'pointer', padding: ''}} onClick={onSaveData}><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
          </form>
        </div>
      </div>
      <div style={categoryDrink}>
        <Water checkType={checlType} checkArrange={checkArrange} saveData={saveData}></Water>
      </div>
    </div>
  )
}
