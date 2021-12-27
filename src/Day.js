// import dummy from './DB/data.json'
// import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Word from './Word'
import useFetch from './hooks/useFetch'

export default function Day(){
    //dummy.words
    // const day = 2
    //word.day가 '2'인 자료만 필터링
    const {day} = useParams()
    // const [words, setWords] = useState([])
    // useEffect(()=>{
    //     fetch(`http://localhost:3001/words?days=${day}`).then(
    //         res=>{
    //             return res.json()
    //         }
    //     ).then(data=>{
    //         setWords(data)
    //     })
    // }, [])
    // const wordList = dummy.words.filter(word => word.day === Number(day)) 
    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    // console.log(wordList)
    return(
        <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {/* {dummy.words.map(word =>( */}
                {words.map(word =>(
                    <Word word={word} key={word.id} />
                    // <tr key={word.id}>
                    //   <td><input type="checkbox" /></td>
                    //   <td>{word.eng}</td>
                    //   <td>{word.kor}</td>
                    //   <td>
                    //     <button>뜻 보기</button>
                    //     <button className="btn_del">삭제</button>
                    //   </td>
                    // </tr>
                    
                ))} 
            </tbody>
        </table>      
        </>
    )
}