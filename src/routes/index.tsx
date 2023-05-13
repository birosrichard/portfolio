import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PortfolioCard } from "~/components/router-head/PortfolioCard";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <section class="mt-64">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-semibold">
          Richard Biros
        </h1>
        <div class="flex items-center mt-6">
          <p class="text-2xl md:text-3xl lg:text-4xl italic text-primary">
            Portfolio
          </p>
          <Link href="#portfolio">
            <div class="w-16 h-16 animate-bounce">
              <svg
                fill="white"
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m5.214 14.522s4.505 4.502 6.259 6.255c.146.147.338.22.53.22s.384-.073.53-.22c1.754-1.752 6.249-6.244 6.249-6.244.144-.144.216-.334.217-.523 0-.193-.074-.386-.221-.534-.293-.293-.766-.294-1.057-.004l-4.968 4.968v-14.692c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.692l-4.979-4.978c-.289-.289-.761-.287-1.054.006-.148.148-.222.341-.221.534 0 .189.071.377.215.52z"
                  fill-rule="nonzero"
                />
              </svg>
            </div>
          </Link>
        </div>
      </section>
      <section id="#portfolio" class="mt-64">
        <PortfolioCard />
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
