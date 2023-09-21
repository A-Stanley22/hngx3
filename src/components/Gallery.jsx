import { useState } from "react"
import {imageData} from "../context/imageData"
import Images from "./Images";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, arraySwap, rectSwappingStrategy} from "@dnd-kit/sortable";

export default function Gallery() {
  const [item, setItem] = useState(imageData)

  
  function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if (active.id !== over.id) {
      setItem((users) => {
      const oldIndex = users.findIndex((user) => user.id === active.id);
      const newIndex = users.findIndex((user) => user.id === over.id);
      return arrayMove(users, oldIndex, newIndex);
    });
      
    }
  }


  return (
    <section className="w-full font-poppins md:pt-2 pt-0 pb-16 ">
      
      <div className="text-center flex flex-col gap-y-1 md:my-10 my-5">
        <h3 className="font-semibold md:text-3xl">Welcome to my Image Gallery</h3>
        <p className="text-sm italic text-pink-400">Use your mouse to move things arounds</p>
      </div>

      <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}>
        <SortableContext
          items={item}
          strategy={rectSwappingStrategy}
          reorderItems={arraySwap}
          >
          <div className="flex items-center justify-center flex-wrap sm:gap-10 gap-5">
        {item?.map((img, index) => (
          <Images
            getNewIndex={({ id, items, activeIndex, overIndex }) =>
            arraySwap(items, activeIndex, overIndex).indexOf(id)}
            key={index} id={img.id} source={img.source} info={img.info} tag={img.tag} />
        ))}
      </div>
        </SortableContext>
      </DndContext>
      
    </section>
  )
}


