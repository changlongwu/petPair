// import React, { useEffect, useState } from "react";
// import './PetSimulation.css'
// import LeftArrow from "../LeftArrow.jsx";
// import RabbitData from '../../rabbits.json';
// import { useParams } from "react-router-dom";
// import HeartIcon from '../../assets/images/heart.svg'
// import FilledHeartIcon from '../../assets/images/heart-fill.png'
// import Clock from "../Clock.jsx";

// // images
// import grassImage from '../../assets/images/PetSimulationImage/grass.png';
// import carrotImage from '../../assets/images/PetSimulationImage/carrot.png';
// import grass2Image from '../../assets/images/PetSimulationImage/grass2.png';
// import pelletsImage from '../../assets/images/PetSimulationImage/pellets.png';
// import toyImage from '../../assets/images/PetSimulationImage/toy.png';
// import rabbitImage from '../../assets/images/PetSimulationImage/rabbit1.png';
// import rabbitEatingImage from '../../assets/images/PetSimulationImage/rabbit-eating.png';
// import happyRabbitImage from '../../assets/images/PetSimulationImage/happy.png';
// import toiletImage from '../../assets/images/PetSimulationImage/toilet.png'
// import bananaImage from '../../assets/images/PetSimulationImage/banana.png'


// // draggable 
// import { useDroppable } from '@dnd-kit/core';
// import { useSortable } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';
// import { DndContext, closestCenter } from '@dnd-kit/core';
// import { SortableContext, arrayMove, rectSortingStrategy } from '@dnd-kit/sortable';


// const DraggableItem = ({ id, type,image }) => {
//     const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    
//     const style = {
//       transform: CSS.Transform.toString(transform),
//       transition,
//     };
  
//     return (
//       <div 
//         className="item" 
//         ref={setNodeRef} 
//         style={style} 
//         {...attributes} 
//         {...listeners}
//       >
//         <img src={image} alt={type} className={`${type}-img`} />
//       </div>
//     );
//   };


// // 获取物品图片

  
//   const Rabbit = ({ isEating, showHappy, feedingItem }) => {
//     const { setNodeRef, isOver } = useDroppable({
//       id: 'rabbit-image',
//     });
  
//     return (
//       <div className="rabbit">
//         <img 
//         ref={setNodeRef}
//         src={rabbitImage}
//         alt="rabbit"
//         className={`rabbit-img ${isOver ? 'over' : ''}`}
//         />

//       </div>
//     );
//   };




// const PetSimulation = ({ fedItems = [], feedingItem, isEating, showHappy })=>{
//     const {id} = useParams();
//     const [rabbit, setRabbit] = useState(null)

//     const [items, setItems] = useState([
//         { id: 'grass-1', type: 'grass', img: grassImage },
//         { id: 'banana-1', type: 'banana', img: bananaImage },
//         { id: 'carrot-1', type: 'carrot', img: carrotImage },
//         { id: 'grass2-1', type: 'grass2', img: grass2Image },
//         { id: 'pellets-1', type: 'pellets', img: pelletsImage },
//         { id: 'toy-1', type: 'toy', img: toyImage },
//         { id: 'toilet-1', type: 'toilet', img: toiletImage },
//       ]);

//       const handleDragEnd = (event) => {
//         const { active, over } = event;
//         if (!over) return;
    
//         // 排序
//         if (active.id !== over.id && over.id !== 'rabbit-image') {
//           setItems((items) => {
//             const oldIndex = items.findIndex(item => item.id === active.id);
//             const newIndex = items.findIndex(item => item.id === over.id);
//             return arrayMove(items, oldIndex, newIndex);
//           });
//         }
    
//         // 拖到兔子上（这里只是检测，不触发动画）
//         if (over.id === 'rabbit-image') {
//           console.log(`You dragged ${active.id} to the rabbit!`);
//         }
//       };
    
//     useEffect(()=>{
//         const foundRabbit = RabbitData.rabbits.find((r)=>r.details_page.id===id);
//         if (foundRabbit){
//             setRabbit(foundRabbit.details_page);
//             console.log(rabbit);
//         }
//     },[])

//     return (
//         <div className="simulation-page">
//              <LeftArrow/>
//             <div className="simulation-container">
                
//                 <div className="rabbit-learning-progress">
//                     <div className="simulation-rabbit-name"><p>{rabbit?.name}</p></div>
//                     <div>
//                         <div className="heart-icons">
//                             <img src={HeartIcon} alt="" />
//                             <img src={HeartIcon} alt="" />
//                             <img src={HeartIcon} alt="" />
//                         </div>
//                         <div className="heart-description">
//                             <p>Earn 3 hearts to graduate</p>
//                         </div>
                        
//                     </div>
//                 </div>

//                 <div className="instruction-contianer">
//                     <p className="instruction">click on each item to learn more</p>
//                     <Clock/>
//                 </div>

                

//                 <div className="draggable-area">
//                     {/* <div className="items-area">
//                         {items.map((item) => (
//                         <DraggableItem key={item.id} id={item.id} type={item.type} image={item.img} />
//                         ))}
//                     </div>
//                     <img src={rabbitImage} alt="" className="rabbit-img" /> */}
                    
//                     <Rabbit/>
                    
//                     <DndContext
//                     collisionDetection={closestCenter}
//                     onDragEnd={handleDragEnd}
//                     >
//                     <SortableContext
//                         items={items.map(item => item.id)}
//                         strategy={rectSortingStrategy}
//                     >
//                         <div className="items-area">
//                         {items.map(item => (
//                             <DraggableItem 
//                             key={item.id} 
//                             id={item.id} 
//                             type={item.type} 
//                             image={item.img} 
//                             />
//                         ))}
//                         </div>
//                     </SortableContext>
//                     </DndContext>
//                 </div>

