import Image from "next/image";

const text = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Illum consectetur esse omnis fuga cupidatat qui consequatur sint cum libero ut aliquip. Optio sint id et et quod quibusdam. Eum in labore id fugiat voluptas in in excepteur. Voluptas sit iusto est qui quos.
Id est ipsum eu qui eu quas et ex deleniti consequatur vero eligendi. Mollitia laboris est dolore nulla dignissimos voluptatum in aute. Fuga ipsum qui et quo quidem praesentium.
Est dolor occaecat ipsum id eum labore. Sunt sint quas qui aut dolor facilis nisi imperdiet. Incididunt laborum mollit sed do culpa. Officia nobis nobis qui commodo praesentium placeat dolorem dolore est accusamus.`

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div>
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {text}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
