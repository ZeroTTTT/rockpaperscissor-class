import React from 'react'

const box = (props) => {
    let result;
    if (
        props.title == "computer" &&
        props.result !== "tie" &&
        props.result !== "" ){
        //카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
        result = props.result == "win"?"loss":"win";        
        } else { // 위의 경우가 아니라면 props$nbsp;로 전달된 결과를 그대로 쓴다.
            result = props.result;
        }    

  return (
    <div className={`box ${result}`}>  
    {/* 위부분이 핵심이다. result를 동적으로 받아서 App.css에 설정된 스타일을 받아서 적용하게된다. */}
        <h1>{props.title}</h1>
        <h2>{props.item && props.item.name}</h2>
        <img className='item-img' src={props.item && props.item.img}/>
        <h2>{result}</h2>
    </div>
  )
}

export default box