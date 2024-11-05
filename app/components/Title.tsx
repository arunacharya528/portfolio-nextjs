type TitleStruct = {
  children: JSX.Element;
};

export default function Title(data: TitleStruct) {
  return <h3 className="font-bold text-2xl">{data.children}</h3>;
}
