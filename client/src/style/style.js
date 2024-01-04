//App
export const rootStyle = "mx-auto h-dvh text-stone-200";
export const routeStyle = "mx-auto max-w-7xl";

//Chatbot (needs react for styling the markdown)
import React from "react"; // I'd rather this not be in this file. Move the functions back in the Chatbot if you need to.
export const toggleBot =
  "flex flex-col items-center fixed bottom-28 right-6 p-2 rounded-lg shadow-xl bg-sky-700 border border-white/50 max-h-[80vh] overflow-hidden ";
export const messagesStyling =
  "w-full flex flex-col gap-2 bg-sky-900 rounded max-h-80vh overflow-y-auto";
export const userStyle = "bg-sky-300 text-stone-800 rounded px-1 shadow-md";
export const userToggle = (msgType) => (msgType === "user" ? "" : "hidden");
export const botStyle = "bg-sky-950 rounded px-1 shadow-md text-white";
export const botToggle = (msgType) => (msgType === "assistant" ? "" : "hidden");
export const chatStyle = "flex justify-between gap-2 w-full";
export const inputStyle =
  "w-full rounded p-1 bg-sky-200/70 placeholder:text-black text-black";
export const submitStyle = "bg-stone-800 rounded p-1 shadow-md";
export const botLocation =
  "fixed bottom-0 right-0 m-5 drop-shadow-xl cursor-pointer";
export const markdownStyles = {
  h1: "text-2xl font-bold",
  h2: "text-xl font-semibold",
  h3: "text-lg font-semibold",
  p: "text-base",
  strong: "font-bold",
  em: "italic",
  th: "px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider bg-gray-500;",
  td: "px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider;",
  table: "min-w-full divide-y divide-gray-200",
};

//Header
export const headerStyle =
  "mx-auto 2xl:w-3/4 flex flex-row items-center justify-between uppercase border-b border-white/10 p-3";

//Header - Nav
export const linkStyle = "flex gap-3 text-lg font-bold";

//Footer
export const footerStyle =
  "bg-transparent sm:sticky top-full flex flex-col items-center gap-8 px-20 py-4";

//Footer - Nav
export const footerNav =
  "flex gap-6 sm:gap-32 justify-center text-lg font-bold";

//Landing - How
export const qColor = "text-sky-400";
export const howStyle =
  "flex sm:flex-row flex-col items-center bg-sky-900/70 p-5 lg:px-10 mt-4 rounded-t border-x border-t border-white/30 gap-5";
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
  "flex sm:flex-row flex-col items-center bg-sky-800/90 shadow-xl p-5 lg:px-10 border border-white/30 rounded-b gap-5";
export const header = "text-6xl font-bold underline mb-5";
export const buttonStyle = "bg-stone-800 font-bold p-3 mt-2 rounded";

//Landing - Window
export const buttonsStyle = "bg-sky-300 h-4 w-4 rounded-full";
export const windowStyle = "rounded-lg py-2 border border-white/30 shadow-lg";
export const buttonGroup = "flex gap-2 border-b border-white/30 px-2 pb-2";

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
export const trashStyle = "w-10 absolute top-0 right-10";
export const scrollStyling =
  "scrollbar-thin scrollbar-thumb-sky-600 scrollbar-track-sky-950 md:w-10/12 h-full mx-auto flex flex-col gap-6 bg-sky-900 mt-10 rounded sm:p-6 p-2 mx-1 sm:overflow-y-auto";
export const commandEntryStyle = "bg-sky-950 sm:p-4 p-2 rounded shadow text-lg";

//Admin
export const adminStyle =
  "sm:h-[600px] flex flex-col justify-center items-center gap-4 bg-sky-900/70 mt-4 border border-white/30 sm:mx-4 rounded shadow-xl p-4 relative";
export const signInStyle = "text-center font-bold text-5xl text-white";
export const formStyle = "flex flex-col items-center gap-4";
export const credInput =
  "font-bold text-black p-2 rounded-xl placeholder:text-black";
export const submitForm =
  "w-full bg-sky-950 px-6 py-2 rounded shadow border border-sky-300 font-bold tracking-wide";
export const regText = "text-sm leading-relaxed text-grey-900";
export const accountText = "font-bold text-grey-700";
export const dangerText = "text-red-700 bg-red-200 p-2 rounded";
