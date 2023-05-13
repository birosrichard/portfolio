import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="mx-auto max-w-[1200px]">
      <Slot />
    </div>
  );
});
