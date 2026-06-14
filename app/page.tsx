"use client";

import { useState } from "react";

export default function Home() {

  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState({
    when: "",
    who: "",
    where: "",
    what: "",
    why: "",
    how: "",
  });

  function convertText() {
    {/*関数化してOpenAIに送信*/}
    setResult({
      when: "昨日",
      who: "田中",
      where: "営業部",
      what: "会議",
      why: "進捗確認",
      how: "報告"
    });
    console.log(inputText);
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">
        ナレッジ登録
      </h1>

      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="w-full h-40 border rounded p-2 bg-white text-black"
        placeholder="業務内容を入力"
      />

      <div className="mt-4"> 
      {/*確認用表示*/}
        入力内容:
        {inputText}
      </div> 

      <button
        onClick={convertText}
      >
        AIで5W1H変換
      </button>

      <div className="mt-8">
        <p>When: {result.when}</p>
        <p>Who: {result.who}</p>
        <p>Where: {result.where}</p>
        <p>What: {result.what}</p>
        <p>Why: {result.why}</p>
        <p>How: {result.how}</p>
      </div>
    </main>
  );
}
