import React, { useEffect, useState } from 'react'
import Content from './Content'


const Main = () => {
  const [nameList,setNameList]=useState([])
  useEffect(()=>{
    setNameList([
      {id: 1,name: "ANITHA",class: "B.Sc CS"},
      {id: 2,name: "ANSHEEDA",class: "B.Sc CS"},
      {id: 3,name: "ANUKESH",class: "B.Sc CS"},
      {id: 4,name: "ASWIN KRISHNA",class: "B.Sc CS"},
      {id: 5,name: "BARUN DHARNISH",class: "B.Sc CS"},
      {id: 6,name: "CHITTESH",class: "B.Sc CS"},
      {id: 7,name: "DEEPAK KUMAR",class: "B.Sc CS"},
      {id: 8,name: "DHANUSH",class: "B.Sc CS"},
      {id: 9,name: "DHARANI",class: "B.Sc CS"},
      {id: 10,name: "DHARSHAN",class: "B.Sc CS"},

      {id: 11,name: "DHIVYAA",class: "B.Sc CS"},
      {id: 12,name: "ELAKYA",class: "B.Sc CS"},
      {id: 13,name: "GOKUL",class: "B.Sc CS"},
      {id: 14,name: "HARI PRAPEEP",class: "B.Sc CS"},
      {id: 15,name: "HARINI",class: "B.Sc CS"},
      {id: 16,name: "HARISH",class: "B.Sc CS"},
      {id: 17,name: "HARIVARSHAN",class: "B.Sc CS"},
      {id: 18,name: "HARSHINI N M",class: "B.Sc CS"},
      {id: 18,name: "HARSHINI S",class: "B.Sc CS"},
      {id: 20,name: "HARSHINI J",class: "B.Sc CS"},

      {id: 21,name: "JANANI",class: "B.Sc CS"},
      {id: 22,name: "JANIT",class: "B.Sc CS"},
      {id: 23,name: "JEEVAN",class: "B.Sc CS"},
      {id: 24,name: "KAMALEESH",class: "B.Sc CS"},
      {id: 25,name: "KANISHKA",class: "B.Sc CS"},
      {id: 26,name: "KAVIANAND",class: "B.Sc CS"},
      {id: 27,name: "KRISHNASUDHARSAN",class: "B.Sc CS"},
      {id: 28,name: "LAKMITHASRI",class: "B.Sc CS"},
      {id: 29,name: "LALITMOHAN",class: "B.Sc CS"},
      {id: 30,name: "LOHITH",class: "B.Sc CS"},

      {id: 31,name: "MITHUNESH",class: "B.Sc CS"},
      {id: 32,name: "MONIKA SHREE",class: "B.Sc CS"},
      {id: 33,name: "NANDHITHA",class: "B.Sc CS"},
      {id: 34,name: "NAVANITHI",class: "B.Sc CS"},
      {id: 35,name: "NETHRA",class: "B.Sc CS"},
      {id: 36,name: "NIKITA",class: "B.Sc CS"},
      {id: 37,name: "NISHANTH K",class: "B.Sc CS"},
      {id: 38,name: "NISHANTH S",class: "B.Sc CS"},
      {id: 39,name: "NITHISH",class: "B.Sc CS"},
      {id: 40,name: "NITHYA",class: "B.Sc CS"},

      {id: 41,name: "PADMALOGINI",class: "B.Sc CS"},
      {id: 42,name: "PADMESH",class: "B.Sc CS"},
      {id: 43,name: "PAVAN KUMAR",class: "B.Sc CS"},
      {id: 44,name: "PREMANANTHAM",class: "B.Sc CS"},
      {id: 45,name: "RAGUNANDHAN",class: "B.Sc CS"},
      {id: 46,name: "RAJ LAKSHMI",class: "B.Sc CS"},
      {id: 47,name: "RAM PRATHAP",class: "B.Sc CS"},
      {id: 48,name: "RAMKUMAR",class: "B.Sc CS"},
      {id: 49,name: "RITHANYA M",class: "B.Sc CS"},
      {id: 50,name: "RITHANYA S",class: "B.Sc CS"},

      {id: 51,name: "RITHESH KRISHNA",class: "B.Sc CS"},
      {id: 52,name: "SAI CHARUNYA",class: "B.Sc CS"},
      {id: 53,name: "SANGARI",class: "B.Sc CS"},
      {id: 54,name: "SAMINI",class: "B.Sc CS"},
      {id: 55,name: "SELVAKUMAR",class: "B.Sc CS"},
      {id: 56,name: "SHARAN",class: "B.Sc CS"},
      {id: 57,name: "SHREE JEETH",class: "B.Sc CS"},
      {id: 58,name: "SIVATHARINI",class: "B.Sc CS"},
      {id: 59,name: "SRIDEETSANA",class: "B.Sc CS"},
      {id: 60,name: "SRINATHI",class: "B.Sc CS"},

      {id: 61,name: "SUJITH",class: "B.Sc CS"},
      {id: 62,name: "SURIYAPRAKASH",class: "B.Sc CS"},
      {id: 63,name: "SURYA",class: "B.Sc CS"},
      {id: 64,name: "SUVATHIKA",class: "B.Sc CS"},
      {id: 65,name: "SWATHI",class: "B.Sc CS"},
      {id: 66,name: "THANISHKA",class: "B.Sc CS"},
      {id: 67,name: "VAISHNAVI",class: "B.Sc CS"},
      {id: 68,name: "VARSHINE",class: "B.Sc CS"},
      {id: 69,name: "VASISTARAMU",class: "B.Sc CS"},
      {id: 70,name: "VEDHA",class: "B.Sc CS"},
      
      {id: 71,name: "VIKRANT",class: "B.Sc CS"},
      {id: 72,name: "VISHNU PRIYA",class: "B.Sc CS"},
      {id: 73,name: "VISHWEAASH",class: "B.Sc CS"},
      {id: 74,name: "YASHWANTH",class: "B.Sc CS"},
      {id: 75,name: "YOGAPRIYA",class: "B.Sc CS"},
      {id: 76,name: "YOGITH",class: "B.Sc CS"},
      
      {id: 77,name: "ABISHEK",class: "BCA"},
      {id: 78,name: "AISWARYA",class: "BCA"},
      {id: 79,name: "ARUNESH",class: "BCA"},
      
      {id: 80,name: "ASHWINI",class: "BCA"},
      {id: 81,name: "ASVIKA",class: "BCA"},
      {id: 82,name: "BJHAVDHARANI",class: "BCA"},
      {id: 83,name: "SUBESH",class: "BCA"},
      {id: 84,name: "DANUSRI",class: "BCA"},
      {id: 85,name: "DEVA DHARSHAN",class: "BCA"},
      {id: 86,name: "DHAKSHATHA",class: "BCA"},
      {id: 87,name: "DHARANI",class: "BCA"},
      {id: 88,name: "DHARANI DHARAN",class: "BCA"},
      {id: 89,name: "DHIYVY DHARSHINI",class: "BCA"},
      
      {id: 90,name: "DIVIJITH",class: "BCA"},
      {id: 91,name: "DIVYA",class: "BCA"},
      {id: 92,name: "DYUKSHA",class: "BCA"},
      {id: 93,name: "GANESH KUMAR",class: "BCA"},
      {id: 94,name: "HARI PRAKASH",class: "BCA"},
      {id: 95,name: "HARSIKA",class: "BCA"},
      {id: 96,name: "JOYAL ANANDARAJ",class: "BCA"},
      {id: 97,name: "KAMALESH",class: "BCA"},
      {id: 98,name: "KARTHIKA",class: "BCA"},
      {id: 99,name: "KAVIN",class: "BCA"},

      {id: 100,name: "LEKHA",class: "BCA"},
      {id: 101,name: "LINGESSH",class: "BCA"},
      {id: 102,name: "MADHU SHREE R P",class: "BCA"},
      {id: 103,name: "MADHUSHREE K M",class: "BCA"},
      {id: 104,name: "NITHIN",class: "BCA"},
      {id: 105,name: "NITHISH",class: "BCA"},
      {id: 106,name: "PARKAVI",class: "BCA"},
      {id: 107,name: "PRAGEESH",class: "BCA"},
      {id: 108,name: "PRAKASH",class: "BCA"},
      {id: 109,name: "PRANESH",class: "BCA"},
      
      {id: 110,name: "PRAVEEN KUMAR",class: "BCA"},
      {id: 111,name: "RAGASHREE",class: "BCA"},
      {id: 112,name: "ROSHINI",class: "BCA"},
      {id: 113,name: "SABARI",class: "BCA"},
      {id: 114,name: "SALINI",class: "BCA"},
      {id: 115,name: "SANDHIYA",class: "BCA"},
      {id: 116,name: "SANUKUMAR",class: "BCA"},
      {id: 117,name: "SHANMUGASUNDRARAM",class: "BCA"},
      {id: 118,name: "SHANNTHILNI",class: "BCA"},
      {id: 119,name: "SIVAHARINI",class: "BCA"},

      {id: 120,name: "SOBHANMENAN",class: "BCA"},
      {id: 121,name: "SOUNDARRAJ",class: "BCA"},
      {id: 122,name: "SOWMIYA",class: "BCA"},
      {id: 123,name: "SRINITHI",class: "BCA"},
      {id: 124,name: "SRITHAR",class: "BCA"},
      {id: 125,name: "SUBASHINI N",class: "BCA"},
      {id: 126,name: "SUBASHINI R",class: "BCA"},
      {id: 127,name: "SUVITHA",class: "BCA"},
      {id: 128,name: "THIYAGARAJAN",class: "BCA"},
      {id: 129,name: "VELMURUGAN",class: "BCA"},

      {id: 130,name: "VENKATESH",class: "BCA"},
      {id: 131,name: "VISAKAVEL",class: "BCA"},
      {id: 132,name: "YESWANTH",class: "BCA"},
      {id: 133,name: "MEECA",class: "BCA"},
      {id: 134,name: "MEKASRI",class: "BCA"},
      {id: 135,name: "SOUNDARRAJ",class: "BCA"}

    ])
  
},[])
  return (
    <main>
        <p></p>
        <Content 
        nameList={nameList}
        setNameList={setNameList}
        />

    </main>
  )
}

export default Main