document.addEventListener('DOMContentLoaded', () => {
  const draggable = document.getElementById('draggable') as HTMLElement;

  draggable.addEventListener('mouseenter', () => {
    draggable.style.cursor = 'grab';
  })

  draggable.addEventListener('mousedown', function (e: MouseEvent) {
    draggable.style.cursor = 'grabbing';

    const distFromNameCornerX:number = e.clientX - draggable.offsetLeft;
    const distFromNameCornerY:number = e.clientY - draggable.offsetTop;

    function onMouseMove(event: MouseEvent) {
      let leftPos:number = event.pageX - distFromNameCornerX;
      let topPos: number = event.pageY - distFromNameCornerY;

      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = document.documentElement.clientHeight;

      if (leftPos < -4) {
        leftPos = -4;
      }
      
      if (topPos < -20) {
        topPos = -20;
      }

      if (leftPos > viewportWidth - 765) {
        leftPos = viewportWidth - 765;
      }

      if (topPos > viewportHeight - draggable.offsetHeight) {
        topPos = viewportHeight - draggable.offsetHeight;
      }

      draggable.style.left = leftPos + 'px';
      draggable.style.top = topPos + 'px';
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      draggable.style.cursor = 'grab';
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
});