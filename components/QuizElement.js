import React from "react";
import { MdDone } from "react-icons/md";
import Image from 'next/image'
const QuizElement = ({
  room,
  roomSelected,
  setRoomSelected,
  stylesSelected,
  setStylesSelected,
}) => {

  console.log(room)
  const MAX_STYLES = 2;
  const handleClick = () => {
      if(room.type){
        if(stylesSelected.find(element => element.title === room.title)){
            setStylesSelected(stylesSelected.filter(element => element.title !== room.title))
            return
        }
        if(stylesSelected.length === MAX_STYLES){
            setStylesSelected(stylesSelected.filter((element,index) => index !== 0).concat(room))
        }
        
        if (stylesSelected.length < MAX_STYLES) {
            setStylesSelected([...stylesSelected, room]);
          } else {
        }
      }else{
        setRoomSelected(room);
      }
    
    /*if (!design) {
      if (counter >= 1 && !clicked) return;
      else if (counter >= 1 && clicked) {
        setClicked(!clicked);
        setCounter(counter - 1);
        console.log("clicked");
      }
      if (counter <= 1 && !clicked) {
        setCounter(counter + 1);
        setClicked(!clicked);
      }
    }else{
        if(counter >= 3 && !clicked)return
        else if(counter >= 3 && clicked){
            setClicked(!clicked);
            setCounter(counter - 1);
        }
        if(counter <= 3 && !clicked){
            setCounter(counter + 1);
            setClicked(!clicked);
        }

    }
    */
  };
  return (
    <div
      className={
        "quiz-element"
      }
      onClick={handleClick}
    >
      {stylesSelected && stylesSelected.find(style => style.title === room.title) && (
        <div className="element-selected">
          <MdDone />
        </div>
      )}
      {roomSelected && roomSelected.title === room.title && (
        <div className="element-selected">
          <MdDone />
        </div>
      )}

      <div className={(roomSelected && roomSelected.title === room.title) || (stylesSelected && stylesSelected.find(style => style.title === room.title))? "quiz-element-image active" : "quiz-element-image"}>
        <Image src={room.image} alt="" />
      </div>
      <div className="quiz-element-title">
        <p>{room.title}</p>
      </div>
    </div>
  );
};

export default QuizElement;