//                     {/* <img src={grassImage} alt="" />
//                     <img src={toyImage} alt="" /> */}
//                     {/* <img src={toiletImage} alt="" className="toilet-img"/>
//                     <img src={rabbitImage} alt="" className="rabbit-img" />
//                     <img src={pelletsImage} alt="" className="pellets-img"/>
//                     <img src={toyImage} alt="" className="toy-img"/>
//                     <img src={bananaImage} alt=""  className="banana-img"/>
//                     <img src={carrotImage} alt="" className="carrot-img" />
//                     <img src={grassImage} alt="" className="grass-img"/>
//                     <img src={grass2Image} alt="" className="grass2-img"/> */}

                
            
//             </div>
//         </div>

//     )
// }

// export default PetSimulation
import React, { useEffect, useState } from "react";
import './PetSimulation.css';
import LeftArrow from "../LeftArrow.jsx";
import RabbitData from '../../rabbits.json';
import { useParams } from "react-router-dom";
import HeartIcon from '../../assets/images/heart.svg';
import Clock from "../Clock.jsx";

import grassImage from '../../assets/images/PetSimulationImage/grass.png';
import carrotImage from '../../assets/images/PetSimulationImage/carrot.png';
import grass2Image from '../../assets/images/PetSimulationImage/grass2.png';
import pelletsImage from '../../assets/images/PetSimulationImage/pellets.png';
import toyImage from '../../assets/images/PetSimulationImage/toy.png';
import rabbitImage from '../../assets/images/PetSimulationImage/rabbit1.png';
import bananaImage from '../../assets/images/PetSimulationImage/banana.png';

import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

// 可拖拽物品组件
function DraggableItem({ id, image, x, y, type, rotation = 0 }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const translate = CSS.Translate.toString(transform) || '';

  const style = {
    left: `${x}px`,
    top: `${y}px`,
    cursor: "grab",
    position: "absolute",
    // 叠加拖拽平移和初始旋转（这里旋转度数如果你CSS里已设置，可删除）
    transform: `${translate} rotate(${rotation}deg)`,
  };

  return (
    <img
      ref={setNodeRef}
      src={image}
      alt={id}
      className={`${type}-img`}  // 你的CSS类名，控制尺寸、初始旋转和定位
      style={style}
      {...attributes}
      {...listeners}
    />
  );
}

// 兔子作为接收区，带你的CSS类
function Rabbit() {
  const { setNodeRef, isOver } = useDroppable({ id: "rabbit" });

  return (
    <img
      ref={setNodeRef}
      src={rabbitImage}
      alt="rabbit"
      className="rabbit-img"
      style={{
        border: isOver ? "3px solid red" : "none",
        position: "absolute",  // 保证绝对定位生效
        top: "20%",            // 这里可以不用，CSS里已经写了
        left: "50%",
        transform: "translateX(-50%)",
        transition: "0.2s",
      }}
    />
  );
}

export default function PetSimulation() {
  const { id } = useParams();
  const [rabbit, setRabbit] = useState(null);

  // 物品数组，带图片和类型，rotation是内联旋转角度，可根据需要调整
  const [items] = useState([
    { id: 'grass-1', type: 'grass', img: grassImage, x: 40, y: 30, rotation: 50 },
    { id: 'carrot-1', type: 'carrot', img: carrotImage, x: 420, y: 40, rotation: 30 },
    { id: 'banana-1', type: 'banana', img: bananaImage, x: 350, y: 60, rotation: -15 },
    { id: 'grass2-1', type: 'grass2', img: grass2Image, x: 460, y: 90, rotation: 50 },
    { id: 'pellets-1', type: 'pellets', img: pelletsImage, x: 60, y: 400, rotation: 0 },
    { id: 'toy-1', type: 'toy', img: toyImage, x: 380, y: 440, rotation: 0 },
  ]);

  useEffect(() => {
    const foundRabbit = RabbitData.rabbits.find((r) => r.details_page.id === id);
    if (foundRabbit) {
      setRabbit(foundRabbit.details_page);
    }
  }, [id]);

  const handleDragEnd = ({ active, over }) => {
    if (over && over.id === "rabbit") {
      console.log(`${active.id} dropped on the rabbit!`);
      // 这里写喂食逻辑
    }
  };

  return (
    <div className="simulation-page">
      <LeftArrow />
      <div className="simulation-container">
        <div className="rabbit-learning-progress">
          <div className="simulation-rabbit-name">
            <p>{rabbit?.name}</p>
          </div>
          <div>
            <div className="heart-icons">
              <img src={HeartIcon} alt="" />
              <img src={HeartIcon} alt="" />
              <img src={HeartIcon} alt="" />
            </div>
            <div className="heart-description">
              <p>Earn 3 hearts to graduate</p>
            </div>
          </div>
        </div>

        <div className="instruction-contianer">
          <p className="instruction">Drag items to the rabbit to feed</p>
          <Clock />
        </div>

        <div className="draggable-area">
          <DndContext onDragEnd={handleDragEnd}>
            {/* 兔子放置区 */}
            <Rabbit />

            {/* 拖拽物品 */}
            {items.map((item) => (
              <DraggableItem
                key={item.id}
                id={item.id}
                image={item.img}
                x={item.x}
                y={item.y}
                type={item.type}
                rotation={item.rotation}
              />
            ))}
          </DndContext>
        </div>
      </div>
    </div>
  );
}
