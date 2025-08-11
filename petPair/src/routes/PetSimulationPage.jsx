import PetSimulation from "../components/petSimulation/PetSimulation.jsx";
import React, { useState } from 'react';
import { DndContext, closestCorners } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

const PetSimulationPage = () =>{
    const [items, setItems] = useState([
        { id: 'grass-1', type: 'grass' },
        { id: 'banana-1', type: 'banana' },
        { id: 'carrot-1', type: 'carrot' },
        { id: 'grass2-1', type: 'grass2' },
        { id: 'pellets-1', type: 'pellets' },
        { id: 'toy-1', type: 'toy' },
      ]);

      const [fedItems] = useState([]);
      const [feedingItem, setFeedingItem] = useState(null);
      const [isEating, setIsEating] = useState(false);
      const [showHappy, setShowHappy] = useState(false);


      const handleDragEnd = (event) => {
        const { active, over } = event;
        
        if (!over) return;
    
        // 如果拖拽到兔子图片
        if (over.id === 'rabbit-image') {
          const item = items.find(item => item.id === active.id);
          if (item) {
            // 从物品区域移除
            setItems(prev => prev.filter(item => item.id !== active.id));
            
            // 开始喂食动画
            setFeedingItem(item);
            setIsEating(true);
            setShowHappy(true);
            
            // 6秒后恢复
            setTimeout(() => {
              setFeedingItem(null);
              setIsEating(false);
              setShowHappy(false);
              // 物品回到原位置
              setItems(prev => [...prev, item]);
            }, 2500);
          }
        }
      };
    
    return (
        <div>
        {/* <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <SortableContext items={items.map(item => item.id)} strategy={verticalListSortingStrategy}>
            <PetSimulation 
              items={items} 
              fedItems={fedItems}
              feedingItem={feedingItem}
              isEating={isEating}
              showHappy={showHappy}
            />
          </SortableContext>
        </DndContext> */}
        <PetSimulation />
      </div>
    )
}

export default PetSimulationPage