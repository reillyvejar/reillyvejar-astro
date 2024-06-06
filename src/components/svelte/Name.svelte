<script lang="ts">
  import { useCloud } from "freestyle-sh";
  import { TheName } from "../cloudstate/namedata";
  import { onMount } from "svelte";

  const nameData = useCloud<typeof TheName>("name");

  import { onMount } from "svelte";

  let draggable;
  let pos = { top: 0, left: 0, x: 0, y: 0 };

  onMount(() => {
    const mouseMoveHandler = function (event) {
      const dx = event.clientX - pos.x;
      const dy = event.clientY - pos.y;

      draggable.style.top = `${pos.top + dy}px`;
      draggable.style.left = `${pos.left + dx}px`;
    };

    const mouseUpHandler = function () {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);

      draggable.style.cursor = "grab";
    };

    const mouseDownHandler = function (event) {
      pos = {
        left: draggable.offsetLeft,
        top: draggable.offsetTop,
        x: event.clientX,
        y: event.clientY,
      };

      draggable.style.cursor = "grabbing";

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    };

    draggable.addEventListener("mousedown", mouseDownHandler);

    return () => {
      draggable.removeEventListener("mousedown", mouseDownHandler);
    };
  });
</script>

<div>
  bind:this={draggable} class="draggable">
  <slot></slot>
</div>