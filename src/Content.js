import React, { useState } from 'react'

const Content = ({nameList,setNameList}) => {
    const [name,setName]=useState('NAME')
    const [nameClass,setNameClass]=useState('CLASS')
    const [disp,setDisp]=useState('disp-none')
    const nameComing=(curName)=>{
        setTimeout(() => {
            setName(curName.charAt(0))
            setTimeout(() => {
                setName(curName.slice(0,2))
                setTimeout(() => {
                    setName(curName.slice(0,2+(curName.length-2)/2))
                    setTimeout(() => {
                        setName(curName.slice(0,(curName.length)))   
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
            

    }
    
    const handleGenerate = () =>{
        try{
            setDisp("disp-none")
            if(nameList.length<=0) throw Error("NO NEW NAMES")
            let randomID= Math.floor(Math.random()*nameList.length);
            const choosenName=nameList[randomID].name;
            setNameClass(nameList[randomID].class)
            if(name!=="NAME")
            setName("NEXT IS")
            nameComing(choosenName)
            const newList=nameList.filter(name=>name.id!==nameList[randomID].id)
            setNameList(newList)
            
        }catch(err){
            setName(err.message)
        }
    }
    const handleClass=()=>{
        
        
            setDisp("disp-block")
        
    }
  return (
    <div className='content'>
        <h2>THE CHOOSEN ONE</h2>
        <div className='holder'>
            <h1 className='choosen-one' onClick={handleClass}>{name}</h1>
            <h1 className={disp}  >{nameClass}</h1>
        </div>
        <button className='generate' onClick={handleGenerate}>GENERATE</button>
        
    </div>
  )
}

export default Content