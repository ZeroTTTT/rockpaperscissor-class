import {useState} from "react";
import './App.css';
import Box from './component/box';

//로드맵
//1.박스2개 (타이틀,사진,결과)
//2.가위 바위 보 버튼이 있다.
//3.버튼을 클릭하면 클릭한 값이 박스에 보임
//4.컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
//6. 승패결과에 따라 테두리 색이 바뀐다(이기면-초록, 지면-빨강, 비기면-검은색)

//바뀌지말라고  const로 선언하고 객체를 만든다
const choice = {
  rock:{
    name:"Rock",
    img:"https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"https://media.istockphoto.com/id/175601846/ko/%EC%82%AC%EC%A7%84/%EA%B0%80%EC%9C%84-%EC%98%81%EC%97%85%EC%A4%91.jpg?s=612x612&w=0&k=20&c=wJZtM_9argmILTxC05dBdRy_W5VFEMcNxFpzRnFiHNw="
  },
  paper:{
    name:"Paper",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqfz_wD_qzCa7HfjTasaCG7VvhM9zn-xqOw&usqp=CAU"
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState(""); //useState("")를 useState(null)로 바꾸면 첫화면에서 컴퓨터가 win으로 표시된다.

  const play=(userChoice)=>{
    // console.log("선택됨:", userChoice);
    let computerChoice = randomChoice();
    setUserSelect(choice[userChoice]);    
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice)) 
    
  };

  const randomChoice=() =>{
    let itemArrary = Object.keys(choice); //Object.keys : 객체의 key값만 뽑아서 Array로 만들어준다
    console.log("itemArray", itemArrary);
    let ramdomItem = Math.floor(Math.random() * itemArrary.length); //Math.floor : 소수점 아래 숫자는 버린다
    // console.log("Math.random", Math.random())
    // console.log("length",itemArrary.length)
    let final = itemArrary[ramdomItem]
    return choice[final];
  };

  const judgement = (user, computer) => {
    // user == computer tie
    // user == rock, computer == scissors user win
    // user == rock, computer == paper user loss
    // user == scissors, computer == paper user win
    // user == scissors, computer == rack user loss
    // user == paper, computer == rock user win
    // user == paper, computer == scissors user loss
    //위의 내용을 삼항연산식으로 정리
    if (user.name == computer.name){
      return "tie"
    } else if (user.name == "Rock") {
      return computer.name =="Scissors"?"win":"loss"
    } else if (user.name == "Scissors") {
      return computer.name == "Paper"?"win":"loss"
    } else if (user.name == "Paper") {
      return computer.name == "Rock"?"win":"loss"
    } 
  };



  return (
    <div>
      <div className='main'>
        <Box title="you" item={userSelect} result={result}/>
        <Box title="computer" item={computerSelect} result={result}/>
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>         
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
      


  );
}

export default App;
