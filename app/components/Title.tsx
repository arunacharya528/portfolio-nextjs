import { cn } from "@/lib/utils";

type TitleStruct = {
  className?: string,
  children: JSX.Element | string;
};

export default function Title(data: TitleStruct) {
  return <h1
    className={cn("text-2xl md:text-3xl lg:text-4xl text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-balance", data.className)}
  >
    {data.children}
  </h1>
}
