//App
export const rootStyle = "mx-auto h-dvh text-stone-200";
export const routeStyle = "mx-auto max-w-7xl";

//Chatbot
export const toggleBot =
  "flex flex-col items-center fixed bottom-28 right-6 p-2 rounded-lg shadow-xl bg-sky-700 border border-white/50";
export const messagesStyling = "w-full flex flex-col gap-2 bg-sky-900 rounded";
export const userStyle = "bg-sky-300 text-stone-800 rounded px-1 shadow-md";
export const userToggle = "user" ? "" : "hidden";
export const botStyle = "bg-sky-950 rounded px-1 shadow-md";
export const botToggle = "assistant" ? "" : "hidden";
export const chatStyle = "flex justify-between gap-2 w-full";
export const inputStyle =
  "w-full rounded p-1 bg-sky-200/70 placeholder:text-black text-black";
export const submitStyle = "bg-stone-800 rounded p-1 shadow-md";
export const botLocation =
  "fixed bottom-0 right-0 m-5 drop-shadow-xl cursor-pointer";

//Footer
export const footerStyle =
  "bg-gradient-to-t from-sky-900 to-transparent sm:sticky top-full flex flex-col items-center gap-10 px-20 py-4";

//Header
export const headerStyle =
  "mx-auto 2xl:w-3/4 flex flex-row items-center justify-between uppercase p-3";

//Header - Nav
export const linkStyle = "flex gap-3 text-lg font-bold";

//Landing - How
export const qColor = "text-sky-400";
export const howStyle =
  "flex sm:flex-row flex-col items-center bg-sky-950 p-5 lg:px-10 gap-5";
export const questText = "max-w-prose text-3xl sm:text-4xl font-bold";
export const howText = "font-bold text-lg underline";
export const howPara = "max-w-prose leading-relaxed";
export const rightStyle = "flex flex-col sm:w-1/2 items-center";

//Landing - How - Icons
export const iconGroup = "flex gap-5 sm:gap-10";
export const iconStyle = "w-12 h-12 rounded-full bg-sky-800";

//Landing - Example
export const pStyle = "max-w-prose leading-relaxed mb-2";
export const exampleStyle =
  "flex sm:flex-row flex-col items-center bg-sky-800 shadow-xl p-5 lg:px-20 gap-5";
export const header = "text-6xl font-bold underline mb-5";
export const buttonStyle = "bg-stone-800 font-bold p-3 mt-2 rounded";

//Landing - Window
export const buttonsStyle = "bg-sky-300 h-4 w-4 rounded-full";
export const windowStyle = "rounded-lg py-2 border border-white/30 shadow-lg";
export const buttonGroup = "flex gap-2 border-b border-white/30 px-2 pb-2";

//Footer - Nav
export const footerNav =
  "flex gap-6 sm:gap-32 justify-center text-lg font-bold";

//Commands - Command
export const isCopied = "bg-emerald-100";
export const notCopied = "bg-sky-100";
export const commandInputStyling = "text-black p-1 rounded w-full h-8";

//Commands - Categories
export const categoriesStyle =
  "grid md:grid-cols-3 sm:grid-cols-2 gap-6 bg-sky-950 p-4";
export const categoryStyle = "bg-slate-300 rounded px-4 py-14 relative";
export const parentCatStyle =
  "bg-sky-900 rounded inline font-bold p-1 m-1 absolute top-0 left-0";
export const categoryText = "text-black text-center font-bold text-4xl";

//Commands - Commands
export const commandRootStyle = "bg-sky-950 py-4 px-2";
export const commandCatStyle =
  "md:w-3/4 mx-auto flex flex-col items-center bg-slate-300 sm:pb-10 rounded relative sm:h-[800px]";
export const commandParentStyle =
  "bg-sky-900 rounded inline font-bold p-1 m-1 absolute top-0 left-0";
export const commandCatText =
  "text-center text-black font-bold underline text-5xl mt-10";
export const closeStyle = "w-10 absolute top-0 right-0";
export const scrollStyling =
  "scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-sky-950 md:w-10/12 h-full mx-auto flex flex-col gap-6 bg-sky-900 mt-10 rounded sm:p-6 p-2 mx-1 sm:overflow-y-auto";
export const commandEntryStyle = "bg-sky-950 sm:p-4 p-2 rounded shadow text-lg";

export const markdownStyles = {
  h1: "text-white",
  h2: "text-white",
  h3: "text-white",
  h4: "text-white",
  h5: "text-white",
  h6: "text-white",
  strong: "text-white",
  em: "text-white",
  p: "text-white",
  th: "bg-gray-600 text-white p-6 text-left uppercase",
  td: "text-white p-6 text-left",
  table: "w-full border-collapse border-gray-600",
};
